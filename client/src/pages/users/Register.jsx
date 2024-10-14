import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Alert from "../../Components/Alert";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { registerUser } from "../../services/usersService";
import logo from "../../../images/MOOC@IIITA_logo.png";

const Register = () => {
  const { setUser } = useContext(UserContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    document.body.style.background = "linear-gradient(to bottom right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/header-background.png') center center no-repeat";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';

    return () => {
      document.body.style.background = '';
    };
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await registerUser(
        formData.name,
        formData.email,
        formData.password,
        formData.confirmPassword
      );
      setUser({ email: formData.email });
      navigate("/otp-authentication");
    } catch (error) {
      setError(error.message);
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
      maxWidth: '500px',
      // padding: '30px',
      backgroundColor: 'rgba(0, 123, 255, 0.85)',
      borderRadius: '8px',
      boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)',
      borderLeft: '5px solid #ffc107',
      borderRight: '5px solid #ffc107',
      marginLeft: '25%',  // Move form container slightly to the right
    },
    logo: {
      maxWidth: '50%',
      marginLeft: '25%',
    },
    alert: {
      marginTop: '20px',
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
    loginLink: {
      textDecoration: "none",
      color: "white", // Change this to your desired color
      fontWeight: "bold", // Optional: Make it bold
    },
    accountText: {
      fontStyle : 'italic',

      color: "white", // Change this to your desired color for the text
      fontSize: "1em", // Adjust the font size as needed
    },
  };

  return (
    <Container className="p-0" style={styles.pageContainer}>
      <Row>
        <Col md="6" className="text-center d-flex flex-column justify-content-center">
          <h1 className="my-5 display-3 fw-bold text-info-emphasis">
            Register Page <br />
            <span className="text-dark-emphasis">
              for your account
            </span>
          </h1>
          <img src={logo} alt="Logo" style={styles.logo} />
        </Col>

        <Col md="6">
          <Card className="my-5" style={styles.formContainer}>
            <Card.Body className="p-5">
              <Form onSubmit={handleRegister}>
                <Form.Group className="mb-4">
                  <Form.Label>Your name</Form.Label>
                  <Form.Control
                    type="input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    autoFocus
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    required
                  />
                </Form.Group>

                <Button type="submit" className="mb-4" style={styles.submitButton}>
                  Register
                </Button>

                {error && <Alert msg={error} type="error" style={styles.alert} />}

                <div className="text-center">
                  <p style={styles.accountText}>
                    Have already an account?{" "}
                    <a href="/login" style={styles.loginLink}>
                      Login here
                    </a>
                  </p>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
