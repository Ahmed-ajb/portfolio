import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
          <div className="AboutBio">

I am Ahmed Ajebli, a dedicated and ambitious student of Systems and Big Data with hands-on experience in ETL, Java, and IBM SPSS. I am currently pursuing my master degree in IA and Data analysis at the FS MEKNES . My passion is using my technical skills to solve real-world problems and I am always eager to learn new technologies. I have a proven track record of success, having completed internships with La Province and Allianz. In my free time, I enjoy staying up to date with the latest developments in the tech industry and I am a keen networker.
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
