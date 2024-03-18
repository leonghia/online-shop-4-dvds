using System.ComponentModel.DataAnnotations;
using OnlineShop4DVDS.Utils;

namespace OnlineShop4DVDS.Entities;

public class Product
{
    [Key]
    public int Id {get;set;}

    [MaxLength(256)]
    public required string Title {get;set;}

    public required string Thumbnail {get;set;}

    public required string Description {get;set;}

    public int Stock {get;set;} = 200;

    public required GenreType GenreType {get;set;}

    public required decimal Price {get;set;}

    public ICollection<Genre>? Genres {get;set;}
}
