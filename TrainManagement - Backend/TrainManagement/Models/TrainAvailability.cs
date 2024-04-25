using System.ComponentModel.DataAnnotations;

namespace TrainManagement.Models
{
    public class TrainAvailability
    {
        [Required]
        public int AvailabilityID { get; set; }

        [Required]
        public int TrainID { get; set; }

        [Required]
        public DateTime AvailabilityDate { get; set; }

        [Required]
        public int SeatsAvailable { get; set; }
    }
}
