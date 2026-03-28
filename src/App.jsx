import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import ScrollGrid from "./Components/ScrollGrid";
import WordScrollSection from "./Components/WordScroll";
import MasonryGallery from "./Components/Gallery";
import ExperienceList from "./Components/ExperienceList";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-background text-white selection:bg-cyan-400 selection:text-black">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
               <>
                <section id="home">
                  <Home />
                </section>
                <section id="projects">
                  <ScrollGrid />
                </section>
                <section id="about">
                  <WordScrollSection />
                </section>
                <section id="photography">
                  <MasonryGallery />
                </section>
                <section id="experience">
                  <ExperienceList />
                </section>
                <section id="contact">
                  <Contact />
                </section>
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
