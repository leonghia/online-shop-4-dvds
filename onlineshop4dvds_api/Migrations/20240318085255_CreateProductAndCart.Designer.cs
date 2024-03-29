﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using OnlineShop4DVDS.Contexts;

#nullable disable

namespace OnlineShop4DVDS.Migrations
{
    [DbContext(typeof(ShopContext))]
    [Migration("20240318085255_CreateProductAndCart")]
    partial class CreateProductAndCart
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("OnlineShop4DVDS.Entities.Cart", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.HasKey("Id");

                    b.ToTable("Carts");
                });

            modelBuilder.Entity("OnlineShop4DVDS.Entities.Genre", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("GenreType")
                        .HasColumnType("integer");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(64)
                        .HasColumnType("character varying(64)");

                    b.HasKey("Id");

                    b.ToTable("Genres");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            GenreType = 0,
                            Name = "Pop"
                        },
                        new
                        {
                            Id = 2,
                            GenreType = 1,
                            Name = "Horror"
                        },
                        new
                        {
                            Id = 3,
                            GenreType = 0,
                            Name = "Rock"
                        },
                        new
                        {
                            Id = 4,
                            GenreType = 0,
                            Name = "Hip hop"
                        },
                        new
                        {
                            Id = 5,
                            GenreType = 0,
                            Name = "Country"
                        },
                        new
                        {
                            Id = 6,
                            GenreType = 0,
                            Name = "EDM"
                        },
                        new
                        {
                            Id = 7,
                            GenreType = 1,
                            Name = "Action"
                        },
                        new
                        {
                            Id = 8,
                            GenreType = 1,
                            Name = "Drama"
                        },
                        new
                        {
                            Id = 9,
                            GenreType = 1,
                            Name = "Thriller"
                        },
                        new
                        {
                            Id = 10,
                            GenreType = 1,
                            Name = "Science fiction"
                        },
                        new
                        {
                            Id = 11,
                            GenreType = 1,
                            Name = "Comedy"
                        },
                        new
                        {
                            Id = 12,
                            GenreType = 1,
                            Name = "Romance"
                        },
                        new
                        {
                            Id = 13,
                            GenreType = 1,
                            Name = "Crime"
                        },
                        new
                        {
                            Id = 14,
                            GenreType = 1,
                            Name = "Adventure"
                        },
                        new
                        {
                            Id = 15,
                            GenreType = 1,
                            Name = "Fantasy"
                        },
                        new
                        {
                            Id = 16,
                            GenreType = 1,
                            Name = "Documentary"
                        },
                        new
                        {
                            Id = 17,
                            GenreType = 1,
                            Name = "Animation"
                        },
                        new
                        {
                            Id = 18,
                            GenreType = 1,
                            Name = "Biography"
                        },
                        new
                        {
                            Id = 19,
                            GenreType = 2,
                            Name = "RPG"
                        },
                        new
                        {
                            Id = 20,
                            GenreType = 2,
                            Name = "Adventure"
                        },
                        new
                        {
                            Id = 21,
                            GenreType = 2,
                            Name = "Fighting"
                        },
                        new
                        {
                            Id = 22,
                            GenreType = 2,
                            Name = "Survival"
                        },
                        new
                        {
                            Id = 23,
                            GenreType = 2,
                            Name = "Shooting"
                        },
                        new
                        {
                            Id = 24,
                            GenreType = 2,
                            Name = "Puzzle"
                        },
                        new
                        {
                            Id = 25,
                            GenreType = 2,
                            Name = "Action"
                        },
                        new
                        {
                            Id = 26,
                            GenreType = 2,
                            Name = "Racing"
                        },
                        new
                        {
                            Id = 27,
                            GenreType = 2,
                            Name = "Simulation"
                        },
                        new
                        {
                            Id = 28,
                            GenreType = 2,
                            Name = "Strategy"
                        },
                        new
                        {
                            Id = 29,
                            GenreType = 2,
                            Name = "Horror"
                        },
                        new
                        {
                            Id = 30,
                            GenreType = 0,
                            Name = "Jazz"
                        },
                        new
                        {
                            Id = 31,
                            GenreType = 0,
                            Name = "K-POP"
                        },
                        new
                        {
                            Id = 32,
                            GenreType = 0,
                            Name = "R&B"
                        },
                        new
                        {
                            Id = 33,
                            GenreType = 1,
                            Name = "History"
                        },
                        new
                        {
                            Id = 34,
                            GenreType = 2,
                            Name = "Sports"
                        });
                });

            modelBuilder.Entity("OnlineShop4DVDS.Entities.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("GenreType")
                        .HasColumnType("integer");

                    b.Property<decimal>("Price")
                        .HasColumnType("numeric");

                    b.Property<int>("Stock")
                        .HasColumnType("integer");

                    b.Property<string>("Thumbnail")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.HasKey("Id");

                    b.ToTable("Products");
                });
#pragma warning restore 612, 618
        }
    }
}
