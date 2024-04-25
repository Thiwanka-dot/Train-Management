import React, { useState } from 'react';
import AdminService from '../../../services/AdminService';
import { Container, Form, Button } from 'react-bootstrap';

const AdminForm = ({ onAdminAdded }) => {
    const [adminName, setAdminName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newAdmin = { adminName, email, password };
        try {
            await AdminService.addAdmin(newAdmin);
            onAdminAdded();
            setAdminName('');
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error('Error adding admin:', error);
        }
    };

    return (
        <Container>
            <h2>Add Admin</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="adminName">
                    <Form.Label>Admin Name:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter admin name"
                        value={adminName}
                        onChange={(e) => setAdminName(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>
                <br></br>
                <Button variant="primary" type="submit">Add Admin</Button>
            </Form>
        </Container>
    );
};

export default AdminForm;
