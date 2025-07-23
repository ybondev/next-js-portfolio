"use client";
import Image from "@node_modules/next/image";
import Data from "../json/data.json";
import { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    const res = Data.services;
    setData(res);
    console.log(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="row gy-3">
      <div className="header">Services</div>
      {data.map((x) => {
        return (
          <div className="col-md-3" key={x.id}>
            <div className="service-container">
              <Image
                src={`.${x.img}`}
                width={100}
                height={0}
                alt=""
                className="img-fluid"
              />
              <div className="service_name">{x.service_name}</div>
              <ul>
                <li className="descripion">{x.s1}</li>
                <li className="descripion">{x.s2}</li>
                <li className="descripion">{x.s3}</li>
                <li className="descripion">{x.s4}</li>
                {x.s5 === undefined ? (
                  <></>
                ) : (
                  <li className="descripion">{x.s5}</li>
                )}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default page;
