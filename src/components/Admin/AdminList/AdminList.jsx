import React, { useEffect, useState } from 'react';
import AdminService from '../../../services/AdminService';
import AdminListItem from './AdminListItem';
import { Container, ListGroup } from 'react-bootstrap';

const AdminList = () => {
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        fetchAdmins();
    }, []);

    const fetchAdmins = async () => {
        try {
            const adminsData = await AdminService.getAllAdmins();
            setAdmins(adminsData);
        } catch (error) {
            console.error('Error fetching admins:', error);
        }
    };

    const handleDelete = async (adminId) => {
        try {
            await AdminService.deleteAdmin(adminId);
            fetchAdmins();
        } catch (error) {
            console.error('Error deleting admin:', error);
        }
    };

    const handleEdit = () => {
        fetchAdmins();
    };

    return (
        <Container>
            <h2>Admin List</h2>
            <ListGroup>
                {admins.map(admin => (
                    <AdminListItem key={admin.adminID} admin={admin} onDelete={() => handleDelete(admin.adminID)} onEdit={handleEdit}/>
                ))}
            </ListGroup>
        </Container>
    );
};

export default AdminList;
