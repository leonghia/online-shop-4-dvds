using System.Runtime.CompilerServices;
using LinqKit;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OnlineShop4DVDS.Contexts;
using OnlineShop4DVDS.DTOs;
using OnlineShop4DVDS.Entities;
using OnlineShop4DVDS.Utils;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
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

app.MapGet("/api/genre", async ([FromQuery(Name = "type")] GenreType? genreType, ShopContext context) =>
{
    var predicate = PredicateBuilder.New<Genre>(true);
    if (genreType is not null)
    {
        predicate = predicate.And(g => g.GenreType == genreType);
    }
    var genres = await context.Genres
                        .AsNoTracking()
                        .Where(predicate)
                        .ToListAsync();
    var genresToReturn = genres.Select(g => new GenreDto
    {
        Name = g.Name,
        Id = g.Id
    });
    return Results.Ok(genresToReturn);
});

app.MapGet("/api/product", async (HttpRequest request, [FromQuery(Name = "type")] GenreType? type, [FromQuery(Name = "genreId")] int? genreId, [FromQuery(Name = "q")] string? query, [FromQuery(Name = "price_from")] int? priceFrom, [FromQuery(Name = "price_to")] int? priceTo, [FromQuery(Name = "genres")] string? genres, [FromQuery(Name = "rating")] int? rating, [FromQuery(Name = "sort")] ProductSort? sort, ShopContext context, [FromQuery(Name = "pageSize")] int pageSize = 50, [FromQuery(Name = "pageNumber")] int pageNumber = 1) =>
{
    IQueryable<Product> productQuery = context.Products;
    var predicate = PredicateBuilder.New<Product>(true);
    if (type is not null) predicate = predicate.And(p => p.GenreType == type);
    if (genreId is not null && genreId > 0) predicate = predicate.And(p => p.Genres!.Any(g => g.Id == genreId));
    if (query is not null && !string.IsNullOrWhiteSpace(query)) predicate = predicate.And(p => p.Title.ToUpper().Contains(query.ToUpper()));
    if (priceFrom is not null && priceFrom >= 0 && priceTo is not null && priceTo >= 0 && priceFrom < priceTo) predicate = predicate.And(p => p.Price >= priceFrom && p.Price <= priceTo);
    if (genres is not null)
    {
        var genresIds = genres.Split(',').Select(g => int.Parse(g)).ToList();
        predicate = predicate.And(p => genresIds.All(id => p.Genres.Select(g => g.Id).Contains(id)));
    }
    if (rating is not null && rating > 0) predicate = predicate.And(p => p.Rating >= rating);

    Func<IQueryable<Product>, IOrderedQueryable<Product>> orderBy = productQuery => productQuery.OrderByDescending(p => p.Id);

    if (sort is not null)
    {
        switch (sort)
        {
            case ProductSort.Newest:
                break;
            case ProductSort.MostPopular:
                orderBy = productQuery => productQuery.OrderByDescending(p => p.OrderProducts.Sum(op => op.Quantity));
                break;
            case ProductSort.PriceHighestToLowest:
                orderBy = productQuery => productQuery.OrderByDescending(p => p.Price);
                break;
            case ProductSort.PriceLowestToHighest:
                orderBy = productQuery => productQuery.OrderBy(p => p.Price);
                break;
            case ProductSort.TopRated:
                orderBy = productQuery => productQuery.OrderBy(p => p.Rating);
                break;
            default:
                throw new SwitchExpressionException(nameof(sort));
        }   
    }

    var products = await orderBy(productQuery)
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
                                })
                            .Select(x => new
                            {
                                x.Product,
                                x.NumberOfReviews,
                            })
                            .Skip(pageSize * (pageNumber - 1))
                            .Take(pageSize)
                            .ToListAsync();


    var accept = request.Headers.Accept;

    var productsToReturn = products.Select(p => new ProductDto
    {
        Id = p.Product.Id,
        Title = p.Product.Title,
        ThumbnailUrl = p.Product.Thumbnail,
        Ratings = p.Product.Rating,
        NumbersOfReviews = p.NumberOfReviews,
        Price = p.Product.Price,
        Genres = p.Product.Genres!.Select(g => g.Name).ToList(),
        Description = accept == AcceptHeaders.ProductWithDescription ? p.Product.Description : null,
        Type = p.Product.GenreType.ToStringType()
    });
    return Results.Ok(productsToReturn);
});

app.MapGet("/api/cart-item", async ([FromQuery(Name = "id")] string id, ShopContext context) => {
    var ids = id.Split(',');
    var parsedIds = new List<int>(ids.Length);
    foreach (var i in ids)
    {
        if (int.TryParse(i, out int parsedId))
        {
            parsedIds.Add(parsedId);
        }
        else return Results.BadRequest();
    }
    var products = await context.Products
                        .AsNoTracking()
                        .Where(p => parsedIds.Contains(p.Id))
                        .ToListAsync();

    var itemsToReturn = products.Select(p => new CartItemDto
    {
        ThumbnailUrl = p.Thumbnail,
        Type = p.GenreType.ToStringType(),
        Title = p.Title,
        Stock = p.Stock,
        Price = p.Price,
        Id = p.Id
    });
    return Results.Ok(itemsToReturn);
});

app.MapGet("/api/product/{id}", async ([FromRoute] int id, ShopContext context) =>
{
    IQueryable<Product> query = context.Products;
    var product = await query
                            .AsNoTracking()
                            .Include(p => p.Genres)
                            .Include(p => p.Images)
                            .Select(p => new
                            {
                                Product = p,
                                NumberOfReviews = p.Reviews!.Count
                            })
                            .FirstOrDefaultAsync(p => p.Product.Id == id);
    if (product is null) return Results.NotFound();
    var images = new List<string> { product.Product.Thumbnail };
    images.AddRange(product.Product.Images.Select(i => i.Url));
    var productToReturn = new ProductDetailDto
    {
        Id = product.Product.Id,
        Title = product.Product.Title,
        Price = product.Product.Price,
        Description = product.Product.Description,
        Genres = product.Product.Genres!.Select(g => g.Name).ToList(),
        Ratings = product.Product.Rating,
        NumbersOfReviews = product.NumberOfReviews,
        Stock = product.Product.Stock,
        Images = images,
        Type = product.Product.GenreType.ToStringType()
    };
    return Results.Ok(productToReturn);
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

    // Create the order for him and set orderStatus to awaiting payment
    var productsIds = orderCreateDto.Items.Select(item => item.ProductId).ToList();
    var productPrices = (await context.Products
                            .AsNoTracking()
                            .Where(p => productsIds.Contains(p.Id))
                            .Select(p => new {Id = p.Id, Price = p.Price})
                            .ToListAsync())
                        .ToDictionary(e => e.Id, e => e.Price);
    var orderToCreate = new Order
    {
        OrderId = orderCreateDto.OrderId,
        Status = OrderStatus.AwaitingPayment,
        Subtotal = orderCreateDto.Items.Sum(item => item.Quantity * productPrices[item.ProductId]),
        ShippingFee = orderCreateDto.ShippingFee,
        UserId = userId,
        PaymentMethod = orderCreateDto.PaymentMethod,
    };

    context.Orders.Add(orderToCreate);
    await context.SaveChangesAsync();

    var orderItemsToCreate = orderCreateDto.Items.Select(item => new OrderProduct{ProductId = item.ProductId, Quantity = item.Quantity, OrderId = orderToCreate.Id});
    context.OrderProduct.AddRange(orderItemsToCreate);
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
                        .OrderByDescending(o => o.CreatedAt)
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
                        .Select(g => new RevenueDto { Date = g.Key, Revenue = g.Sum(o => o.Subtotal + o.ShippingFee - o.Discount) })
                        .OrderBy(rd => rd.Date)
                        .ToList();

    return Results.Ok(revenue);
});

app.Run();