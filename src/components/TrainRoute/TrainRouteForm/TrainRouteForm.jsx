import React, { useState } from 'react';
import TrainRouteService from '../../../services/TrainRouteService';
import { Container, Form, Button } from 'react-bootstrap';

const TrainRouteForm = ({ onTrainRouteAdded }) => {
    const [trainID, setTrainID] = useState('');
    const [departureLocationName, setDepartureLocationName] = useState('');
    const [arrivalLocationName, setArrivalLocationName] = useState('');
    const [distance, setDistance] = useState('');
    const [timeTaken, setTimeTaken] = useState('');
    const [routeStatus, setRouteStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newRoute = { trainID, departureLocationName, arrivalLocationName, distance, timeTaken, routeStatus };
        try {
            await TrainRouteService.addRoute(newRoute);
            onTrainRouteAdded();
            setTrainID('');
            setDepartureLocationName('');
            setArrivalLocationName('');
            setDistance('');
            setTimeTaken('');
            setRouteStatus('');
        } catch (error) {
            console.error('Error adding train route:', error);
        }
    };

    return (
        <Container>
            <h2>Add Train Route</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="trainID">
                    <Form.Label>Train ID:</Form.Label>
                    <Form.Control type="number" placeholder="Enter train ID" value={trainID} onChange={(e) => setTrainID(e.target.value)} required />
                </Form.Group>
                <Form.Group controlId="departureLocationName">
                    <Form.Label>Departure Location Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter departure location name" value={departureLocationName} onChange={(e) => setDepartureLocationName(e.target.value)} required />
                </Form.Group>
                <Form.Group controlId="arrivalLocationName">
                    <Form.Label>Arrival Location Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter arrival location name" value={arrivalLocationName} onChange={(e) => setArrivalLocationName(e.target.value)} required />
                </Form.Group>
                <Form.Group controlId="distance">
                    <Form.Label>Distance:</Form.Label>
                    <Form.Control type="number" step="0.01" placeholder="Enter distance" value={distance} onChange={(e) => setDistance(e.target.value)} required />
                </Form.Group>
                <Form.Group controlId="timeTaken">
                    <Form.Label>Time Taken:</Form.Label>
                    <Form.Control type="number" placeholder="Enter time taken" value={timeTaken} onChange={(e) => setTimeTaken(e.target.value)} required />
                </Form.Group>
                <Form.Group controlId="routeStatus">
                    <Form.Label>Route Status:</Form.Label>
                    <Form.Control type="text" placeholder="Enter route status" value={routeStatus} onChange={(e) => setRouteStatus(e.target.value)} required />
                </Form.Group>
                <br></br>
                <Button variant="primary" type="submit">Add Route</Button>
            </Form>
        </Container>
    );
};

export default TrainRouteForm;
