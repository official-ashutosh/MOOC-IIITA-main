import PropTypes from "prop-types";
import { useState } from "react";
import { CoursesContext } from "./CoursesContext";

const CoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState({ listCourses: [] });

  return (
    <CoursesContext.Provider value={{ courses, setCourses }}>
      {children}
    </CoursesContext.Provider>
  );
};

CoursesProvider.propTypes = { children: PropTypes.node.isRequired };

export default CoursesProvider;