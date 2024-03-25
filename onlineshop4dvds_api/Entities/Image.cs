using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OnlineShop4DVDS.Entities;

public class Image 
{
    [Key]
    public int Id {get;set;}

    public required string Url {get;set;}

    [ForeignKey(nameof(Product))]
    public required int ProductId {get;set;}
    public Product? Product {get;set;}
}