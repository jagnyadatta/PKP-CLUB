import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import AllMembersPage from "./components/Pages/AllMembersPage";
import AllFestivalsPage from "./components/Pages/AllFestivalsPage";
import AllSportsPage from "./components/Pages/AllSportsPage";
import AboutUsPage from "./components/Pages/AboutUsPage";

function App() {
  return (
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
  );
}

export default App;
