import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Alert from "../../Components/Alert";
import { useNavigate } from "react-router-dom";
import { CDBBtn, CDBIcon } from "cdbreact";
import { getUser, loginUser } from "../../services/usersService";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import Role from "../../../../models/RoleEnum";
import logo from "../../../images/MOOC@IIITA_logo.png";

const Login = () => {
  const { setUser } = useContext(UserContext);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.background = "linear-gradient(to bottom right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/header-background.png') center center no-repeat";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';

    return () => {
      document.body.style.background = '';
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (!email || !password) {
      setError("Email and password are required");
      setLoading(false);
      return;
    }

    try {
      const data = await loginUser(email, password);
      const token = data.token;
      const dataUser = await getUser(token);
      setUser({
        token,
        email: dataUser.email,
        name: dataUser.name,
        picture: dataUser.picture,
        role: dataUser.role,
      });

      switch (dataUser.role) {
        
        default:
          navigate("/");
          break;
      }
    } catch (err) {
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    window.open(`http://online-courses-web.onrender.com/auth/${provider}`, "_self");
  };

  const styles = {
    pageContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // minHeight: '100vh',
      padding: '10px',
    },
    formContainer: {
      maxWidth: '500px',
      padding: '30px',
      backgroundColor: 'rgba(0, 123, 255, 0.85)',
      borderRadius: '8px',
      boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)',
      borderLeft: '5px solid #ffc107',
      borderRight: '5px solid #ffc107',
      marginLeft: '25%',  // Move form container slightly to the right
    },
    formHeader: {
      marginBottom: '20px',
      color: '#f8f9fa',
    },
    highlight: {
      color: '#ffc107',
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
    socialButtons: {
      display: 'flex',
      justifyContent: 'space-around',
      gap: '10px',
      marginTop: '20px',
    },
    logo: {
      maxWidth: '40%',
      // maxHeight: '200px',
      marginLeft: '25%',
    },
    alert: {
      marginTop: '20px',
    },
  };

  return (
    <Container className="p-0" style={styles.pageContainer}>
      <Row>
        <Col md="6" className="text-center d-flex flex-column justify-content-center">
          <h1 className="my-5 display-3 fw-bold text-info-emphasis">
            Login Page <br />
            <span className="text-dark-emphasis">
              for accessing the <span style={styles.highlight}>MOOC@IIITA</span> website
            </span>
          </h1>
          <img src={logo} alt="Logo" style={styles.logo} />
        </Col>

        <Col md="6">
          <Card className="my-5" style={styles.formContainer}>
            <Card.Body className="p-5">
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-4">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoFocus
                    required
                    aria-label="Email"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    aria-label="Password"
                  />
                </Form.Group>

                <Button type="submit" className="mb-4" style={styles.submitButton} disabled={loading}>
                  {loading ? 'Logging in...' : 'Login'}
                </Button>
              </Form>

              {error && <Alert msg={error} type="error" style={styles.alert} />}

              <div className="text-center mt-3">
                <Link to="/forgot-password" style={{ textDecoration: "none", fontStyle: "italic", color: '#f8f9fa' }}>
                  Forgot password?
                </Link>
              </div>

              <div className="other-login mt-5 border-top border-info-subtle">
                <p className="text-center mt-2" style={{ color: '#f8f9fa' }}>or sign up with</p>
                <div style={styles.socialButtons}>
                  <CDBBtn onClick={() => handleSocialLogin('facebook')} style={{ backgroundColor: '#3b5998', color: 'white' }}>
                    <CDBIcon fab icon="facebook-f" />
                  </CDBBtn>
                  <CDBBtn onClick={() => handleSocialLogin('github')} style={{ backgroundColor: '#333', color: 'white' }}>
                    <CDBIcon fab icon="github" />
                  </CDBBtn>
                  <CDBBtn onClick={() => handleSocialLogin('google')} style={{ backgroundColor: '#db4437', color: 'white' }}>
                    <CDBIcon fab icon="google-plus-g" />
                  </CDBBtn>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
