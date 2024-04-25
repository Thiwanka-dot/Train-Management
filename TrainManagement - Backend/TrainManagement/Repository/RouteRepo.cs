using Microsoft.EntityFrameworkCore;
using TrainManagement.Data;
using TrainManagement.Models;

namespace TrainManagement.Repository
{
    public class RouteRepo : IRouteRepo
    {
        private readonly AppDbContext _context;
        private readonly ILocationRepo _locationRepo;

        public RouteRepo(AppDbContext context, ILocationRepo locationRepo)
        {
            _context = context;
            _locationRepo = locationRepo;
        }

        public List<TrainRoute> GetAllTrainRoutes()
        {
            return _context.TrainRoutes.ToList();
        }

        public TrainRoute GetTrainRouteById(int id)
        {
            return _context.TrainRoutes.FirstOrDefault(r => r.TrainID == id);
        }

        public void AddTrainRoute(TrainRoute trainRoute)
        {
            if (trainRoute == null)
            {
                throw new ArgumentNullException(nameof(trainRoute));
            }

            var departureLocation = _locationRepo.GetLocationByName(trainRoute.DepartureLocationName);
            var arrivalLocation = _locationRepo.GetLocationByName(trainRoute.ArrivalLocationName);

            if (departureLocation == null || arrivalLocation == null)
            {
                throw new ArgumentException("One or more locations not found.");
            }

            trainRoute.DepartureLocationName = departureLocation.LocationName;
            trainRoute.ArrivalLocationName = arrivalLocation.LocationName;

            _context.TrainRoutes.Add(trainRoute);
            _context.SaveChanges();
        }

        public void UpdateTrainRoute(TrainRoute trainRoute)
        {
            if (trainRoute == null)
            {
                throw new ArgumentNullException(nameof(trainRoute));
            }

            var departureLocation = _locationRepo.GetLocationByName(trainRoute.DepartureLocationName);
            var arrivalLocation = _locationRepo.GetLocationByName(trainRoute.ArrivalLocationName);

            if (departureLocation == null || arrivalLocation == null)
            {
                throw new ArgumentException("One or more locations not found.");
            }

            trainRoute.DepartureLocationName = departureLocation.LocationName;
            trainRoute.ArrivalLocationName = arrivalLocation.LocationName;

            _context.Entry(trainRoute).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void DeleteTrainRoute(int id)
        {
            var trainRoute = _context.TrainRoutes.Find(id);
            if (trainRoute == null)
            {
                throw new ArgumentNullException(nameof(trainRoute));
            }

            _context.TrainRoutes.Remove(trainRoute);
            _context.SaveChanges();
        }
    }
}
