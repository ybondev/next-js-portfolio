"use client";
import Data from "../json/data.json";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Experiences = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    const res = Data.experiences;
    setData(res);
    console.log(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="row gy-3">
      <div className="header">experiences</div>
      {data.map((x) => {
        return (
          <>
            <div className="col-md-6" key={x.id}>
              <div className="year">{x.year}</div>
            </div>
            <div className="col-md-6">
              <div className="title">{x.title}</div>
              <div className="description">{x.description}</div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Experiences;
