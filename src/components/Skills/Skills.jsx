import React, { useState } from "react";
import { Bar } from "../Bar/Bar";
import "./Skills.css";

export const Skills = ({label}) => {
  const items =["JavaScript", "React", "CSS", "HTML", "Node.js", "Python"];
  return (
    <>
      <div className="all">
        <div className="skill">
          <p>Showcasing Computer Science and Engineering (CSE) skills </p>
        </div>
        <div className="imo">
          <div>
            {" "}
            <img
              src="./img/Mern.jpg"
              alt="loading"
              width="140px"
              height="80px"
            />
          </div>
          <div>
            {" "}
            <img
              src="./img/images.jpg"
              alt="loading"
              width="140px"
              height="80px"
            />
          </div>
          <div>
            {" "}
            <img
              src="./img/max.jpg"
              alt="loading"
              width="140px"
              height="80px"
            />
          </div>
          <div>
            {" "}
            <img
              src="./img/jsj.jpg"
              alt="loading"
              width="140px"
              height="80px"
            />
          </div>
          <div>
            {" "}
            <img
              src="./img/pytho.jpg"
              alt="loading"
              width="140px"
              height="80px"
            />
          </div>
          <div>
            {" "}
            <img
              src="./img/Mern.jpg"
              alt="loading"
              width="140px"
              height="80px"
            />
          </div>
        </div>
      </div>
      <div >
      {items.map((skill) => (
        <Bar key={skill} label={skill} />
      ))}
    </div>
    </>
  );
};


