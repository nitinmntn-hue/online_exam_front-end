import { useState, useEffect, useRef } from "react";
import {
  Box, Button, Container, Typography, Modal, TextField,
  Tab, Tabs, IconButton, InputAdornment, Chip, Avatar,
  Fade, Backdrop, Divider, Paper, Grid, Stack
} from "@mui/material";
import { createTheme, ThemeProvider, alpha } from "@mui/material/styles";
import {
  Visibility, VisibilityOff, Close, Google, GitHub,
  School, MenuBook, Timer, EmojiEvents, TrendingUp,
  Shield, Speed, Groups, AutoAwesome, ArrowForward,
  CheckCircle, StarBorder, Bolt
} from "@mui/icons-material";

// ─── NAV ──────────────────────────────────────────────────────────────────────
export default function Navbar({ onLogin, onSignup }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <Box sx={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      py: 1.5, px: { xs: 2, md: 5 },
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: scrolled
        ? "rgba(3,7,18,0.85)"
        : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(0,245,255,0.1)" : "none",
      transition: "all 0.4s ease",
    }}>
      {/* Logo */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Box sx={{
          width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center",
          background: "linear-gradient(135deg, #00F5FF, #7850FF)",
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}>
          <Bolt sx={{ fontSize: 18, color: "#030712" }} />
        </Box>
        <Typography variant="h6" sx={{
          fontFamily: "'Orbitron', monospace", fontSize: "1rem",
          background: "linear-gradient(90deg, #00F5FF, #7850FF)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          letterSpacing: "0.15em",
        }}>
          NEXAMIFY
        </Typography>
      </Box>

      {/* Nav Links */}
      <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4, alignItems: "center" }}>
        {["Features", "For Students", "For Teachers", "Pricing"].map((item) => (
          <Typography key={item} sx={{
            fontSize: "0.75rem", fontFamily: "'Syne', sans-serif", fontWeight: 600,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: "text.secondary", cursor: "pointer",
            transition: "color 0.2s",
            "&:hover": { color: "#00F5FF" },
          }}>
            {item}
          </Typography>
        ))}
      </Box>

      {/* Auth buttons */}
      <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
        <Button
          variant="text"
          onClick={onLogin}
          sx={{ color: "text.secondary", "&:hover": { color: "#00F5FF" }, fontSize: "0.75rem" }}
        >
          Log In
        </Button>
        <Button
          variant="contained"
          onClick={onSignup}
          sx={{
            background: "linear-gradient(90deg, #00F5FF, #7850FF)",
            color: "#030712", fontWeight: 800,
            "&:hover": { transform: "translateY(-1px)", boxShadow: "0 0 20px rgba(0,245,255,0.4)" },
            transition: "all 0.2s",
          }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
}