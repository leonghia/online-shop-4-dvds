﻿// <auto-generated />
using System;
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
    [Migration("20240319045058_AddShippingFeeAndDiscountToCart")]
    partial class AddShippingFeeAndDiscountToCart
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("GenreProduct", b =>
                {
                    b.Property<int>("GenresId")
                        .HasColumnType("integer");

                    b.Property<int>("ProductsId")
                        .HasColumnType("integer");

                    b.HasKey("GenresId", "ProductsId");

                    b.HasIndex("ProductsId");

                    b.ToTable("GenreProduct");

                    b.HasData(
                        new
                        {
                            GenresId = 1,
                            ProductsId = 1
                        },
                        new
                        {
                            GenresId = 1,
                            ProductsId = 2
                        },
                        new
                        {
                            GenresId = 3,
                            ProductsId = 2
                        },
                        new
                        {
                            GenresId = 1,
                            ProductsId = 3
                        },
                        new
                        {
                            GenresId = 32,
                            ProductsId = 3
                        },
                        new
                        {
                            GenresId = 1,
                            ProductsId = 4
                        },
                        new
                        {
                            GenresId = 3,
                            ProductsId = 4
                        },
                        new
                        {
                            GenresId = 18,
                            ProductsId = 5
                        },
                        new
                        {
                            GenresId = 8,
                            ProductsId = 5
                        },
                        new
                        {
                            GenresId = 33,
                            ProductsId = 5
                        },
                        new
                        {
                            GenresId = 7,
                            ProductsId = 6
                        },
                        new
                        {
                            GenresId = 13,
                            ProductsId = 6
                        },
                        new
                        {
                            GenresId = 8,
                            ProductsId = 6
                        },
                        new
                        {
                            GenresId = 13,
                            ProductsId = 7
                        },
                        new
                        {
                            GenresId = 8,
                            ProductsId = 7
                        },
                        new
                        {
                            GenresId = 8,
                            ProductsId = 8
                        },
                        new
                        {
                            GenresId = 35,
                            ProductsId = 9
                        },
                        new
                        {
                            GenresId = 25,
                            ProductsId = 9
                        },
                        new
                        {
                            GenresId = 35,
                            ProductsId = 10
                        },
                        new
                        {
                            GenresId = 36,
                            ProductsId = 10
                        },
                        new
                        {
                            GenresId = 35,
                            ProductsId = 11
                        },
                        new
                        {
                            GenresId = 19,
                            ProductsId = 11
                        },
                        new
                        {
                            GenresId = 36,
                            ProductsId = 11
                        },
                        new
                        {
                            GenresId = 25,
                            ProductsId = 12
                        },
                        new
                        {
                            GenresId = 38,
                            ProductsId = 12
                        },
                        new
                        {
                            GenresId = 23,
                            ProductsId = 12
                        });
                });

            modelBuilder.Entity("OnlineShop4DVDS.Entities.Cart", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<decimal>("Discount")
                        .HasColumnType("numeric");

                    b.Property<decimal>("ShippingFee")
                        .HasColumnType("numeric");

                    b.HasKey("Id");

                    b.ToTable("Carts");
                });

            modelBuilder.Entity("OnlineShop4DVDS.Entities.CartProduct", b =>
                {
                    b.Property<int>("CartId")
                        .HasColumnType("integer");

                    b.Property<int>("ProductId")
                        .HasColumnType("integer");

                    b.Property<int>("Quantity")
                        .HasColumnType("integer");

                    b.HasKey("CartId", "ProductId");

                    b.HasIndex("ProductId");

                    b.ToTable("CartProduct");
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
                        },
                        new
                        {
                            Id = 35,
                            GenreType = 2,
                            Name = "Open world"
                        },
                        new
                        {
                            Id = 36,
                            GenreType = 2,
                            Name = "Story rich"
                        },
                        new
                        {
                            Id = 37,
                            GenreType = 2,
                            Name = "Western"
                        },
                        new
                        {
                            Id = 38,
                            GenreType = 2,
                            Name = "FPS"
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

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Description = "1989 (Taylor’s Version) CD 21 Songs Including 5 previously unreleased songs from The Vault Collectible CD album in jewel case with unique front and back cover art 1 Disc album with unique collectible disc artwork A collectible lyric booklet with never-before-seen photos 10”x10” double-sided Foldable Poster Side 1 includes full size photograph of Taylor Swift Side 2 includes a print of the original handwritten lyrics of “Welcome to New York” Limit 4 per customer. U.S. Customers Only This product is only available to customers shipping to a U.S. address. Depiction of this product is a digital rendering and for illustrative purposes only. Actual product detailing may vary. Ships on or about October 27, 2023 © 2023 Taylor Swift Taylor Swift® Used By Permission. All Rights Reserved.",
                            GenreType = 0,
                            Price = 39.99m,
                            Stock = 200,
                            Thumbnail = "https://product.hstatic.net/1000304920/product/taylor-swift-1989-taylor-s-version-vinyl-2lp-dia-than_1d691bd1340a4c90a72d0ee2d292da30.png",
                            Title = "1989 (Taylor's Version)"
                        },
                        new
                        {
                            Id = 2,
                            Description = "Limited 180gm vinyl LP pressing housed in gatefold jacket. Includes printed inner sleeve, postcard, and 12 page booklet. 2022 release. Harry's House is the third solo studio album from Grammy award-winning global superstar Harry Styles. The 13-track full-length album was recorded in multiple locations across the UK, Los Angeles, and Tokyo from 2020 to 2021. It was written by Harry alongside frequent collaborators Kid Harpoon, Tyler Johnson, and Mitch Rowland.",
                            GenreType = 0,
                            Price = 29.49m,
                            Stock = 200,
                            Thumbnail = "https://www.urbanrecords.com.au/cdn/shop/products/harrys_house_vinyl_transparent_1200x_753c33cc-36f7-4e8a-b6c3-c632cb0e3827.webp?v=1652506957",
                            Title = "Harry's House"
                        },
                        new
                        {
                            Id = 3,
                            Description = "Reputation is the sixth studio album by the biggest pop star in the world, Taylor Swift. Certified 3x Platinum.",
                            GenreType = 0,
                            Price = 19.49m,
                            Stock = 200,
                            Thumbnail = "https://thesoundofvinyl.us/cdn/shop/files/TaylorSwift-Reputation-1LP-Vinyl_700x700.png?v=1690581381",
                            Title = "Reputation"
                        },
                        new
                        {
                            Id = 4,
                            Description = "Taylor Swift releases her highly anticipated 7th album, Lover featuring the hit singles \"You Need To Calm Down\" and \"ME!\" feat. Brendon Urie of Panic! At The Disco.",
                            GenreType = 0,
                            Price = 13.98m,
                            Stock = 200,
                            Thumbnail = "https://storeca.taylorswift.com/cdn/shop/products/SharedImage-130517.png?v=1658348062",
                            Title = "Lover"
                        },
                        new
                        {
                            Id = 5,
                            Description = "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
                            GenreType = 1,
                            Price = 19.99m,
                            Stock = 200,
                            Thumbnail = "https://i.ibb.co/8YWKtvN/schindler-list-movie-dvd.png",
                            Title = "Schindler's List"
                        },
                        new
                        {
                            Id = 6,
                            Description = "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
                            GenreType = 1,
                            Price = 13.65m,
                            Stock = 200,
                            Thumbnail = "https://i.ibb.co/tHhcvVk/the-dark-knight-dvd.png",
                            Title = "The Dark Knight"
                        },
                        new
                        {
                            Id = 7,
                            Description = "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
                            GenreType = 1,
                            Price = 14.99m,
                            Stock = 200,
                            Thumbnail = "https://i.ibb.co/6P1vmWS/the-godfather-dvd.png",
                            Title = "The Godfather"
                        },
                        new
                        {
                            Id = 8,
                            Description = "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
                            GenreType = 1,
                            Price = 9.99m,
                            Stock = 200,
                            Thumbnail = "https://i.ibb.co/Lk8Bff3/shawshank-redemption-dvd.png",
                            Title = "The Shawshank Redemption"
                        },
                        new
                        {
                            Id = 9,
                            Description = "The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever-evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Doomsday Heist, Gunrunning, Smuggler's Run, Bikers and much more. You'll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.",
                            GenreType = 2,
                            Price = 21.74m,
                            Stock = 200,
                            Thumbnail = "https://i.ibb.co/bgGs0zS/gta-v-dvd.png",
                            Title = "Grand Theft Auto V: Premium Edition (PS4)"
                        },
                        new
                        {
                            Id = 10,
                            Description = "Includes: America, 1899. The end of the wild west era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him. From the creators of Grand Theft Auto V and Red Dead Redemption, Red Dead Redemption 2 is an epic tale of life in America at the dawn of the modern age. War Horse and Outlaw Survival Kit: This handsome iron-grey-coloured Ardennes War Horse can always be relied on in the heat of the battle. With greater courage and stamina than the average steed, this is a horse that knows how to keep its head under fire. The War Horse is available in Red Dead Redemption 2 Story Mode.The Outlaw Survival Kit contains a collection of key supplies for enduring the rigours of life on the frontier, including items to replenish Health, Dead Eye and more. The Outlaw Survival Kit is available in Red Dead Redemption 2 Story Mode.",
                            GenreType = 2,
                            Price = 27.50m,
                            Stock = 200,
                            Thumbnail = "https://i.ibb.co/5W3N5nB/rdrd2-dvd.png",
                            Title = "Red Dead Redemption 2 (PS4)"
                        },
                        new
                        {
                            Id = 11,
                            Description = "Play the most polished and complete version of the most awarded game of 2015 - The Witcher 3 Wild Hunt. Now available with all expansions and additional content!Become a professional monster slayer and embark on an adventure of epic proportions! Upon its release, The Witcher 3 Wild Hunt became an instant classic, claiming over 250 Game of the Year awards. Now you can enjoy this huge, over 100-hour long, open-world adventure along with both its story-driven expansions worth an extra 50 hours of gameplay. This edition includes all additional content - new weapons, armour, companion outfits, new game mode and side quests.Play as a Highly Trained Monster Slayer for Hire.",
                            GenreType = 2,
                            Price = 20.46m,
                            Stock = 200,
                            Thumbnail = "https://cdn.hmv.com/r/w-640/hmv/files/50/50807dd8-7179-48a1-a4ce-a14fa06a80e3.png",
                            Title = "The Witcher 3: Wild Hunt - Complete Edition (PS5)"
                        },
                        new
                        {
                            Id = 12,
                            Description = "The stakes have never been higher as players take on the role of lethal Tier One operators in a heart-racing saga that will affect the global balance of power. Call of Duty: Modern Warfare engulfs fans in an incredibly raw, gritty, provocative narrative that brings unrivaled intensity and shines a light on the changing nature of modern war. Developed by the studio that started it all, Infinity Ward delivers an epic reimagining of the iconic Modern Warfare series from the ground up.",
                            GenreType = 2,
                            Price = 21.73m,
                            Stock = 200,
                            Thumbnail = "https://i.ibb.co/7YMCJ7p/cod-modern-warfare-dvd.png (PS4)",
                            Title = "Call of Duty: Modern Warfare"
                        });
                });

            modelBuilder.Entity("OnlineShop4DVDS.Entities.Review", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Content")
                        .HasColumnType("text");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<int>("ProductId")
                        .HasColumnType("integer");

                    b.Property<byte>("Ratings")
                        .HasColumnType("smallint");

                    b.Property<int>("UserId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("ProductId");

                    b.HasIndex("UserId");

                    b.ToTable("Reviews");
                });

            modelBuilder.Entity("OnlineShop4DVDS.Entities.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Avatar")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("FullName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Sub")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("GenreProduct", b =>
                {
                    b.HasOne("OnlineShop4DVDS.Entities.Genre", null)
                        .WithMany()
                        .HasForeignKey("GenresId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("OnlineShop4DVDS.Entities.Product", null)
                        .WithMany()
                        .HasForeignKey("ProductsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("OnlineShop4DVDS.Entities.CartProduct", b =>
                {
                    b.HasOne("OnlineShop4DVDS.Entities.Cart", null)
                        .WithMany("CartProducts")
                        .HasForeignKey("CartId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("OnlineShop4DVDS.Entities.Product", "Product")
                        .WithMany()
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Product");
                });

            modelBuilder.Entity("OnlineShop4DVDS.Entities.Review", b =>
                {
                    b.HasOne("OnlineShop4DVDS.Entities.Product", "Product")
                        .WithMany("Reviews")
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("OnlineShop4DVDS.Entities.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Product");

                    b.Navigation("User");
                });

            modelBuilder.Entity("OnlineShop4DVDS.Entities.Cart", b =>
                {
                    b.Navigation("CartProducts");
                });

            modelBuilder.Entity("OnlineShop4DVDS.Entities.Product", b =>
                {
                    b.Navigation("Reviews");
                });
#pragma warning restore 612, 618
        }
    }
}
