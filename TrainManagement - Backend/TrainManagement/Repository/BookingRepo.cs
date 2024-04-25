using TrainManagement.Data;
using TrainManagement.Models;

namespace TrainManagement.Repository
{
    public class BookingRepo : IBookingRepo
    {
        private readonly AppDbContext _context;

        public BookingRepo(AppDbContext context)
        {
            _context = context;
        }

        public List<Booking> GetAllBookings()
        {
            return _context.Booking.ToList();
        }

        public Booking GetBookingById(int id)
        {
            return _context.Booking.FirstOrDefault(b => b.BookingID == id);
        }

        public void AddBooking(Booking booking)
        {
            if (booking == null)
            {
                throw new ArgumentNullException(nameof(booking));
            }

            _context.Booking.Add(booking);
            _context.SaveChanges();
        }

        public void UpdateBooking(Booking booking)
        {
            if (booking == null)
            {
                throw new ArgumentNullException(nameof(booking));
            }

            _context.Booking.Update(booking);
            _context.SaveChanges();
        }

        public void DeleteBooking(int id)
        {
            var booking = _context.Booking.Find(id);
            if (booking == null)
            {
                throw new ArgumentNullException(nameof(booking));
            }

            _context.Booking.Remove(booking);
            _context.SaveChanges();
        }
    }
}
