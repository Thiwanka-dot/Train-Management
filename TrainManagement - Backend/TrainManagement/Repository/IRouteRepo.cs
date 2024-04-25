using TrainManagement.Models;

namespace TrainManagement.Repository
{
    public interface IRouteRepo
    {
        List<TrainRoute> GetAllTrainRoutes();
        TrainRoute GetTrainRouteById(int id);
        void AddTrainRoute(TrainRoute trainRoute);
        void UpdateTrainRoute(TrainRoute trainRoute);
        void DeleteTrainRoute(int id);
    }
}
