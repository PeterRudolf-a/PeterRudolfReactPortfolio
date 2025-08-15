import Project from "../Project";
import content from "../../content.json";
import "../../styles/Portfolio.css";

export default function Portfolio() {
  return (
    <main className="portfolio-wrapper">
      <section className="portfolio-section">
        <h2>Portfolio</h2>
        <div className="portfolio-grid-container">
          <div className="flex-container">
            {content.projects.map((project, index) => (
              <Project
                key={index}
                name={project.name}
                className={project.className}
                path={project.path}
                deployed={project.deployed}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
// This component renders a portfolio section with a grid of projects, each represented by the Project component.
// It maps through the projects defined in content.json and passes the relevant props to each Project component.
// The portfolio section is styled using CSS classes defined in Portfolio.css.
