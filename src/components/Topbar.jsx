import { Menu } from "lucide-react";

/** Mobile-only header with the menu button. Props: name, onOpenMenu */
export default function Topbar({ name, onOpenMenu }) {
  return (
    <header className="topbar">
      <button type="button" className="icon-btn" onClick={onOpenMenu} aria-label="Open menu">
        <Menu size={22} />
      </button>
      <span className="topbar__name">{name}</span>
    </header>
  );
}
