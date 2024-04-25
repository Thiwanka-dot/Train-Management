import React, { useState } from 'react';
import LocationService from '../../../services/LocationService';
import { Container, Form, Button } from 'react-bootstrap';

const LocationForm = ({ onLocationAdded }) => {
    const [locationName, setLocationName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newLocation = { locationName };
        try {
            await LocationService.addLocation(newLocation);
            onLocationAdded();
            setLocationName('');
        } catch (error) {
            console.error('Error adding location:', error);
        }
    };

    return (
        <Container>
            <h2>Add Location</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="locationName">
                    <Form.Label>Location Name:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter location name"
                        value={locationName}
                        onChange={(e) => setLocationName(e.target.value)}
                        required
                    />
                </Form.Group>
                <br></br>
                <Button variant="primary" type="submit">Add Location</Button>
            </Form>
        </Container>
    );
};

export default LocationForm;
