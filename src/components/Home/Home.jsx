import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Form } from 'react-bootstrap';
import TrainService from '../../services/TrainService';
import TrainAvailabilityService from '../../services/TrainAvailabilityService';
import TrainRouteService from '../../services/TrainRouteService';

const Home = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    departure: '',
    arrival: ''
  });
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchTrainDetails();
  }, []);

  const fetchTrainDetails = async () => {
    try {
      const trains = await TrainService.getAllTrains();
      const availabilities = await TrainAvailabilityService.getAllAvailabilities();
      const routes = await TrainRouteService.getAllRoutes();

      const completeTrainDetails = trains.map(train => {
        const route = routes.find(route => route.trainID === train.trainID);
        const availability = availabilities.find(availability => availability.trainID === train.trainID);

        return {
          ...train,
          DepartureLocation: route ? route.departureLocationName : 'Unknown',
          ArrivalLocation: route ? route.arrivalLocationName : 'Unknown',
          Distance: route ? route.distance : 'Unknown',
          TimeTaken: route ? route.timeTaken : 'Unknown',
          RouteStatus: route ? route.routeStatus : 'Unknown',
          SeatsAvailable: availability ? availability.seatsAvailable : 'Unknown'
        };
      });

      setSearchResults(completeTrainDetails);
    } catch (error) {
      console.error('Error fetching train details:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredResults = searchResults.filter(train => {
      return (
        train.DepartureLocation === searchCriteria.departure &&
        train.ArrivalLocation === searchCriteria.arrival
      );
    });
    setSearchResults(filteredResults);
  };

  const handleInputChange = (e) => {
    setSearchCriteria({
      ...searchCriteria,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mycon">
      <h1>Welcome to Sri Lankan Railway Website!</h1>
      <p>Search for available trains, view train details, and book your tickets.</p>
      <Link to="/login">
        <Button variant="primary">Admin Login</Button>
      </Link>
      <br></br>
      <br></br>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
          <Form.Label>Departure Location</Form.Label>
          <Form.Control type="text" name="departure" value={searchCriteria.departure} onChange={handleInputChange} required />
          </Col>
          <Col>
            <Form.Label>Arrival Location</Form.Label>
            <Form.Control type="text" name="arrival" value={searchCriteria.arrival} onChange={handleInputChange} required />
          </Col>
        </Row>
        <Button variant="primary" type="submit">Search</Button>
      </Form>
      <br></br>
      {searchResults.length > 0 && (
        <div>
          <h2>Search Results</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Train Name</th>
                <th>Departure Location</th>
                <th>Arrival Location</th>
                <th>Distance</th>
                <th>Time Taken</th>
                <th>Route Status</th>
                <th>Seats Available</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map(train => (
                <tr key={train.trainID}>
                  <td>{train.trainName}</td>
                  <td>{train.DepartureLocation}</td>
                  <td>{train.ArrivalLocation}</td>
                  <td>{train.Distance}km</td>
                  <td>{train.TimeTaken}hr(s)</td>
                  <td>{train.RouteStatus}</td>
                  <td>{train.SeatsAvailable}</td>
                  <td>
                    <Link to={{
                      pathname: `/booking/${train.trainID}`,
                      state: {
                        DepartureLocation: train.DepartureLocation,
                        ArrivalLocation: train.ArrivalLocation,
                        Distance: train.Distance,
                        TimeTaken: train.TimeTaken,
                        SeatsAvailable: train.SeatsAvailable
                      }
                    }}>
                      <Button variant="primary">Book</Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Home;
