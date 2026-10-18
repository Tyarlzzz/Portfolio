import { useEffect, useRef, useState } from "react";
import { Copy, Check } from "lucide-react";

/** Copies text to the clipboard and shows "Copied" for a moment. Props: text, label */
export default function CopyButton({ text, label }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      window.prompt("Copy this text:", text);
    }
  }

  return (
    <button type="button" className="copy-btn" onClick={handleCopy} aria-label={`Copy ${label}`}>
      {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
      <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}
