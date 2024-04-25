import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import TrainAvailabilityService from '../../../services/TrainAvailabilityService';

const TrainAvailabilityForm = ({ onAvailabilityAdded }) => {
    const [trainID, setTrainID] = useState('');
    const [availabilityDate, setAvailabilityDate] = useState('');
    const [seatsAvailable, setSeatsAvailable] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newAvailability = { trainID, availabilityDate, seatsAvailable };
        try {
            await TrainAvailabilityService.addAvailability(newAvailability);
            onAvailabilityAdded();
            setTrainID('');
            setAvailabilityDate('');
            setSeatsAvailable('');
        } catch (error) {
            console.error('Error adding train availability:', error);
        }
    };

    return (
        <Container>
            <h2>Add Train Availability</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="trainID">
                    <Form.Label>Train ID:</Form.Label>
                    <Form.Control type="number" placeholder="Enter train ID" value={trainID} onChange={(e) => setTrainID(e.target.value)} required />
                </Form.Group>
                <Form.Group controlId="availabilityDate">
                    <Form.Label>Availability Date:</Form.Label>
                    <Form.Control type="date" placeholder="Enter availability date" value={availabilityDate} onChange={(e) => setAvailabilityDate(e.target.value)} required />
                </Form.Group>
                <Form.Group controlId="seatsAvailable">
                    <Form.Label>Seats Available:</Form.Label>
                    <Form.Control type="number" placeholder="Enter seats available" value={seatsAvailable} onChange={(e) => setSeatsAvailable(e.target.value)} required />
                </Form.Group>
                <br></br>
                <Button variant="primary" type="submit">Add Availability</Button>
            </Form>
        </Container>
    );
};

export default TrainAvailabilityForm;
