import { useCallback, useEffect, useState } from "react";
import { Home as HomeIcon, FolderOpen, User, Mail } from "lucide-react";

import {
  profile,
  socials,
  nowItems,
  projects,
  skillGroups,
  education,
  certifications,
  interests,
} from "./data/profile.js";

import Sidebar from "./components/Sidebar.jsx";
import Topbar from "./components/Topbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

const PAGES = [
  { id: "home", label: "Home", icon: HomeIcon },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "about", label: "About", icon: User },
  { id: "contact", label: "Contact", icon: Mail },
];

/** The page lives in the URL hash (#/projects) so refresh and the back button both work. */
function pageFromHash() {
  const id = window.location.hash.replace(/^#\/?/, "");
  return PAGES.some((p) => p.id === id) ? id : "home";
}

function initialTheme() {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export default function App() {
  const [page, setPage] = useState(pageFromHash);
  const [theme, setTheme] = useState(initialTheme);
  const [menuOpen, setMenuOpen] = useState(false);

  // Keep state in sync when the visitor uses the browser's back/forward buttons
  useEffect(() => {
    const onHashChange = () => setPage(pageFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Apply + remember the theme
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("cc-theme", theme);
    } catch {
      /* storage can be blocked; the theme just won't be remembered */
    }
  }, [theme]);

  // Update the tab title and jump to the top whenever the page changes
  useEffect(() => {
    const label = PAGES.find((p) => p.id === page)?.label;
    document.title = page === "home" ? `${profile.fullName} — Portfolio` : `${label} — ${profile.fullName}`;
    window.scrollTo(0, 0);
  }, [page]);

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const navigate = useCallback((id) => {
    window.location.hash = `/${id}`;
    setPage(id);
    setMenuOpen(false);
  }, []);

  const toggleTheme = useCallback(() => setTheme((t) => (t === "dark" ? "light" : "dark")), []);

  let content;
  switch (page) {
    case "projects":
      content = <Projects projects={projects} />;
      break;
    case "about":
      content = (
        <About
          profile={profile}
          skillGroups={skillGroups}
          education={education}
          certifications={certifications}
          interests={interests}
        />
      );
      break;
    case "contact":
      content = <Contact profile={profile} socials={socials} />;
      break;
    default:
      content = <Home profile={profile} projects={projects} nowItems={nowItems} onNavigate={navigate} />;
  }

  return (
    <div className="app">
      <a
        className="skip-link"
        href="#main"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("main")?.focus();
        }}
      >
        Skip to content
      </a>

      <Topbar name={profile.fullName} onOpenMenu={() => setMenuOpen(true)} />

      <Sidebar
        profile={profile}
        socials={socials}
        pages={PAGES}
        activePage={page}
        onNavigate={navigate}
        theme={theme}
        onToggleTheme={toggleTheme}
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
      {menuOpen && <div className="scrim" onClick={() => setMenuOpen(false)} aria-hidden="true" />}

      <main id="main" className="main" tabIndex={-1}>
        <div className="page" key={page}>
          {content}
        </div>
        <Footer name={profile.fullName} />
      </main>
    </div>
  );
}
