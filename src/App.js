import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbarr from './pages/Navbarr';
import AboutUS from './pages/AboutUs';
import TopNavBar from './components/navbar';
import Volunteer from './pages/Volunteer';

// Import the ToastContainer and the necessary styles
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      {/* Include the ToastContainer at the root level to ensure all toast notifications are handled */}
      <ToastContainer />

      <Router>
        <Navbarr />
        <Routes>
          {/* Home page route */}
          <Route path="/" element={<TopNavBar />} />
          {/* About Us page route */}
          <Route path="/about-us" element={<AboutUS />} />
          {/* Volunteer page route */}
          <Route path="/volunteer" element={<Volunteer />} /> {/* Use VolunteerContainer */}
          {/* Redirect all undefined routes to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
