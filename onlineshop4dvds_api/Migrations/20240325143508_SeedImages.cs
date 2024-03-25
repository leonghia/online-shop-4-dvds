using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace OnlineShop4DVDS.Migrations
{
    /// <inheritdoc />
    public partial class SeedImages : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Images",
                columns: new[] { "Id", "ProductId", "Url" },
                values: new object[,]
                {
                    { 1, 1, "https://m.media-amazon.com/images/I/81AX0dnSu7L._SL1500_.jpg" },
                    { 2, 1, "https://m.media-amazon.com/images/I/816hqp2ZgJL._SL1500_.jpg" },
                    { 3, 4, "https://m.media-amazon.com/images/I/51P1vjcdBqL.jpg" },
                    { 4, 4, "https://m.media-amazon.com/images/I/31UacIGbCqL.jpg" },
                    { 5, 5, "https://m.media-amazon.com/images/M/MV5BMTgwNzg3MDkxM15BMl5BanBnXkFtZTcwMzA2MDAxMw@@._V1_FMjpg_UX2048_.jpg" },
                    { 6, 5, "https://m.media-amazon.com/images/M/MV5BMTc4NTA1OTE4Nl5BMl5BanBnXkFtZTcwODA2MDAxMw@@._V1_FMjpg_UX2048_.jpg" },
                    { 7, 5, "https://m.media-amazon.com/images/M/MV5BMTYxNDExMDI3NV5BMl5BanBnXkFtZTcwMDY2MDAxMw@@._V1_FMjpg_UX2048_.jpg" },
                    { 8, 6, "https://m.media-amazon.com/images/M/MV5BOTAxNzI0NDE1NF5BMl5BanBnXkFtZTcwNjczMTk2Mw@@._V1_FMjpg_UX2048_.jpg" },
                    { 9, 6, "https://m.media-amazon.com/images/M/MV5BMjE3NTU0NTQ5NF5BMl5BanBnXkFtZTcwNzczMTk2Mw@@._V1_FMjpg_UX2048_.jpg" },
                    { 10, 6, "https://m.media-amazon.com/images/M/MV5BMjA5ODU3NTI0Ml5BMl5BanBnXkFtZTcwODczMTk2Mw@@._V1_FMjpg_UX2048_.jpg" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 10);
        }
    }
}
