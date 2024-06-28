import "./contact.css";
import data from "./data";
const Contact = () => {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p>Shoot me a message via any of the link below</p>
      <div className="container contact_container">
        {data.map((item) => {
          return (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
