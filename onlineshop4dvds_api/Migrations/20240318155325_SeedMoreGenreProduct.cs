using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace OnlineShop4DVDS.Migrations
{
    /// <inheritdoc />
    public partial class SeedMoreGenreProduct : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "GenreProduct",
                columns: new[] { "GenresId", "ProductsId" },
                values: new object[,]
                {
                    { 19, 11 },
                    { 23, 12 },
                    { 25, 9 },
                    { 25, 12 },
                    { 35, 9 },
                    { 35, 10 },
                    { 35, 11 },
                    { 36, 10 },
                    { 36, 11 },
                    { 38, 12 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "GenreProduct",
                keyColumns: new[] { "GenresId", "ProductsId" },
                keyValues: new object[] { 19, 11 });

            migrationBuilder.DeleteData(
                table: "GenreProduct",
                keyColumns: new[] { "GenresId", "ProductsId" },
                keyValues: new object[] { 23, 12 });

            migrationBuilder.DeleteData(
                table: "GenreProduct",
                keyColumns: new[] { "GenresId", "ProductsId" },
                keyValues: new object[] { 25, 9 });

            migrationBuilder.DeleteData(
                table: "GenreProduct",
                keyColumns: new[] { "GenresId", "ProductsId" },
                keyValues: new object[] { 25, 12 });

            migrationBuilder.DeleteData(
                table: "GenreProduct",
                keyColumns: new[] { "GenresId", "ProductsId" },
                keyValues: new object[] { 35, 9 });

            migrationBuilder.DeleteData(
                table: "GenreProduct",
                keyColumns: new[] { "GenresId", "ProductsId" },
                keyValues: new object[] { 35, 10 });

            migrationBuilder.DeleteData(
                table: "GenreProduct",
                keyColumns: new[] { "GenresId", "ProductsId" },
                keyValues: new object[] { 35, 11 });

            migrationBuilder.DeleteData(
                table: "GenreProduct",
                keyColumns: new[] { "GenresId", "ProductsId" },
                keyValues: new object[] { 36, 10 });

            migrationBuilder.DeleteData(
                table: "GenreProduct",
                keyColumns: new[] { "GenresId", "ProductsId" },
                keyValues: new object[] { 36, 11 });

            migrationBuilder.DeleteData(
                table: "GenreProduct",
                keyColumns: new[] { "GenresId", "ProductsId" },
                keyValues: new object[] { 38, 12 });
        }
    }
}
