import "./header.css";
import HeaderImage from "../../assets/header.png";
import data from "./data";
const Header = () => {
  return (
    <header id="header">
      <div className="container header_container">
        <div className="header_profile">
          <img src={HeaderImage} alt="Header-Image" />
        </div>
        <h3>Anurag</h3>
        <p>Full Stack Developer</p>
        <div className="header_cta">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn">
            My Work
          </a>
        </div>
        <div className="header_socials">
          {data.map((value) => {
            return (
              <a key={value.id} href={value.link} target="_blank">
                {value.icon}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
