using TrainManagement.Data;
using TrainManagement.Models;
using Microsoft.EntityFrameworkCore;

namespace TrainManagement.Repository
{
    public class TrainRepo : ITrainRepo
    {
        private readonly AppDbContext _context;
        public TrainRepo(AppDbContext context)
        {
            _context = context;
        }

        public List<Train> GetAllTrains()
        {
            return _context.Trains.ToList();
        }

        public Train GetTrainById(int id)
        {
            return _context.Trains.FirstOrDefault(t => t.TrainID == id);
        }

        public void AddTrain(Train train)
        {
            if (train == null)
            {
                throw new ArgumentNullException(nameof(train));
            }

            _context.Trains.Add(train);
            _context.SaveChanges();
        }

        public void UpdateTrain(Train train)
        {
            if (train == null)
            {
                throw new ArgumentNullException(nameof(train));
            }

            _context.Entry(train).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void DeleteTrain(int id)
        {
            var train = _context.Trains.Find(id);
            if (train == null)
            {
                throw new ArgumentNullException(nameof(train));
            }

            _context.Trains.Remove(train);
            _context.SaveChanges();
        }
    }
}
