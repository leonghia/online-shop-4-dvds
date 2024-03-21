namespace OnlineShop4DVDS.DTOs;

public class CartDto 
{
    public required int Id {get;set;}
    public required ICollection<CartItemDto> Items {get;set;}
    public required decimal Subtotal {get;set;}
}
