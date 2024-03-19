using OnlineShop4DVDS.Utils;

namespace OnlineShop4DVDS.DTOs;

public class GenreCreateDto
{

    public required GenreType Type { get; set; }
    public required string Name { get; set; }
}
