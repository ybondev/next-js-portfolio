import React from "react";
import Home from "./home/page";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import TechStack from "@components/TechStack";
import Experiences from "./experiences/page";
import Servicess from "./servicess/page";

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
      <section className="tech_section container-fluid">
        <div className="container">
          <TechStack />
        </div>
      </section>
      <section className="services_section container-fluid" id="services">
        <div className="container">
          <Servicess />
        </div>
      </section>
      <section className="experience_section container-fluid">
        <div className="container">
          <Experiences />
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
