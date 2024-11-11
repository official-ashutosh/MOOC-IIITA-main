import React, { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedbackType: '',
    rating: '',
    comments: '',
    suggestions: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here (e.g., send data to the server)
    console.log(formData);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="form-header">
          Provide Your <span className="highlight">Feedback</span> for <span className="highlight">MOOC</span>@IIITA
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="feedbackType" className="form-label">Feedback Type</label>
            <select
              className="form-select"
              id="feedbackType"
              name="feedbackType"
              value={formData.feedbackType}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select feedback type</option>
              <option value="Website">Website</option>
              <option value="Bug">Bug</option>
              <option value="Course Content">Course Content</option>
              <option value="Instructor">Instructor</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="rating" className="form-label">Please Rate</label>
            <select
              className="form-select"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select your rating</option>
              <option value="5">5 - Excellent</option>
              <option value="4">4 - Very Good</option>
              <option value="3">3 - Good</option>
              <option value="2">2 - Fair</option>
              <option value="1">1 - Poor</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="comments" className="form-label">Comments</label>
            <textarea
              className="form-control"
              id="comments"
              name="comments"
              rows="4"
              value={formData.comments}
              onChange={handleChange}
              placeholder="Provide your valuable feedback"
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="suggestions" className="form-label">Suggestions for Improvement</label>
            <textarea
              className="form-control"
              id="suggestions"
              name="suggestions"
              rows="3"
              value={formData.suggestions}
              onChange={handleChange}
              placeholder="Share any suggestions for improving the course"
            ></textarea>
          </div>

          <div className="d-grid">
          <a href="/thank" className="btn btn-primary btn-lg">
      Submit Feedback
    </a>
            {/* <button type="submit" href="/thank" className="btn btn-primary">Submit Feedback</button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
