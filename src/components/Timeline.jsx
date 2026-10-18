/** Props: items — [{ period, title, place, note }] */
export default function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li key={`${item.period}-${item.title}`} className="timeline__item">
          <p className="timeline__period">{item.period}</p>
          <h3>{item.title}</h3>
          <p className="timeline__place">{item.place}</p>
          {item.note && <p className="muted">{item.note}</p>}
        </li>
      ))}
    </ol>
  );
}
