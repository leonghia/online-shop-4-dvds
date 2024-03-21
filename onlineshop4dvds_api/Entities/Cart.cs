using System.Collections;
using System.ComponentModel.DataAnnotations;

namespace OnlineShop4DVDS.Entities;

public class Cart
{
    [Key]
    public int Id {get;set;}

    public ICollection<Product> Products {get;set;} = [];
    public ICollection<CartProduct> CartProducts { get; set; } = [];
}
