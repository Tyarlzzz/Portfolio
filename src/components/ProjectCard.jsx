import ProjectThumb from "./ProjectThumb.jsx";
import TagList from "./TagList.jsx";

/**
 * Props:
 *  - project: one item from the projects array
 *  - onOpen:  called with the project when the card is clicked
 */
export default function ProjectCard({ project, onOpen }) {
  return (
    <article className="pcard" onClick={() => onOpen(project)}>
      <ProjectThumb project={project} />
      <div className="pcard__body">
        <h3>{project.title}</h3>
        <p className="pcard__summary">{project.summary}</p>
        <TagList items={project.tech} />
        <button type="button" className="link-btn pcard__btn" aria-label={`View details of ${project.title}`}>
          View details
        </button>
      </div>
    </article>
  );
}
