import React, { useEffect, useState } from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';
import Navigation from '../../Navigation';
import BookingService from '../../../services/BookingService';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const bookingData = await BookingService.getAllBookings();
      setBookings(bookingData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      setError('Error fetching bookings');
      setLoading(false);
    }
  };

  const handleDeleteBooking = async (bookingID) => {
    try {
      await BookingService.deleteBooking(bookingID);
      setBookings(bookings.filter(booking => booking.bookingID !== bookingID));
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  const calculateTotalPrice = (numberOfSeats) => {
    return numberOfSeats * 200;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Navigation />
      <br />
      <Container>
        <h1 className='text-center'>Booking List</h1>
        <ListGroup>
          {bookings.map(booking => (
            <ListGroup.Item key={booking.bookingID}>
              <strong>Booking Date:</strong> {booking.bookingDate}<br />
              <strong>NIC Number:</strong> {booking.nicNumber}<br />
              <strong>Number of Seats:</strong> {booking.numberOfSeats}<br />
              <strong>Total Price:</strong> {calculateTotalPrice(booking.numberOfSeats)} rupees<br />
              <Button variant="danger" onClick={() => handleDeleteBooking(booking.bookingID)}>Delete</Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </>
  );
};

export default BookingList;
