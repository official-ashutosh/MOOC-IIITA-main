import PropTypes from "prop-types";
import { useState } from "react";
import { CoursesByUserContext } from "./CoursesByUserContext";

const CoursesByUserProvider = ({ children }) => {
  const [courses, setCourses] = useState({
    listCoursesByStudent: [],
    listCoursesByInstructor: [],
    totalPurchased: 0,
    totalRevenuePersonal: 0,
  });

  return (
    <CoursesByUserContext.Provider value={{ courses, setCourses }}>
      {children}
    </CoursesByUserContext.Provider>
  );
};

CoursesByUserProvider.propTypes = { children: PropTypes.node.isRequired };

export default CoursesByUserProvider;