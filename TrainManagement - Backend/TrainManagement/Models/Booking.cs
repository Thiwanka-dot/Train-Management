using System.ComponentModel.DataAnnotations;

namespace TrainManagement.Models
{
    public class Booking
    {
        public int BookingID { get; set; }

        [Required]
        public int TrainID { get; set; }

        [Required]
        public string NICNumber { get; set; }

        [Required]
        public DateTime BookingDate { get; set; }

        [Required]
        public int NumberOfSeats { get; set; }
    }
}
