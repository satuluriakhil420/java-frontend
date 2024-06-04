import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';


const Volunteer = ({ closeModal, onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    address: '',
    email: '',
    whatInspiredYouToBeAVolunteer: '',
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const backendApi = process.env.REACT_APP_BACKEND_URL; // Defined before usage

axios.post(`${backendApi}/volunteer/RegisterVolunteer`, formData)
      .then((response) => {
        console.log('Form submitted successfully:', response.data);
        closeModal(); // Close the popup
        onFormSubmit(); // Show the thank-you message
        toast.success('Volunteer registered successfully'); // Success toast
      })
      .catch((error) => {
        if (error.response?.data?.message === 'Email is Already Registered') {
          // Display a toast with an appropriate message
          toast.error('Email is already registered. Please use a different one.');
        } else {
          toast.error('An unexpected error occurred. Please try again later. ');
        }



        console.error('Error submitting form:', error);
      });
  };

  return (
    
    <div className="popup">
         
      <div className="popup-content">
        <form onSubmit={handleSubmit}>
        <h1 >Form For Volunteer Registration</h1>
          <label>
            Name:
            <input placeholder='Full Name' type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>

          <label>
            Contact Number:
            <input placeholder='Eg: 9999 888 777' type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
          </label>

          <label>
            Address:
            <input placeholder='H-No , town , city , pincode' type="text" name="address" value={formData.address} onChange={handleChange} required />
          </label>

          <label>
            Email:
            <input placeholder='email@gmail.com' type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>

          <label>
            What Inspired You to Be a Volunteer:
            <textarea placeholder='Through volunteering, I get the chance to contribute to causes that I care.....' name="whatInspiredYouToBeAVolunteer" value={formData.whatInspiredYouToBeAVolunteer} onChange={handleChange} required />
          </label>
          <div className="button-container">
          <button type="submit" className="submit-button">Submit</button>
          <button className="close-popup" onClick={closeModal} style={{backgroundColor:"red"}}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Volunteer;
