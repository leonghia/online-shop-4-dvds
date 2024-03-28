using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace OnlineShop4DVDS.Migrations
{
    /// <inheritdoc />
    public partial class SeedAlbum : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Albums",
                columns: new[] { "ProductId", "AlbumId" },
                values: new object[,]
                {
                    { 1, "64LU4c1nfjz1t4VnGhagcg" },
                    { 2, "5r36AJ6VOJtp00oxSkBZ5h" },
                    { 3, "6DEjYFkNZh67HP7R9PSZvv" },
                    { 4, "1NAmidJlEaVgA3MpcPFYGq" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Albums",
                keyColumn: "ProductId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Albums",
                keyColumn: "ProductId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Albums",
                keyColumn: "ProductId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Albums",
                keyColumn: "ProductId",
                keyValue: 4);
        }
    }
}
