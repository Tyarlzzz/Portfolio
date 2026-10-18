import { Sun, Moon, X } from "lucide-react";
import SocialLinks from "./SocialLinks.jsx";

/**
 * Left navigation rail (becomes a slide-in drawer on phones).
 * Props: profile, socials, pages, activePage, onNavigate, theme, onToggleTheme, isOpen, onClose
 */
export default function Sidebar({
  profile,
  socials,
  pages,
  activePage,
  onNavigate,
  theme,
  onToggleTheme,
  isOpen,
  onClose,
}) {
  const isDark = theme === "dark";

  return (
    <aside className={`rail ${isOpen ? "is-open" : ""}`} aria-label="Site navigation">
      <div className="rail__top">
        <div className="rail__badge" aria-hidden="true">
          {profile.initials}
        </div>
        <div className="rail__who">
          <p className="rail__name">{profile.fullName}</p>
          <p className="rail__sub">
            {profile.courseShort} student at {profile.schoolShort}
          </p>
        </div>
        <button type="button" className="icon-btn rail__close" onClick={onClose} aria-label="Close menu">
          <X size={20} />
        </button>
      </div>

      <nav aria-label="Main">
        <ul className="nav">
          {pages.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <a
                href={`#/${id}`}
                className={`nav__item ${activePage === id ? "is-active" : ""}`}
                aria-current={activePage === id ? "page" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(id);
                }}
              >
                <Icon size={18} aria-hidden="true" />
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="rail__bottom">
        <SocialLinks socials={socials} variant="rail" />
        <button type="button" className="theme-toggle" onClick={onToggleTheme} aria-pressed={isDark}>
          {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          <span>{isDark ? "Switch to light mode" : "Switch to dark mode"}</span>
        </button>
      </div>
    </aside>
  );
}
