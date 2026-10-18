/** Props: value (big text), label (small text) */
export default function StatTile({ value, label }) {
  return (
    <div className="stat">
      <p className="stat__value">{value}</p>
      <p className="stat__label">{label}</p>
    </div>
  );
}
