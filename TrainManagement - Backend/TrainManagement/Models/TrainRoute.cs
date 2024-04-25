using System.ComponentModel.DataAnnotations;

namespace TrainManagement.Models
{
    public class TrainRoute
    {
        public int RouteID { get; set; }

        [Required]
        public int TrainID { get; set; }

        [Required]
        public string DepartureLocationName { get; set; }

        [Required]
        public string ArrivalLocationName { get; set; }

        [Required]
        public float Distance { get; set; }

        [Required]
        public int TimeTaken { get; set; }

        [Required]
        public string RouteStatus { get; set; }
    }
}
