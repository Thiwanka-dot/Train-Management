using System.ComponentModel.DataAnnotations;

namespace TrainManagement.Models
{
    public class Location
    {
        public int LocationID { get; set; }

        [Required]
        public string LocationName { get; set; }
    }
}
