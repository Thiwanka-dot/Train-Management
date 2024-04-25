import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../Navigation';
import TrainForm from './TrainForm/TrainForm';
import TrainList from './TrainList/TrainList';
import 'bootstrap/dist/css/bootstrap.min.css';

const Train= () => {
    const [refresh, setRefresh] = useState(false);
    const handleTrainAdded = () => {
        setRefresh(!refresh);
    };
    return (
        <>
        <Navigation/>
        <Container>
            <h1 className="text-center mt-4">Train Info</h1>
            <TrainForm onTrainAdded={handleTrainAdded} />
            <br></br>
            <TrainList key={refresh}/>
        </Container>
        </>
    );
};

export default Train;
