import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getCourseLessons } from "../../services/lessonsService";
import CourseIntroView from "../../Components/CourseIntroView";
import AnimatedProgressBar from "../../Components/AnimatedProgressBar";
import LessonCard from "../../Components/LessonCard";
import { getCourse } from "../../services/coursesService";

const CourseDetails = () => {
  const { state } = useLocation();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    _id: state._id,
    userId: state.userId,
    picture: state.picture,
    title: state.title,
    price: state.price,
    description: state.description,
    topic: state.topic,
    instructorName: state.instructorName,
    averageStars: state.averageStars,
    lessons: [],
  });

  useEffect(() => {
    let active = true;

    const loadCourse = async () => {
      try {
        const { averageStars } = await getCourse(state._id);
        const lessons = await getCourseLessons(state._id);
        if (active) {
          setFormData((currentFormData) => ({
            ...currentFormData,
            averageStars,
            lessons,
          }));
        }
      } catch (error) {
        console.error("Error loading course details:", error);
      } finally {
        if (active) setLoading(false);
      }
    };

    loadCourse();
    return () => {
      active = false;
    };
  }, [state._id]);

  return (
    <>
      {loading ? (
        <div className="container pt-5">
          <AnimatedProgressBar />
        </div>
      ) : (
        <>
          <CourseIntroView formData={formData}></CourseIntroView>
          <section className="p-5">
            <div className="container d-flex justify-content-center flex-wrap">
              {formData.lessons.length === 0 ? (
                <p className="fs-2 text-center text-danger">
                  No lesson created.
                </p>
              ) : (
                <>
                  {formData.lessons.map((lesson) => (
                    <div key={lesson._id}>
                      <LessonCard lesson={lesson}>
                        <Link to="/lesson-details" state={lesson}>
                          <button className="btn btn-success">
                            View Lesson Details
                          </button>
                        </Link>
                      </LessonCard>
                    </div>
                  ))}
                </>
              )}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default CourseDetails;
