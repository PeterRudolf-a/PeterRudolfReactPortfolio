import Project from '../Project'


export default function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Portfolio</h2>
      <section className="portfolio__flex-items">
        <Project name="Project 1" description="This is a project" />
        <Project name="Project 2" description="This is another project" />
        <Project name="Project 3" description="This is a third project" />
        <Project name="Project 4" description="This is a fourth project" />
      </section>
    </div>
  )
}