using System.ComponentModel.DataAnnotations;

namespace OnlineShop4DVDS.Entities;

public class User
{
    [Key]
    public int Id {get;set;}

    public required string Sub {get;set;}

    public required string FullName {get;set;}

    public required string Username {get;set;}

    public required string Avatar {get;set;}

}
