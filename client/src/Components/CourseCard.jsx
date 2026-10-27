import PropTypes from "prop-types";

const CourseCard = ({ course, children }) => {
  return (
    <div className={`card h-100 ${course.visibility ? "" : "opacity-50"}`}>
      <img
        src={course.picture}
        className="card-img-top object-fit-contain"
        style={{ height: "200px" }}
      />
      <div className="card-header">
        <h5>{course.title}</h5>
        <div className="d-flex align-items-center">
          <div className="flex-grow-1">🎓 {course.instructorName}</div>
          <i>{new Date(course.createdAt).toLocaleDateString()}</i>
        </div>
      </div>
      <div className="card-body">
        <div className="d-flex align-items-center">
          <div className={`lead text-success`}>💲{course.price}</div>
          <div className="flex-grow-1">
            <p className="text-primary text-end">{course.topic}</p>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="d-flex align-items-center">{children}</div>
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  course: PropTypes.shape({
    visibility: PropTypes.bool,
    picture: PropTypes.string,
    title: PropTypes.string,
    instructorName: PropTypes.string,
    createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    price: PropTypes.number,
    topic: PropTypes.string,
  }).isRequired,
  children: PropTypes.node,
};

export default CourseCard;
