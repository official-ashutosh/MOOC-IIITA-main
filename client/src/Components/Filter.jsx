import PropTypes from "prop-types";
import { useState } from "react";

const Filter = ({ topics, onFilter }) => {
  const [selectedTopic, setSelectedTopic] = useState("");

  const handleFilterChange = (e) => {
    setSelectedTopic(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div className="filter">
      <h3>Filter by Topic:</h3>
      <select value={selectedTopic} onChange={handleFilterChange}>
        <option value="">All</option>
        {topics.map((topic) => (
          <option key={topic} value={topic}>
            {topic}
          </option>
        ))}
      </select>
    </div>
  );
};

Filter.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
