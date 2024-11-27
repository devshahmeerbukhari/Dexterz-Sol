import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./components/home";
import AboutPage from "./components/about";
import ServicesPage from "./components/services";
import ProjectPage from "./components/projects";
import ContactPage from "./components/contact";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage/>}/>
        <Route path="/projects" element={<ProjectPage/>}/>
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
