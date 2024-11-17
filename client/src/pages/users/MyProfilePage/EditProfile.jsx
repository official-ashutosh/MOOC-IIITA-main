import React, { useState, useContext, useEffect } from "react";
import { Button, Col, Container, Row, Card, Form } from "react-bootstrap";
import "./MyProfilePage.css";
import { UserContext } from "../../../contexts/UserContext";
import userImage from "../../../../images/user.png";
import { useNavigate } from "react-router-dom";
import { updateUserProfile } from "../../../services/usersService";
import Alert from "../../../Components/Alert";
import { Modal } from "react-bootstrap";
import success from "../../../../images/success.png";

const EditProfile = () => {
  const { user, setUser } = useContext(UserContext);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const [showChangeInform, setShowChangeModal] = useState(false);
  const [userData, setUserData] = useState({
    name: user.name || "",
    picture: user.picture || "",
    email: user.email || "",
    phone: user.phone || "",
    role: user.role,
  });

  useEffect(() => {
    setUserData({
      name: user.name || "",
      picture: user.picture || "",
      email: user.email || "",
      phone: user.phone || "",
    });
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", userData.name);
      formData.append("phone", userData.phone);
      formData.append("picture", userData.picture);
      console.log(userData.picture);
      await updateUserProfile(formData);
      setUser({
        token: localStorage.getItem("token"),
        email: userData.email,
        name: userData.name,
        role: user.role,
        picture: selectedImage || user.picture,
        phone: userData.phone,
      });
      setShowChangeModal(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const confirm = () => {
    navigate("/my-profile");
    setShowChangeModal(false);
  };

  const handleCancel = (e) => {
    e.preventDefault();
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
                      selectedImage ||
                      (user.picture === null || user.picture === ""
                        ? userImage
                        : user.picture)
                    }
                    alt="Avatar"
                    style={styles.profileImage}
                  />
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    id="upload-image"
                    onChange={(e) => {
                      e.preventDefault();
                      setSelectedImage(URL.createObjectURL(e.target.files[0]));
                      setUserData({
                        ...userData,
                        picture: e.target.files[0],
                      });
                    }}
                  />
                  <label htmlFor="upload-image">
                    <Button
                      className="mt-4"
                      variant="light"
                      size="sm"
                      style={styles.uploadButton}
                      as="span"
                    >
                      Upload
                    </Button>
                  </label>
                </Col>
                <Col md="8">
                  <Card.Body style={styles.cardBody}>
                    <Card.Title as="h4">Edit Information</Card.Title>
                    <hr className="mt-0 mb-4" />
                    <Form>
                      <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={userData.name}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={user.email}
                          disabled
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type="text"
                          name="phone"
                          value={userData.phone}
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
        <Modal show={showChangeInform} centered>
          <Modal.Header closeButton>
            <Modal.Title className="text-primary">
              Update status is successfully
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ textAlign: "center" }}>
              <img
                src={success}
                alt="Successfully updated"
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
  uploadButton: {
    background: "#ffffff",
    color: "#6a11cb",
    border: "none",
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

export default EditProfile;
