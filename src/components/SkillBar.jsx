/** Props: name, level (0–100) */
export default function SkillBar({ name, level }) {
  return (
    <li className="skill">
      <span className="skill__name">{name}</span>
      <div className="bar" role="img" aria-label={`${name}: ${level} out of 100`}>
        <span style={{ "--level": `${level}%` }} />
      </div>
      <span className="skill__level">{level}%</span>
    </li>
  );
}
