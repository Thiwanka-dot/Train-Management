import React, { useEffect, useState } from 'react';
import TrainService from '../../../services/TrainService';
import TrainListItem from './TrainListItem';
import { Container, ListGroup } from 'react-bootstrap';

const TrainList = () => {
    const [trains, setTrains] = useState([]);

    useEffect(() => {
        fetchTrains();
    }, []);

    const fetchTrains = async () => {
        try {
            const trainsData = await TrainService.getAllTrains();
            setTrains(trainsData);
        } catch (error) {
            console.error('Error fetching trains:', error);
        }
    };

    const handleDelete = async (trainId) => {
        try {
            await TrainService.deleteTrain(trainId);
            fetchTrains();
        } catch (error) {
            console.error('Error deleting train:', error);
        }
    };

    const handleEdit = () => {
        fetchTrains();
    };

    return (
        <Container>
            <h2>Train List</h2>
            <ListGroup>
                {trains.map(train => (
                    <TrainListItem key={train.trainID} train={train} onDelete={() => handleDelete(train.trainID)} onEdit={handleEdit} />
                ))}
            </ListGroup>
        </Container>
    );
};

export default TrainList;
