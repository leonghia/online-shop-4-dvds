namespace OnlineShop4DVDS.DTOs;

public class OrderItemCreateDto
{
    public required int ProductId {get;set;}
    public required int Quantity {get;set;}
}