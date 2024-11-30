import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="foot">
       
        <div>
          <ul className="it">
            <li>
              <Link target="_blank" to="/Home ">
                {" "}
                Home{" "}
              </Link>
            </li>
            <li>
              <a target="_blank" to="/About ">
                {" "}
                About{" "}
              </a>
            </li>
            <li>
              {" "}
              <Link target="_blank" to="/Contact ">
                {" "}
                Contact{" "}
              </Link>
            </li>
            <li>
              {" "}
              <Link target="_blank" to="/Login ">
                {" "}
                Login{" "}
              </Link>
            </li>
            <li>
              {" "}
              <Link target="_blank" to="/Signup ">
                {" "}
                Signup{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
