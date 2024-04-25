using TrainManagement.Models;

namespace TrainManagement.Repository
{
    public interface IAvailabilityRepo
    {
        List<TrainAvailability> GetAllTrainAvailabilities();
        TrainAvailability GetTrainAvailabilityById(int id);
        void AddTrainAvailability(TrainAvailability trainAvailability);
        void UpdateTrainAvailability(TrainAvailability trainAvailability);
        void DeleteTrainAvailability(int id);
    }
}
