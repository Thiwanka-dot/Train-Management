using System.ComponentModel.DataAnnotations;

namespace TrainManagement.Models
{
    public class Train
    {
        public int TrainID { get; set; }

        [Required]
        public string TrainName { get; set; }
    }
}
