import axios from 'axios';

const BASE_URL = 'https://localhost:7040/api/Booking';

const BookingService = {
  getAllBookings: async () => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching bookings:', error);
      throw error;
    }
  },

  addBooking: async (booking) => {
    try {
      const response = await axios.post(BASE_URL, booking);
      return response.data;
    } catch (error) {
      console.error('Error adding booking:', error);
      throw error;
    }
  },

  getBookingById: async (bookingId) => {
    try {
      const response = await axios.get(`${BASE_URL}/${bookingId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching booking by ID:', error);
      throw error;
    }
  },

  updateBooking: async (bookingId, updatedBooking) => {
    try {
      const response = await axios.put(`${BASE_URL}/${bookingId}`, updatedBooking);
      return response.data;
    } catch (error) {
      console.error('Error updating booking:', error);
      throw error;
    }
  },

  deleteBooking: async (bookingId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${bookingId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting booking:', error);
      throw error;
    }
  }
};

export default BookingService;
