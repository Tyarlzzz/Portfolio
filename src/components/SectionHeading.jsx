/** Props: as ("h1" | "h2"), title, intro (optional) */
export default function SectionHeading({ as: Tag = "h2", title, intro }) {
  return (
    <header className={Tag === "h1" ? "page-head" : "section-head"}>
      <Tag>{title}</Tag>
      {intro && <p>{intro}</p>}
    </header>
  );
}
