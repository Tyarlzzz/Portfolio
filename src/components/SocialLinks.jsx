import { Github, Linkedin, Facebook, Instagram, Link as LinkIcon } from "lucide-react";

const ICONS = {
  github: Github,
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
};

/** Props: socials (array from profile.js), variant ("rail" on the dark sidebar, "page" elsewhere) */
export default function SocialLinks({ socials, variant = "page" }) {
  const visible = socials.filter((s) => s.url);
  if (visible.length === 0) return null;

  return (
    <ul className={`socials socials--${variant}`}>
      {visible.map((s) => {
        const Icon = ICONS[s.id] ?? LinkIcon;
        return (
          <li key={s.id}>
            <a href={s.url} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
              <Icon size={18} aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
