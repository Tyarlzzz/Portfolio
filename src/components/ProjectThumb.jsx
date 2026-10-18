import TopoArt from "./TopoArt.jsx";

/** Turns an id like "project-one" into a number so each project gets its own contour map */
function seedFrom(text) {
  return [...text].reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
}

/** Props: project */
export default function ProjectThumb({ project }) {
  return (
    <div className="thumb" style={{ "--thumb": project.accent }}>
      {project.image ? (
        <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
      ) : (
        <TopoArt seed={seedFrom(project.id)} rings={9} fit="slice" className="thumb__art" />
      )}
      <span className="thumb__badge">
        {project.category}, {project.year}
      </span>
    </div>
  );
}
