using System.ComponentModel.DataAnnotations;

namespace TrainManagement.Models
{
    public class Admin
    {
        public int AdminID { get; set; }

        [Required]
        public string AdminName { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
