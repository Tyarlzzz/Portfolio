import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import ProjectModal from "../components/ProjectModal.jsx";

/** Projects page with filter buttons, search and sorting. Props: projects */
export default function Projects({ projects }) {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("newest");
  const [selected, setSelected] = useState(null);

  const categories = useMemo(() => ["All", ...new Set(projects.map((p) => p.category))], [projects]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    const yearOf = (p) => Number(p.year) || 0;

    return projects
      .filter((p) => category === "All" || p.category === category)
      .filter((p) => !q || [p.title, p.summary, ...p.tech].join(" ").toLowerCase().includes(q))
      .sort((a, b) => (sort === "newest" ? yearOf(b) - yearOf(a) : yearOf(a) - yearOf(b)));
  }, [projects, category, query, sort]);

  function clearFilters() {
    setCategory("All");
    setQuery("");
  }

  return (
    <>
      <SectionHeading
        as="h1"
        title="Projects"
        intro="Things I have built for school, for clients and for practice. Select one to see how it was made."
      />

      <div className="toolbar">
        <div className="chips" role="group" aria-label="Filter by category">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              className="chip"
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="toolbar__controls">
          <div className="search">
            <Search size={16} aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects"
              aria-label="Search projects"
            />
          </div>
          <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort projects">
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </div>
      </div>

      <p className="count" aria-live="polite">
        Showing {visible.length} of {projects.length} projects
      </p>

      {visible.length > 0 ? (
        <div className="pgrid">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setSelected} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <p>No project matches these filters.</p>
          <button type="button" className="btn btn--ghost" onClick={clearFilters}>
            Show all projects
          </button>
        </div>
      )}

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
