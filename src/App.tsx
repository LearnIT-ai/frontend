import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import NavigationBar from "./components/ui/NavigationBar";
import Footer from "./components/ui/Footer";

import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OurServices from "./pages/OurServices";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import AcademicYears from "./pages/AcademicYears";
import AcademicYearCourses from "./pages/layouts/AcademicYearCourses";
import PageNotFound from "./pages/PageNotFound";
import TestCoursePage from "./pages/layouts/Course";
import TestDocumentPreview from "./pages/layouts/Topic/Topic";
import ProfilePage from "./pages/ProfilePage";

import "./App.css";
import PersonalProfile from "./components/PersonalProfile";

function App() {
  const [isErrorPage, setIsErrorPage] = useState<boolean>(false);
  const location = useLocation();

  const showFooter =
    location.pathname !== "/login" && location.pathname !== "/signup";

  useEffect(() => {
    const errorPage = document.querySelector(".error-page");
    setIsErrorPage(errorPage !== null);
  }, [location.pathname, isErrorPage]);

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, [pathname]);

    return null;
  };

  return (
    <div className="w-full flex flex-col">
      <ScrollToTop />
      {!isErrorPage && (
        <header>
          <NavigationBar />
        </header>
      )}
      <main className="w-[100vw] pt-[var(--navbar-height)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/personal-profile"
            element={
              <PersonalProfile
                params={{
                  lastName: "Surname",
                  firstName: "Name",
                  fatherName: "Father's name",
                  email: "address@gmail.com",
                  phoneNumber: "+(380) 67 192 1385",
                }}
              />
            }
          />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/academic-years" element={<AcademicYears />} />
          <Route
            path="/academic-years/:academicYear"
            element={<AcademicYearCourses />}
          />
          <Route
            path="/academic-years/:academicYear/:courseName"
            element={<TestCoursePage />}
          />
          <Route
            path="/academic-years/:academicYear/:courseName/test-document"
            element={<TestDocumentPreview />}
          />
          <Route path="/my-account" element={<ProfilePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      {showFooter && !isErrorPage && !PersonalProfile && (
        <footer>
          <Footer />
        </footer>
      )}
    </div>
  );
}

export default App;
