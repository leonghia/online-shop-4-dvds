using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OnlineShop4DVDS.Entities;

public class Song
{
    [Key]
    public int Id {get;set;}

    public required string Title {get;set;}

    public required string Artist {get;set;}

    [ForeignKey(nameof(Product))]
    public required int ProductId {get;set;}
    public Product? Product {get;set;}

    public required int Lengths {get;set;}

    public string? PreviewUrl {get;set;}
}