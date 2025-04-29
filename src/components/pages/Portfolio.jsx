import Project from "../Project";
import "../../styles/Portfolio.css";

export default function Portfolio() {
  return (
    <main className="portfolio-wrapper">
      <section className="portfolio-section">
        <h2>Portfolio</h2>
        <div className="portfolio-grid-container">
          <div className="flex-container">
            {/* REMOVE the unnecessary <section className="portfolio"> wrapper */}
            <Project
              name="Christmas Assistance Application"
              className="flex-item christmas-assistance"
              path="https://github.com/PeterRudolf-a/christmas-assistance-application"
              deployed="https://revengelmfao.github.io/christmas-assistance-application/"
            />
            <Project
              name="Vehicle Builder"
              className="flex-item vehicle-builder"
              path="https://github.com/PeterRudolf-a/PeterVehicleBuilder"
            />
            <Project
              name="README Generator"
              className="flex-item readme-generator"
              path="https://github.com/PeterRudolf-a/PeterReadMeGenerator"
            />
            <Project
              name="Employee Tracker"
              className="flex-item employee-tracker"
              path="https://github.com/PeterRudolf-a/PeterSQL_EmployeeTracker"
            />
            <Project
              name="Travel Buddy"
              className="flex-item travel-buddy"
              path="https://github.com/PeterRudolf-a/Travel-Buddy"
              deployed="https://travel-buddy-1-9ije.onrender.com/"
            />
            <Project
              name="Movie Squad"
              className="flex-item movie-squad"
              path="https://github.com/PeterRudolf-a/MovieSquad"
              deployed="https://moviesquad.onrender.com/"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
