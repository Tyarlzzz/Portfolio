import { useState } from "react";
import { Download } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import Timeline from "../components/Timeline.jsx";
import SkillBar from "../components/SkillBar.jsx";
import TagList from "../components/TagList.jsx";
import TopoArt from "../components/TopoArt.jsx";

/** About page. Props: profile, skillGroups, education, certifications, interests */
export default function About({ profile, skillGroups, education, certifications, interests }) {
  const [activeGroupId, setActiveGroupId] = useState(skillGroups[0].id);
  const activeGroup = skillGroups.find((g) => g.id === activeGroupId) ?? skillGroups[0];

  const facts = [
    { term: "School", detail: profile.school },
    { term: "Program", detail: profile.course },
    { term: "Year level", detail: profile.yearLevel },
    { term: "Based in", detail: profile.location },
  ];

  return (
    <>
      <SectionHeading as="h1" title="About me" />

      <section className="about-grid" aria-label="Introduction">
        <div className="portrait">
          {profile.photo ? (
            <img src={profile.photo} alt={`Portrait of ${profile.fullName}`} />
          ) : (
            <>
              <TopoArt seed={7} rings={12} fit="slice" className="portrait__art" />
              <span className="portrait__initials" aria-hidden="true">
                {profile.initials}
              </span>
            </>
          )}
        </div>

        <div className="about-copy">
          {profile.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}

          <dl className="facts">
            {facts.map((f) => (
              <div key={f.term}>
                <dt>{f.term}</dt>
                <dd>{f.detail}</dd>
              </div>
            ))}
          </dl>

          {profile.resumeUrl && (
            <a
              className="btn btn--primary"
              href={profile.resumeUrl}
              download="Carpio, Charles Jerald C._Resume.pdf"
            >
              <Download size={16} aria-hidden="true" /> Download my resume
            </a>
          )}
        </div>
      </section>

      <section className="block" aria-labelledby="skills-title">
        <div className="block__head">
          <h2 id="skills-title">Skills</h2>
        </div>

        <div className="chips" role="group" aria-label="Skill categories">
          {skillGroups.map((g) => (
            <button
              key={g.id}
              type="button"
              className="chip"
              aria-pressed={g.id === activeGroup.id}
              onClick={() => setActiveGroupId(g.id)}
            >
              {g.label}
            </button>
          ))}
        </div>

        {/* key makes the bars play their fill animation again when the category changes */}
        <ul className="skills" key={activeGroup.id}>
          {activeGroup.skills.map((s) => (
            <SkillBar key={s.name} name={s.name} level={s.level} />
          ))}
        </ul>
      </section>

      <section className="block" aria-labelledby="edu-title">
        <div className="block__head">
          <h2 id="edu-title">Education</h2>
        </div>
        <Timeline items={education} />
      </section>

      <section className="block two-col" aria-label="Certifications and interests">
        <div>
          <div className="block__head">
            <h2>Certifications</h2>
          </div>
          <ul className="certs">
            {certifications.map((c, i) => (
              <li key={i}>
                <strong>{c.title}</strong>
                <span className="muted">
                  {c.issuer}, {c.year}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="block__head">
            <h2>Outside of code</h2>
          </div>
          <TagList items={interests} />
        </div>
      </section>
    </>
  );
}
