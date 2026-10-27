import PropTypes from "prop-types";

const LessonCard = ({ lesson, children }) => {
  return (
    <>
      <div className="mb-5">
        <div className={`card h-100 bg-warning-subtle`} style={{ width: "1000px" }}>
          <div className="card-header">
            <div className="d-flex justify-content-between">
              <p className="fs-4 text-primary">{lesson.title}</p>
              <div>{children}</div>
            </div>
          </div>
          <div className="card-body">{lesson.description}</div>
          <div className="card-footer text-end">
            {new Date(lesson.createdAt).toLocaleDateString()}
          </div>
        </div>
      </div>
    </>
  );
};

LessonCard.propTypes = {
  lesson: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  }).isRequired,
  children: PropTypes.node,
};

export default LessonCard;
