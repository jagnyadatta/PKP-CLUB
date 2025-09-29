import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import AllMembersPage from "./components/Pages/AllMembersPage";
import AllFestivalsPage from "./components/Pages/AllFestivalsPage";
import AllSportsPage from "./components/Pages/AllSportsPage";
import AboutUsPage from "./components/Pages/AboutUsPage";
import Loader from "./components/Loader";
import AdminLayout from "./components/Admin/AdminLayout";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <Routes>
      {/* Routes with Navbar + Footer */}
      <Route
        path="/*"
        element={
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/all-members" element={<AllMembersPage />} />
              <Route path="/all-festivals" element={<AllFestivalsPage />} />
              <Route path="/all-sports" element={<AllSportsPage />} />
              <Route path="/about" element={<AboutUsPage />} />
            </Routes>
            <Footer />
          </>
        }
      />

      {/* Admin route without Navbar/Footer */}
      <Route path="/admin" element={<AdminLayout />} />
    </Routes>
  );
}

export default App;
