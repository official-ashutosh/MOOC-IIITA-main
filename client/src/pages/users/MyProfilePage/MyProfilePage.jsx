import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import { UserContext } from "../../../contexts/UserContext";
import userImage from "../../../../images/user.png";

const MyProfilePage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate("/my-profile/edit");
  };

  const handleChangePassword = () => {
    navigate("/my-profile/change-password");
  };

  return (
    <section style={styles.section}>
      <Container className="py-5">
        <Row className="justify-content-center align-items-center">
          <Col lg="6">
            <Card className="shadow-lg" style={styles.card}>
              <Row className="g-0" style={{ height: "500px" }}> {/* Adjusted height */}
                <Col
                  md="4"
                  className="text-center text-white"
                  style={styles.leftPanel}
                >
                  <Card.Img
                    className="rounded-circle my-5"
                    src={user.picture || userImage}
                    alt="Avatar"
                    style={styles.profileImage}
                  />
                  <Card.Title as="h5">{user.name}</Card.Title>
                  <Card.Text as="h6">{user.role}</Card.Text>
                  <Button
                    className="mt-4"
                    variant="light"
                    size="sm"
                    style={styles.editButton}
                    onClick={handleEditProfile}
                  >
                    Edit Profile
                  </Button>
                </Col>
                <Col md="8">
                  <Card.Body style={styles.cardBody}>
                    <Card.Title as="h4">Information</Card.Title>
                    <hr className="mt-0 mb-4" />
                    <Row className="pt-1">
                      <Col size="6" className="mb-3">
                        <Card.Title as="h6">Email</Card.Title>
                        <Card.Text className="text-muted">{user.email}</Card.Text>
                      </Col>
                      <Col size="6" className="mb-3">
                        <Card.Title as="h6">Phone</Card.Title>
                        <Card.Text className="text-muted">{user.phone}</Card.Text>
                      </Col>
                    </Row>

                    <Card.Title as="h5" className="mt-4">
                      Contact via
                    </Card.Title>
                    <hr className="mt-0 mb-4" />
                    <Row className="pt-1">
                      <Col size="6" className="mb-3">
                        <Card.Title as="h6">Email</Card.Title>
                        <Card.Text className="text-muted">{user.email}</Card.Text>
                      </Col>
                      <Col size="6" className="mb-3">
                        <Card.Title as="h6">Phone</Card.Title>
                        <Card.Text className="text-muted">{user.phone}</Card.Text>
                      </Col>
                    </Row>

                    <div className="d-flex justify-content-start mt-4">
                      <a href="#!" className="me-3" style={styles.socialIcon}>
                        <i className="fab fa-facebook fa-lg"></i>
                      </a>
                      <a href="#!" className="me-3" style={styles.socialIcon}>
                        <i className="fab fa-twitter fa-lg"></i>
                      </a>
                      <a href="#!" className="me-3" style={styles.socialIcon}>
                        <i className="fab fa-instagram fa-lg"></i>
                      </a>
                    </div>

                    <div className="text-center mt-4">
                      <Button
                        variant="outline-primary"
                        size="sm"
                        style={styles.passwordButton}
                        onClick={handleChangePassword}
                      >
                        Change Password
                      </Button>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const styles = {
  section: {
    background: "#ffffff", // Changed to white
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
  editButton: {
    background: "#ffffff",
    color: "#6a11cb",
    border: "none",
  },
  cardBody: {
    backgroundColor: "#f8f9fa",
    padding: "30px",
    borderRadius: "15px",
  },
  socialIcon: {
    color: "#6a11cb",
    fontSize: "1.5rem",
    paddingBottom: "30px",
    transition: "0.3s",
  },
  passwordButton: {
    borderColor: "#6a11cb",
    color: "#6a11cb",
    fontWeight: "bold",
  },
};

export default MyProfilePage;
