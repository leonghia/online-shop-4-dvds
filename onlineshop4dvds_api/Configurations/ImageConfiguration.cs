using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnlineShop4DVDS.Entities;

namespace OnlineShop4DVDS.Configurations;

public class ImageConfiguration : IEntityTypeConfiguration<Image>
{
    public void Configure(EntityTypeBuilder<Image> builder)
    {
        builder.HasData(
            new Image
            {
                Id = 1,
                Url = "https://m.media-amazon.com/images/I/81AX0dnSu7L._SL1500_.jpg",
                ProductId = 1
            },
            new Image
            {
                Id = 2,
                Url = "https://m.media-amazon.com/images/I/816hqp2ZgJL._SL1500_.jpg",
                ProductId = 1
            },
            new Image
            {
                Id = 3,
                Url = "https://m.media-amazon.com/images/I/51P1vjcdBqL.jpg",
                ProductId = 4
            },
            new Image
            {
                Id = 4,
                Url = "https://m.media-amazon.com/images/I/31UacIGbCqL.jpg",
                ProductId = 4
            },
            new Image
            {
                Id = 5,
                Url = "https://m.media-amazon.com/images/M/MV5BMTgwNzg3MDkxM15BMl5BanBnXkFtZTcwMzA2MDAxMw@@._V1_FMjpg_UX2048_.jpg",
                ProductId = 5
            },
            new Image
            {
                Id = 6,
                Url = "https://m.media-amazon.com/images/M/MV5BMTc4NTA1OTE4Nl5BMl5BanBnXkFtZTcwODA2MDAxMw@@._V1_FMjpg_UX2048_.jpg",
                ProductId = 5
            },
            new Image
            {
                Id = 7,
                Url = "https://m.media-amazon.com/images/M/MV5BMTYxNDExMDI3NV5BMl5BanBnXkFtZTcwMDY2MDAxMw@@._V1_FMjpg_UX2048_.jpg",
                ProductId = 5
            },
            new Image
            {
                Id = 8,
                Url = "https://m.media-amazon.com/images/M/MV5BOTAxNzI0NDE1NF5BMl5BanBnXkFtZTcwNjczMTk2Mw@@._V1_FMjpg_UX2048_.jpg",
                ProductId = 6
            },
            new Image
            {
                Id = 9,
                Url = "https://m.media-amazon.com/images/M/MV5BMjE3NTU0NTQ5NF5BMl5BanBnXkFtZTcwNzczMTk2Mw@@._V1_FMjpg_UX2048_.jpg",
                ProductId = 6
            },
            new Image
            {
                Id = 10,
                Url = "https://m.media-amazon.com/images/M/MV5BMjA5ODU3NTI0Ml5BMl5BanBnXkFtZTcwODczMTk2Mw@@._V1_FMjpg_UX2048_.jpg",
                ProductId = 6
            }
        );
    }
}