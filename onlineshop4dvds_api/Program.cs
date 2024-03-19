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
                          policy.WithOrigins("http://localhost:3000").AllowAnyHeader().AllowAnyMethod();
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

app.MapGet("/api/product", async ([FromQuery(Name = "genreType")] GenreType? genreType, [FromQuery(Name = "genreId")] int? genreId, ShopContext context, [FromQuery(Name = "pageSize")] int pageSize = 50, [FromQuery(Name = "pageNumber")] int pageNumber = 1) =>
{
    IQueryable<Product> productQuery = context.Products;
    var predicate = PredicateBuilder.New<Product>(true);
    if (genreType is not null) predicate = predicate.And(p => p.GenreType == genreType);
    if (genreId is not null && genreId > 0) predicate = predicate.And(p => p.Genres!.Any(g => g.Id == genreId));
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

    var productsToReturn = products.Select(i => new ProductDto
    {
        Id = i.Product.Id,
        Title = i.Product.Title,
        ThumbnailUrl = i.Product.Thumbnail,
        Ratings = Math.Round(i.Ratings, 2),
        NumbersOfReviews = i.NumberOfReviews,
        Price = i.Product.Price,
        Genres = i.Product.Genres!.Select(g => g.Name).ToList(),
        Description = i.Product.Description
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
        Stock = product.Product.Stock
    };
    return Results.Ok(productToReturn);
});

app.MapGet("/api/cart/{id}", async ([FromRoute] int id, ShopContext context) => {
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
        Subtotal = subtotal,
        Discount = cart.Discount,
        ShippingFee = cart.ShippingFee,
        Total = subtotal + cart.ShippingFee - cart.Discount
    };
    return Results.Ok(cartToReturn);
});

app.Run();