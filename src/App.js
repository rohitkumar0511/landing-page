import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

/* ---------- COMPONENTS ---------- */
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import OurCourses from "./components/OurCourses";
import Stats from "./components/Stats";
import NoticesSection from "./components/NoticesSection";
import LatestAnnouncements from "./components/LatestAnnouncements";
import ContactInfoSection from "./components/ContactInfoSection";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";

/* ---------- PAGES ---------- */
import AcademicNotices from "./pages/AcademicNotices";
import PublicNotices from "./pages/PublicNotices";
import Timetable from "./pages/Timetable";
import UpperPrimary from "./pages/UpperPrimary";
import Secondary from "./pages/Secondary";
import SeniorSecondary from "./pages/SeniorSecondary";
import CentreEnquiry from "./pages/CentreEnquiry";
import ChairmanMessage from "./pages/ChairmanMessage";
import MissionVision from "./pages/MissionVision";
import ResultPage from "./pages/ResultPage";
import EmailVerification from "./pages/EmailVerification";
import PostalVerification from "./pages/PostalVerification";
import LoginPage from "./pages/LoginPage";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <AnnouncementBar />
      <Navbar />

      <Routes>
        {/* ---------- HOME PAGE ---------- */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <OurCourses />
              <Stats />
              <NoticesSection />
              <LatestAnnouncements />
              <ContactInfoSection />
            </>
          }
        />
        {/* ---------- COURSE PAGES ---------- */}
        <Route path="/upper-primary" element={<UpperPrimary />} />
        <Route path="/secondary" element={<Secondary />} />
        <Route path="/senior-secondary" element={<SeniorSecondary />} />
        {/* ---------- NOTICE PAGES ---------- */}
        <Route path="/academic-notices" element={<AcademicNotices />} />
        <Route path="/public-notices" element={<PublicNotices />} />
        <Route path="/timetable" element={<Timetable />} />
        {/* ---------- OTHER PAGES ---------- */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/courses" element={<OurCourses />} />
        <Route path="/centre-enquiry" element={<CentreEnquiry />} />
        <Route path="/message-from-chairman" element={<ChairmanMessage />} />
        <Route path="/mission-vision" element={<MissionVision />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/postal-verification" element={<PostalVerification />} />
        <Route path="/login" element={<LoginPage />} />

        {/* ---------- 404 PAGE (Recommended) ---------- */}
        <Route
          path="*"
          element={
            <h1 style={{ textAlign: "center", marginTop: "50px" }}>
              404 - Page Not Found
            </h1>
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
