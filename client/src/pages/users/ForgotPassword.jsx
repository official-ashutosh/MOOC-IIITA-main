import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Alert from "../../Components/Alert";
import { Link } from "react-router-dom";
import logo from "../../../images/MOOC@IIITA_logo.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.style.background = "linear-gradient(to bottom right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/header-background.png') center center no-repeat";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';

    return () => {
      document.body.style.background = '';
    };
  }, []);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (!email) {
      setError("Email is required");
      setLoading(false);
      return;
    }

    try {
      // Call your forgot password service here
      // await forgotPasswordService(email);
      alert("Password reset link has been sent to your email."); // Mocking service response
    } catch (err) {
      setError("Failed to send reset link.");
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    pageContainer: {
      // display: 'flex',
      // justifyContent: 'center',
      // alignItems: 'center',
      // padding: '10px',
    },
    formContainer: {
      maxWidth: '800px',
      padding: '30px',
      backgroundColor: 'rgba(0, 123, 255, 0.85)',
      // borderRadius: '8px',
      boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)',
      borderLeft: '5px solid #ffc107',
      borderRight: '5px solid #ffc107',
      marginLeft: '25%',  // Move form container slightly to the right
      
      marginTop : '25%',
    },
    logo: {
      maxWidth: '40%',
      marginLeft: '30%',
    },
    alert: {
      marginTop: '20px',
      height: '60px', // Set a fixed height for the alert
      display: 'flex',
      alignItems: 'center', // Center content vertically
      justifyContent: 'center', // Center content horizontally
      padding: '10px', // Add padding for spacing
      fontSize: '1.1em', // Increase font size for better readability
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
    },
  };

  return (
    <Container className="p-0" style={styles.pageContainer}>
      <Row>
        <Col md="6" className="text-center d-flex flex-column justify-content-center">
          <h1 className="my-5 display-3 fw-bold text-info-emphasis">
            Forgot Password <br />
            <span className="text-dark-emphasis">
              Reset your <span style={{ color: '#ffc107' }}>MOOC@IIITA</span> password
            </span>
          </h1>
          <img src={logo} alt="Logo" style={styles.logo} />
        </Col>

        <Col md="6" style={{marginTop : '10%'}}>
          <Card className="my-5" style={styles.formContainer}>
            <Card.Body className="p-5">
              <Form onSubmit={handleForgotPassword}>
                <Form.Group className="mb-4">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-label="Email"
                  />
                </Form.Group>

                <Button type="submit" className="mb-4" style={styles.submitButton} disabled={loading}>
                  {loading ? 'Sending...' : 'Send Reset Link'}
                </Button>
              </Form>

              {error && <Alert msg={error} type="error" style={styles.alert} />}

              <div className="text-center mt-3">
                <Link to="/login" style={{ textDecoration: "none", fontStyle: "italic", color: '#f8f9fa' }}>
                  Back to Login
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
