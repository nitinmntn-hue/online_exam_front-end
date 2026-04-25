"use client";
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

// ─── FOOTER ───────────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <Box sx={{
      borderTop: "1px solid rgba(0,245,255,0.08)",
      py: 4, px: { xs: 2, md: 5 },
      display: "flex", flexDirection: { xs: "column", md: "row" },
      alignItems: "center", justifyContent: "space-between", gap: 2,
    }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Box sx={{
          width: 26, height: 26,
          background: "linear-gradient(135deg, #00F5FF, #7850FF)",
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <Bolt sx={{ fontSize: 13, color: "#030712" }} />
        </Box>
        <Typography sx={{
          fontFamily: "'Orbitron', monospace", fontSize: "0.85rem",
          background: "linear-gradient(90deg, #00F5FF, #7850FF)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          letterSpacing: "0.15em",
        }}>
          NEXAMIFY
        </Typography>
      </Box>
      <Typography sx={{ fontSize: "0.75rem", color: "text.secondary" }}>
        © 2026 Nexamify. Built for the future of education.
      </Typography>
      <Box sx={{ display: "flex", gap: 3 }}>
        {["Privacy", "Terms", "Support"].map((item) => (
          <Typography key={item} sx={{
            fontSize: "0.72rem", color: "text.secondary", cursor: "pointer",
            fontFamily: "'Syne', sans-serif", fontWeight: 600, letterSpacing: "0.08em",
            textTransform: "uppercase",
            "&:hover": { color: "#00F5FF" }, transition: "color 0.2s",
          }}>
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}