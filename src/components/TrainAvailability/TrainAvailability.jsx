import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../Navigation';
import TrainAvailabilityForm from './TrainAvailabilityForm/TrainAvailabilityForm';
import TrainAvailabilityList from './TrainAvailabilityList/TrainAvailabilityList';
import 'bootstrap/dist/css/bootstrap.min.css';

const TrainAvailability = () => {
    const [refresh, setRefresh] = useState(false);
    const handleAvailabilityAdded = () => {
        setRefresh(!refresh);
    };

    return (
        <>
        <Navigation/>
        <Container>
            <h1 className="text-center mt-4">Train Availability Info</h1>
            <TrainAvailabilityForm onAvailabilityAdded={handleAvailabilityAdded} />
            <br></br>
            <TrainAvailabilityList key={refresh} />
        </Container>
        </>
    );
};

export default TrainAvailability;
