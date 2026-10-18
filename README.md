# Charles Jerald C. Carpio — React Portfolio

Built with React 18 + Vite. Four pages: **Home (dashboard)**, **Projects**, **About**, **Contact**.

## Run it

```bash
npm install
npm run dev       # opens at http://localhost:5173
npm run build     # production build in /dist
```

## Make it yours

Open **`src/data/profile.js`** — every name, paragraph, project, skill and link on the site comes from that one file.
Anything written like `[This]` is a placeholder. Leave a link as `""` to hide it.

- Profile photo → put `me.jpg` in `/public`, then set `photo: "/me.jpg"`
- Resume → put `resume.pdf` in `/public`, then set `resumeUrl: "/resume.pdf"`
- Project screenshots → put images in `/public`, then set `image: "/shot.png"`

## Where the class requirements are

| Requirement | Where |
| --- | --- |
| 4 main pages | `src/pages/` — Home, Projects, About, Contact |
| Functional components | everything in `src/components/` and `src/pages/` |
| Props | `ProjectCard`, `SkillBar`, `Timeline`, `StatTile`, `Sidebar`, `SectionHeading` … |
| State (`useState`) | page + theme + menu in `App.jsx`; filters/search/sort in `Projects.jsx`; skill tabs in `About.jsx`; form in `ContactForm.jsx` |
| Event handling | `onClick`, `onChange`, `onSubmit`, keyboard (`Esc`) in `ProjectModal.jsx` and `App.jsx` |
| Plugins + custom CSS | `lucide-react` icons and Google Fonts, mixed with over 1,000 lines of hand-written CSS in `src/index.css` |

## Deploy (free)

Upload the project to GitHub, then import it on **Netlify** or **Vercel** (build command `npm run build`, output folder `dist`).
