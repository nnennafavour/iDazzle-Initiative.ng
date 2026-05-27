

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./Components/Navbar";

import Hero from "./Components/Hero";
import OtherImpact from "./Components/OtherImpact";

import AboutUs from "./Pages/AboutUs";
import Projects from "./Pages/Projects";
import ProjectDetails from "./Pages/ProjectDetails";
import ProductShine from "./Pages/ProductShine";
import TheDazzlegirl from "./Pages/TheDazzlegirl";
import SeedofHope from "./Pages/SeedofHope";
import Teams from "./Pages/Teams";
import TeamMembers from "./Pages/TeamMembers";
import Contact from "./Pages/Contact";
import Donate from "./Pages/Donate";
import Footer from "./Pages/Footer";


// HOME PAGE
const HomePage = () => {
  return (
    <>
      <Hero />

      <AboutUs />

      <Projects />

      <OtherImpact />

      <Teams />

      <TeamMembers />

      <Contact />

      <Donate />

      <Footer />
    </>
  );
};


const App = () => {
  return (

    <Router>

      <Navbar />

      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={<HomePage />}
        />

        {/* PROJECT DETAILS PAGE */}
        <Route
          path="/projects/skill-acquisition"
          element={<ProjectDetails />}
        />

        {/* PRODUCT SHINE PAGE */}
        <Route
          path="/products/shine"
          element={<ProductShine />}
        />

        {/* THE DAZZLEGIRL PAGE */}
        <Route
          path="/TheDazzlegirl"
          element={<TheDazzlegirl />}
        />

        {/* SEED OF HOPE PAGE */}
        <Route
          path="/projects/seed-of-hope"
          element={<SeedofHope />}
        />

       

      </Routes>

    </Router>
  );
};

export default App;