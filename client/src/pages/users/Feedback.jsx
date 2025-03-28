import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedbackType: '',
    rating: '',
    comments: '',
    suggestions: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    navigate('/thankyou');
  };

  useEffect(() => {
    document.body.style.background =
      "linear-gradient(to bottom right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/header-background.png') center center no-repeat";
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
      maxWidth: '900px',
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
          Provide Your <span style={styles.highlight}>Feedback</span> for <span style={styles.highlight}>MOOC</span>@IIITA
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
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
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
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              style={styles.formControl}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="feedbackType" className="form-label" style={styles.formLabel}>
              Feedback Type
            </label>
            <select
              className="form-select"
              id="feedbackType"
              name="feedbackType"
              value={formData.feedbackType}
              onChange={handleChange}
              required
              style={styles.formControl}
            >
              <option value="" disabled>
                Select feedback type
              </option>
              <option value="Website">Website</option>
              <option value="Bug">Bug</option>
              <option value="Course Content">Course Content</option>
              <option value="Instructor">Instructor</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="rating" className="form-label" style={styles.formLabel}>
              Please Rate
            </label>
            <select
              className="form-select"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              required
              style={styles.formControl}
            >
              <option value="" disabled>
                Select your rating
              </option>
              <option value="5">5 - Excellent</option>
              <option value="4">4 - Very Good</option>
              <option value="3">3 - Good</option>
              <option value="2">2 - Fair</option>
              <option value="1">1 - Poor</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="comments" className="form-label" style={styles.formLabel}>
              Comments
            </label>
            <textarea
              className="form-control"
              id="comments"
              name="comments"
              rows="4"
              value={formData.comments}
              onChange={handleChange}
              placeholder="Provide your valuable feedback"
              required
              style={styles.formControl}
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="suggestions" className="form-label" style={styles.formLabel}>
              Suggestions for Improvement
            </label>
            <textarea
              className="form-control"
              id="suggestions"
              name="suggestions"
              rows="3"
              value={formData.suggestions}
              onChange={handleChange}
              placeholder="Share any suggestions for improving the course"
              style={styles.formControl}
            ></textarea>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-lg" style={styles.submitButton}>
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
