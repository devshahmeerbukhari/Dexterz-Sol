import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./components/home";
import AboutPage from "./components/about";
import ServicesPage from "./components/services";
import ProjectPage from "./components/projects";
import ContactPage from "./components/contact";
import Footer from "./components/footer";
import AboutSection from "./components/aboutSection";
import Details from "./components/details";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage/>}/>
        <Route path="/details/:slug" element={<Details/>}/>
        <Route path="/projects" element={<ProjectPage/>}/>
        <Route path="/details/:slug" element={<Details/>}/>
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
