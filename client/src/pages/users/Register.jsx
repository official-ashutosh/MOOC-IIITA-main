import Alert from "../../Components/Alert";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import React from "react";
import { registerUser } from "../../services/usersService";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";
import logo from "../../../images/MOOC@IIITA_logo.png";

const Register = () => {
  const [error, setError] = useState(null);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //Handle Register
  const handleRegister = async (e) => {
    e.preventDefault();
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
  return (
    <Container className="p-4">
      <Row>
        {/* Left Side */}
        <Col
          md={5}
          className="d-flex flex-column align-items-center text-center"
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              paddingTop: "100px",
              maxWidth: "80%",
              height: "auto",
              padding: "40px",
              borderRadius: "10px",
            }}
            className="mb-3"
          />
          <h3
            className="text-center text-info-emphasis fw-bold"
            style={{ fontSize: "2.6rem" }}
          >
            Register for MOOC@IIITA
          </h3>
          <p
            className="text-muted text-center mt-3"
            style={{ fontSize: "1.2rem", lineHeight: "1.5" }}
          >
            Join us and start exploring the world of online education with
            MOOC@IIITA.
          </p>

          <p
            className="text-info-emphasis text-center fw-semibold"
            style={{ fontSize: "1.1rem" }}
          >
            Ready to embark on your learning journey?<br></br>Register now and transform your
            skills today!
          </p>
        </Col>
  
        {/* Right Side */}
        <Col md={7} className="d-flex flex-column align-items-end">
          <Card
            className="shadow-lg my-5"
            style={{ width: "100%", maxWidth: "600px" }}
          >
            <Card.Body className="p-5">
              {/* Register Page Header */}
              <div className="text-center mb-4">
                <h2
                  className="text-info-emphasis fw-bold"
                  style={{ fontSize: "2rem" }}
                >
                  Register Page
                </h2>
              </div>
  
              {/* Form */}
              <Form>
                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold">Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    className="p-2"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    autoFocus
                  />
                </Form.Group>
  
                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold">Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    className="p-2"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </Form.Group>
  
                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    className="p-2"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                </Form.Group>
  
                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold">Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm your password"
                    className="p-2"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                  />
                </Form.Group>
  
                <Row className="d-flex justify-content-center">
                  <Button
                    className="mb-4 col-3"
                    size="md"
                    onClick={handleRegister}
                  >
                    Register
                  </Button>
                </Row>
  
                <div className="text-center mt-3">
                  <p>
                    Already have an account?{" "}
                    <a href="/login" style={{ textDecoration: "none" }}>
                      Login here
                    </a>
                  </p>
                </div>
              </Form>
  
              {error && (
                <Alert
                  msg={error}
                  type="error"
                  style={{
                    marginTop: "40px",
                    textAlign: "center",
                  }}
                />
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};  

export default Register;
