using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using OnlineShop4DVDS.Utils;

namespace OnlineShop4DVDS.Entities;

public class Order
{
    [Key]
    public int Id {get;set;}

    public DateTime CreatedAt {get;set;} = DateTime.UtcNow;

    public required string OrderId {get;set;}

    public required OrderStatus Status {get;set;}

    public required decimal Subtotal {get;set;}
    public required decimal ShippingFee {get;set;}
    public decimal? Discount {get;set;}

    [ForeignKey(nameof(User))]
    public required int UserId {get;set;}
    public User? User {get;set;}

    public ICollection<Product>? Products {get;set;}
    public ICollection<OrderProduct>? OrderProducts {get;set;}

    public required PaymentMethod PaymentMethod {get;set;}
}