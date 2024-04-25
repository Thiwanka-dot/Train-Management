import React, { useState } from 'react';
import TrainService from '../../../services/TrainService';
import { Container, Form, Button } from 'react-bootstrap';

const TrainForm = ({ onTrainAdded }) => {
    const [trainName, setTrainName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTrain = { trainName };
        try {
            await TrainService.addTrain(newTrain);
            onTrainAdded();
            setTrainName('');
        } catch (error) {
            console.error('Error adding train:', error);
        }
    };

    return (
        <Container>
            <h2>Add Train</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="trainName">
                    <Form.Label>Train Name:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter train name"
                        value={trainName}
                        onChange={(e) => setTrainName(e.target.value)}
                        required
                    />
                </Form.Group>
                <br></br>
                <Button variant="primary" type="submit">Add Train</Button>
            </Form>
        </Container>
    );
};

export default TrainForm;
