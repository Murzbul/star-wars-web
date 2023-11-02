'use client'

import { useState, useEffect } from "react";
// import { getDetail } from "../../api/controller";
import "./styles/Specie.css";
import LoadingDetail from "./LoadingDetail";

const Specie = ({ species }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // getDetail(species).then((response) => setData(response));
  }, [species]);
  return (
    <div className="container-specie">
      {data.length === 0 ? (
        <LoadingDetail />
      ) : (
        <>
          <h2>SPECIES</h2>
          <h3>
            Name - &apos; <span>{data[0]?.name}</span> &apos; <br />
            Language - &apos; <span>{data[0]?.language}</span> &apos; <br />
            Designation - &apos;{" "}
            <span>
              {data[0]?.designation.charAt(0).toUpperCase() +
                data[0]?.designation.slice(1)}
            </span>{" "}
            &apos; <br />
            Clasiffication - &apos;{" "}
            <span>
              {data[0]?.classification.charAt(0).toUpperCase() +
                data[0]?.classification.slice(1)}
            </span>{" "}
            &apos;
          </h3>
        </>
      )}
    </div>
  );
};

export default Specie;
