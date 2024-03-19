namespace OnlineShop4DVDS.DTOs;

public class CartDto 
{
    public required int Id {get;set;}
    public required CartItemDto[] Items {get;set;}
    public required decimal Subtotal {get;set;}
    public required decimal Discount {get;set;}
    public required decimal Total {get;set;}
}
