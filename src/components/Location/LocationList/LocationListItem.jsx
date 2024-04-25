import React from 'react';

const LocationListItem = ({ location, onDelete }) => {
    return (
        <li className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
                <span>{location.locationName}</span>
                <div>
                    <button className="btn btn-danger me-2" onClick={onDelete}>Delete</button>
                </div>
            </div>
        </li>
    );
};

export default LocationListItem;
