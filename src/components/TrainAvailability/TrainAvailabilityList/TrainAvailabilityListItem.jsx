import React from 'react';

const TrainAvailabilityListItem = ({ availability, onDelete }) => {

    return (
        <li className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
                <span>Train ID: {availability.trainID} - Availability Date: {availability.availabilityDate} - Seats Available: {availability.seatsAvailable}</span>
                <div>
                    <button className="btn btn-danger me-2" onClick={onDelete}>Delete</button>
                </div>
            </div>
        </li>
    );
};

export default TrainAvailabilityListItem;
