import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "./styles/index.css";
import "./styles/app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./pages/homePage";
import ServicePage from "./pages/servicePage";
import ContactPage from "./pages/contactPage";
import AboutPage from "./pages/about";
import Project from "./pages/project";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
