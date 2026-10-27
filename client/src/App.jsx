import { lazy, Suspense, useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Loading from "./pages/Loading";
import GuestRoutes from "../Routes/GuestRoutes";
import { UserContext } from "./contexts/UserContext";
import Role from "../../models/RoleEnum.js";
import { getUser } from "./services/usersService";

const Login = lazy(() => import("./pages/users/Login"));
const ForgotPassword = lazy(() => import("./pages/users/ForgotPassword"));
const HomePage = lazy(() => import("./pages/users/HomePage"));
const MyProfilePage = lazy(() => import("./pages/users/MyProfilePage/MyProfilePage"));
const ResetPassword = lazy(() => import("./pages/users/ResetPassword"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const Register = lazy(() => import("./pages/users/Register"));
const UserManager = lazy(() => import("./pages/admin/UserManager"));
const MyCreatedCourses = lazy(() => import("./pages/instructors/MyCreatedCourses"));
const CreateCourse = lazy(() => import("./pages/instructors/CreateCourse"));
const CartPage = lazy(() => import("./pages/students/CartPage"));
const PersonalRevenue = lazy(() => import("./pages/instructors/PersonalRevenue"));
const InstructorManager = lazy(() => import("./pages/admin/InstructorManager"));
const CoursePage = lazy(() => import("./pages/students/CoursePage"));
const EditCourse = lazy(() => import("./pages/instructors/EditCourse"));
const EditProfile = lazy(() => import("./pages/users/MyProfilePage/EditProfile"));
const CourseManager = lazy(() => import("./pages/admin/CourseManager"));
const RevenueStatistic = lazy(() => import("./pages/admin/RevenueStatistic"));
const UpdateCourseIntro = lazy(() => import("./pages/instructors/UpdateCourseIntro"));
const UserDetail = lazy(() => import("./pages/admin/UserDetail"));
const ChangePassword = lazy(() => import("./pages/users/MyProfilePage/ChangePassword"));
const UpdateCourseDetails = lazy(() => import("./pages/instructors/UpdateCourseDetails"));
const CreateLesson = lazy(() => import("./pages/instructors/CreateLesson"));
const CheckoutPage = lazy(() => import("./pages/students/CheckoutPage"));
const MyCoursePage = lazy(() => import("./pages/students/MyCoursePage"));
const UpdateLesson = lazy(() => import("./pages/instructors/UpdateLesson"));
const UpdateLessonDetails = lazy(() => import("./pages/instructors/UpdateLessonDetails"));
const CreateDocument = lazy(() => import("./pages/instructors/CreateDocument"));
const CreateComment = lazy(() => import("./pages/instructors/CreateComment"));
const InstructorRegister = lazy(() => import("./pages/admin/InstructorRegister"));
const CourseIntroPage = lazy(() => import("./pages/students/CourseIntroPage"));
const OTPInput = lazy(() => import("./pages/users/OTPInput"));
const CourseDetails = lazy(() => import("./pages/students/CourseDetails"));
const LessonDetailsPage = lazy(() => import("./pages/students/LessonDetailsPage"));
const FeedbackForm = lazy(() => import("./pages/users/Feedback"));
const ThankYou = lazy(() => import("./pages/users/Thank"));
const InstructorApplication = lazy(() => import("./pages/instructors/InstructorApplication"));
const ThankYouPage = lazy(() => import("./pages/instructors/ThankYouPage"));
const ContactUsPage = lazy(() => import("./pages/users/contactus"));

const App = () => {
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const dataUser = await getUser(token);
        setUser({
          token,
          email: dataUser.email,
          name: dataUser.name,
          picture: dataUser.picture,
          phone: dataUser.phone,
          role: dataUser.role,
        });
        setLoading(false);
      }
    }, 0);
  }, [setUser]);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
      <Routes>
        {!user.token ||
          (loading && !user.role && <Route index element={<Loading />} />)}
        <Route element={<Layout />}>
    
          {user.role == Role.ADMIN && (
            <>
              <Route index element={<UserManager />} />
              <Route path="/instructor" element={<InstructorManager />} />
              <Route path="/course" element={<CourseManager />} />
              <Route path="/statistics" element={<RevenueStatistic />} />
              <Route path="/user" element={<UserDetail />} />
              <Route path="/register" element={<InstructorRegister />} />
              {/* <Route path="/course-manager" element={<CourseManager />}></Route> */}
            </>
          )}
          {user.role == Role.INSTRUCTOR && (
            <>
              <Route index element={<MyCreatedCourses />} />
              <Route path="/create-course" element={<CreateCourse />}></Route>
              <Route path="/edit-course" element={<EditCourse />}></Route>
              <Route path="/create-lesson" element={<CreateLesson />}></Route>
              <Route path="/feedback" element={<FeedbackForm />}></Route>
              <Route path="/thank" element={<ThankYou />}></Route>
              <Route path="/update-lesson" element={<UpdateLesson />}></Route>
              <Route
                path="/create-document"
                element={<CreateDocument />}
              ></Route>
              <Route path="/create-comment" element={<CreateComment />}></Route>
              <Route
                path="/update-lesson-details"
                element={<UpdateLessonDetails />}
              ></Route>
              <Route
                path="/update-course-details"
                element={<UpdateCourseDetails />}
              ></Route>
              <Route
                path="/personal-revenue"
                element={<PersonalRevenue />}
              ></Route>
              <Route
                path="/update-course-intro"
                element={<UpdateCourseIntro />}
              ></Route>
            </>
          )}
          {user.role != Role.ADMIN && user.role != Role.INSTRUCTOR && (
            <>
            
              <Route index element={<HomePage />} />
              <Route path="/cart" element={<CartPage />}></Route>
              <Route path="/contact-us" element={<ContactUsPage />}></Route>
              <Route path="/feedback" element={<FeedbackForm />}></Route>
              <Route path="/thank" element={<ThankYou />}></Route>
              <Route path="-courses" element={<CoursePage />}></Route>
              <Route path="/checkout" element={<CheckoutPage />}></Route>
              <Route path="/my-course" element={<MyCoursePage />}></Route>
              <Route path="/course-intro" element={<CourseIntroPage />}></Route>
              <Route path="/instructor-app" element={<InstructorApplication />}></Route>
              <Route path="/thankyou" element={<ThankYouPage />} ></Route>
              <Route path="/course-details" element={<CourseDetails />}></Route>
              <Route
                path="/lesson-details"
                element={<LessonDetailsPage />}
              ></Route>
              <Route path="/create-comment" element={<CreateComment />}></Route>
            </>
          )}
          {user.token && (
            <>
            <Route path="/list-courses" element={<CoursePage />}></Route>
            <Route path="/contact-us" element={<ContactUsPage />}></Route>
              <Route path="/my-profile" element={<MyProfilePage />}></Route>
              <Route path="/my-profile/edit" element={<EditProfile />}></Route>
              <Route
                path="/my-profile/change-password"
                element={<ChangePassword />}
              ></Route>
            </>
          )}
          <Route element={<GuestRoutes />}>
            <Route path="/list-courses" element={<CoursePage />}></Route>
            <Route path="/contact-us" element={<ContactUsPage />}></Route>
            <Route path="/feedback" element={<FeedbackForm />}></Route>
            <Route path="/thank" element={<ThankYou />}></Route>
            <Route path="/login" element={<Login />} />
            {/* <Route path="/my-course" element={<MyCoursePage />}></Route> */}
            <Route path="/register" element={<Register />} />
            <Route path="/otp-authentication" element={<OTPInput />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route
              path="/reset-password/:id/:token"
              element={<ResetPassword />}
            />
          </Route>
          {!loading && <Route path="*" element={<NotFoundPage />} />}
        </Route>
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
