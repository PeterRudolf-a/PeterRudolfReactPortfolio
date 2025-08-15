/* global CMS, createClass, h */

// Load your live site CSS into the preview iframe so layout + hover match production
CMS.registerPreviewStyle("/styles/Portfolio.css");     // your grid, cards, hover
// If you have a global stylesheet (navbar, fonts, etc.), register it too:
// CMS.registerPreviewStyle("/styles/index.css");
// CMS.registerPreviewStyle("/styles/App.css");

// Helper: safe get
function get(obj, path, fallback) {
  return path.reduce((acc, key) => (acc && acc.get ? acc.get(key) : undefined), obj) ?? fallback;
}

// Project Grid Preview (for the single-file "main_content" collection)
const ProjectGridPreview = createClass({
  render: function () {
    const entry = this.props.entry;
    const data = entry.getIn(["data"]);
    const projects = (data && data.get("projects")) || [];

    // Convert Immutable list to plain array of plain objects
    const projectList = projects.toJS ? projects.toJS() : [];

    return h(
      "main",
      { className: "portfolio-wrapper" },
      h(
        "section",
        { className: "portfolio-section" },
        h("h2", null, "Portfolio Preview"),
        h(
          "div",
          { className: "portfolio-grid-container" },
          h(
            "div",
            { className: "flex-container" },
            projectList.map((p, i) =>
              h(
                "div",
                {
                  key: i,
                  className: (p.className ? p.className + " " : "") + "flex-item",
                  style: {
                    backgroundImage: `url(${p.image || "/assets/uploads/placeholder-project.jpeg"})`,
                  },
                  // Hover effects are pure CSS and work because we registered your stylesheet
                },
                h("h3", null, p.name || "Untitled Project"),
                h(
                  "div",
                  { className: "project-links" },
                  p.deployed
                    ? h(
                        "a",
                        {
                          href: p.deployed,
                          target: "_blank",
                          rel: "noreferrer",
                          // Prevent navigating away from the editor if clicked in preview
                          onclick: (e) => e.preventDefault(),
                        },
                        "Live Site"
                      )
                    : null,
                  h(
                    "a",
                    {
                      href: p.path || "#",
                      target: "_blank",
                      rel: "noreferrer",
                      onclick: (e) => e.preventDefault(),
                    },
                    "GitHub Repo"
                  )
                )
              )
            )
          )
        )
      )
    );
  },
});

// Register the preview for your single-file collection ("main_content" in config.yml)
CMS.registerPreviewTemplate("main_content", ProjectGridPreview);

// Optional: nicer default preview pane background to match site section bg
CMS.registerPreviewStyle(`
  body {
    background: #bcd2d0;
  }
`, { raw: true });
