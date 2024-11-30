import React from "react";
import "./About.css";

export const About = () => {
  return (
    <>
      <div>
        <div className="first">
          <img
            className="img"
            src="./img/about.jpg"
            alt="img loading"
            width="100%"
            height="300px"
          />
        </div>
        <div className="content">
          <h1>About me</h1>
        </div>

        <div>
          <p className="para">
            Hello, I'm Rohan, a passionate and dedicated software developer with
            a keen eye for crafting efficient, scalable, and user-centric
            solutions. My journey in the tech world has been fueled by a strong
            curiosity for innovation and a drive to tackle complex challenges
            through coding. <br/> <br/>
            
            I specialize in designing and developing robust applications, leveraging 
            modern programming languages, frameworks, libraries & tools
            and tools to create impactful digital experiences. Whether it’s
            building responsive web interfaces, designing intuitive user
            experiences, or optimizing backend systems, I thrive on creating
            technology that makes a difference.<br/> <br/>
            Collaboration is at the heart of
            my work ethic. I enjoy working with cross-functional teams, learning
            from diverse perspectives, and contributing to projects that solve
            real-world problems. Beyond coding, I stay updated on the latest
            industry trends and continuously hone my skills to remain at the
            forefront of technological advancements.<br/> <br/>
            
            In my free time, I explore
            new tech trends, contribute to open-source projects, and enjoy
            sharing knowledge with the community. With a mindset focused on
            growth and a passion for excellence, I aim to create meaningful
            solutions that inspire and empower users worldwide. Let’s build
            something extraordinary together!
          </p>
        </div>

      </div>
    </>
  );
};
