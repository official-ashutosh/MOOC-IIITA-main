import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const InstructorApplication = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    address: '',
    qualifications: '',
    motivation: ''
  });

  const navigate = useNavigate(); // Initialize navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Handle form submission, send it to the backend or other action
    // After form submission, navigate to the ThankYouPage
    navigate('/thankyou');
  };

  useEffect(() => {
    document.body.style.background = "linear-gradient(to bottom right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/header-background.png') center center no-repeat";
    document.body.style.backgroundSize = 'cover';

    return () => {
      document.body.style.background = '';
    };
  }, []);

  const styles = {
    container: {
      position: 'relative',
      zIndex: 1,
    },
    formContainer: {
      maxWidth: '700px',
      margin: '50px auto',
      padding: '30px',
      backgroundColor: 'rgba(0, 123, 255, 0.85)',
      borderRadius: '8px',
      boxShadow: '0 0 15px #343a40',
      borderLeft: '5px solid #ffc107',
      borderRight: '5px solid #ffc107',
    },
    formHeader: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#f8f9fa',
    },
    highlight: {
      color: '#ffc107',
    },
    formLabel: {
      color: '#f8f9fa',
    },
    formControl: {
      borderColor: '#0056b3',
    },
    submitButton: {
      backgroundColor: '#ffc107',
      borderColor: '#ffc107',
      color: '#343a40',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.formHeader}>
          Apply to Become an <span style={styles.highlight}>Instructor</span> on{' '}
          <span style={styles.highlight}>MOOC</span>@IIITA
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label" style={styles.formLabel}>
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.formControl}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label" style={styles.formLabel}>
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.formControl}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label" style={styles.formLabel}>
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
              style={styles.formControl}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="dob" className="form-label" style={styles.formLabel}>
              Date of Birth
            </label>
            <input
              type="date"
              className="form-control"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              style={styles.formControl}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label" style={styles.formLabel}>
              Address
            </label>
            <textarea
              className="form-control"
              id="address"
              name="address"
              rows="2"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              required
              style={styles.formControl}
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="qualifications" className="form-label" style={styles.formLabel}>
              Qualifications
            </label>
            <textarea
              className="form-control"
              id="qualifications"
              name="qualifications"
              rows="3"
              placeholder="List your qualifications"
              value={formData.qualifications}
              onChange={handleChange}
              required
              style={styles.formControl}
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="motivation" className="form-label" style={styles.formLabel}>
              Why do you want to be an instructor on MOOC@IIITA?
            </label>
            <textarea
              className="form-control"
              id="motivation"
              name="motivation"
              rows="4"
              placeholder="Explain your motivation to be an instructor"
              value={formData.motivation}
              onChange={handleChange}
              required
              style={styles.formControl}
            ></textarea>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary" style={styles.submitButton}>
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InstructorApplication;
