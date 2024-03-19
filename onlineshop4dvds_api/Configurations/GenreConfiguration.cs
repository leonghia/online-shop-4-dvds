using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnlineShop4DVDS.Entities;
using OnlineShop4DVDS.Utils;

namespace OnlineShop4DVDS.Configurations;

public class GenreConfiguration : IEntityTypeConfiguration<Genre>
{
    public void Configure(EntityTypeBuilder<Genre> builder)
    {
        builder.HasData(
            new Genre
            {
                Id = 1,
                Name = "Pop",
                GenreType = GenreType.Music
            },
            new Genre
            {
                Id = 2,
                Name = "Horror",
                GenreType = GenreType.Movie
            },
            new Genre
            {
                Id = 3,
                Name = "Rock",
                GenreType = GenreType.Music
            },
            new Genre
            {
                Id = 4,
                Name = "Hip hop",
                GenreType = GenreType.Music
            },
            new Genre
            {
                Id = 5,
                Name = "Country",
                GenreType = GenreType.Music
            },
            new Genre
            {
                Id = 6,
                Name = "EDM",
                GenreType = GenreType.Music
            },
            new Genre
            {
                Id = 7,
                Name = "Action",
                GenreType = GenreType.Movie
            },
            new Genre
            {
                Id = 8,
                Name = "Drama",
                GenreType = GenreType.Movie
            },
            new Genre
            {
                Id = 9,
                Name = "Thriller",
                GenreType = GenreType.Movie
            },
            new Genre
            {
                Id = 10,
                Name = "Science fiction",
                GenreType = GenreType.Movie
            },
            new Genre
            {
                Id = 11,
                Name = "Comedy",
                GenreType = GenreType.Movie
            },
            new Genre
            {
                Id = 12,
                Name = "Romance",
                GenreType = GenreType.Movie
            },
            new Genre
            {
                Id = 13,
                Name = "Crime",
                GenreType = GenreType.Movie
            },
            new Genre
            {
                Id = 14,
                Name = "Adventure",
                GenreType = GenreType.Movie
            },
            new Genre
            {
                Id = 15,
                Name = "Fantasy",
                GenreType = GenreType.Movie
            },
            new Genre
            {
                Id = 16,
                Name = "Documentary",
                GenreType = GenreType.Movie
            },
            new Genre
            {
                Id = 17,
                Name = "Animation",
                GenreType = GenreType.Movie
            },
            new Genre
            {
                Id = 18,
                Name = "Biography",
                GenreType = GenreType.Movie
            },
            new Genre
            {
                Id = 19,
                Name = "RPG",
                GenreType = GenreType.Game
            },
            new Genre
            {
                Id = 20,
                Name = "Adventure",
                GenreType = GenreType.Game
            },
            new Genre
            {
                Id = 21,
                Name = "Fighting",
                GenreType = GenreType.Game
            },
            new Genre
            {
                Id = 22,
                Name = "Survival",
                GenreType = GenreType.Game
            },
            new Genre
            {
                Id = 23,
                Name = "Shooting",
                GenreType = GenreType.Game
            },
            new Genre
            {
                Id = 24,
                Name = "Puzzle",
                GenreType = GenreType.Game
            },
            new Genre
            {
                Id = 25,
                Name = "Action",
                GenreType = GenreType.Game
            },
            new Genre
            {
                Id = 26,
                Name = "Racing",
                GenreType = GenreType.Game
            },
            new Genre
            {
                Id = 27,
                Name = "Simulation",
                GenreType = GenreType.Game
            },
            new Genre
            {
                Id = 28,
                Name = "Strategy",
                GenreType = GenreType.Game
            },
            new Genre
            {
                Id = 29,
                Name = "Horror",
                GenreType = GenreType.Game
            },
            new Genre
            {
                Id = 30,
                Name = "Jazz",
                GenreType = GenreType.Music
            },
            new Genre
            {
                Id = 31,
                Name = "K-POP",
                GenreType = GenreType.Music
            },
            new Genre
            {
                Id = 32,
                Name = "R&B",
                GenreType = GenreType.Music
            },
            new Genre
            {
                Id = 33,
                Name = "History",
                GenreType = GenreType.Movie
            },
            new Genre
            {
                Id = 34,
                Name = "Sports",
                GenreType = GenreType.Game
            },
            new Genre
            {
                Id = 35,
                Name = "Open world",
                GenreType = GenreType.Game
            },
            new Genre
            {
                Id = 36,
                Name = "Story rich",
                GenreType = GenreType.Game
            },
            new Genre
            {
                Id = 37,
                Name = "Western",
                GenreType = GenreType.Game
            },
            new Genre
            {
                Id = 38,
                Name = "FPS",
                GenreType = GenreType.Game
            }
        );
    }
}
