import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../Navigation';
import TrainRouteForm from './TrainRouteForm/TrainRouteForm';
import TrainRouteList from './TrainRouteList/TrainRouteList';
import 'bootstrap/dist/css/bootstrap.min.css';

const TrainRoute= () => {
    const [refresh, setRefresh] = useState(false);
    const handleRouteAdded = () => {
        setRefresh(!refresh);
    };
    return (
        <>
        <Navigation />
        <Container>
            <h1 className="text-center mt-4">Train Route Info</h1>
            <TrainRouteForm onTrainRouteAdded={handleRouteAdded} />
            <br></br>
            <TrainRouteList key={refresh}/>
        </Container>
        </>
    );
};

export default TrainRoute;
