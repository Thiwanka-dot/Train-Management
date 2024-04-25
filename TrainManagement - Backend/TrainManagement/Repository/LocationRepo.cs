using TrainManagement.Data;
using TrainManagement.Models;

namespace TrainManagement.Repository
{
    public class LocationRepo : ILocationRepo
    {
        private readonly AppDbContext _context;

        public LocationRepo(AppDbContext context)
        {
            _context = context;
        }

        public List<Location> GetAllLocations()
        {
            return _context.Locations.ToList();
        }

        public Location GetLocationById(int id)
        {
            return _context.Locations.FirstOrDefault(l => l.LocationID == id);
        }

        public Location GetLocationByName(string name)
        {
            return _context.Locations.FirstOrDefault(l => l.LocationName == name);
        }

        public void AddLocation(Location location)
        {
            if (location == null)
            {
                throw new ArgumentNullException(nameof(location));
            }

            _context.Locations.Add(location);
            _context.SaveChanges();
        }

        public void UpdateLocation(Location location)
        {
            if (location == null)
            {
                throw new ArgumentNullException(nameof(location));
            }

            _context.Locations.Update(location);
            _context.SaveChanges();
        }

        public void DeleteLocation(int id)
        {
            var location = _context.Locations.Find(id);
            if (location == null)
            {
                throw new ArgumentNullException(nameof(location));
            }

            _context.Locations.Remove(location);
            _context.SaveChanges();
        }
    }
}
