using Microsoft.AspNetCore.Mvc;
using TrainManagement.Models;
using TrainManagement.Repository;

namespace TrainManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrainAvailabilityController : ControllerBase
    {
        private readonly IAvailabilityRepo _availability;

        public TrainAvailabilityController(IAvailabilityRepo availability)
        {
            _availability = availability;
        }

        [HttpGet]
        public IActionResult GetAllTrainAvailabilities()
        {
            var trainAvailabilities = _availability.GetAllTrainAvailabilities();
            return Ok(trainAvailabilities);
        }

        [HttpGet("{id}")]
        public IActionResult GetTrainAvailabilityById(int id)
        {
            var trainAvailability = _availability.GetTrainAvailabilityById(id);
            if (trainAvailability == null)
            {
                return NotFound();
            }
            return Ok(trainAvailability);
        }

        [HttpPost]
        public IActionResult AddTrainAvailability([FromBody] TrainAvailability trainAvailability)
        {
            if (trainAvailability == null)
            {
                return BadRequest();
            }

            _availability.AddTrainAvailability(trainAvailability);
            return CreatedAtAction(nameof(GetTrainAvailabilityById), new { id = trainAvailability.AvailabilityID }, trainAvailability);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateTrainAvailability(int id, [FromBody] TrainAvailability updatedTrainAvailability)
        {
            if (updatedTrainAvailability == null)
            {
                return BadRequest();
            }

            var existingTrainAvailability = _availability.GetTrainAvailabilityById(id);
            if (existingTrainAvailability == null)
            {
                return NotFound();
            }

            existingTrainAvailability.AvailabilityDate = updatedTrainAvailability.AvailabilityDate;
            existingTrainAvailability.SeatsAvailable = updatedTrainAvailability.SeatsAvailable;

            _availability.UpdateTrainAvailability(existingTrainAvailability);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTrainAvailability(int id)
        {
            var existingTrainAvailability = _availability.GetTrainAvailabilityById(id);
            if (existingTrainAvailability == null)
            {
                return NotFound();
            }

            _availability.DeleteTrainAvailability(id);

            return NoContent();
        }
    }
}
