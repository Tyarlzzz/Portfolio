import { useEffect, useRef } from "react";
import { X, ExternalLink, Github } from "lucide-react";
import ProjectThumb from "./ProjectThumb.jsx";
import TagList from "./TagList.jsx";

/**
 * Details dialog for one project.
 * Props: project, onClose
 * Handles: Esc to close, click outside to close, focus stays inside, page behind doesn't scroll.
 */
export default function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    function handleKey(e) {
      if (e.key === "Escape") {
        onCloseRef.current();
        return;
      }
      if (e.key !== "Tab") return;
      const focusable = dialogRef.current?.querySelectorAll("a[href], button:not([disabled])");
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, []);

  const hasLinks = project.liveUrl || project.repoUrl;

  return (
    <div
      className="modal-scrim"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" ref={dialogRef}>
        <button type="button" className="icon-btn modal__close" onClick={onClose} ref={closeBtnRef} aria-label="Close details">
          <X size={20} />
        </button>

        <ProjectThumb project={project} />

        <div className="modal__body">
          <h2 id="modal-title">{project.title}</h2>
          <p className="modal__role">{project.role}</p>
          <p>{project.description}</p>

          {project.features.length > 0 && (
            <>
              <h3>What it does</h3>
              <ul className="bullets">
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </>
          )}

          <h3>Built with</h3>
          <TagList items={project.tech} />

          <div className="modal__links">
            {project.liveUrl && (
              <a className="btn btn--primary" href={project.liveUrl} target="_blank" rel="noreferrer">
                <ExternalLink size={16} aria-hidden="true" /> Open live site
              </a>
            )}
            {project.repoUrl && (
              <a className="btn btn--ghost" href={project.repoUrl} target="_blank" rel="noreferrer">
                <Github size={16} aria-hidden="true" /> View source code
              </a>
            )}
            {!hasLinks && <p className="muted">No public links for this project yet.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
