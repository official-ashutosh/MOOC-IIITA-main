import PropTypes from "prop-types";
import { useState } from "react";
import { UserContext } from "./UserContext";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    token: localStorage.getItem("token"),
    email: null,
    name: null,
    picture: null,
    phone: null,
    role: null,
    createdCourses: [],
    cartId: localStorage.getItem("cartId"),
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = { children: PropTypes.node.isRequired };

export default UserProvider;