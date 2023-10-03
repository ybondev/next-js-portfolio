"use client";
import Image from "next/image";
import { useState } from "react";

const About = () => {
  const [toggle, setToggle] = useState(1);

  const updateToggle = (id) => {
    setToggle(id);
  };
  return (
    <>
      <div className="row gy-3">
        <div className="col-md-6">
          <div className="img_container">
            <Image
              src={"./assets/IMG_3742.png"}
              width={500}
              height={0}
              className="img-fluid"
              alt=""
              priority
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="right_col">
            <div className="header">
              about <span>me</span>
            </div>
            <div className="text">
              I’m Angel, I’m a college graduate with a degree in BS Information
              Technology.
              <br />
              <br />
              My previous job was as a junior web developer in the agency for 1
              year. It was challenging for me since, aside from being a junior
              web developer, I was also assigned to do some analytics and
              conversion tracking like Google Analytics and Google Tag Manager.
              I also managed some websites for the previous client, like Shopify
              or Wordpress.
              <br />
              <br />
              Being part of this agency was an incredible experience that
              allowed me to stretch my skills and creativity. It's where I
              learned the importance of versatility and adaptability in the
              ever-evolving technology.
              <br />
              <br />
              Let's connect, collaborate, and create something amazing together.
            </div>
            <div className="tab">
              <ul className="category">
                <li
                  className={toggle === 1 ? "active" : ""}
                  onClick={() => updateToggle(1)}
                >
                  experience
                </li>
                <li
                  className={toggle === 2 ? "active" : ""}
                  onClick={() => updateToggle(2)}
                >
                  education
                </li>
              </ul>
              <div className={toggle === 1 ? "show_content" : "content"}>
                <h1>junior web developer at data atelier advertising agency</h1>
                <ul className="junior_web">
                  <li>Created local website gym in Lakeside Gym & Fitness</li>
                  <li>Deployed smart contract and two web3 websites</li>
                  <li>
                    In charge of implementing data layers in Shopify and create
                    tagging in GTM
                  </li>
                  <li>Ensure the all tags are properly working</li>
                  <li>Handling some websites in WordPress and Shopify</li>
                  <li>Used React JS as a front-end framework</li>
                  <li>
                    Auditing websites and give suggestions or recommendations
                  </li>
                </ul>
                <h1>training/certification</h1>
                <ul className="apec">
                  <li>
                    ACE (Accelerated Career Experience) APEC Schools Lipa (March
                    – May 2018)
                  </li>
                  <li>
                    Customer Service, Technical Support and Sales Delivery
                  </li>
                </ul>
              </div>
              <div className={toggle === 2 ? "show_content" : "content"}>
                <h1>education</h1>
                <ul className="education">
                  <li>
                    Bachelor of Science in Information Technology Batangas State
                    University JPLPC-Malvar Campus (2018 - 2022)
                  </li>
                  <li>Senior High Completer APEC Schools Lipa (2016 - 2018)</li>
                  <li>Balete National High School (2012 - 2016)</li>
                  <li>Balete Central School (2006 – 2012)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
