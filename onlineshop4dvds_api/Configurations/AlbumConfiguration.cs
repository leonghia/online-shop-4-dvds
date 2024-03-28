using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnlineShop4DVDS.Entities;

namespace OnlineShop4DVDS.Configurations;

public class AlbumConfiguration : IEntityTypeConfiguration<Album>
{
    public void Configure(EntityTypeBuilder<Album> builder)
    {
        builder.HasData(
            new Album
            {
                ProductId = 1,
                AlbumId = "64LU4c1nfjz1t4VnGhagcg"
            },
            new Album
            {
                ProductId = 2,
                AlbumId = "5r36AJ6VOJtp00oxSkBZ5h"
            },
            new Album
            {
                ProductId = 3,
                AlbumId = "6DEjYFkNZh67HP7R9PSZvv"
            },
            new Album
            {
                ProductId = 4,
                AlbumId = "1NAmidJlEaVgA3MpcPFYGq"
            }
        );
    }
}