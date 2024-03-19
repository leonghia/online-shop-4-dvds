namespace OnlineShop4DVDS.DTOs;

public class ProductDto
{
    public required int Id { get; set; }
    public required string Title { get; set; }
    public required decimal Price { get; set; }
    public required string ThumbnailUrl { get; set; }
    public required string Description { get; set; }
    public required ICollection<string> Genres { get; set; }
}
