import { Link } from "react-router-dom";
import content from "../../content.json";

export default function Resume() {
  const { resume } = content;

  return (
    <div className="resume">
      <h1>Resume</h1>
      <p>
        Download my <Link to={resume.link}>Resume</Link>
      </p>
      <h2>Front-end Proficiencies</h2>
      <ul>
        {resume.frontend.map((item, index) => (
          <li key={`frontend-${index}`}>{item}</li>
        ))}
      </ul>
      <h2>Back-end Proficiencies</h2>
      <ul>
        {resume.backend.map((item, index) => (
          <li key={`backend-${index}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
// This component renders a resume page with links to download the resume and lists of front-end and back-end proficiencies.
// It uses the content from a JSON file to populate the lists and the download link.
