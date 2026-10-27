import PropTypes from "prop-types";
import { useState } from "react";
import { UserDetailContext } from "./UserDetailContext";

const UserDetailProvider = ({ children }) => {
  const [user, setUser] = useState({
    token: null,
    email: null,
    name: null,
    picture: null,
    phone: null,
    role: null,
    description: null,
    createdCourses: [],
  });

  return (
    <UserDetailContext.Provider value={{ user, setUser }}>
      {children}
    </UserDetailContext.Provider>
  );
};

UserDetailProvider.propTypes = { children: PropTypes.node.isRequired };

export default UserDetailProvider;