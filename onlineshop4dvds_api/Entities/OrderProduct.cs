namespace OnlineShop4DVDS.Entities;

public class OrderProduct
{
    public required int OrderId { get; set; }
    public required int ProductId {get;set;}
    public required int Quantity {get;set;}
    public Product? Product {get;set;}
}