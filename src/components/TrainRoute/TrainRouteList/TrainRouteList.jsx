import React, { useEffect, useState } from 'react';
import TrainRouteService from '../../../services/TrainRouteService';
import TrainRouteListItem from './TrainRouteListItem';
import { Container, ListGroup } from 'react-bootstrap';

const TrainRouteList = () => {
    const [routes, setRoutes] = useState([]);

    useEffect(() => {
        fetchRoutes();
    }, []);

    const fetchRoutes = async () => {
        try {
            const routesData = await TrainRouteService.getAllRoutes();
            setRoutes(routesData);
        } catch (error) {
            console.error('Error fetching train routes:', error);
        }
    };

    const handleDelete = async (routeId) => {
        try {
            await TrainRouteService.deleteRoute(routeId);
            fetchRoutes();
        } catch (error) {
            console.error('Error deleting train route:', error);
        }
    };

    return (
        <Container>
            <h2>Train Route List</h2>
            <ListGroup>
                {routes.map(route => (
                    <TrainRouteListItem key={route.routeID} route={route} onDelete={() => handleDelete(route.routeID)} />
                ))}
            </ListGroup>
        </Container>
    );
};

export default TrainRouteList;
