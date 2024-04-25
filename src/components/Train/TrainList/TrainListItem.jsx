import React, { useState } from 'react';
import TrainService from '../../../services/TrainService';

const TrainListItem = ({ train, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(train.trainName);

    const handleEdit = async () => {
        setIsEditing(true);
    };

    const handleSave = async () => {
        const editedTrain = { ...train, trainName: editedName };
        try {
            await TrainService.updateTrain(train.trainID, editedTrain);
            setIsEditing(false);
            onEdit();
        } catch (error) {
            console.error('Error updating train:', error);
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditedName(train.trainName);
    };

    return (
        <li className="list-group-item">
            {isEditing ? (
                <div className="row">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            value={editedName}
                            onChange={(e) => setEditedName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-success me-2" onClick={handleSave}>Save</button>
                        <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                    </div>
                </div>
            ) : (
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <span>Train ID: {train.trainID}</span>
                        <br />
                        <span>Train Name: {train.trainName}</span>
                    </div>
                    <div>
                        <button className="btn btn-danger me-2" onClick={onDelete}>Delete</button>
                        <button className="btn btn-primary" onClick={handleEdit}>Edit</button>
                    </div>
                </div>
            )}
        </li>
    );
};

export default TrainListItem;
