using OnlineShop4DVDS.Utils;

namespace OnlineShop4DVDS.DTOs;

public class OrderCreateDto
{
    public required string UserSub {get;set;}
    public required string OrderId {get;set;}
    public required decimal ShippingFee {get;set;}
    public required decimal Discount {get;set;}
    public required PaymentMethod PaymentMethod {get;set;}
    public required ICollection<OrderItemCreateDto> Items {get;set;}
}
