import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../Navigation';
import LocationForm from './LocationForm/LocationForm';
import LocationList from './LocationList/LocationList';
import 'bootstrap/dist/css/bootstrap.min.css';

const Location= () => {
    const [refresh, setRefresh] = useState(false);
    const handleLocationAdded = () => {
        setRefresh(!refresh);
    };
    return (
        <>
        <Navigation/>
        <Container>
            <h1 className="text-center mt-4">Location Info</h1>
            <LocationForm onLocationAdded={handleLocationAdded} />
            <br></br>
            <LocationList key={refresh}/>
        </Container>
        </>
    );
};

export default Location;
