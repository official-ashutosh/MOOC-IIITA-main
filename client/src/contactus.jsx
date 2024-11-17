import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ContactUsPage = () => {
  return (
    <section style={styles.section}>
      <Container className="py-5">
        <h2 className="text-center mb-4" style={styles.header}>
          Contact Us
        </h2>
        <p className="text-center mb-5" style={styles.subHeader}>
          "The beautiful thing about learning is that no one can take it away from you."
          <br />— B.B. King
        </p>

        <Row className="justify-content-center">
          {/* Contact Info Section */}
          <Col lg={4}>
            <Card className="shadow-lg mb-4" style={styles.infoCard}>
              <Card.Body className="text-center">
                <h4 style={styles.infoTitle}>Get in Touch</h4>
                <p style={styles.infoText}>
                  Whether you have questions, feedback, or just want to say hello, 
                  we’re here to help you on your MOOC journey!
                </p>
                <hr />
                <p>
                  <strong>Email:</strong> contact@mooc.iiita.ac.in
                  <br />
                  <strong>Phone:</strong> +91-123-456-7890
                  <br />
                  <strong>Address:</strong> IIIT Allahabad, Devghat, Jhalwa, Prayagraj, Uttar Pradesh, India
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Feedback Section */}
          <Col lg={6}>
            <section className="text-center p-5">
              <div className="container">
                <h2 style={styles.feedbackHeader}>We value your feedback!</h2>
                <p style={styles.feedbackText}>
                  Your feedback helps us improve and provide better learning experiences.
                </p>
                <a href="/feedback" className="btn btn-primary btn-lg">
                  Give Feedback
                </a>
              </div>
            </section>
          </Col>
        </Row>


      </Container>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
    paddingTop: "30px",
    paddingBottom: "30px",
  },
  header: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#343a40",
  },
  subHeader: {
    fontSize: "1.2rem",
    color: "#6c757d",
  },
  infoCard: {
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    border: "none",
  },
  infoTitle: {
    fontWeight: "600",
    color: "#343a40",
  },
  infoText: {
    fontSize: "1rem",
    color: "#6c757d",
  },
  feedbackHeader: {
    fontSize: "1.8rem",
    fontWeight: "600",
    color: "#343a40",
  },
  feedbackText: {
    fontSize: "1rem",
    color: "#6c757d",
  },
  quote: {
    fontStyle: "italic",
    color: "#343a40",
    margin: "20px 0",
  },
};

export default ContactUsPage;
