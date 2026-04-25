import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary:   { main: "#00F5FF" },
    secondary: { main: "#FF2D78" },
    background: { default: "#030712", paper: "#0D1117" },
    text: { primary: "#F0F6FF", secondary: "#8B9CC8" },
  },
  typography: {
    fontFamily: "'DM Sans', sans-serif",
    h1: { fontFamily: "'Orbitron', monospace", fontWeight: 900, letterSpacing: "-0.02em" },
    h2: { fontFamily: "'Orbitron', monospace", fontWeight: 800 },
    h3: { fontFamily: "'Syne', sans-serif", fontWeight: 700 },
    h4: { fontFamily: "'Syne', sans-serif", fontWeight: 700 },
    h5: { fontFamily: "'Syne', sans-serif", fontWeight: 600 },
    h6: { fontFamily: "'Syne', sans-serif", fontWeight: 600 },
    button: { fontFamily: "'Syne', sans-serif", fontWeight: 700, letterSpacing: "0.08em" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          textTransform: "uppercase",
          fontSize: "0.75rem",
          padding: "10px 24px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
            background: "rgba(0,245,255,0.03)",
            "& fieldset": { borderColor: "rgba(0,245,255,0.2)" },
            "&:hover fieldset": { borderColor: "rgba(0,245,255,0.5)" },
            "&.Mui-focused fieldset": { borderColor: "#00F5FF", borderWidth: 1.5 },
          },
          "& .MuiInputLabel-root.Mui-focused": { color: "#00F5FF" },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: "'Syne', sans-serif",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          fontSize: "0.75rem",
        },
      },
    },
  },
});
export default theme;