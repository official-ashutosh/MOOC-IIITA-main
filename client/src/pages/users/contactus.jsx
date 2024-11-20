import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ContactUsPage = () => {
  return (
    <section style={styles.section}>
      <Container className="py-4">
        <h2 className="text-center mb-4" style={styles.header}>
          Contact Us
        </h2>
        <p className="text-center mb-5" style={styles.subHeader}>
          "The beautiful thing about learning is that no one can take it away from you."
          <br />— B.B. King
        </p>

        <Row className="justify-content-center">
          {/* Contact Info Section */}

                    <Col lg={5}>
            <Card className="shadow-lg mb-4" style={styles.infoCard}>
              <Card.Body className="text-center">
                <h4 style={styles.infoTitle}>Hello, Learners!</h4>
                <p style={styles.feedbackText}>
                  Welcome to our learning platform!<br></br> We value your journey and are committed to your success.
                </p>
                <p style={styles.feedbackText}>
                  Your feedback helps us improve<br></br>and provide better learning experiences.
                </p>
                <p style={styles.feedbackText}>
                  Share your thoughts about our courses,<br></br> rate your favorite teachers, and review our website. 
                </p>
                <p style={styles.feedbackText}>
                  Help us make your learning experience better!
                </p>
                <a href="/feedback" className="btn btn-primary btn-lg mt-4">
                  Give Feedback
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={5}>
            <Card className="shadow-lg mb-4" style={styles.infoCard}>
              <Card.Body className="text-center">
                <h4 style={styles.infoTitle}>Get in Touch</h4>
                <p style={styles.infoText}>
                  Whether you have questions, feedback,<br></br> or just want to say hello, 
                  we’re here to help you<br></br> on your MOOC journey!
                </p>
                <hr />
                <p>
                  <strong>Name:</strong> Admin-mooc@iiita
                  <br />
                  <br/>
                  <strong>Email:</strong> contact@mooc.iiita.ac.in
                  <br />
                  <br/>
                  <strong>Phone:</strong> +91-123-456-7890
                  <br />
                  <br/>
                  <strong>Address:</strong> IIIT Allahabad, Jhalwa, Prayagraj,<br></br> Uttar Pradesh, India
                </p>
              </Card.Body>
            </Card>
          </Col>


          {/* Feedback Section */}
          
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
