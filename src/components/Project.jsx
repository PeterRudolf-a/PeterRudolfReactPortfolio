export default function Project(project) {
    return (
        <div className="flex-container">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
        </div>
    );
}