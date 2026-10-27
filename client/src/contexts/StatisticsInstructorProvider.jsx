import PropTypes from "prop-types";
import { useState } from "react";
import { StatisticsInstructorContext } from "./StatisticsIntructorContext";

const StatisticsInstructorProvider = ({ children }) => {
  const [statisticsInstructor, setStatisticsInstructor] = useState({
    listStatistics: [],
    totalRevenueInstructor: 0,
  });

  return (
    <StatisticsInstructorContext.Provider
      value={{ statisticsInstructor, setStatisticsInstructor }}
    >
      {children}
    </StatisticsInstructorContext.Provider>
  );
};

StatisticsInstructorProvider.propTypes = { children: PropTypes.node.isRequired };

export default StatisticsInstructorProvider;