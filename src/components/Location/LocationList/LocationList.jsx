import React, { useEffect, useState } from 'react';
import LocationService from '../../../services/LocationService';
import LocationListItem from './LocationListItem';
import { Container, ListGroup } from 'react-bootstrap';

const LocationList = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetchLocations();
    }, []);

    const fetchLocations = async () => {
        try {
            const locationsData = await LocationService.getAllLocations();
            setLocations(locationsData);
        } catch (error) {
            console.error('Error fetching locations:', error);
        }
    };

    const handleDelete = async (locationId) => {
        try {
            await LocationService.deleteLocation(locationId);
            fetchLocations();
        } catch (error) {
            console.error('Error deleting location:', error);
        }
    };

    return (
        <Container>
            <h2>Location List</h2>
            <ListGroup>
                {locations.map(location => (
                    <LocationListItem key={location.locationID} location={location} onDelete={() => handleDelete(location.locationID)} />
                ))}
            </ListGroup>
        </Container>
    );
};

export default LocationList;
