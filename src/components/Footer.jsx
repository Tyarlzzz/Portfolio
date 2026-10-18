/** Props: name */
export default function Footer({ name }) {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {name}</p>
      <p>Built with React</p>
    </footer>
  );
}
