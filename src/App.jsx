import React, { useEffect, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import useDarkTheme from "./hooks/useDarkTheme";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [mode, setMode] = useState("light");

  // Load user preference
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setMode("dark");
  }, []);

  const theme = useDarkTheme(mode);

  // Toggle function passed to Header
  const toggleTheme = () => {
    const next = mode === "light" ? "dark" : "light";
    setMode(next);
    localStorage.setItem("theme", next);
    // For Tailwind dark classes
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Dashboard toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}
