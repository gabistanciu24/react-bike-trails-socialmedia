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

  useEffect(() => {
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  }, [theme]);

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
