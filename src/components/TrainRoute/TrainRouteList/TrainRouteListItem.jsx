import React from 'react';

const TrainRouteListItem = ({ route, onDelete }) => {

    return (
        <li className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
                <span>{route.trainID} - {route.departureLocationName} - {route.arrivalLocationName} - {route.distance}km - {route.timeTaken}hr(s) - {route.routeStatus}</span>
                <div>
                    <button className="btn btn-danger me-2" onClick={onDelete}>Delete</button>
                </div>
            </div>
        </li>
    );
};

export default TrainRouteListItem;
