using System.ComponentModel.DataAnnotations;
using OnlineShop4DVDS.Utils;

namespace OnlineShop4DVDS.Entities;

public class Genre
{
    [Key]
    public int Id {get;set;}

    [MaxLength(64)]
    public required string Name {get;set;}

    public required GenreType GenreType {get;set;}

    public ICollection<Product>? Products {get;set;}
}
