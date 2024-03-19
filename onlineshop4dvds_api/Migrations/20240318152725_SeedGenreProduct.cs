using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace OnlineShop4DVDS.Migrations
{
    /// <inheritdoc />
    public partial class SeedGenreProduct : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "GenreProduct",
                columns: new[] { "GenresId", "ProductsId" },
                values: new object[,]
                {
                    { 1, 1 },
                    { 1, 2 },
                    { 1, 3 },
                    { 1, 4 },
                    { 3, 2 },
                    { 3, 4 },
                    { 7, 6 },
                    { 8, 5 },
                    { 8, 6 },
                    { 8, 7 },
                    { 8, 8 },
                    { 13, 6 },
                    { 13, 7 },
                    { 18, 5 },
                    { 32, 3 },
                    { 33, 5 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "GenreProduct",
                keyColumns: new[] { "GenresId", "ProductsId" },
                keyValues: new object[] { 1, 1 });

            migrationBuilder.DeleteData(
                table: "GenreProduct",
                keyColumns: new[] { "GenresId", "ProductsId" },
                keyValues: new object[] { 1, 2 });

            migrationBuilder.DeleteData(
                table: "GenreProduct",
                keyColumns: new[] { "GenresId", "ProductsId" },
                keyValues: new object[] { 1, 3 });

            migrationBuilder.DeleteData(
                table: "GenreProduct",
                keyColumns: new[] { "GenresId", "ProductsId" },
                keyValues: new object[] { 1, 4 });

            migrationBuilder.DeleteData(
                table: "GenreProduct",
                keyColumns: new[] { "GenresId", "ProductsId" },
                keyValues: new object[] { 3, 2 });

            migrationBuilder.DeleteData(
                table: "GenreProduct",
                keyColumns: new[] { "GenresId", "ProductsId" },
                keyValues: new object[] { 3, 4 });

            migrationBuilder.DeleteData(
                table: "GenreProduct",
                keyColumns: new[] { "GenresId", "ProductsId" },
                keyValues: new object[] { 7, 6 });

            migrationBuilder.DeleteData(
                table: "GenreProduct",
                keyColumns: new[] { "GenresId", "ProductsId" },
                keyValues: new object[] { 8, 5 });

            migrationBuilder.DeleteData(
                table: "GenreProduct",
                keyColumns: new[] { "GenresId", "ProductsId" },
                keyValues: new object[] { 8, 6 });

            migrationBuilder.DeleteData(
                table: "GenreProduct",
                keyColumns: new[] { "GenresId", "ProductsId" },
                keyValues: new object[] { 8, 7 });

            migrationBuilder.DeleteData(
                table: "GenreProduct",
                keyColumns: new[] { "GenresId", "ProductsId" },
                keyValues: new object[] { 8, 8 });

            migrationBuilder.DeleteData(
                table: "GenreProduct",
                keyColumns: new[] { "GenresId", "ProductsId" },
                keyValues: new object[] { 13, 6 });

            migrationBuilder.DeleteData(
                table: "GenreProduct",
                keyColumns: new[] { "GenresId", "ProductsId" },
                keyValues: new object[] { 13, 7 });

            migrationBuilder.DeleteData(
                table: "GenreProduct",
                keyColumns: new[] { "GenresId", "ProductsId" },
                keyValues: new object[] { 18, 5 });

            migrationBuilder.DeleteData(
                table: "GenreProduct",
                keyColumns: new[] { "GenresId", "ProductsId" },
                keyValues: new object[] { 32, 3 });

            migrationBuilder.DeleteData(
                table: "GenreProduct",
                keyColumns: new[] { "GenresId", "ProductsId" },
                keyValues: new object[] { 33, 5 });
        }
    }
}
