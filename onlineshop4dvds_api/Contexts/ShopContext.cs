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
        modelBuilder.ApplyConfiguration(new GenreConfiguration());
    }

    public DbSet<Genre> Genres {get;set;}
    public DbSet<Cart> Carts {get;set;}
    public DbSet<Product> Products {get;set;}
}
