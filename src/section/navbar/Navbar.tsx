import Logo from "../../assets/logo.jpg";
import data from "./data";
import "./navbar.css";
import { IoColorPaletteSharp } from "react-icons/io5";
const Navbar = () => {
  return (
    <nav>
      <div className="container nav_container">
        <a href="index.html" className="nav_logo">
          <img src={Logo} alt="Logo" />
        </a>
        <ul className="nav_menu">
          {data.map((value) => {
            return (
              <li key={value.id}>
                <a href={value.link}>{value.title}</a>
              </li>
            );
          })}
        </ul>
        <button id="theme_icon">
          <IoColorPaletteSharp />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
