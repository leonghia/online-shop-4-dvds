using System.Runtime.CompilerServices;

namespace OnlineShop4DVDS.Utils;

public enum GenreType
{
    Music,
    Movie,
    Game
}

public static class GenreTypeExtensions 
{
    public static string ToStringType(this GenreType genreType)
    {
        return genreType switch
        {
            GenreType.Music => "Album",
            GenreType.Game => "Game",
            GenreType.Movie => "Movie",
            _ => throw new SwitchExpressionException(genreType)
        };
    }
}
