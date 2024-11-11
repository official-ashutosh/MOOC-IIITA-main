import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="container text-center" style={{ marginTop: '100px' }}>
      <h1 className="display-4">Thank You!</h1>
      <p className="lead">
        We appreciate your feedback. Your response has been successfully submitted.
      </p>
      <Link to="/" className="btn btn-primary btn-lg mt-4">
        Back to Home
      </Link>
    </div>
  );
};

export default ThankYou;
