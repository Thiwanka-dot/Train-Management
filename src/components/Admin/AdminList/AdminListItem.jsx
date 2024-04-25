import React, { useState } from 'react';
import AdminService from '../../../services/AdminService';

const AdminListItem = ({ admin, onDelete,  }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(admin.adminName);
    const [editedEmail, setEditedEmail] = useState(admin.email);
    const [editedPassword, setEditedPassword] = useState(admin.password);

    const handleEdit = async () => {
        setIsEditing(true);
    };

    const handleSave = async () => {
        const editedAdmin = { 
            ...admin,
            adminName: editedName,
            email: editedEmail,
            password: editedPassword
        };
        try {
            await AdminService.updateAdmin(admin.adminID, editedAdmin);
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating admin:', error);
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditedName(admin.adminName);
        setEditedEmail(admin.email);
        setEditedPassword(admin.password);
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
                        <input
                            type="email"
                            className="form-control"
                            value={editedEmail}
                            onChange={(e) => setEditedEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            className="form-control"
                            value={editedPassword}
                            onChange={(e) => setEditedPassword(e.target.value)}
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
                    <span>Name: {admin.adminName} - Email: {admin.email}</span>
                    <div>
                        <button className="btn btn-danger me-2" onClick={onDelete}>Delete</button>
                        <button className="btn btn-primary" onClick={handleEdit}>Edit</button>
                    </div>
                </div>
            )}
        </li>
    );
};

export default AdminListItem;
