import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import UserProvider from "./contexts/UserProvider.jsx";
import UsersProvider from "./contexts/UsersProvider.jsx";
import CartProvider from "./contexts/CartProvider.jsx";
import CoursesProvider from "./contexts/CoursesProvider.jsx";
import NotificationProvider from "./contexts/NotificationProvider.jsx";
import StatisticsProvider from "./contexts/StatisticsProvider.jsx";
import UserDetailProvider from "./contexts/UserDetailProvider.jsx";
import StatisticsInstructorProvider from "./contexts/StatisticsInstructorProvider.jsx";
import CoursesByUserProvider from "./contexts/CoursesByUserProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CoursesByUserProvider>
      <StatisticsProvider>
        <StatisticsInstructorProvider>
          <NotificationProvider>
            <UserDetailProvider>
              <CoursesProvider>
                <CartProvider>
                  <CoursesProvider>
                    <UsersProvider>
                      <UserProvider>
                        <App />
                      </UserProvider>
                    </UsersProvider>
                  </CoursesProvider>
                </CartProvider>
              </CoursesProvider>
            </UserDetailProvider>
          </NotificationProvider>
        </StatisticsInstructorProvider>
      </StatisticsProvider>
    </CoursesByUserProvider>
  </React.StrictMode>
);
