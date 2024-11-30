import React, { useState } from "react";
import "./Contact.css";

export const Contact = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    Description: " ",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data:", data);
    alert("Signup Successful!");
  };

  return (
    <>
      <div className="save">
        <div className="left" onSubmit={handleSubmit}>
          <div className="hot">
            <h2 className="us">Contact Us</h2>
            <h1 className="py">
              Reach Out for <span className="us"> Queries </span>and Assistance
            </h1>
            <p>
              We would love to hear from you.
              <br />
              <span className="us">Drop a message.</span>
            </p>
          </div>
          <div className="loc">
            <h2>Location</h2>
            <p className="us">Lucknow</p>
            <h2>Mail</h2>
            <p className="us">shauryapsingh000@gmail.com</p>
          </div>
        </div>

        <div className="right">
          <h2 className="pyy">Send a message</h2>
          <div className="fomo">
            <p>
              <label htmlFor="username">Your Name</label>
              <input
                type="text"
                id="username"
                name="username"
                value={data.username}
                onChange={handleChange}
                placeholder="Enter ur name"
                required
              />
            </p>

            <p>
              <label htmlFor="email">Your email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Enter ur email"
                required
              />
            </p>

            <p>
              <label htmlFor="password">Your password</label>
              <input
                type="number"
                id="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder="Enter ur password"
                required
              />
            </p>

            <p>
              <label htmlFor="Description">Description</label>
              <input
                type="text"
                id="Description"
                name="Description"
                value={data.Description}
                onChange={handleChange}
                placeholder="Type ur message"
                required
              />
            </p>
            <button className="btnns" type="Submit" id="Submit" name="Submit">
              Submit
            </button>

            <div className="last">
              <p>Already have an account </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
