import "./about.css";
import AboutImage from "../../assets/about.jpg";
import { IoMdDownload } from "react-icons/io";
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            quibusdam, tenetur accusamus quod consequatur qui nulla ex dolor
            porro nemo, voluptatibus dolore maiores, molestias nobis et
            inventore fugit explicabo. Qui.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            quia ut facilis, dolorum nam id sed. Nisi aperiam accusamus aut
            ipsum odio perspiciatis. Itaque, eum.
          </p>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1-WGq2y9gFGCL1CLwLxcdPrrQVkuNttWI/view?usp=sharing"
            className="btn primary"
          >
            Download Resume <IoMdDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
