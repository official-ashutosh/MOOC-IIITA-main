import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import leaning from "../../../images/learning.png";
import fundamentals from "../../../images/fundamentals.png";
import ins1 from "../../../images/nsaini.jpg";
import ins2 from "../../../images/sonali.jpg";
import ins3 from "../../../images/gauravs.jpg";
import ins4 from "../../../images/opvyas.jpg";
import stu1 from "../../../images/stu1.png";
import stu2 from "../../../images/stu2.png";
import stu3 from "../../../images/stu3.png";
import con1 from "../../../images/ashu_iit28.jpg";
import con2 from "../../../images/krish_iit9.jpg";
import con3 from "../../../images/aniket_iit18.jpg";

const HomePage = () => {
  const { user} = useContext(UserContext);
  console.log(user);
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  return (
    <>
      <section
        className="text-light p-lg-5 pt-lg-5 text-center text-sm-start"
        style={{ backgroundColor: "rgb(125, 114, 108)" }}
      >
      <div className="container py-5">
        <div className="d-sm-flex align-items-center justify-content-between">
          <div className="me-3">
            <h1>
              Explore the Best <span className="text-warning">Courses</span> at IIITA
            </h1>
            <h1>
              & Master New <span className="text-warning">Skills</span> for the Future
            </h1>

          <p className="lead my-5">
            We are dedicated to providing high-quality online courses in cutting-edge technology fields. 
            Whether you're starting your learning journey or advancing your expertise,
            we offer courses designed to cater to all levels, from beginners to experts. 
            Our content is tailored to meet the needs of diverse learners, 
            empowering students of all ages to excel in the world of technology.
          </p>
          <p className="text" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
            Join Us Now 👇
          </p>
          <a href="/register" className="btn btn-primary btn-lg">
            Get Started
          </a>

          </div>
          <img
            className="img-fluid w-50 d-none d-sm-block d-md-block"
            src={leaning}
            alt=""
          />
        </div>
      </div>
    </section>

      

      <section className="p-5">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md">
              <div className="card bg-dark text-light h-100">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="fa fa-heart" aria-hidden="true"></i>
                  </div>
                  <h3 className="card-title mb-3">Friendly Community</h3>
                  <p className="card-text">
                    Connect and interact with other leaners, exchange
                    information about study materials, and provide support in
                    answering questions.
                  </p>
                  <a href="/list-courses" className="btn btn-primary">
                    Explore
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card bg-secondary text-light h-100">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="fa fa-laptop"></i>
                  </div>
                  <h3 className="card-title mb-3">Online Courses</h3>
                  <p className="card-text">
                    Online courses provide convenient and flexible learning
                    opportunities. Learners can access a wide range of
                    educational materials from anywhere.
                  </p>
                  <a href="/list-courses" className="btn btn-dark">
                    Explore
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card bg-dark text-light h-100">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <h3 className="card-title mb-3">Promise</h3>
                  <p className="card-text">
                    With a team of high-quality and passionate instructors,
                    learners will achieve the desired outcomes according to the
                    specific progression of each course.
                  </p>
                  <a href="/list-courses" className="btn btn-primary">
                    Explore
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="learn" className="p-1">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img
                src={fundamentals}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md p-5">
            <h2>
              We <span className="text-warning">LEARN</span> TOGETHER
            </h2>
            <p className="lead">
              MOOC@IIITA is an online learning platform focused on technical skills in the field of technology.
            </p>
            <p>
              Explore and deepen your understanding of various technical subjects. Our courses provide comprehensive 
              and practical knowledge to help you build a solid foundation in the ever-evolving world of technology. 
              Gain valuable skills, stay up-to-date with the latest trends, and unlock new opportunities in the 
              exciting realm of technology through MOOC@IIITA.
            </p>
          </div>

          </div>
        </div>
      </section>

      <section id="instructors" className="p-5" style={{ backgroundColor: "rgb(125, 114, 108)" }}>
        <div className="container">
          <h2 className="text-center text-white">Our Instructors</h2>
          <p className="lead text-center text-white mb-5">
            Our instructors all have over 5 years of experience teaching technical courses in technology-related fields.
          </p>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light h-100">
                <div className="card-body text-center">
                  <img
                    src={ins1}
                    className="rounded-circle mb-3"
                    alt="Ms. Olivia - Electrical Engineering Instructor"
                    style={{ width: "120px", height: "120px", objectFit: "cover" }}
                  />
                  <h3 className="card-title mb-3">Dr. Naveen Saini</h3>
                  <p className="card-text">
                  An experienced instructor specializing in machine learning, artificial intelligence, and software engineering.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card bg-light h-100">
                <div className="card-body text-center">
                  <img
                    src={ins2}
                    className="rounded-circle mb-3"
                    alt="Dr. Doofenshmirtz - Mechanical Engineering and Robotics Expert"
                    style={{ width: "120px", height: "120px", objectFit: "cover" }}
                  />
                  <h3 className="card-title mb-3">Dr. Sonali Agarwal</h3>
                  <p className="card-text">
                    An innovative and knowledgeable professor skilled in mechanical engineering and robotics.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card bg-light h-100">
                <div className="card-body text-center">
                  <img
                    src={ins3}
                    className="rounded-circle mb-3"
                    alt="Ms. Beast - Programming and Software Development Specialist"
                    style={{ width: "120px", height: "120px", objectFit: "cover" }}
                  />
                  <h3 className="card-title mb-3">Dr. Gaurav Srivastava</h3>
                  <p className="card-text">
                    A passionate and experienced teacher specializing in computer programming and software development.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card bg-light h-100">
                <div className="card-body text-center">
                  <img
                    src={ins4}
                    className="rounded-circle mb-3"
                    alt="Ms. Martinez - Civil Engineering and Structural Design Instructor"
                    style={{ width: "120px", height: "120px", objectFit: "cover" }}
                  />
                  <h3 className="card-title mb-3">	
                  Prof. Om Prakash Vyas </h3>
                  <p className="card-text">
                    An enthusiastic teacher with a background in object oriented engineering, focusing on structural design and construction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="p-5">
        <div className="container">
          <h2 className="text-center mb-4">Student Feedback</h2>
          <div
            id="carouselExampleCaptions"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row align-items-center justify-content-between">
                  <div className="col-1"></div>
                  <div className="col-5">
                    <img
                      src={stu1}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="col-4">
                    <h2>UTKARSH SHARMA</h2>
                    <p className="lead">
                      <b>Age:</b> 17
                    </p>
                    <p>
                      "The technology engineering courses I enrolled in were
                      truly outstanding. The Software Engineering course
                      equipped me with practical software development skills and
                      taught me how to work effectively in a team. The Database
                      Management course provided a solid understanding of
                      designing and managing databases. Furthermore, the
                      Cybersecurity course shed light on the importance of
                      protecting digital assets and taught me valuable
                      techniques to secure systems. The instructors were highly
                      experienced, and the course content was engaging and
                      up-to-date. I am grateful for the knowledge gained from
                      these courses."
                    </p>
                  </div>
                  <div className="col-1"></div>
                </div>
                <div className="carousel-caption text-dark d-none d-md-block">
                  <b>Registered Courses:</b> Software Engineering, Database
                  Management, Cybersecurity
                </div>
              </div>
              <div className="carousel-item">
                <div className="row align-items-center justify-content-between">
                  <div className="col-1"></div>
                  <div className="col-5">
                    <img
                      src={stu2}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="col-4">
                    <h2>ANIKET SOOD</h2>
                    <p className="lead">
                      <b>Age:</b> 20
                    </p>
                    <p>
                      "I am extremely satisfied with the technology engineering
                      courses I have taken. The Introduction to Computer Science
                      course provided a solid foundation and helped me
                      understand the core concepts. The Data Structures and
                      Algorithms course enhanced my problem-solving skills, and
                      the Machine Learning course introduced me to the
                      fascinating world of artificial intelligence. The course
                      materials were comprehensive, and the instructors were
                      knowledgeable and supportive. I feel well-prepared to
                      pursue further studies and apply these skills in
                      real-world projects."
                    </p>
                  </div>
                  <div className="col-1"></div>
                </div>
                <div className="carousel-caption text-dark d-none d-md-block">
                  <b>Registered Courses:</b> Introduction to Computer Science,
                  Data Structures and Algorithms, Machine Learning
                </div>
              </div>
              <div className="carousel-item">
                <div className="row align-items-center justify-content-between">
                  <div className="col-1"></div>
                  <div className="col-5">
                    <img
                      src={stu3}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="col-4">
                    <h2>ISHA VERMA</h2>
                    <p className="lead">
                      <b>Age:</b> 17
                    </p>
                    <p>
                      "The technology engineering courses I completed were
                      exceptional. The Networking Fundamentals course deepened
                      my understanding of computer networks and protocols. The
                      Cloud Computing course introduced me to the concepts and
                      technologies behind cloud-based services, enabling me to
                      leverage the power of the cloud for various applications.
                      The Internet of Things course opened my eyes to the vast
                      potential of interconnected devices and taught me how to
                      develop IoT solutions. The courses were well-structured,
                      and the instructors were highly knowledgeable and
                      supportive. I am grateful for the invaluable skills gained
                      through these courses."
                    </p>
                  </div>
                  <div className="col-1"></div>
                </div>
                <div className="carousel-caption text-dark d-none d-md-block">
                  <b>Registered Courses:</b> Networking Fundamentals, Cloud
                  Computing, Internet of Things
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

        
      {/* Contributors Section */}
      <section id="contributors" className="p-5 bg-secondary">
          <h2 className="text-center text-white">Meet Our Contributors</h2>
          <p className="lead text-center text-white mb-4">
            "Alone we can do so little; together we can do so much." — Helen Keller
          </p>
          <div className="row g-4">
            {/* Contributor 1 */}
            <div className="col-md-6 col-lg-4">
              <div className="card bg-light h-100 shadow-sm">
                <div className="card-body text-center">
                  <img
                    src={con2}
                    alt="Krish Patel"
                    className="rounded-circle mb-3"
                    style={{ width: "120px", height: "120px", objectFit: "cover" }}
                  />
                  <h5 className="card-title mb-3">Krish Patel</h5>
                  <p className="card-text">
                    "The best way to predict the future is to create it."
                  </p>
                </div>
              </div>
            </div>

            {/* Contributor 2 */}
            <a 
              className="col-md-6 col-lg-4 text-decoration-none" 
              href="https://www.linkedin.com/in/ashusolver/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className="card bg-light h-100 shadow-sm">
                <div className="card-body text-center">
                  <img
                    src={con1}
                    alt="Ashutosh Kumar"
                    className="rounded-circle mb-3"
                    style={{ width: "120px", height: "120px", objectFit: "cover" }}
                  />
                  <h5 className="card-title mb-3">Ashutosh Kumar</h5>
                  <p className="card-text">
                    "Education is the most powerful weapon you can use to change the world."
                  </p>
                </div>
              </div>
            </a>

            {/* Contributor 3 */}
            <div className="col-md-6 col-lg-4">
              <div className="card bg-light h-100 shadow-sm">
                <div className="card-body text-center">
                  <img
                    src={con3}
                    alt="Aniket Gupta"
                    className="rounded-circle mb-3"
                    style={{ width: "120px", height: "120px", objectFit: "cover" }}
                  />
                  <h5 className="card-title mb-3">Aniket Gupta</h5>
                  <p className="card-text">
                    "Learning never exhausts the mind."
                  </p>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default HomePage;
