import { Link } from "react-router-dom" // Import the Link component

// Create a functional component called Resume
export default function Resume() {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <p>Download my <Link to='https://1drv.ms/w/c/76b33c7844737ff0/EekUykoZgwJEp3IkWwxOSe4B2vmVbT_gN7itAaoQ6cQ5Ag?e=4kOfQp'>Resume</Link></p> {/* Add a Link component to the resume for downloading*/}
      <h2>Front-end Profiencies</h2> {/* heading for front-end proficiencies */}
      <ul> {/* unordered list for front-end proficiencies */}
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>GraphQL</li>
          <li>jQuery</li>
      </ul>
      <h2>Back-end Profiencies</h2> {/* heading for back-end proficiencies */}
      <ul> {/* unordered list for back-end proficiencies */}
        <li>Express</li>
        <li>SQL</li>
        <li>MongoDB</li>
        <li>REST</li>
        <li>Node</li>
        <li>APIs</li>
      </ul>
    </div>
  )
}