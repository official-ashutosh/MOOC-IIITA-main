import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";
import Alert from "../../Components/Alert";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { CDBBtn, CDBIcon } from "cdbreact";
import {
  getUser,
  loginUser,
  loginUserSocial,
} from "../../services/usersService";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import Role from "../../../../models/RoleEnum";
import logo from "../../../images/MOOC@IIITA_logo.png";

const Login = () => {
  const { setUser } = useContext(UserContext);

  //error State
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [user, setUser] = useState(null);
  const navigate = useNavigate();

  //Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(email, password);
      const token = data.token;
      const dataUser = await getUser(token);
      setUser({
        // id: dataUser._id,
        token,
        email: dataUser.email,
        name: dataUser.name,
        picture: dataUser.picture,
        role: dataUser.role,
      });

      if (dataUser.user.role === Role.ADMIN) {
        navigate("/admin");
      } else if (dataUser.user === Role.INSTRUCTOR) {
        navigate("/instructor");
      } else {
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async (e) => {
    window.open("http://online-courses-web.onrender.com/auth/google", "_self");
    e.preventDefault();
    try {
      const data = await loginUserSocial();
      const token = data.token;
      const dataUser = await getUser(token);
      setUser({
        token,
        email: dataUser.user.email,
        name: dataUser.user.name,
        picture: dataUser.user.picture,
        role: dataUser.user.role,
      });

      if (dataUser.user.role === Role.ADMIN) {
        navigate("/admin");
      } else if (dataUser.user === Role.INSTRUCTOR) {
        navigate("/instructor");
      } else {
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleFacebookLogin = async (e) => {
    window.open(`http://online-courses-web.onrender.com/auth/facebook`, "_self");

    e.preventDefault();
    try {
      const data = await loginUserSocial();
      const token = data.token;
      const dataUser = await getUser(token);
      setUser({
        token,
        email: dataUser.user.email,
        name: dataUser.user.name,
        picture: dataUser.user.picture,
        role: dataUser.user.role,
      });

      if (dataUser.user.role === Role.ADMIN) {
        navigate("/admin");
      } else if (dataUser.user === Role.INSTRUCTOR) {
        navigate("/instructor");
      } else {
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGithubLogin = async (e) => {
    window.open(`http://online-courses-web.onrender.com/auth/github`, "_self");
    e.preventDefault();
    try {
      const data = await loginUserSocial();
      const token = data.token;
      const dataUser = await getUser(token);
      setUser({
        token,
        email: dataUser.user.email,
        name: dataUser.user.name,
        picture: dataUser.user.picture,
        role: dataUser.user.role,
      });

      if (dataUser.user.role === Role.ADMIN) {
        navigate("/admin");
      } else if (dataUser.user === Role.INSTRUCTOR) {
        navigate("/instructor");
      } else {
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <Container className="p-4">
      <Row>
            <Col md={5} className="d-flex flex-column align-items-center text-center">
        <img
          src={logo}
          alt="Logo"
          style={{
            paddingTop : "100px",
            maxWidth: "80%",
            height: "auto",
            padding: "40px",
            borderRadius: "10px",
          }}
          className="mb-3"
        />
        <h3 className="text-center text-info-emphasis fw-bold" style={{ fontSize: "2.6rem" }}>
        Access your MOOC@IIITA Account
        </h3>
        <p className="text-muted text-center mt-3" style={{ fontSize: "1.1rem", lineHeight: "1.5" }}>
          Become a part of our amazing instructor team today! Join us in shaping the future of education.
        </p>
        
      </Col>


      <Col md="7" className="d-flex flex-column align-items-end">
  <Card className="shadow-lg my-5" style={{ width: "100%", maxWidth: "600px" }}>
    <Card.Body className="p-5">
      {/* Login Page Header */}
      <div className="text-center mb-4">
        <h2 className="text-info-emphasis fw-bold" style={{ fontSize: "2rem" }}>
          Login Page
        </h2>
      </div>

      {/* Form */}
      <Form>
        <Form.Group className="mb-4">
          <Form.Label className="fw-semibold">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            className="p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label className="fw-semibold">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            className="p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Row className="d-flex justify-content-center ">
                <Button
                  className="mb-4 col-3"
                  size="md"
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </Row>

        <div className="text-center mb-3">
          <a
            href="/forgot-password"
            style={{
              textDecoration: "none",
              fontStyle: "italic",
              color: "#6c757d",
            }}
          >
            Forgot password?
          </a>
        </div>

        <div className="other-login border-top pt-4">
          <p className="text-center text-muted mb-3">Or login with</p>
          <div className="d-flex justify-content-center gap-3">
            <CDBBtn
              color="white"
              className="fs-5 p-2"
              style={{
                borderRadius: "50%",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
              onClick={handleFacebookLogin}
            >
              <CDBIcon fab icon="facebook-f" />
            </CDBBtn>
            <CDBBtn
              color="white"
              className="fs-5 p-2"
              style={{
                borderRadius: "50%",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
              onClick={handleGithubLogin}
            >
              <CDBIcon fab icon="github" />
            </CDBBtn>
            <CDBBtn
              color="white"
              className="fs-5 p-2"
              style={{
                borderRadius: "50%",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
              onClick={handleGoogleLogin}
            >
              <CDBIcon fab icon="google-plus-g" />
            </CDBBtn>
          </div>
        </div>
      </Form>

      {error && (
        <Alert
          msg={error}
          type="error"
          style={{
            marginTop: "20px",
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

export default Login;
