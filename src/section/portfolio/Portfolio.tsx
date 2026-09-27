import Projects from "./Projects";
import ProjectCategory from "./ProjectCategory";
import data from "./data";
import { useState } from "react";
import "./portfolio.css";

const Portfolio = () => {
  const [projects, setProjects] = useState(data);
  const categories = data.map((item) => item.category);
  const uniqueCategories = ["all", ...new Set(categories)];
  const filterProjectHandler = (category: string) => {
    if (category == "all") {
      setProjects(data);
      return;
    }
    const filterProjects = data.filter((item) => item.category == category);
    setProjects(filterProjects);
  };
  return (
    <section id="portfolio">
      <span className="eyebrow reveal">Portfolio</span>
      <h2 className="reveal">
        Recent <span className="gradient-text">Projects</span>
      </h2>
      <p className="reveal">Check out some of the projects that I developed</p>
      <div className="container portfolio_container reveal">
        <ProjectCategory
          categories={uniqueCategories}
          onFilterProjects={filterProjectHandler}
        />
        <Projects projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio;
