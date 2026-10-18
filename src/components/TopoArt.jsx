import { useMemo } from "react";

/**
 * Decorative contour-map lines (like a topographic map of a rice field).
 * Props:
 *  - seed:  changes the shape, so every project gets its own map
 *  - rings: how many contour lines to draw
 *  - draw:  when true the lines draw themselves in once (used on Home)
 *  - fit:   "meet" keeps the whole map visible, "slice" fills the box
 */
export default function TopoArt({ seed = 1, rings = 14, draw = false, fit = "meet", className = "" }) {
  const paths = useMemo(() => buildContours(seed, rings), [seed, rings]);

  return (
    <svg
      className={`topo ${draw ? "topo--draw" : ""} ${className}`}
      viewBox="0 0 400 400"
      preserveAspectRatio={fit === "slice" ? "xMidYMid slice" : "xMidYMid meet"}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
      focusable="false"
    >
      {paths.map((d, i) => (
        <path key={i} d={d} pathLength="1" style={{ "--i": i }} />
      ))}
    </svg>
  );
}

function buildContours(seed, rings) {
  const POINTS = 96;
  const a1 = 2 + (seed % 3);
  const a2 = 4 + (seed % 4);
  const p1 = seed * 1.7;
  const p2 = seed * 0.9;
  const out = [];

  for (let i = 0; i < rings; i++) {
    const base = 14 + i * (136 / rings);
    const wobble = 0.05 + i * 0.004;
    const cx = 200 + Math.sin(seed + i * 0.3) * 6;
    const cy = 200 + Math.cos(seed * 1.3 + i * 0.25) * 6;
    let d = "";

    for (let k = 0; k < POINTS; k++) {
      const t = (k / POINTS) * Math.PI * 2;
      const r =
        base *
        (1 +
          wobble * Math.sin(a1 * t + p1 + i * 0.22) +
          wobble * 0.6 * Math.sin(a2 * t + p2 - i * 0.15));
      const x = (cx + Math.cos(t) * r).toFixed(1);
      const y = (cy + Math.sin(t) * r).toFixed(1);
      d += `${k === 0 ? "M" : "L"}${x} ${y} `;
    }
    out.push(d + "Z");
  }
  return out;
}
