import "./i18n";

import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import NavigationBar from "./components/ui/NavigationBar";
import Footer from "./components/ui/Footer";

import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OurServices from "./pages/OurServices";
import AboutUs from "./pages/AboutUs";
import UploadFile from "./pages/UploadDocs/UploadFile";
import SubmitAssignment from "./pages/UploadDocs/SubmitAssignment";
import Contacts from "./pages/Contacts";
import AcademicYears from "./pages/AcademicYears";
import AcademicYearCourses from "./pages/layouts/AcademicYearCourses";
import PageNotFound from "./pages/PageNotFound";
import CoursePage from "./pages/layouts/Course";
import DocumentPreview from "./pages/layouts/Topic/Topic";
import AssignmentFeedback from "./pages/AssignmentFeedback";

import "./App.css";
import PersonalProfile from "./pages/PersonalProfile";
import UploadText from "./pages/UploadDocs/UploadText";
import CheckAssignment from "./pages/AllAssignments.tsx/CheckAssignment/CheckAssignment";
import ChatBot from "./pages/Chatbot/ChatBot";
import AllAssignments from "./pages/AllAssignments.tsx/AllAssignments";
import AssignmentsByCourse from "./pages/AllAssignments.tsx/AssignmentsByCourse";
import AssignmentPage from "./pages/AllAssignments.tsx/AssignmentPage";
import UploadAssignment from "./pages/AllAssignments.tsx/UploadAssignment/UploadAssignment";
import CheckSimilarity from "./pages/CheckSimilarity/CheckSimilarity";
import UploadTexts from "./pages/CheckSimilarity/UploadText";
import UploadFiles from "./pages/CheckSimilarity/UploadFile";

function App() {
  const [isErrorPage, setIsErrorPage] = useState<boolean>(false);
  const location = useLocation();

  const showFooter =
    location.pathname !== "/login" &&
    location.pathname !== "/signup" &&
    location.pathname !== "/personal-profile";

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
    <div className="w-full flex flex-col" id="app-container">
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
          <Route path="/personal-profile" element={<PersonalProfile />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/academic-years" element={<AcademicYears />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/all-assignments" element={<AllAssignments />} />
          <Route
            path="/all-assignments/:courseName"
            element={<AssignmentsByCourse />}
          />
          <Route
            path="/all-assignments/:courseName/upload-assignment"
            element={<UploadAssignment />}
          />
          <Route
            path="/all-assignments/:courseName/:id"
            element={<AssignmentPage />}
          />
          <Route
            path="/all-assignments/:courseName/:id/:student"
            element={<CheckAssignment />}
          />
          <Route path="/submit-assignment" element={<SubmitAssignment />} />
          <Route
            path="/submit-assignment/upload-file"
            element={<UploadFile />}
          />
          <Route
            path="/submit-assignment/upload-text"
            element={<UploadText />}
          />
          <Route path="/check-similarity" element={<CheckSimilarity />} />
          <Route
            path="/check-similarity/upload-file"
            element={<UploadFiles />}
          />
          <Route
            path="/check-similarity/upload-text"
            element={<UploadTexts />}
          />
          <Route path="/assignment-feedback" element={<AssignmentFeedback />} />
          <Route
            path="/academic-years/:academicYear"
            element={<AcademicYearCourses />}
          />
          <Route
            path="/academic-years/:academicYear/:courseName"
            element={<CoursePage />}
          />
          <Route
            path="/academic-years/:academicYear/:courseName/:docName"
            element={<DocumentPreview />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      {showFooter && !isErrorPage && (
        <footer>
          <Footer />
        </footer>
      )}
    </div>
  );
}

export default App;
