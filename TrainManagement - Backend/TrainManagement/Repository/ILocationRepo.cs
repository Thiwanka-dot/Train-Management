using TrainManagement.Models;

namespace TrainManagement.Repository
{
    public interface ILocationRepo
    {
        List<Location> GetAllLocations();
        Location GetLocationById(int id);
        void AddLocation(Location location);
        void UpdateLocation(Location location);
        void DeleteLocation(int id);
        Location GetLocationByName(string name);
    }
}
