import React, { useState, useContext } from "react";
import { Button, Col, Container, Row, Card, Form } from "react-bootstrap";
import { UserContext } from "../../../contexts/UserContext";
import userImage from "../../../../images/user.png";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../../../services/usersService";
import Alert from "../../../Components/Alert";
import { Modal } from "react-bootstrap";
import success from "../../../../images/success.png";

const ChangePassword = () => {
  const { user } = useContext(UserContext);
  const [error, setError] = useState(null);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: "",
    new_password: "",
    confirm_password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await changePassword(
        formData.password,
        formData.new_password,
        formData.confirm_password
      );
      setShowChangePassword(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const confirm = () => {
    navigate("/my-profile");
    setShowChangePassword(false);
  };

  const handleCancel = () => {
    navigate("/my-profile");
  };

  return (
    <section style={styles.section}>
      <Container className="py-5">
        <Row className="justify-content-center align-items-center">
          <Col lg="6">
            <Card className="shadow-lg" style={styles.card}>
              <Row className="g-0" style={{ height: "500px" }}>
                <Col
                  md="4"
                  className="text-center text-white"
                  style={styles.leftPanel}
                >
                  <Card.Img
                    className="rounded-circle my-5"
                    src={
                      user.picture === null || user.picture === ""
                        ? userImage
                        : user.picture
                    }
                    alt="Avatar"
                    style={styles.profileImage}
                  />
                  <Card.Title as="h5">{user.name}</Card.Title>
                  <Card.Text as="h6">{user.role}</Card.Text>
                </Col>
                <Col md="8">
                  <Card.Body style={styles.cardBody}>
                    <Card.Title as="h4">Change Password</Card.Title>
                    <hr className="mt-0 mb-4" />
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label>Current Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="new_password"
                          value={formData.new_password}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="confirm_password"
                          value={formData.confirm_password}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Form>
                    <div className="text-center mt-4">
                      <Button
                        variant="outline-danger"
                        size="sm"
                        style={styles.cancelButton}
                        onClick={handleCancel}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="outline-success"
                        size="sm"
                        style={styles.saveButton}
                        onClick={handleSave}
                      >
                        Save
                      </Button>
                    </div>
                    {error && <Alert msg={error} type="error" />}
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Modal show={showChangePassword} centered>
          <Modal.Header closeButton>
            <Modal.Title className="text-primary">
              Password Changed Successfully
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ textAlign: "center" }}>
              <img
                src={success}
                alt="Success"
                style={{ maxWidth: "30%", maxHeight: "300px" }}
              />
            </div>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center">
            <Button variant="success" onClick={confirm}>
              Continue
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  );
};

const styles = {
  section: {
    background: "#ffffff",
    minHeight: "100vh",
    paddingTop: "20px",
  },
  card: {
    borderRadius: "15px",
    overflow: "hidden",
  },
  leftPanel: {
    background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
    borderTopLeftRadius: "15px",
    borderBottomLeftRadius: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: "100px",
    height: "100px",
    border: "4px solid white",
  },
  cardBody: {
    backgroundColor: "#f8f9fa",
    padding: "30px",
    borderRadius: "15px",
  },
  cancelButton: {
    marginRight: "10px",
    borderColor: "#d9534f",
    color: "#d9534f",
    fontWeight: "bold",
  },
  saveButton: {
    borderColor: "#5cb85c",
    color: "#5cb85c",
    fontWeight: "bold",
  },
};

export default ChangePassword;
