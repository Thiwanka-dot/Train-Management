using TrainManagement.Models;

namespace TrainManagement.Repository
{
    public interface IBookingRepo
    {
        List<Booking> GetAllBookings();
        Booking GetBookingById(int id);
        void AddBooking(Booking booking);
        void UpdateBooking(Booking booking);
        void DeleteBooking(int id);
    }
}
