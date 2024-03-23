using OnlineShop4DVDS.Utils;

namespace OnlineShop4DVDS.DTOs;

public class OrderDto
{
    public required int Id {get;set;}
    public required DateTime CreatedAt {get;set;}
    public required string OrderId {get;set;}
    public required OrderStatus Status {get;set;}
    public required decimal Subtotal {get;set;}
    public required decimal ShippingFee {get;set;}
    public required decimal Discount {get;set;}
    public required string PaymentMethod {get;set;}
    public required ICollection<OrderItemDto> Items {get;set;}
}