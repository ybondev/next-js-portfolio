"use client";
import Data from "../json/data.json";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Projects = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(4);
  const [loading, setLoading] = useState(false);

  const sliceData = () => {
    setLoading(false);
    const slicedData = Data.slice(0, count);
    setData(slicedData);
  };

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setCount(count + 4);
      sliceData();
    }, 1000);
  };

  useEffect(() => {
    sliceData();
  }, [count]);

  return (
    <>
      <div className="row gy-3">
        <div className="header">
          my <span>works</span>
        </div>
        {data.map((x) => {
          return (
            <div className="col-md-6 col-lg-4" key={x.id}>
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
      {data?.length > 4 ? (
        <button disabled>nothing to load</button>
      ) : (
        <button onClick={loadMore}>
          {loading ? "loading..." : "load more"}
        </button>
      )}
    </>
  );
};

export default Projects;
