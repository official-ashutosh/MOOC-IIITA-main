import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useEffect, useState } from "react";
import { searchCourses } from "../../services/coursesService";
import AnimatedProgressBar from "../../Components/AnimatedProgressBar";
import CourseCard from "../../Components/CourseCard";
import Topic from "../../../../models/TopicEnum.js";
import { CoursesContext } from "../../contexts/CoursesContext.jsx";
import imgSample from "../../../images/course.png";
import { useNotification } from "../../contexts/NotificationContext ";
// import { addToCart } from "../../services/cartsService.js";
import { Toast, ToastContainer } from "react-bootstrap";
import { addToCart, getCart } from "../../services/cartsService.js";
import { CartContext } from "../../contexts/CartContext";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CoursePage = () => {
  const { courses, setCourses } = useContext(CoursesContext);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("ALL");
  const [selectedSort, setSelectedSort] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pages, setPages] = useState([]);
  const [notification, setNotification] = useState({ message: "", type: "" });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");
  const { setItemCount } = useContext(CartContext);
  const [cartItems, setCartItems] = useState([]);

  const topics = [
    "ALL",
    Topic.WEB,
    Topic.AI,
    Topic.DATA,
    Topic.MOBILE,
    Topic.GAME,
    Topic.SOFTWARE,
  ];
  const navigate = useNavigate();
  const handleAddToCart = async (courseId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    try {
      const result = await addToCart(courseId);
      setToastMessage("Successfully Added to Cart!");
      setToastType("success");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
      fetchData();
      setItemCount(cartItems.length + 1);
    } catch (error) {
      setToastMessage(error.toString());
      setToastType("danger");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
    }
  };

  const handleSearch = async () => {
    setCurrentPage(1);
    await updateDisplay();
  };

  // Simpler Toast Component
  const renderToast = () => {
    if (!showToast) return null;
    return (
      <ToastContainer
        className="p-3"
        position="top-end"
        style={{ position: "fixed", top: 0, right: 0, zIndex: 1050 }}
      >
        <Toast
          onClose={() => setShowToast(false)}
          bg={toastType}
          delay={10000}
          autohide
        >
          <Toast.Header>
            <strong className="me-auto">Notification</strong>
            <small>Just now</small>
          </Toast.Header>
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    );
  };
  const updateDisplay = async () => {
    setLoading(true);
    const data = await searchCourses({
      keyword: searchValue,
      topic: selectedTopic,
      page: currentPage,
      sort: selectedSort,
    });
    setCourses({ ...courses, listCourses: data.courses });
    setPages(Array.from({ length: data.totalPages }, (_, index) => index + 1));
    setTotalPages(data.totalPages);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    if (notification.message) {
      if (notification.type === "success") {
        updateDisplay();
      }
    }
    setTimeout(async () => {
      await updateDisplay();
    }, 100);
  }, [selectedTopic, selectedSort, currentPage, notification]);
  const fetchData = async () => {
    try {
      const data = await getCart();
      if (data) {
        setCartItems(data.courseDetails);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  return (
    <>
      {/* {notification.message && (
        <div
          className={`alert alert-${
            notification.type === "success" ? "success" : "danger"
          }`}
        >
          {notification.message}
        </div>
      )}     */}
      {renderToast()}
      
      <section className="bg-primary text-light p-5">
  <div className="container">
    <div className="row">
      <div className="d-md-flex justify-content-between align-items-center">
        <div className="col-4">
          <h2 className="mb-3 mb-md-0">
            What are you <span className="text-warning">looking</span> for?
          </h2>
        </div>
        <div className="col">
          <div className="input-group news-input shadow">
            <span className="input-group-text bg-warning text-dark">
              <i className="fa fa-search" aria-hidden="true"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search for courses, topics..."
              value={searchValue}
              onChange={(e) => {
                e.preventDefault();
                setSearchValue(e.target.value);
              }}
            />
            <button className="btn btn-success" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="p-5">
  <div className="container">
    {loading ? (
      <AnimatedProgressBar />
    ) : (
      <div className="row">
        {/* Filter Section */}
        <div className="col-md-3">
          <div className="card p-3 shadow">
            <h4 className="text-warning">Filter Options</h4>
            <div className="input-group pb-4">
              <span className="input-group-text bg-warning text-light">
                <i className="fa fa-sort" aria-hidden="true"></i>
              </span>
              <select
                className="form-select"
                value={selectedSort}
                onChange={(e) => {
                  e.preventDefault();
                  setCurrentPage(1);
                  setSelectedSort(e.target.value);
                }}
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="highestPrice">Highest Price</option>
                <option value="lowestPrice">Lowest Price</option>
              </select>
            </div>
            <ul className="list-group">
              <li className="list-group-item bg-warning text-light text-center">
                <b>Topics</b>
              </li>
              {topics.map((topic) => (
                <li className="list-group-item" key={topic}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      value={topic}
                      checked={selectedTopic === topic}
                      onChange={(e) => {
                        e.preventDefault();
                        setSelectedTopic(topic);
                        setCurrentPage(1);
                      }}
                      id={`radio-${topic}`}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`radio-${topic}`}
                    >
                      {topic.toUpperCase()}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Course Section */}
        <div className="col-md-9">
          <div className="row row-cols-1 row-cols-md-3 g-4 pb-4">
            {courses.listCourses.length === 0 ? (
              <p className="fs-3 text-center text-danger">No Courses Found</p>
            ) : (
              courses.listCourses.map((course) => (
                <div key={course._id}>
                  <CourseCard course={course}>
                    <div className="d-flex justify-content-between align-items-center">
                      <Link
                        to="/course-intro"
                        state={course}
                        className="btn btn-outline-primary w-100 me-2"
                      >
                        View Intro
                      </Link>
                      <button
                        className="btn btn-outline-warning"
                        onClick={(e) => {
                          e.preventDefault();
                          handleAddToCart(course._id);
                        }}
                      >
                        <i className="bi bi-cart4"></i>
                      </button>
                    </div>
                  </CourseCard>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    )}
  </div>
</section>

{/* Pagination */}
{!loading && pages.length > 0 && (
  <div className="d-flex justify-content-center">
    <ul className="pagination">
      <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
        <button
          className="page-link"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage(currentPage - 1);
          }}
        >
          Previous
        </button>
      </li>
      {pages.map((page) => (
        <li
          key={page}
          className={`page-item ${currentPage === page ? "active" : ""}`}
        >
          <button
            className="page-link"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(page);
            }}
          >
            {page}
          </button>
        </li>
      ))}
      <li
        className={`page-item ${
          currentPage === totalPages ? "disabled" : ""
        }`}
      >
        <button
          className="page-link"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage(currentPage + 1);
          }}
        >
          Next
        </button>
      </li>
    </ul>
  </div>
)}

<section className="bg-dark text-light p-lg-0 pt-lg-5 text-center text-sm-start">
  <div className="container">
    <div className="d-sm-flex align-items-center justify-content-between">
      <div>
        <h1>
          <span className="text-warning">MOOC</span>@IIITA Courses
        </h1>
        <p className="lead my-4">
          Discover courses that will transform your learning journey:
        </p>
        <ul className="list-group bg-dark text-light">
          <li className="list-group-item bg-dark text-light">
            <b>1.</b> Explore programming languages for software development.
          </li>
          <li className="list-group-item bg-dark text-light">
            <b>2.</b> Dive into data science for valuable insights.
          </li>
          <li className="list-group-item bg-dark text-light">
            <b>3.</b> Learn about emerging technologies like AI and cybersecurity.
          </li>
          <li className="list-group-item bg-dark text-light">
            <b>4.</b> Gain skills in digital marketing for global connectivity.
          </li>
          <li className="list-group-item bg-dark text-light">
            <b>5.</b> Explore entrepreneurship for leveraging technology in business.
          </li>
        </ul>
        <p className="my-4">
          Transform your aspirations into achievements with MOOC@IIITA and shape a brighter future together.
        </p>
      </div>
      <img
        className="img-fluid w-50 d-none d-sm-block d-md-block"
        src={imgSample}
        alt="MOOC Courses"
      />
    </div>
  </div>
</section>

    </>
  );
};

export default CoursePage;
