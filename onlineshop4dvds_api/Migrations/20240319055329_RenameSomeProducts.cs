using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OnlineShop4DVDS.Migrations
{
    /// <inheritdoc />
    public partial class RenameSomeProducts : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 12,
                columns: new[] { "Thumbnail", "Title" },
                values: new object[] { "https://i.ibb.co/7YMCJ7p/cod-modern-warfare-dvd.png", "Call of Duty: Modern Warfare (PS4)" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 12,
                columns: new[] { "Thumbnail", "Title" },
                values: new object[] { "https://i.ibb.co/7YMCJ7p/cod-modern-warfare-dvd.png (PS4)", "Call of Duty: Modern Warfare" });
        }
    }
}
