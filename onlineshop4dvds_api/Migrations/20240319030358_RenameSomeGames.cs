using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OnlineShop4DVDS.Migrations
{
    /// <inheritdoc />
    public partial class RenameSomeGames : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 9,
                column: "Title",
                value: "Grand Theft Auto V: Premium Edition (PS4)");

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 10,
                column: "Title",
                value: "Red Dead Redemption 2 (PS4)");

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 11,
                column: "Title",
                value: "The Witcher 3: Wild Hunt - Complete Edition (PS5)");

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 12,
                column: "Thumbnail",
                value: "https://i.ibb.co/7YMCJ7p/cod-modern-warfare-dvd.png (PS4)");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 9,
                column: "Title",
                value: "Grand Theft Auto V: Premium Edition");

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 10,
                column: "Title",
                value: "Red Dead Redemption 2");

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 11,
                column: "Title",
                value: "The Witcher 3: Wild Hunt - Complete Edition");

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 12,
                column: "Thumbnail",
                value: "https://i.ibb.co/7YMCJ7p/cod-modern-warfare-dvd.png");
        }
    }
}
