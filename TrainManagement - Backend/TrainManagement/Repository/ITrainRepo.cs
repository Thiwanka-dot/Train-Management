using TrainManagement.Models;

namespace TrainManagement.Repository
{
    public interface ITrainRepo
    {
        List<Train> GetAllTrains();
        Train GetTrainById(int id);
        void AddTrain(Train train);
        void UpdateTrain(Train train);
        void DeleteTrain(int id);
    }
}
