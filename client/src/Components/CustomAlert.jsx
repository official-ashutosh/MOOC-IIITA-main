import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";

const MyAlert = ({ msg, variant }) => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {show && (
        <Alert variant={variant} className="mt-3">
          <i className="bi bi-check-circle-fill pe-2"></i>
          {msg}
        </Alert>
      )}
    </>
  );
};

MyAlert.propTypes = {
  msg: PropTypes.node.isRequired,
  variant: PropTypes.string.isRequired,
};

export { MyAlert };
