import Data from "../json/data.json";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    <>
      <div className="row gy-3">
        <div className="header">
          my <span>works</span>
        </div>
        {Data.map((x) => {
          return (
            <div className="col-md-6 col-lg-4">
              <Link href={x.project_link} target="_blank" className="link">
                <div className="card_container">
                  <div className="img_container">
                    <Image
                      src={`.${x.project_img}`}
                      width={500}
                      height={0}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="card_text">
                    <div className="card_title">{x.project_name}</div>
                    {x.project_desc}
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
