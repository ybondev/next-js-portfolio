import React from "react";
import Home from "./home/page";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

const page = () => {
  return (
    <>
      <section className="home_section container-fluid" id="home">
        <div className="container">
          <Home />
        </div>
      </section>
      <section className="about_section container-fluid" id="about">
        <div className="container">
          <About />
        </div>
      </section>
      <section className="projects_section container-fluid" id="projects">
        <div className="container">
          <Projects />
        </div>
      </section>
      <section className="contact_section container-fluid" id="contact">
        <div className="container">
          <Contact />
        </div>
      </section>
    </>
  );
};

export default page;
