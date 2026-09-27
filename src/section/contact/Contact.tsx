import "./contact.css";
import { CSSProperties } from "react";
import data from "./data";
const Contact = () => {
  return (
    <section id="contact">
      <span className="eyebrow reveal">Contact</span>
      <h2 className="reveal">
        Get In <span className="gradient-text">Touch</span>
      </h2>
      <p className="reveal">Connect with me via any of the link below</p>
      <div className="container contact_container">
        {data.map((item, index) => {
          return (
            <a
              key={item.id}
              className="reveal"
              style={{ "--i": index } as CSSProperties}
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
