import PropTypes from "prop-types";
import { useState } from "react";
import { UsersContext } from "./UsersContext";

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState({ students: [], instructors: [] });

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

UsersProvider.propTypes = { children: PropTypes.node.isRequired };

export default UsersProvider;