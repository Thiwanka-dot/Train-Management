using Microsoft.AspNetCore.Mvc;
using TrainManagement.Models;
using TrainManagement.Repository;

namespace TrainManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationController : ControllerBase
    {
        private readonly ILocationRepo _locationRepo;

        public LocationController(ILocationRepo locationRepo)
        {
            _locationRepo = locationRepo;
        }

        [HttpGet]
        public IActionResult GetAllLocations()
        {
            var locations = _locationRepo.GetAllLocations();
            return Ok(locations);
        }

        [HttpGet("{id}")]
        public IActionResult GetLocationById(int id)
        {
            var location = _locationRepo.GetLocationById(id);
            if (location == null)
            {
                return NotFound();
            }
            return Ok(location);
        }

        [HttpGet("name/{name}")]
        public IActionResult GetLocationByName(string name)
        {
            var location = _locationRepo.GetLocationByName(name);
            if (location == null)
            {
                return NotFound();
            }
            return Ok(location);
        }

        [HttpPost]
        public IActionResult AddLocation([FromBody] Location location)
        {
            if (location == null)
            {
                return BadRequest();
            }

            _locationRepo.AddLocation(location);
            return CreatedAtAction(nameof(GetLocationById), new { id = location.LocationID }, location);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateLocation(int id, [FromBody] Location updatedLocation)
        {
            if (updatedLocation == null)
            {
                return BadRequest();
            }

            var existingLocation = _locationRepo.GetLocationById(id);
            if (existingLocation == null)
            {
                return NotFound();
            }

            existingLocation.LocationName = updatedLocation.LocationName;

            _locationRepo.UpdateLocation(existingLocation);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteLocation(int id)
        {
            var existingLocation = _locationRepo.GetLocationById(id);
            if (existingLocation == null)
            {
                return NotFound();
            }

            _locationRepo.DeleteLocation(id);

            return NoContent();
        }
    }
}
