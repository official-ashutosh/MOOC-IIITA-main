import userImg from "../../images/user.png";
import PropTypes from "prop-types";

const CommentCard = ({ comment }) => {
  return (
    <>
      <div className="mb-3">
        <div className={`card h-100`}>
          <div className="card-header">
            <div className="row">
              <div className={`col-2`}>
                <img
                  src={
                    comment.userPicture !== "" ? comment.userPicture : userImg
                  }
                  className="object-fit-contain rounded-circle"
                  style={{ height: "50px" }}
                  alt="User Avatar"
                />
              </div>
              <div className="col">
                <b className="text-start text-primary">{comment.userName}</b>
                <p className="text-start">
                  {new Date(comment.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
          <div className="card-body">{comment.content}</div>
        </div>
      </div>
    </>
  );
};

CommentCard.propTypes = {
  comment: PropTypes.shape({
    userPicture: PropTypes.string,
    userName: PropTypes.string,
    createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    content: PropTypes.string,
  }).isRequired,
};

export default CommentCard;
