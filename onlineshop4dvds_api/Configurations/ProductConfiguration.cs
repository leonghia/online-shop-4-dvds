using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnlineShop4DVDS.Entities;
using OnlineShop4DVDS.Utils;

namespace OnlineShop4DVDS.Configurations;

public class ProductConfiguration : IEntityTypeConfiguration<Product>
{
    public void Configure(EntityTypeBuilder<Product> builder)
    {
        builder.HasData(
            new Product
            {
                Id = 1,
                Title = "1989 (Taylor's Version)",
                Thumbnail = "https://product.hstatic.net/1000304920/product/taylor-swift-1989-taylor-s-version-vinyl-2lp-dia-than_1d691bd1340a4c90a72d0ee2d292da30.png",
                Description = "1989 (Taylor’s Version) CD 21 Songs Including 5 previously unreleased songs from The Vault Collectible CD album in jewel case with unique front and back cover art 1 Disc album with unique collectible disc artwork A collectible lyric booklet with never-before-seen photos 10”x10” double-sided Foldable Poster Side 1 includes full size photograph of Taylor Swift Side 2 includes a print of the original handwritten lyrics of “Welcome to New York” Limit 4 per customer. U.S. Customers Only This product is only available to customers shipping to a U.S. address. Depiction of this product is a digital rendering and for illustrative purposes only. Actual product detailing may vary. Ships on or about October 27, 2023 © 2023 Taylor Swift Taylor Swift® Used By Permission. All Rights Reserved.",
                GenreType = GenreType.Music,
                Price = 39.99M
            },
            new Product
            {
                Id = 2,
                Title = "Harry's House",
                Thumbnail = "https://www.urbanrecords.com.au/cdn/shop/products/harrys_house_vinyl_transparent_1200x_753c33cc-36f7-4e8a-b6c3-c632cb0e3827.webp?v=1652506957",
                Description = "Limited 180gm vinyl LP pressing housed in gatefold jacket. Includes printed inner sleeve, postcard, and 12 page booklet. 2022 release. Harry's House is the third solo studio album from Grammy award-winning global superstar Harry Styles. The 13-track full-length album was recorded in multiple locations across the UK, Los Angeles, and Tokyo from 2020 to 2021. It was written by Harry alongside frequent collaborators Kid Harpoon, Tyler Johnson, and Mitch Rowland.",
                GenreType = GenreType.Music,
                Price = 29.49M
            },
            new Product
            {
                Id = 3,
                Title = "Reputation",
                Thumbnail = "https://thesoundofvinyl.us/cdn/shop/files/TaylorSwift-Reputation-1LP-Vinyl_700x700.png?v=1690581381",
                Description = "Reputation is the sixth studio album by the biggest pop star in the world, Taylor Swift. Certified 3x Platinum.",
                GenreType = GenreType.Music,
                Price = 19.49M
            },
            new Product
            {
                Id = 4,
                Title = "Lover",
                Thumbnail = "https://storeca.taylorswift.com/cdn/shop/products/SharedImage-130517.png?v=1658348062",
                Description = "Taylor Swift releases her highly anticipated 7th album, Lover featuring the hit singles \"You Need To Calm Down\" and \"ME!\" feat. Brendon Urie of Panic! At The Disco.",
                GenreType = GenreType.Music,
                Price = 13.98M
            },
            new Product
            {
                Id = 5,
                Title = "Schindler's List",
                Thumbnail = "https://i.ibb.co/8YWKtvN/schindler-list-movie-dvd.png",
                Description = "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
                GenreType = GenreType.Movie,
                Price = 19.99M
            },
            new Product
            {
                Id = 6,
                Title = "The Dark Knight",
                Thumbnail = "https://i.ibb.co/tHhcvVk/the-dark-knight-dvd.png",
                Description = "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
                GenreType = GenreType.Movie,
                Price = 13.65M
            },
            new Product
            {
                Id = 7,
                Title = "The Godfather",
                Thumbnail = "https://i.ibb.co/6P1vmWS/the-godfather-dvd.png",
                Description = "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
                GenreType = GenreType.Movie,
                Price = 14.99M
            },
            new Product
            {
                Id = 8,
                Title = "The Shawshank Redemption",
                Thumbnail = "https://i.ibb.co/Lk8Bff3/shawshank-redemption-dvd.png",
                Description = "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
                GenreType = GenreType.Movie,
                Price = 9.99M
            },
            new Product
            {
                Id = 9,
                Title = "Grand Theft Auto V: Premium Edition (PS4)",
                Thumbnail = "https://i.ibb.co/bgGs0zS/gta-v-dvd.png",
                Description = "The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever-evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Doomsday Heist, Gunrunning, Smuggler's Run, Bikers and much more. You'll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.",
                GenreType = GenreType.Game,
                Price = 21.74M
            },
            new Product
            {
                Id = 10,
                Title = "Red Dead Redemption 2 (PS4)",
                Thumbnail = "https://i.ibb.co/5W3N5nB/rdrd2-dvd.png",
                Description = "Includes: America, 1899. The end of the wild west era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him. From the creators of Grand Theft Auto V and Red Dead Redemption, Red Dead Redemption 2 is an epic tale of life in America at the dawn of the modern age. War Horse and Outlaw Survival Kit: This handsome iron-grey-coloured Ardennes War Horse can always be relied on in the heat of the battle. With greater courage and stamina than the average steed, this is a horse that knows how to keep its head under fire. The War Horse is available in Red Dead Redemption 2 Story Mode.The Outlaw Survival Kit contains a collection of key supplies for enduring the rigours of life on the frontier, including items to replenish Health, Dead Eye and more. The Outlaw Survival Kit is available in Red Dead Redemption 2 Story Mode.",
                GenreType = GenreType.Game,
                Price = 27.50M
            },
            new Product
            {
                Id = 11,
                Title = "The Witcher 3: Wild Hunt - Complete Edition (PS5)",
                Thumbnail = "https://cdn.hmv.com/r/w-640/hmv/files/50/50807dd8-7179-48a1-a4ce-a14fa06a80e3.png",
                Description = "Play the most polished and complete version of the most awarded game of 2015 - The Witcher 3 Wild Hunt. Now available with all expansions and additional content!Become a professional monster slayer and embark on an adventure of epic proportions! Upon its release, The Witcher 3 Wild Hunt became an instant classic, claiming over 250 Game of the Year awards. Now you can enjoy this huge, over 100-hour long, open-world adventure along with both its story-driven expansions worth an extra 50 hours of gameplay. This edition includes all additional content - new weapons, armour, companion outfits, new game mode and side quests.Play as a Highly Trained Monster Slayer for Hire.",
                GenreType = GenreType.Game,
                Price = 20.46M
            },
            new Product
            {
                Id = 12,
                Title = "Call of Duty: Modern Warfare",
                Thumbnail = "https://i.ibb.co/7YMCJ7p/cod-modern-warfare-dvd.png (PS4)",
                Description = "The stakes have never been higher as players take on the role of lethal Tier One operators in a heart-racing saga that will affect the global balance of power. Call of Duty: Modern Warfare engulfs fans in an incredibly raw, gritty, provocative narrative that brings unrivaled intensity and shines a light on the changing nature of modern war. Developed by the studio that started it all, Infinity Ward delivers an epic reimagining of the iconic Modern Warfare series from the ground up.",
                GenreType = GenreType.Game,
                Price = 21.73M
            }
        );
    }
}