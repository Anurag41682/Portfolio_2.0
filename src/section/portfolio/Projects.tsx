import Project from "./Project";
interface p {
  id: number;
  category: string;
  image: string;
  title: string;
  desc: string;
  demo: string;
  github: string;
}
interface projects {
  projects: p[];
}
const Projects: React.FC<projects> = ({ projects }) => {
  return (
    <div className="portfolio_projects">
      {projects.map((item) => {
        return <Project key={item.id} pro={item} />;
      })}
    </div>
  );
};

export default Projects;
