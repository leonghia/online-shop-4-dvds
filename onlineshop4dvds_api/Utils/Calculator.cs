namespace OnlineShop4DVDS.Utils;

using OnlineShop4DVDS.Entities;

public static class Calculator
{
    public static decimal CalculateSubtotal(List<CartProduct> cartProducts)
    {
        return cartProducts.Sum(cp => cp.Quantity * cp.Product!.Price);
    }
}