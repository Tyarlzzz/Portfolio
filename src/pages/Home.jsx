import { useMemo, useState } from "react";
import TopoArt from "../components/TopoArt.jsx";
import StatTile from "../components/StatTile.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import ProjectModal from "../components/ProjectModal.jsx";

const FEATURED_COUNT = 3; // change this number to feature more or fewer

export default function Home({ profile, projects, nowItems, onNavigate }) {
  const [selected, setSelected] = useState(null);
  const featured = useMemo(() => {
    const flagged = projects.filter((p) => p.featured);
    return (flagged.length > 0 ? flagged : projects).slice(0, FEATURED_COUNT);
  }, [projects]);

  const techCount = useMemo(() => new Set(projects.flatMap((p) => p.tech)).size, [projects]);

  return (
    <>
      <section className="hero" aria-labelledby="hero-name">
        <TopoArt draw seed={4} rings={14} className="hero__art" />

        <p className="pill">
          <span className="pill__dot" aria-hidden="true" />
          {profile.availability}
        </p>

        <h1 className="hero__name" id="hero-name">
          <span>{profile.firstName}</span>
          <span>{profile.lastName}</span>
        </h1>

        <p className="hero__role">{profile.headline}</p>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__actions">
          <button type="button" className="btn btn--primary" onClick={() => onNavigate("projects")}>
            See my projects
          </button>
          <button type="button" className="btn btn--ghost" onClick={() => onNavigate("contact")}>
            Get in touch
          </button>
        </div>
      </section>

      <div className="stats">
        <StatTile value={projects.length} label="Projects shown here" />
        <StatTile value={techCount} label="Technologies used" />
        <StatTile value={profile.yearLevel} label={`${profile.courseShort} at ${profile.schoolShort}`} />
        <StatTile value={profile.graduation} label="Expected graduation" />
      </div>

      <section className="block" aria-labelledby="now-title">
        <div className="block__head">
          <h2 id="now-title">Right now</h2>
        </div>
        <dl className="now">
          {nowItems.map((item) => (
            <div key={item.label} className="now__item">
              <dt>{item.label}</dt>
              <dd>{item.text}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="block" aria-labelledby="featured-title">
        <div className="block__head">
          <h2 id="featured-title">Featured work</h2>
          <button type="button" className="link-btn" onClick={() => onNavigate("projects")}>
            See all projects
          </button>
        </div>
        <div className="pgrid pgrid--featured">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setSelected} />
          ))}
        </div>
      </section>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
