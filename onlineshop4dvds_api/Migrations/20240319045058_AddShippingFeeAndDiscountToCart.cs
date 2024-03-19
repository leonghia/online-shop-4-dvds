using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OnlineShop4DVDS.Migrations
{
    /// <inheritdoc />
    public partial class AddShippingFeeAndDiscountToCart : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "Discount",
                table: "Carts",
                type: "numeric",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "ShippingFee",
                table: "Carts",
                type: "numeric",
                nullable: false,
                defaultValue: 0m);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Discount",
                table: "Carts");

            migrationBuilder.DropColumn(
                name: "ShippingFee",
                table: "Carts");
        }
    }
}
