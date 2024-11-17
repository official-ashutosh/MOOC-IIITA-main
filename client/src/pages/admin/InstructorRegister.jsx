import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Row, Card, Form } from "react-bootstrap";
import { registerInstructor } from "../../services/usersService";
import logo from "../../../images/MOOC@IIITA_logo.png";
import AdminNavBar from "../../Components/AdminNavBar";
import Role from "../../../../models/RoleEnum";
import Alert from "../../Components/Alert";

const InstructorRegister = () => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(null);
        setError(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: Role.INSTRUCTOR,
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerInstructor(
        formData.name,
        formData.email,
        formData.password,
        formData.confirmPassword,
        formData.role
      );
      setSuccess("Instructor registered successfully!");
    } catch (error) {
      setError(error.message || "An error occurred while registering.");
    }
  };

  return (
    <Row className="gx-0" style={{ height: "100%" }}>
      <Col md={3} className="bg-light">
        <AdminNavBar />
      </Col>
      <Col md={9}>
        <Container>
          <h1 className="mt-4 text-center text-dark-emphasis">
            Register an Instructor
          </h1>
          <p className="text-center text-muted mb-5">
            "Education is the key to unlocking the world, a passport to freedom."
          </p>
          <Container className="d-flex justify-content-center align-items-center">
            <Card className="shadow-lg" style={{ maxWidth: "1000px", width: "100%", height : "550px",  padding : "20px"}}>
              <Card.Body className="p-4">
                <Row>
                  {/* Left Side */}
                  <Col md={5} className="d-flex flex-column align-items-center">
                    <img
                      src={logo}
                      alt="Logo"
                      style={{ maxWidth: "80%", height: "auto" ,  padding : "20px"}}
                      className="mb-3"
                    />
                    <h3 className="text-center text-info-emphasis">
                      Welcome to MOOC@IIITA
                    </h3>
                    <p className="text-muted text-center mt-2">
                      Become a part of our amazing instructor team today!
                    </p>
                  </Col>

                  {/* Right Side */}
                  <Col md={7}>
                    <Container  className="p-1 gx-0">
                      <Form className="p-4 shadow">
                        <Form.Group className="mb-4">
                          <Form.Label className="fw-semibold">Your Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                          />
                        </Form.Group>
                        <Form.Group className="mb-4">
                          <Form.Label className="fw-semibold">Email Address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter your email"
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
                            placeholder="Enter a password"
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
                            value={formData.confirmPassword}
                            onChange={(e) =>
                              setFormData({ ...formData, confirmPassword: e.target.value })
                            }
                          />
                        </Form.Group>
                        <div className="d-grid">
                          <Button
                            variant="primary"
                            size="lg"
                            onClick={handleRegister}
                          >
                            Register Now
                          </Button>
                        </div>
                        {success && <Alert msg={success} type="success" />}
                        {error && <Alert msg={error} type="error" />}
                      </Form>
                    </Container>
                  </Col>

                </Row>
              </Card.Body>
            </Card>
          </Container>
        </Container>
      </Col>
    </Row>
  );
};

export default InstructorRegister;
