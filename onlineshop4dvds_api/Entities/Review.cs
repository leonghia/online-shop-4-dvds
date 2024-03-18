using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OnlineShop4DVDS.Entities;

public class Review
{
    [Key]
    public int Id {get;set;}

    public string? Content {get;set;}

    public required byte Ratings {get;set;}

    [ForeignKey(nameof(User))]
    public required int UserId {get;set;}
    public User? User {get;set;}

    public DateTime CreatedAt {get;set;} = DateTime.UtcNow;

    [ForeignKey(nameof(Product))]
    public required int ProductId {get;set;}
    public Product? Product {get;set;}
}
