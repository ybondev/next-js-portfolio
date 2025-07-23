"use client";
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
          <div className="col-md-6 col-lg-3" key={x.id}>
            <div className="service-container">
              <div className="service_name">{x.service_name}</div>
              <div className="description">{x.s1}</div>
              <div className="description">{x.s2}</div>
              <div className="description">{x.s3}</div>
              <div className="description">{x.s4}</div>
              <div className="description">{x.s5}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default page;
