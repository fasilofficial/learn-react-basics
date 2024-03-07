import React, { useEffect, useState } from "react";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import LightModeIcon from "@mui/icons-material/LightMode";

const ToggleTheme = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDark(true);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button className="absolute right-4 top-4 w-14 h-14 rounded-full shadow-lg" onClick={() => setDark(!dark)}>
      {dark ? <LightModeIcon /> : <NightlightRoundIcon />}
    </button>
  );
};

export default ToggleTheme;
