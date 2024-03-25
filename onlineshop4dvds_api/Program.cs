using LinqKit;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OnlineShop4DVDS.Contexts;
using OnlineShop4DVDS.DTOs;
using OnlineShop4DVDS.Entities;
using OnlineShop4DVDS.Utils;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
var DefaultQuantity = 1;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:3000", "http://onlineshop4dvds.com").AllowAnyHeader().AllowAnyMethod();
                      });
});
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<ShopContext>(optionsAction => optionsAction.UseNpgsql(@"Host=localhost;Username=postgres;Password=fiora;Database=onlineshop4dvds"));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors(MyAllowSpecificOrigins);

app.MapGet("/api/product", async ([FromQuery(Name = "genreType")] GenreType? genreType, [FromQuery(Name = "genreId")] int? genreId, [FromQuery(Name = "q")] string? query, ShopContext context, [FromQuery(Name = "pageSize")] int pageSize = 50, [FromQuery(Name = "pageNumber")] int pageNumber = 1) =>
{
    IQueryable<Product> productQuery = context.Products;
    var predicate = PredicateBuilder.New<Product>(true);
    if (genreType is not null) predicate = predicate.And(p => p.GenreType == genreType);
    if (genreId is not null && genreId > 0) predicate = predicate.And(p => p.Genres!.Any(g => g.Id == genreId));
    if (query is not null && !string.IsNullOrWhiteSpace(query)) predicate = predicate.And(p => p.Title.ToUpper().Contains(query.ToUpper()));
    var products = await productQuery
                            .AsNoTracking()
                            .Where(predicate)
                            .Include(p => p.Genres)
                            .GroupJoin(
                                context.Reviews,
                                product => product.Id,
                                review => review.ProductId,
                                (product, reviews) => new
                                {
                                    Product = product,
                                    NumberOfReviews = reviews.Count(),
                                    Ratings = reviews.Any() ? reviews.Select(r => (int)r.Ratings).Average() : 0
                                })
                            .Select(x => new
                            {
                                x.Product,
                                x.NumberOfReviews,
                                x.Ratings
                            })
                            .Skip(pageSize * (pageNumber - 1))
                            .Take(pageSize)
                            .ToListAsync();

    var productsToReturn = products.Select(p => new ProductDto
    {
        Id = p.Product.Id,
        Title = p.Product.Title,
        ThumbnailUrl = p.Product.Thumbnail,
        Ratings = Math.Round(p.Ratings, 2),
        NumbersOfReviews = p.NumberOfReviews,
        Price = p.Product.Price,
        Genres = p.Product.Genres!.Select(g => g.Name).ToList(),
        Description = p.Product.Description,
        Type = p.Product.GenreType.ToStringType()
    });
    return Results.Ok(productsToReturn);
});

app.MapGet("/api/product/{id}", async ([FromRoute] int id, ShopContext context) =>
{
    IQueryable<Product> query = context.Products;
    var product = await query
                            .AsNoTracking()
                            .Include(p => p.Genres)
                            .Select(p => new
                            {
                                Product = p,
                                NumberOfReviews = p.Reviews!.Count,
                                Ratings = p.Reviews.Count > 0 ? p.Reviews.Select(r => (int)r.Ratings).Average() : 0
                            })
                            .FirstOrDefaultAsync(p => p.Product.Id == id);
    if (product is null) return Results.NotFound();
    var productToReturn = new ProductDetailDto
    {
        Id = product.Product.Id,
        Title = product.Product.Title,
        Price = product.Product.Price,
        Description = product.Product.Description,
        Genres = product.Product.Genres!.Select(g => g.Name).ToList(),
        Ratings = Math.Round(product.Ratings, 2),
        NumbersOfReviews = product.NumberOfReviews,
        Stock = product.Product.Stock,
        Images = new List<string> { product.Product.Thumbnail },
        Type = product.Product.GenreType.ToStringType()
    };
    return Results.Ok(productToReturn);
});

app.MapGet("/api/cart/{id}", async ([FromRoute] int id, ShopContext context) =>
{
    var cart = await context.Carts
                        .AsNoTracking()
                        .Include(c => c.CartProducts)
                        .ThenInclude(cp => cp.Product)
                        .FirstOrDefaultAsync(c => c.Id == id);
    if (cart is null) return Results.NotFound();
    var subtotal = Calculator.CalculateSubtotal(cart.CartProducts.ToList());
    var cartToReturn = new CartDto
    {
        Id = cart.Id,
        Items = cart.CartProducts.Select(cp => new CartItemDto
        {
            Type = cp.Product!.GenreType.ToStringType(),
            Title = cp.Product.Title,
            ThumbnailUrl = cp.Product.Thumbnail,
            Price = cp.Product.Price,
            Stock = cp.Product.Stock,
            Quantity = cp.Quantity,
            ProductId = cp.ProductId
        }).ToList(),
        Subtotal = subtotal
    };
    return Results.Ok(cartToReturn);
});

app.MapPost("/api/cart", async ([FromBody] CartCreateDto cartCreateDto, ShopContext context) =>
{
    var product = await context.Products.FindAsync(cartCreateDto.ProductId);
    if (product is null) return Results.NotFound();

    var cartToCreate = new Cart();
    context.Carts.Add(cartToCreate);
    await context.SaveChangesAsync();
    var cartProductToCreate = new CartProduct
    {
        CartId = cartToCreate.Id,
        ProductId = cartCreateDto.ProductId,
        Quantity = DefaultQuantity
    };
    context.CartProduct.Add(cartProductToCreate);
    await context.SaveChangesAsync();

    var subtotal = Calculator.CalculateSubtotal(new List<CartProduct> { cartProductToCreate });
    var cartToReturn = new CartDto
    {
        Id = cartToCreate.Id,
        Items = new List<CartItemDto>
        {
            new CartItemDto
            {
                Title = product.Title,
                Price = product.Price,
                Quantity = cartProductToCreate.Quantity,
                ThumbnailUrl = product.Thumbnail,
                Type = product.GenreType.ToStringType(),
                Stock = product.Stock,
                ProductId = product.Id
            }
        },
        Subtotal = subtotal,
    };
    return Results.Created($"/cart/{cartToCreate.Id}", cartToReturn);
});

app.MapPut("/api/cart/{id}/items", async ([FromBody] CartItemUpdateDto cartItemUpdateDto, [FromRoute] int id, ShopContext context) =>
{
    var cart = await context.Carts.FindAsync(id);
    if (cart is null) return Results.NotFound();
    var product = await context.Products.FindAsync(cartItemUpdateDto.ProductId);
    if (product is null) return Results.NotFound();

    var cartItemsToUpdate = await context.CartProduct
                                .AsNoTracking()
                                .FirstOrDefaultAsync(cp => cp.CartId == id && cp.ProductId == cartItemUpdateDto.ProductId);

    // If item is not in the cart, we create it with default quantity = 1
    if (cartItemsToUpdate is null)
    {
        var cartItemToCreate = new CartProduct
        {
            CartId = cart.Id,
            ProductId = product.Id,
            Quantity = DefaultQuantity
        };
        context.CartProduct.Add(cartItemToCreate);
    }
    // Else we update its quantity according to the payload
    else
    {
        cartItemsToUpdate.Quantity = cartItemUpdateDto.Quantity;
        context.CartProduct.Update(cartItemsToUpdate);
    }
    await context.SaveChangesAsync();

    cart = await context.Carts
                        .AsNoTracking()
                        .Include(c => c.CartProducts)
                        .ThenInclude(cp => cp.Product)
                        .FirstOrDefaultAsync(c => c.Id == id);
    var subtotal = Calculator.CalculateSubtotal(cart!.CartProducts.ToList());
    var cartToReturn = new CartDto
    {
        Id = cart.Id,
        Items = cart.CartProducts.Select(cp => new CartItemDto
        {
            Type = cp.Product!.GenreType.ToStringType(),
            Title = cp.Product.Title,
            ThumbnailUrl = cp.Product.Thumbnail,
            Price = cp.Product.Price,
            Stock = cp.Product.Stock,
            Quantity = cp.Quantity,
            ProductId = cp.ProductId
        }).ToList(),
        Subtotal = subtotal
    };
    return Results.Ok(cartToReturn);
});

app.MapPost("/api/checkout", async ([FromBody] OrderCreateDto orderCreateDto, ShopContext context) =>
{
    // Create user if he does not exist based on UserSub
    var user = await context.Users
                        .AsNoTracking()
                        .FirstOrDefaultAsync(u => u.Sub == orderCreateDto.UserSub);
    int userId;
    if (user is null)
    {
        var userToCreate = new User { Sub = orderCreateDto.UserSub };
        context.Users.Add(userToCreate);
        await context.SaveChangesAsync();
        userId = userToCreate.Id;
    }
    else
    {
        userId = user.Id;
    }
    // Create the order for him (with orderProducts taken from the cart) and set orderStatus to processing or pending, etc
    var cart = await context.Carts
                        .AsNoTracking()
                        .Include(c => c.CartProducts)
                        .ThenInclude(cp => cp.Product)
                        .FirstOrDefaultAsync(c => c.Id == orderCreateDto.CartId);
    if (cart is null) return Results.NotFound();
    var orderToCreate = new Order
    {
        OrderId = orderCreateDto.OrderId,
        Status = OrderStatus.AwaitingPayment,
        Subtotal = Calculator.CalculateSubtotal(cart.CartProducts.ToList()),
        ShippingFee = orderCreateDto.ShippingFee,
        UserId = userId,
        PaymentMethod = orderCreateDto.PaymentMethod
    };
    context.Orders.Add(orderToCreate);
    await context.SaveChangesAsync();

    var orderProductsToCreate = cart.CartProducts.Select(cp => new OrderProduct
    {
        Quantity = cp.Quantity,
        ProductId = cp.ProductId,
        OrderId = orderToCreate.Id
    });
    context.OrderProduct.AddRange(orderProductsToCreate);

    // Delete the cart from database
    context.Carts.Remove(cart);

    await context.SaveChangesAsync();

    // Return the orderDetailDto
    // var orderProducts = await context.OrderProduct
    //                     .AsNoTracking()
    //                     .Include(op => op.Product)
    //                     .Where(op => op.OrderId == orderToCreate.Id)
    //                     .ToListAsync();
    // var items = orderProducts.Select(op => new OrderItemDto
    // {
    //     Type = op.Product!.GenreType.ToStringType(),
    //     Title = op.Product.Title,
    //     ThumbnailUrl = op.Product.Thumbnail,
    //     Quantity = op.Quantity,
    //     ProductId = op.ProductId,
    //     Price = op.Product.Price
    // }).ToList();
    // var orderToReturn = new OrderDto
    // {
    //     Id = orderToCreate.Id,
    //     CreatedAt = orderToCreate.CreatedAt,
    //     OrderId = orderToCreate.OrderId,
    //     Status = orderToCreate.Status.ToString(),
    //     Subtotal = orderToCreate.Subtotal,
    //     ShippingFee = orderToCreate.ShippingFee,
    //     Discount = orderToCreate.Discount ??= 0,
    //     PaymentMethod = orderToCreate.PaymentMethod.ToString(),
    //     Items = items
    // };
    // return Results.Created($"/order/{orderToCreate.Id}", orderToReturn);

    return Results.Accepted();
});

app.MapPut("/api/order/{id}/pay", async ([FromRoute] string id, ShopContext context) =>
{
    var order = await context.Orders
                        .AsNoTracking()
                        .Include(o => o.OrderProducts!)
                        .ThenInclude(op => op.Product)
                        .FirstOrDefaultAsync(o => o.OrderId == id);
    if (order is null) return Results.NotFound();

    order.Status = OrderStatus.Processing;
    context.Orders.Update(order);
    await context.SaveChangesAsync();

    var items = order.OrderProducts!.Select(op => new OrderItemDto
    {
        Type = op.Product!.GenreType.ToStringType(),
        Title = op.Product.Title,
        ThumbnailUrl = op.Product.Thumbnail,
        Quantity = op.Quantity,
        ProductId = op.ProductId,
        Price = op.Product.Price
    }).ToList();

    var orderToReturn = new OrderDto
    {
        Id = order.Id,
        OrderId = order.OrderId,
        CreatedAt = order.CreatedAt,
        Status = order.Status,
        Subtotal = order.Subtotal,
        ShippingFee = order.ShippingFee,
        Discount = order.Discount,
        PaymentMethod = order.PaymentMethod.ToString(),
        Items = items
    };

    return Results.Ok(orderToReturn);
});

app.MapGet("/api/order", async ([FromQuery(Name = "sub")] string sub, ShopContext context) =>
{
    if (sub is null) return Results.BadRequest();
    var user = await context.Users
                        .AsNoTracking()
                        .FirstOrDefaultAsync(u => u.Sub == sub);
    if (user is null) return Results.NotFound();
    var orders = await context.Orders
                        .AsNoTracking()
                        .Include(o => o.OrderProducts!)
                        .ThenInclude(op => op.Product)
                        .Where(o => o.UserId == user.Id)
                        .ToListAsync();

    var ordersToReturn = orders.Select(o => new OrderDto
    {
        Subtotal = o.Subtotal,
        Status = o.Status,
        ShippingFee = o.ShippingFee,
        PaymentMethod = o.PaymentMethod.ToString(),
        OrderId = o.OrderId,
        Items = o.OrderProducts!.Select(op => new OrderItemDto
        {
            Type = op.Product!.GenreType.ToStringType(),
            Title = op.Product.Title,
            ThumbnailUrl = op.Product.Thumbnail,
            Quantity = op.Quantity,
            ProductId = op.ProductId,
            Price = op.Product.Price
        }).ToList(),
        Id = o.Id,
        Discount = o.Discount,
        CreatedAt = o.CreatedAt
    });

    return Results.Ok(ordersToReturn);
});

app.MapGet("/api/revenue", async ([FromQuery(Name = "month")] int month, [FromQuery(Name = "year")] int year, ShopContext context) =>
{
    var orders = await context.Orders
                        .AsNoTracking()
                        .Where(o => o.CreatedAt.Year == year && o.CreatedAt.Month == month)
                        .ToListAsync();

    var revenue = orders
                        .GroupBy(o => o.CreatedAt.Date)
                        .Select(g => new RevenueDto{Date = g.Key, Revenue = g.Sum(o => o.Subtotal + o.ShippingFee - o.Discount)})
                        .OrderBy(rd => rd.Date)
                        .ToList();

    return Results.Ok(revenue);
});

app.Run();