namespace OnlineShop4DVDS.DTOs;

public class OrderItemDto
{
    public required string Title {get;set;}
    public required decimal Price {get;set;}
    public required int Quantity {get;set;}
    public required string ThumbnailUrl {get;set;}
    public required string Type {get;set;}
    public required int ProductId {get;set;}
}