import Image from "next/image";

const tech_links = [
  {
    id: 1,
    img: "./assets/html.png",
  },
  {
    id: 2,
    img: "./assets/css.png",
  },
  {
    id: 3,
    img: "./assets/js.png",
  },
  {
    id: 4,
    img: "./assets/bootstrap.png",
  },
  {
    id: 5,
    img: "./assets/next-js.webp",
  },
  {
    id: 6,
    img: "./assets/figma.png",
  },
];

const TechStack = () => {
  return (
    <>
      <div className="row gy-3">
        <div className="header">
          technology i use for web <span>development</span>
        </div>
        {tech_links &&
          tech_links.map((x) => {
            return (
              <div className="col-6 col-md-4 col-lg-2" key={x.id}>
                <div className="wrapper">
                  <Image
                    src={x.img}
                    width={100}
                    height={0}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default TechStack;
