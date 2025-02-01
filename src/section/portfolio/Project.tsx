import Card from "../../components/Card";
interface Project {
  id: number;
  category: string;
  image: string;
  title: string;
  desc: string;
  demo: string;
  github: string;
}

interface ProjectProps {
  pro: Project;
}

const Project: React.FC<ProjectProps> = ({ pro }) => {
  return (
    <Card className="light portfolio_project">
      <div className="portfolio_project-image">
        <img src={pro.image} alt="Project-Image" />
      </div>
      <h4>{pro.title}</h4>
      <p>{pro.desc}</p>
      <div className="portfolio_project-cta">
        {pro.demo && (
          <a
            href={pro.demo}
            className="btn sm white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        )}

        <a
          href={pro.github}
          className="btn sm primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </Card>
  );
};

export default Project;
