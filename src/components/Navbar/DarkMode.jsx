import React from "react";
import {
  MdDarkMode,
  MdLightMode,
} from "react-icons/md";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    return savedTheme;
  }

  return window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches
    ? "dark"
    : "light";
};

const DarkMode = () => {
  const [theme, setTheme] =
    React.useState(getInitialTheme);

  React.useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark"
    );

    localStorage.setItem("theme", theme);
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() =>
        setTheme(isDark ? "light" : "dark")
      }
      className="rounded-full p-2.5 text-xl text-stone-700 transition hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-primary dark:text-amber-300 dark:hover:bg-stone-800"
      aria-label={
        isDark ? "Use light theme" : "Use dark theme"
      }
      title={
        isDark ? "Use light theme" : "Use dark theme"
      }
    >
      {isDark ? (
        <MdLightMode aria-hidden="true" />
      ) : (
        <MdDarkMode aria-hidden="true" />
      )}
    </button>
  );
};

export default DarkMode;
