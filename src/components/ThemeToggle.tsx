import { useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {dark ? "☀️" : "🌙"}
    </button>
  );
}
