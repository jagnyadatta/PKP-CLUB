import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import AllMembersPage from "./components/Pages/AllMembersPage";
import AllFestivalsPage from "./components/Pages/AllFestivalsPage";
import AllSportsPage from "./components/Pages/AllSportsPage";
import AboutUsPage from "./components/Pages/AboutUsPage";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div className={loading ? "hidden" : "block"}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-members" element={<AllMembersPage />} />
          <Route path="/all-festivals" element={<AllFestivalsPage />} />
          <Route path="/all-sports" element={<AllSportsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;