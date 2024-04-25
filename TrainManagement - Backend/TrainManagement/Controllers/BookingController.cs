using Microsoft.AspNetCore.Mvc;
using TrainManagement.Models;
using TrainManagement.Repository;

namespace TrainManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        private readonly IBookingRepo _bookingRepo;

        public BookingController(IBookingRepo bookingRepo)
        {
            _bookingRepo = bookingRepo;
        }

        [HttpGet]
        public IActionResult GetAllBookings()
        {
            var bookings = _bookingRepo.GetAllBookings();
            return Ok(bookings);
        }

        [HttpGet("{id}")]
        public IActionResult GetBookingById(int id)
        {
            var booking = _bookingRepo.GetBookingById(id);
            if (booking == null)
            {
                return NotFound();
            }
            return Ok(booking);
        }

        [HttpPost]
        public IActionResult AddBooking([FromBody] Booking booking)
        {
            if (booking == null)
            {
                return BadRequest();
            }

            _bookingRepo.AddBooking(booking);
            return CreatedAtAction(nameof(GetBookingById), new { id = booking.BookingID }, booking);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateBooking(int id, [FromBody] Booking updatedBooking)
        {
            if (updatedBooking == null)
            {
                return BadRequest();
            }

            var existingBooking = _bookingRepo.GetBookingById(id);
            if (existingBooking == null)
            {
                return NotFound();
            }

            _bookingRepo.UpdateBooking(existingBooking);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteBooking(int id)
        {
            var existingBooking = _bookingRepo.GetBookingById(id);
            if (existingBooking == null)
            {
                return NotFound();
            }

            _bookingRepo.DeleteBooking(id);

            return NoContent();
        }
    }
}
