// Import necessary dependencies
import { createContext, useState, useEffect } from "react";

// Create the theme context
export const ThemeContext = createContext();

// Define the ThemeContextProvider component
export const ThemeContextProvider = ({ children }) => {
  // State to hold the theme
  const [theme, setTheme] = useState("dark");

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Effect to update the theme based on URL parameter
  useEffect(() => {
    // Function to get theme preference from URL parameter
    const getThemeFromURL = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const themeParam = urlParams.get("theme");
      return themeParam || "dark"; // Default to dark theme if no parameter is provided
    };

    // Update theme based on URL parameter
    setTheme(getThemeFromURL());
  }, []);

  // Effect to update URL parameter when theme changes
  useEffect(() => {
    // Update URL parameter with theme preference
    window.history.replaceState(null, null, `?theme=${theme}`);
  }, [theme]);

  // Render the context provider with theme state and toggle function
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
