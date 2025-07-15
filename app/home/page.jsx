import Link from "next/link";
import Image from "next/image";
import { FaFilePdf } from "react-icons/fa";

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
            <div className="btn_container">
              <Link
                href={
                  "https://drive.google.com/file/d/10n8m1Ps-Xg2lWzPgMPcsCYF_MsGolYmH/view?usp=sharing"
                }
                target="_blank"
                className="link"
              >
                <button className="resume">
                  <FaFilePdf className="fa_icon" />
                  my resume
                </button>
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
