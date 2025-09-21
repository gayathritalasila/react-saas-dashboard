import { useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export default function useDarkTheme(mode) {
  // mode is either "light" or "dark"
  return useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "dark"
            ? {
              background: { default: "#111", paper: "#1e1e1e" },
              text: { primary: "#fff" },
            }
            : {
              background: { default: "#f9fafb", paper: "#fff" },
              text: { primary: "#111" },
            }),
        },
      }),
    [mode]
  );
}
