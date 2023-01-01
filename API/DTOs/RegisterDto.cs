using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
  public class RegisterDto
  {
    [Required]
    public string Username { get; set; }
    [Required]
    [StringLength(12, MinimumLength = 7)]
    public string Password { get; set; }
  }
}