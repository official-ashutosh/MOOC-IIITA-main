import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ThankYouPage = () => {
  useEffect(() => {
    // Applying background image and gradient effect to cover the entire screen
    document.body.style.background = "linear-gradient(to bottom right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/header-background.png') center center no-repeat";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed'; // Ensure the background stays in place when scrolling

    return () => {
      document.body.style.background = '';
    };
  }, []);

  const styles = {
    pageContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      textAlign: 'center',
    },
    formContainer: {
      maxWidth: '600px',
      padding: '30px',
      backgroundColor: 'rgba(0, 123, 255, 0.85)',
      borderRadius: '8px',
      boxShadow: '0 0 15px #343a40',
      borderLeft: '5px solid #ffc107',
      borderRight: '5px solid #ffc107',
    },
    formHeader: {
      marginBottom: '20px',
      color: '#f8f9fa',
    },
    highlight: {
      color: '#ffc107',
    },
    formText: {
      color: '#f8f9fa',
      fontSize: '1.2em',
    },
    submitButton: {
      display: 'block',
      width: '100%',
      padding: '10px 0',
      backgroundColor: '#ffc107',
      borderColor: '#ffc107',
      color: '#343a40',
      marginTop: '20px',
      fontSize: '1.1em',
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.formContainer}>
        <h1 style={styles.formHeader}>
          Thank You!
        </h1>
        <p style={styles.formText}>
          Your application to become an instructor on <span style={styles.highlight}>MOOC@IIITA</span> has been submitted successfully.
        </p>
        <p style={styles.formText}>
          We will review your application and get back to you shortly. Keep an eye on your email for further updates.
        </p>
        <a href="/" className="btn btn-primary" style={styles.submitButton}>
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default ThankYouPage;
