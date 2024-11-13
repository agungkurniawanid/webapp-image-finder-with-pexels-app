"use client";
import React, { createContext, useState, useContext, useEffect, use } from "react";

type ThemeContextType = {
  isDark: number;
  setDarkTheme: () => void;
  setLightTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState<number>(0);

  useEffect(() => {
    const savedTheme = localStorage.getItem("isDark");
    if (savedTheme !== null) {
      setIsDark(Number(savedTheme));
    }
  }, []);

  const setDarkTheme = () => {
    setIsDark(1);
    localStorage.setItem("isDark", "1");
  };

  const setLightTheme = () => {
    setIsDark(0);
    localStorage.setItem("isDark", "0");
  };

  return (
    <ThemeContext.Provider value={{ isDark, setDarkTheme, setLightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
