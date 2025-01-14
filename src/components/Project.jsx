export default function Project(project) {
    return (
        <div class="flex-container">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
        </div>
    );
}