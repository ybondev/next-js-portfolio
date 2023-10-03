import Image from "next/image";

const other_tech = [
  {
    id: 1,
    img: "./assets/java.png",
  },
  {
    id: 2,
    img: "./assets/c++.png",
  },
  {
    id: 3,
    img: "./assets/python.png",
  },
  {
    id: 4,
    img: "./assets/vb.png",
  },
  {
    id: 5,
    img: "./assets/solidity.svg",
  },
];

const OtherTech = () => {
  return (
    <>
      <div className="row gy-3 mt-3">
        <div className="header">
          other tech <span>stack</span>
        </div>
        {other_tech &&
          other_tech.map((x) => {
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

export default OtherTech;
