using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OnlineShop4DVDS.Entities;

public class Album
{
    [Key]
    [ForeignKey(nameof(Product))]
    public required int ProductId {get;set;}
    public Product? Product {get;set;}

    [MaxLength(128)]
    public required string AlbumId {get;set;}
}