import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navigation() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/admin">Admin Dashboard</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/admin-manage">Admin</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/trains">Trains</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/locations">Locations</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/train-routes">Train Routes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/train-availability">Train Availability</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/manage-bookings">Manage Bookings</Link>
            </li>
          </ul>
          <button className="btn btn-outline-primary" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
