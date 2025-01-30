import Project from '../Project' // Import the Project component
import '../../styles/Portfolio.css' // Import the Portfolio.css file

// Create a function called Portfolio that returns a section with a list of projects
export default function Portfolio() {
  return (
    <main className="portfolio-wrapper">
      <section className="portfolio-section">
        <h2>Portfolio</h2> {/* Add a heading for the section */}
        <div className="flex-container"> {/* Add a container for the projects */}
          <section className="portfolio"> {/* Add a section for the projects */}
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
          </section>
        </div>
      </section>
    </main>
  )
}