import React from 'react';
import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminPanel() {
  return (
    <div>
      <Navigation />
      <div className='mycon'>
        <h1>Welcome to the Admin Panel!</h1>
      </div>
    </div>
  );
}

export default AdminPanel;
