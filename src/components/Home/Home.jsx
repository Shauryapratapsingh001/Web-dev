import { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Card } from "../card/Card";

const Home = () => {
  const [data, setData] = useState([]); // Moved useState here

  useEffect(() => {
    // Fetch data from the public folder
    fetch('/data/data.json') // Corrected path
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <div className="mains">
        <div className="ones">
          <h5 className="red">Hello and Welcome</h5>
          <h1>
            I am <span className="red">Shaurya Pratap Singh</span>
            "Web Developer"
          </h1>
          <p>
            This website is all about Website Development, Technical, Tips{" "}
            <br /> and Tricks, Designs Principle, Source Code sales and <br />{" "}
            Programming videos in the Hindi Language.
          </p>

          <button className="btn">See my work</button>
          <button className="btn">Resume</button>
        </div>

        <div className="twos">
          <img width="320px" height="320px" src="/img/my.jpg" alt="Loading" />
        </div>
      </div>

      <div className="detail">
        <p className="inn">Keep Scrolling</p>
        <ul className="account">
          <li>
            <Link target="_blank" to="https://www.instagram.com">
              Instagram
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/shaurya-pratap-singh-5599391b5"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link target="_blank" to="https://github.com/Shauryapratapsingh001">
              GitHub
            </Link>
          </li>
        </ul>
      </div>

      <div className="card-main">
        <div className="card-container">
          {data.map((item) => (
            <Card
              key={item.id}
              book_image={item.book_image}
              book_name={item.book_name}
              author={item.author}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
