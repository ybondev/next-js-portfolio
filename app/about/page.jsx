"use client";
import Image from "next/image";
import { useState } from "react";
import { FaDiscord, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

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
              BS in Information Technology graduate with knowledge of
              programming languages, website development, and can do
              hardware/software troubleshooting.
              <br />
              <br />
              Skilled in Microsoft Office applications like Excel and Word.
              <br />
              <br />
              Experienced in managing people, sales, and inventory.
              <br />
              <br />I aim to use my knowledge and experience to contribute to
              the company’s success.
            </div>
            <div className="social_media">
              <div className="discord">
                <Link
                  href={"https://discordapp.com/users/391959554910584847"}
                  target="_blank"
                  className="link"
                >
                  <FaDiscord className="fa_icon" />
                </Link>
              </div>
              <div className="facebook">
                <Link
                  href={"https://facebook.com/Systematic.31/"}
                  target="_blank"
                  className="link"
                >
                  <FaFacebook className="fa_icon" />
                </Link>
              </div>
              <div className="instagram">
                <Link
                  href={"https://instagram.com/systematic_3/"}
                  target="_blank"
                  className="link"
                >
                  <FaInstagram className="fa_icon" />
                </Link>
              </div>
              <div className="linkedin">
                <Link
                  href={"https://www.linkedin.com/in/ybon-ramirez-57409122a/"}
                  target="_blank"
                  className="link"
                >
                  <FaLinkedin className="fa_icon" />
                </Link>
              </div>
            </div>
            {/* <div className="tab">
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
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
