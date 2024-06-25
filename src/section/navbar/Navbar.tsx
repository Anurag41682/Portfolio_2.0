import Logo from "../../assets/logo.jpg";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="container nav_container">
        <a>
          <img src={Logo} alt="Logo" />
        </a>
        <ul className="nav_menu"></ul>
        <button></button>
      </div>
    </nav>
  );
};

export default Navbar;
