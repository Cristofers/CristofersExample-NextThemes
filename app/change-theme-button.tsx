"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ChangeThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const onClickHandler = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <button
      onClick={onClickHandler}
      className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
    >
      Cambiar Tema (Tema Actual: {theme} )
    </button>
  );
};

export default ChangeThemeButton;
