namespace OnlineShop4DVDS.Entities;

public class CartProduct
{
    public required int CartId {get;set;}
    public required int ProductId {get;set;}
    public required int Quantity {get;set;}
    public Product? Product {get;set;}
}