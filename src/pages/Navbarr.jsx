import React, { useState } from "react";
import { Link } from "react-router-dom";
import l1 from "../Assets/logo1.png";
import Volunteer from "./Volunteer"; // Import the Volunteer popup component

const Navbarr = () => {
  const [isModalOpen, setModalOpen] = useState(false); // State for controlling modal visibility

  const openModal = () => {
    setModalOpen(true); // Open the modal
  };  

  const closeModal = () => {
    setModalOpen(false); // Close the modal
  };

  const handleFormSubmit = () => {
    // Close modal and perform any other actions upon form submission
    setModalOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <img src={l1} alt="logo" />
        <div className="navbar-brand text-center color-white">
          <div className="raising-up">SKY Foundation</div>
          <div className="hands-bottom">For a better Tomorrow</div>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="/" className="nav-link" aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about-us" target="_blank">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/donate">
                Donate
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={openModal}> {/* Opens the modal */}
                Volunteer
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Render the modal based on isModalOpen state */}
      {isModalOpen && (
        <Volunteer
          closeModal={closeModal}
          onFormSubmit={handleFormSubmit}
        />
      )}
    </nav>
  );
};

export default Navbarr;
