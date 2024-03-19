using LinqKit;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OnlineShop4DVDS.Contexts;
using OnlineShop4DVDS.DTOs;
using OnlineShop4DVDS.Entities;
using OnlineShop4DVDS.Utils;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
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

app.MapGet("/api/product", async ([FromQuery(Name = "genreType")] GenreType? genreType, [FromQuery(Name = "genreId")] int? genreId, ShopContext context, [FromQuery(Name = "pageSize")] int pageSize = 50, [FromQuery(Name = "pageNumber")] int pageNumber = 1) => {
    IQueryable<Product> query = context.Products;
    var predicate = PredicateBuilder.New<Product>(true);
    if (genreType is not null) predicate = predicate.And(p => p.GenreType == genreType);
    if (genreId is not null && genreId > 0) predicate = predicate.And(p => p.Genres!.Any(g => g.Id == genreId));
    var products = await query
                            .AsNoTracking()
                            .Where(predicate)
                            .Include(p => p.Genres)
                            .Skip(pageSize * (pageNumber - 1))
                            .Take(pageSize)
                            .ToListAsync();
    var productsToReturn = products.Select(p => new ProductDto
    {
        Id = p.Id,
        Title = p.Title,
        ThumbnailUrl = p.Thumbnail,
        Price = p.Price,
        Genres = p.Genres!.Select(g => g.Name).ToList(),
        Description = p.Description
    });
    return Results.Ok(productsToReturn);
});

app.MapGet("/api/product/{id}", async ([FromRoute] int id, ShopContext context) => {
    IQueryable<Product> query = context.Products;
    var product = await query
                            .AsNoTracking()
                            .Include(p => p.Genres)
                            .FirstOrDefaultAsync(p => p.Id == id);
    if (product is null) return Results.NotFound();
    var productToReturn = new ProductDto
    {
        Id = product.Id,
        Title = product.Title,
        ThumbnailUrl = product.Thumbnail,
        Price = product.Price,
        Genres = product.Genres!.Select(g => g.Name).ToList(),
        Description = product.Description
    };
    return Results.Ok(productToReturn);
});

app.Run();