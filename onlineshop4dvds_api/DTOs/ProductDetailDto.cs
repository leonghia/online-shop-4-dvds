namespace OnlineShop4DVDS.DTOs;

public class ProductDetailDto
{
    public required int Id { get; set; }
    public required string Title { get; set; }
    public required decimal Price { get; set; }
    public required string Description { get; set; }
    public required ICollection<string> Genres { get; set; }
    public required double Ratings { get; set; }
    public required int NumbersOfReviews { get; set; }
    public required int Stock { get; set; }
    public required ICollection<string> Images {get;set;}
}
