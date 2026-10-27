import PropTypes from "prop-types";
import { useState } from "react";
import { NotificationContext } from "./NotificationContext ";

const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);

  const addNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <NotificationContext.Provider value={{ notification, addNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

NotificationProvider.propTypes = { children: PropTypes.node.isRequired };

export default NotificationProvider;