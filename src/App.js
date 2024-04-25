import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Booking from './components/Booking/Booking';
import Login from './components/Login/Login';
import AdminPanel from './components/AdminPanel';
import Admin from './components/Admin/Admin';
import Train from './components/Train/Train';
import Location from './components/Location/Location';
import TrainRoute from './components/TrainRoute/TrainRoute';
import TrainAvailability from './components/TrainAvailability/TrainAvailability';
import BookingList from './components/Booking/BookList/BookList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/booking/:trainID" element={<Booking/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/admin" element={<AdminPanel/>} />
          <Route path="/admin-manage" element={<Admin/>} />
          <Route path="/trains" element={<Train />} />
          <Route path="/locations" element={<Location />} />
          <Route path="/train-routes" element={<TrainRoute />} />
          <Route path="/train-availability" element={<TrainAvailability />} />
          <Route path="/manage-bookings" element={<BookingList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
