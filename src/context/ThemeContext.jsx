"use client";

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  try {
    if (typeof window !== "undefined") {
      const value = localStorage.getItem("theme");
      return value || "dark";
    } else {
      console.error("Error: localStorage is not available on the server-side.");
      return "dark"; // Default value
    }
  } catch (error) {
    console.error("Error accessing localStorage:", error);
    return "dark"; // Default value
  }
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    try {
      // Check if window is defined to ensure running in the browser
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", theme);
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
