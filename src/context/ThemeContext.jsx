"use client";
// Import necessary dependencies
import { createContext, useState, useEffect } from "react";

// Create the theme context
export const ThemeContext = createContext();

// Define the ThemeContextProvider component
export const ThemeContextProvider = ({ children }) => {
  // State to hold the theme
  const [theme, setTheme] = useState(() => {
    // Check if localStorage is available
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      return storedTheme || "dark"; // Return stored theme if available, otherwise default to dark theme
    } else {
      return "dark"; // Default to dark theme if localStorage is not available (e.g., server-side rendering)
    }
  });

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Effect to update localStorage when theme changes
  useEffect(() => {
    // Check if localStorage is available
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  // Render the context provider with theme state and toggle function
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
