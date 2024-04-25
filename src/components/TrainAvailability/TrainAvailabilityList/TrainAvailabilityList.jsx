import React, { useEffect, useState } from 'react';
import TrainAvailabilityService from '../../../services/TrainAvailabilityService';
import { Container, ListGroup } from 'react-bootstrap';
import TrainAvailabilityListItem from './TrainAvailabilityListItem';

const TrainAvailabilityList = () => {
    const [availabilities, setAvailabilities] = useState([]);

    useEffect(() => {
        fetchAvailabilities();
    }, []);

    const fetchAvailabilities = async () => {
        try {
            const availabilitiesData = await TrainAvailabilityService.getAllAvailabilities();
            setAvailabilities(availabilitiesData);
        } catch (error) {
            console.error('Error fetching train availabilities:', error);
        }
    };

    const handleDelete = async (availabilityId) => {
        try {
            await TrainAvailabilityService.deleteAvailability(availabilityId);
            fetchAvailabilities();
        } catch (error) {
            console.error('Error deleting availabilities:', error);
        }
    };

    return (
        <Container>
            <h2>Train Availability List</h2>
            <ListGroup>
                {availabilities.map(availability => (
                    <TrainAvailabilityListItem key={availability.availabilityID} availability={availability} onDelete={() => handleDelete(availability.availabilityID)} />
                ))}
            </ListGroup>
        </Container>
    );
};

export default TrainAvailabilityList;
