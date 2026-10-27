import PropTypes from "prop-types";
import { useState } from "react";
import { StatisticsContext } from "./StatisticsContext";

const StatisticsProvider = ({ children }) => {
  const [statistics, setStatistics] = useState({
    listStatistics: [],
    totalRevenuePage: 0,
  });

  return (
    <StatisticsContext.Provider value={{ statistics, setStatistics }}>
      {children}
    </StatisticsContext.Provider>
  );
};

StatisticsProvider.propTypes = { children: PropTypes.node.isRequired };

export default StatisticsProvider;