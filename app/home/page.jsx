import Link from "next/link";
import Image from "next/image";
import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="row gy-3">
        <div className="col-md-6">
          <div className="left_col">
            <div className="mini_header">
              front-end <span>developer</span>
            </div>
            <div className="name">ramirez angel bird</div>
            <div className="text">
              I am interested in all things related to technology and digital
              innovation. I am constantly striving to expand my knowledge and
              enhance my skills to become a valuable asset in the IT industry.
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
              {/* <div className="github">
                <Link
                  href={"https://github.com/ybondev"}
                  target="_blank"
                  className="link"
                >
                  <FaGithub className="fa_icon" />
                </Link>
              </div> */}
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
            <div className="btn_container">
              <Link
                href={
                  "https://drive.google.com/file/d/1Ni1SX2mY2LpDTWDhTWqEBKWTTulNXxbA/view"
                }
                target="_blank"
                className="link"
              >
                <button className="resume">my resume</button>
              </Link>
              <Link href={`#contact`} className="link">
                <button className="get_in_touch">get in touch</button>
              </Link>
            </div>
          </div>
        </div>
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
      </div>
    </>
  );
};

export default Home;
