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
            Hi, I'm Anurag — a Full Stack Engineer with strong backend focus,
            specializing in Java, Spring Boot, Node.js, Express, and React.
          </p>
          <p>
            I build production-grade systems end-to-end — from designing REST
            APIs and event-driven microservices to deploying them on cloud
            infrastructure. My projects include NotifyHub, an async notification
            microservice with RabbitMQ, Redis idempotency, and Docker, and
            TaskFlow, a role-based task management system — both live on cloud.
          </p>
          <p>
            I have a strong foundation in Data Structures and Algorithms
            (LeetCode 1790, Codechef 3 star) and hold an AWS Cloud Practitioner
            certification.
          </p>
          <p>
            I'm currently looking for backend/fullstack roles where I can work
            on real engineering problems and grow fast.
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
