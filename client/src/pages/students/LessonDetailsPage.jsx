import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CourseIntroView from "../../Components/CourseIntroView";
import AnimatedProgressBar from "../../Components/AnimatedProgressBar";
import DocumentCard from "../../Components/DocumentCard";
import { getCourse } from "../../services/coursesService";
import { getLessonDocuments } from "../../services/documentService";
import { getLessonComments } from "../../services/commentService";
import CommentCard from "../../Components/CommentCard";

const LessonDetailsPage = () => {
  const [loading, setLoading] = useState(true);
  const { state } = useLocation();
  const [formData, setFormData] = useState({
    _id: "",
    userId: "",
    picture: "",
    title: "",
    price: "",
    description: "",
    topic: "",
    instructorName: "",
    averageStars: "",
    documents: [],
    commnets: [],
  });

  const [formLesson] = useState({
    _id: state._id,
    courseId: state.courseId,
    title: state.title,
    description: state.description,
    createdAt: state.createdAt,
  });

  useEffect(() => {
    let active = true;

    const loadLessonDetails = async () => {
      try {
        const { course, averageStars } = await getCourse(state.courseId);
        const documents = await getLessonDocuments(state._id);
        const comments = await getLessonComments(state._id);
        if (active) {
          setFormData((currentFormData) => ({
            ...currentFormData,
            _id: course._id,
            userId: course.userId,
            picture: course.picture,
            title: course.title,
            price: course.price,
            description: course.description,
            topic: course.topic,
            instructorName: course.instructorName,
            averageStars,
            documents,
            comments,
          }));
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        if (active) setLoading(false);
      }
    };

    loadLessonDetails();
    return () => {
      active = false;
    };
  }, [state._id, state.courseId]);

  return (
    <>
      {loading ? (
        <div className="container pt-5">
          <AnimatedProgressBar />
        </div>
      ) : (
        <>
          <CourseIntroView formData={formData}>
            <Link to="/create-comment" state={formLesson}>
              <button className="btn btn-primary">
                <i className="bi bi-chat-left-dots-fill"></i> Leave Comment
              </button>
            </Link>
          </CourseIntroView>
          <section className="bg-primary text-light p-5">
            <div className="container">
              <div className="d-flex justify-content-between">
                <p className="fs-3">{formLesson.title}</p>
                <p className="fs-5">
                  {new Date(formLesson.createdAt).toLocaleDateString()}
                </p>
              </div>
              {formLesson.description}
            </div>
          </section>
          <section className="p-5">
            <div className="container">
              <div className="row">
                <div className="col-8">
                  {formData.documents.length === 0 ? (
                    <p className="fs-2 text-center text-danger">
                      No document created.
                    </p>
                  ) : (
                    <>
                      {formData.documents.map((document) => (
                        <div key={document._id}>
                          <DocumentCard document={document}></DocumentCard>
                        </div>
                      ))}
                    </>
                  )}
                </div>
                <div className="col-4">
                  {formData.comments.length === 0 ? (
                    <p className="fs-2 text-center text-danger">No comment.</p>
                  ) : (
                    <>
                      {formData.comments.map((comment) => (
                        <div key={comment._id}>
                          <CommentCard comment={comment}></CommentCard>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default LessonDetailsPage;
