import "./floatin-nav.css";
import data from "./data";
const FloatinNav = () => {
  return (
    <div className="floating_nav">
      {data.map((item) => {
        return (
          <a key={item.id} href={item.link}>
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};
export default FloatinNav;
