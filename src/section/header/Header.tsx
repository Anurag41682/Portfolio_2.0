import "./header.css";
import HeaderImage from "../../assets/header.png";
import data from "./data";
const Header = () => {
  return (
    <header id="header">
      <div className="header_bg" aria-hidden="true">
        <span className="header_blob blob-1" />
        <span className="header_blob blob-2" />
        <span className="header_blob blob-3" />
      </div>
      <div className="container header_container">
        <div className="header_profile">
          <div className="header_profile-inner">
            <img src={HeaderImage} alt="Header-Image" />
          </div>
        </div>
        <span className="header_badge">
          <span className="header_badge-dot" />
          Open to backend roles
        </span>
        <h1>
          Hi, I'm <span className="gradient-text">Anurag</span>
        </h1>
        <p>Backend Developer</p>
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
        <a href="#about" className="header_scroll" aria-label="Scroll down">
          <span />
        </a>
      </div>
    </header>
  );
};

export default Header;
