using Microsoft.AspNetCore.Mvc;
using TrainManagement.Models;
using TrainManagement.Repository;

namespace TrainManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RouteController : ControllerBase
    {
        private readonly IRouteRepo _routeRepo;
        private readonly ILocationRepo _locationRepo;

        public RouteController(IRouteRepo routeRepo, ILocationRepo locationRepo)
        {
            _routeRepo = routeRepo;
            _locationRepo = locationRepo;
        }

        [HttpGet]
        public IActionResult GetAllRoutes()
        {
            var routes = _routeRepo.GetAllTrainRoutes();
            return Ok(routes);
        }

        [HttpGet("{id}")]
        public IActionResult GetRouteById(int id)
        {
            var route = _routeRepo.GetTrainRouteById(id);
            if (route == null)
            {
                return NotFound();
            }
            return Ok(route);
        }

        [HttpPost]
        public IActionResult AddRoute([FromBody] TrainRoute route)
        {
            if (route == null)
            {
                return BadRequest();
            }

            _routeRepo.AddTrainRoute(route);
            return CreatedAtAction(nameof(GetRouteById), new { id = route.RouteID }, route);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateRoute(int id, [FromBody] TrainRoute updatedRoute)
        {
            if (updatedRoute == null || id != updatedRoute.RouteID)
            {
                return BadRequest();
            }

            var existingRoute = _routeRepo.GetTrainRouteById(id);
            if (existingRoute == null)
            {
                return NotFound();
            }

            var departureLocation = _locationRepo.GetLocationByName(updatedRoute.DepartureLocationName);
            if (departureLocation == null)
            {
                return BadRequest("Departure location not found.");
            }

            var arrivalLocation = _locationRepo.GetLocationByName(updatedRoute.ArrivalLocationName);
            if (arrivalLocation == null)
            {
                return BadRequest("Arrival location not found.");
            }

            existingRoute.TrainID = updatedRoute.TrainID;
            existingRoute.DepartureLocationName = departureLocation.LocationName;
            existingRoute.ArrivalLocationName = arrivalLocation.LocationName;
            existingRoute.Distance = updatedRoute.Distance;
            existingRoute.TimeTaken = updatedRoute.TimeTaken;
            existingRoute.RouteStatus = updatedRoute.RouteStatus;

            _routeRepo.UpdateTrainRoute(existingRoute);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteRoute(int id)
        {
            var existingRoute = _routeRepo.GetTrainRouteById(id);
            if (existingRoute == null)
            {
                return NotFound();
            }

            _routeRepo.DeleteTrainRoute(id);

            return NoContent();
        }
    }
}