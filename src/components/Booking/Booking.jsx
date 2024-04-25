import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import TrainService from '../../services/TrainService';
import TrainRouteService from '../../services/TrainRouteService';
import TrainAvailabilityService from '../../services/TrainAvailabilityService';
import BookingService from '../../services/BookingService';

const Booking = () => {
  const { trainID } = useParams();
  const navigate = useNavigate();
  const [trainDetails, setTrainDetails] = useState(null);
  const [bookingDate, setBookingDate] = useState('');
  const [nicNumber, setNicNumber] = useState('');
  const [numberOfSeats, setNumberOfSeats] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrainDetails = async () => {
      try {
        console.log('Fetching train details for trainID:', trainID);

        const train = await TrainService.getTrainById(trainID);
        console.log('Train details:', train);

        const route = await TrainRouteService.getRouteById(trainID);
        console.log('Route details:', route);

        const availability = await TrainAvailabilityService.getAvailabilityById(trainID);
        console.log('Availability details:', availability);

        const completeTrainDetails = {
          trainID: trainID,
          trainName: train ? train.trainName : 'Unknown',
          DepartureLocation: route ? route.departureLocationName : 'Unknown',
          ArrivalLocation: route ? route.arrivalLocationName : 'Unknown',
          Distance: route ? route.distance : 'Unknown',
          TimeTaken: route ? route.timeTaken : 'Unknown',
          RouteStatus: route ? route.routeStatus : 'Unknown',
          SeatsAvailable: availability ? availability.seatsAvailable : 'Unknown'
        };

        console.log('Complete train details:', completeTrainDetails);

        setTrainDetails(completeTrainDetails);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching train details:', error);
        setError('Error fetching train details');
        setLoading(false);
      }
    };

    fetchTrainDetails();
  }, [trainID]);

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    const totalPrice = numberOfSeats * 200;
    const confirmation = window.confirm(`Total Price: ${totalPrice} rupees.\n\nAre you sure you want to submit the booking?`);
    if (confirmation) {
      try {
        const bookingData = {
          trainID,
          bookingDate,
          nicNumber,
          numberOfSeats
        };
  
        await BookingService.addBooking(bookingData);
        console.log('Booking submitted:', bookingData);
        setBookingDate('');
        setNicNumber('');
        setNumberOfSeats(1);
        navigate('/');
  
      } catch (error) {
        console.error('Error submitting booking:', error);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mycon">
      <h1>Booking Details</h1>
      {trainDetails && (
        <div>
          <h3>Selected Train Details</h3>
          <p>Train Name: <strong>{trainDetails.trainName}</strong></p>
          <p>Departure Location: <strong>{trainDetails.DepartureLocation}</strong></p>
          <p>Arrival Location: <strong>{trainDetails.ArrivalLocation}</strong></p>
          <p>Distance: <strong>{trainDetails.Distance}km</strong></p>
          <p>Time Taken: <strong>{trainDetails.TimeTaken}hr(s)</strong></p>
          <p>Route Status: <strong>{trainDetails.RouteStatus}</strong></p>
          <p>Seats Available: <strong>{trainDetails.SeatsAvailable}</strong></p>
          <br></br>
          <h3>Enter Booking Details</h3>
          <Form onSubmit={handleBookingSubmit}>
            <input type="hidden" name="trainID" value={trainDetails.trainID} />
            <Form.Group className="mb-3" controlId="bookingDate">
              <Form.Label>Booking Date</Form.Label>
              <Form.Control type="date" value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="nicNumber">
              <Form.Label>NIC Number</Form.Label>
              <Form.Control type="text" value={nicNumber} onChange={(e) => setNicNumber(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="numberOfSeats">
              <Form.Label>Number of Seats (Max. 5)</Form.Label>
              <Form.Control type="number" value={numberOfSeats} min="1" max="5" onChange={(e) => setNumberOfSeats(parseInt(e.target.value))} required />
            </Form.Group>
            <Button type="submit" variant="primary">Submit Booking</Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default Booking;
