import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import AllMembersPage from "./components/Pages/AllMembersPage";
import AllFestivalsPage from "./components/Pages/AllFestivalsPage";
import AllSportsPage from "./components/Pages/AllSportsPage";
import AboutUsPage from "./components/Pages/AboutUsPage";
import Loader from "./components/Loader";
import AdminLayout from "./components/Admin/AdminLayout";
import MemberRegistrationPage from "./components/Pages/MemberRegistrationPage";
import AdminPanel from "./components/Pages/AdminPanel";

// ScrollToTop component to reset window scroll position on navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Routes with Navbar + Footer */}
        <Route
          path="/*"
          element={
            <div className="flex flex-col min-h-screen bg-[#FAF7F0] text-[#2B231D]">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/all-members" element={<AllMembersPage />} />
                  <Route path="/all-festivals" element={<AllFestivalsPage />} />
                  <Route path="/all-sports" element={<AllSportsPage />} />
                  <Route path="/about" element={<AboutUsPage />} />
                  <Route path="/register" element={<MemberRegistrationPage />} />
                  <Route path="/admin-panel" element={<AdminPanel />} />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />

        {/* Dedicated Admin layout without public header/footer */}
        <Route path="/admin" element={<AdminLayout />} />
      </Routes>
    </>
  );
}

export default App;
