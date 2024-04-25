using TrainManagement.Data;
using TrainManagement.Models;

namespace TrainManagement.Repository
{
    public class AvailabilityRepo : IAvailabilityRepo
    {
        private readonly AppDbContext _context;

        public AvailabilityRepo(AppDbContext context)
        {
            _context = context;
        }

        public List<TrainAvailability> GetAllTrainAvailabilities()
        {
            return _context.TrainAvailability.ToList();
        }

        public TrainAvailability GetTrainAvailabilityById(int id)
        {
            return _context.TrainAvailability.FirstOrDefault(ta => ta.TrainID == id);
        }

        public void AddTrainAvailability(TrainAvailability trainAvailability)
        {
            if (trainAvailability == null)
            {
                throw new ArgumentNullException(nameof(trainAvailability));
            }

            _context.TrainAvailability.Add(trainAvailability);
            _context.SaveChanges();
        }

        public void UpdateTrainAvailability(TrainAvailability trainAvailability)
        {
            if (trainAvailability == null)
            {
                throw new ArgumentNullException(nameof(trainAvailability));
            }

            _context.TrainAvailability.Update(trainAvailability);
            _context.SaveChanges();
        }

        public void DeleteTrainAvailability(int id)
        {
            var trainAvailability = _context.TrainAvailability.Find(id);
            if (trainAvailability == null)
            {
                throw new ArgumentNullException(nameof(trainAvailability));
            }

            _context.TrainAvailability.Remove(trainAvailability);
            _context.SaveChanges();
        }
    }
}
