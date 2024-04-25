using Microsoft.AspNetCore.Mvc;
using TrainManagement.Models;
using TrainManagement.Repository;

namespace TrainManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrainController : ControllerBase
    {
        private readonly ITrainRepo _trainRepo;

        public TrainController(ITrainRepo trainRepo)
        {
            _trainRepo = trainRepo;
        }

        [HttpGet]
        public IActionResult GetAllTrains()
        {
            var trains = _trainRepo.GetAllTrains();
            return Ok(trains);
        }

        [HttpGet("{id}")]
        public IActionResult GetTrainById(int id)
        {
            var train = _trainRepo.GetTrainById(id);
            if (train == null)
            {
                return NotFound();
            }
            return Ok(train);
        }

        [HttpPost]
        public IActionResult AddTrain([FromBody] Train train)
        {
            if (train == null)
            {
                return BadRequest();
            }

            _trainRepo.AddTrain(train);
            return CreatedAtAction(nameof(GetTrainById), new { id = train.TrainID }, train);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateTrain(int id, [FromBody] Train updatedTrain)
        {
            if (updatedTrain == null)
            {
                return BadRequest();
            }

            var existingTrain = _trainRepo.GetTrainById(id);
            if (existingTrain == null)
            {
                return NotFound();
            }

            existingTrain.TrainName = updatedTrain.TrainName;

            _trainRepo.UpdateTrain(existingTrain);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTrain(int id)
        {
            var existingTrain = _trainRepo.GetTrainById(id);
            if (existingTrain == null)
            {
                return NotFound();
            }

            _trainRepo.DeleteTrain(id);

            return NoContent();
        }
    }
}
