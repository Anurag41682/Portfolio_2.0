import "./about.css";
import AboutImage from "../../assets/about.jpg";
// import { IoMdDownload } from "react-icons/io";
import Card from "../../components/Card";
import data from "./data";

const About = () => {
  return (
    <section id="about">
      <div className="container about_container">
        <div className="about_left">
          <div className="about_portrait">
            <img src={AboutImage} alt="About-Image" />
          </div>
        </div>
        <div className="about_right">
          <h2>About Me</h2>
          <div className="about_cards">
            {data.map((item) => {
              return (
                <Card key={item.id} className="about_card">
                  <span className="about_card-icon">{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              );
            })}
          </div>
          <p>
            Hi there, I am Anurag a Full stack developer completed my
            Bachelor of technology in computer science. My aim is to build
            software solution for people using my knowledge in Tech.
          </p>
          <p>
            I also have good understanding of data structure and algorithm that
            has helped me in improving my problem solving skills and devising
            efficient solution for a problem. 
          </p>
          {/* <a
            target="_blank"
            href="https://drive.google.com/file/d/1NamqsTFoX_Ns9nDXfCOw1vK0Ne2-vGHH/view?usp=sharing"
            className="btn about primary"
          >
            Download Resume <IoMdDownload />
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default About;
