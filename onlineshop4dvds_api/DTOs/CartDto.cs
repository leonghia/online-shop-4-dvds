namespace OnlineShop4DVDS.DTOs;

public class CartDto 
{
    public required int Id {get;set;}
    public required ICollection<CartItemDto> Items {get;set;}
    public required decimal Subtotal {get;set;}
    public required decimal Discount {get;set;} = 0;
    public required decimal ShippingFee {get;set;} = 0;
    public required decimal Total {get;set;}
}
