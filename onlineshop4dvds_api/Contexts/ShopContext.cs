using Microsoft.EntityFrameworkCore;
using OnlineShop4DVDS.Configurations;
using OnlineShop4DVDS.Entities;

namespace OnlineShop4DVDS.Contexts;

public class ShopContext : DbContext
{
    public ShopContext(DbContextOptions<ShopContext> options): base(options)
    {
        
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Cart>()
            .HasMany(c => c.Products)
            .WithMany(p => p.Carts)
            .UsingEntity<CartProduct>();

        modelBuilder.Entity<Order>()
            .HasMany(o => o.Products)
            .WithMany(p => p.Orders)
            .UsingEntity<OrderProduct>();

        modelBuilder.ApplyConfiguration(new GenreConfiguration());
        modelBuilder.ApplyConfiguration(new ProductConfiguration());
        
        modelBuilder.Entity("GenreProduct").HasData(
            new { ProductsId = 1, GenresId = 1 },
            new { ProductsId = 2, GenresId = 1 },
            new { ProductsId = 2, GenresId = 3 },
            new { ProductsId = 3, GenresId = 1 },
            new { ProductsId = 3, GenresId = 32 },
            new { ProductsId = 4, GenresId = 1 },
            new { ProductsId = 4, GenresId = 3 },
            new { ProductsId = 5, GenresId = 18 },
            new { ProductsId = 5, GenresId = 8 },
            new { ProductsId = 5, GenresId = 33 },
            new { ProductsId = 6, GenresId = 7 },
            new { ProductsId = 6, GenresId = 13 },
            new { ProductsId = 6, GenresId = 8 },
            new { ProductsId = 7, GenresId = 13 },
            new { ProductsId = 7, GenresId = 8 },
            new { ProductsId = 8, GenresId = 8 },
            new { ProductsId = 9, GenresId = 35 },
            new { ProductsId = 9, GenresId = 25 },
            new { ProductsId = 10, GenresId = 35 },
            new { ProductsId = 10, GenresId = 36 },
            new { ProductsId = 11, GenresId = 35 },
            new { ProductsId = 11, GenresId = 19 },
            new { ProductsId = 11, GenresId = 36 },
            new { ProductsId = 12, GenresId = 25 },
            new { ProductsId = 12, GenresId = 38 },
            new { ProductsId = 12, GenresId = 23 }
        );
    }

    public DbSet<Genre> Genres {get;set;}
    public DbSet<Cart> Carts {get;set;}
    public DbSet<Product> Products {get;set;}
    public DbSet<User> Users {get;set;}
    public DbSet<Review> Reviews {get;set;}
    public DbSet<CartProduct> CartProduct {get;set;}
    public DbSet<Order> Orders {get;set;}
    public DbSet<OrderProduct> OrderProduct {get;set;}
}
