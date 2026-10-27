import React from "react";
import PropTypes from "prop-types";

class Alert extends React.Component {
  render() {
    const { msg, type } = this.props;

    let alertClass = "mt-4 text-light rounded-3 d-flex justify-content-center align-items-center p-1";
    if (type === "success") {
      alertClass += " bg-success";
    } else if (type === "error") {
      alertClass += " bg-danger";
    }

    return <div className={alertClass}>{msg}</div>;
  }
}

Alert.propTypes = {
  msg: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["success", "error"]).isRequired,
};

export default Alert;
