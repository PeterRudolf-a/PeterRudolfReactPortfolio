import Project from '../Project'
import '../../styles/Portfolio.css'


export default function Portfolio() {
  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="flex-container">
      <section className="portfolio">
        <Project name="Christmas Assistance Application" description="This is a project" className="flex-item christmas-assistance" path="https://github.com/PeterRudolf-a/christmas-assistance-application" />
        <Project name="Vehicle Builder" description="This is another project" className="flex-item vehicle-builder" path="https://github.com/PeterRudolf-a/PeterVehicleBuilder" />
        <Project name="README Generator" description="This is a third project" className="flex-item readme-generator" path="https://github.com/PeterRudolf-a/PeterReadMeGenerator" />
        <Project name="Weather Dashboard" description="This is a fourth project" className="flex-item weather-dashboard" path="https://github.com/PeterRudolf-a/PeterWeatherDashboard" />
        <Project name="Employee Tracker" description="This is a fifth project" className="flex-item employee-tracker" path="https://github.com/PeterRudolf-a/PeterSQL_EmployeeTracker" />
      </section>
      </div>
      </div>
    </div>
  )
}