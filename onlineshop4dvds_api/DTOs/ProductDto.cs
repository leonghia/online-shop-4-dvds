namespace OnlineShop4DVDS.DTOs;

public class ProductDto
{
    public required int Id { get; set; }
    public required string Title { get; set; }
    public required decimal Price { get; set; }
    public required string ThumbnailUrl { get; set; }
    public string? Description { get; set; }
    public required ICollection<string> Genres { get; set; }
    public required decimal? Ratings { get; set; }
    public required int NumbersOfReviews { get; set; }
    public required string Type { get; set; }
}
