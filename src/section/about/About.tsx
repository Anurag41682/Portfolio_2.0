import "./about.css";
import AboutImage from "../../assets/about.jpg";
// import { IoMdDownload } from "react-icons/io";
import Card from "../../components/Card";
import data from "./data";
import { FiArrowUpRight } from "react-icons/fi";

const About = () => {
  return (
    <section id="about">
      <div className="container about_container">
        <div className="about_left reveal">
          <div className="about_portrait">
            <img src={AboutImage} alt="About-Image" />
          </div>
        </div>
        <div className="about_right">
          <span className="eyebrow reveal">Get to know me</span>
          <h2 className="reveal">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="about_cards">
            {data.map((item, index) => {
              return (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about_card-link"
                  aria-label={`${item.title} profile`}
                >
                  <Card className="about_card reveal" index={index}>
                    <FiArrowUpRight className="about_card-arrow" />
                    <span className="about_card-icon">{item.icon}</span>
                    <h5>{item.title}</h5>
                    <small>{item.desc}</small>
                  </Card>
                </a>
              );
            })}
          </div>
          <div className="about_text reveal">
          <p>
            Hi, I'm Anurag, a Backend Engineer working with Java, Spring Boot,
            and Node.js, comfortable shipping full-stack features with React. I
            spent the last two years as a Software Engineer at Capgemini.
          </p>
          <p>
            I build systems end to end, from designing REST APIs and
            event-driven microservices to testing, CI, and cloud deployment. My
            flagship project, NotifyHub, is an async notification microservice
            with RabbitMQ retries and a dead-letter queue, Redis-based
            idempotency, Docker Compose, GitHub Actions CI, JUnit/Mockito tests,
            and k6 load testing, previously deployed on Linode behind nginx and
            Cloudflare. I also built TaskFlow, a role-based task management
            system with a Spring Boot backend and React frontend. The code for
            both is on GitHub.
          </p>
          <p>
            I have a solid foundation in Data Structures and Algorithms
            (Codeforces Specialist, CodeChef 4★, LeetCode 1790) and hold an AWS
            Cloud Practitioner certification.
          </p>
          <p>
            I'm currently looking for backend roles where I can work on real
            engineering problems and grow fast.
          </p>
          </div>
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
