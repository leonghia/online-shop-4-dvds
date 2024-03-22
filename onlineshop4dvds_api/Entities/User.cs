using System.ComponentModel.DataAnnotations;

namespace OnlineShop4DVDS.Entities;

public class User
{
    [Key]
    public int Id {get;set;}

    public required string Sub {get;set;}

    public ICollection<Order>? Orders {get;set;}
}
