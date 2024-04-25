import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../Navigation';
import AdminForm from './AdminForm/AdminForm';
import AdminList from './AdminList/AdminList';
import 'bootstrap/dist/css/bootstrap.min.css';

const Admin = () => {
    const [refresh, setRefresh] = useState(false);
    const handleAdminAdded = () => {
        setRefresh(!refresh);
    };
    return (
        <>
            <Navigation />
            <Container>
                <h1 className="text-center mt-4">Admin Info</h1>
                <AdminForm onAdminAdded={handleAdminAdded} />
                <br></br>
                <AdminList key={refresh} />
            </Container>
        </>
    );
};

export default Admin;
