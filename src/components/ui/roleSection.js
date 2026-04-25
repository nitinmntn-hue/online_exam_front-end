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

// ─── ROLE CARDS ───────────────────────────────────────────────────────────────
export default function RoleSection({ onSignup }) {
  const roles = [
    {
      role: "Students",
      tag: "LEARN SMARTER",
      headline: "Conquer Every Exam",
      desc: "AI-adaptive tests that match your learning pace. Real-time feedback, detailed analytics, and gamified progress to keep you motivated.",
      icon: <School sx={{ fontSize: 40 }} />,
      color: "#00F5FF",
      gradient: "linear-gradient(135deg, rgba(0,245,255,0.15), rgba(120,80,255,0.05))",
      border: "rgba(0,245,255,0.25)",
      features: ["Adaptive Mock Tests", "Instant AI Feedback", "Progress Leaderboard", "Study Streaks"],
    },
    {
      role: "Teachers",
      tag: "TEACH EFFECTIVELY",
      headline: "Craft Brilliant Exams",
      desc: "Build question banks in minutes, schedule proctored exams, get deep analytics on student performance — all from one powerful dashboard.",
      icon: <MenuBook sx={{ fontSize: 40 }} />,
      color: "#FF2D78",
      gradient: "linear-gradient(135deg, rgba(255,45,120,0.15), rgba(120,80,255,0.05))",
      border: "rgba(255,45,120,0.25)",
      features: ["AI Question Generator", "Live Proctoring", "Auto-Grading", "Class Analytics"],
    },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 14 }, position: "relative" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h2" sx={{
            fontSize: { xs: "2rem", md: "3.5rem" },
            background: "linear-gradient(90deg, #F0F6FF, rgba(240,246,255,0.6))",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            mb: 2,
          }}>
            BUILT FOR EVERYONE
          </Typography>
          <Typography sx={{ color: "text.secondary", maxWidth: 480, mx: "auto" }}>
            Whether you're taking an exam or crafting one, Nexamify adapts to your role.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {roles.map(({ role, tag, headline, desc, icon, color, gradient, border, features }) => (
            <Grid item xs={12} md={6} key={role}>
              <Box sx={{
                height: "100%", p: { xs: 3, md: 4.5 },
                background: gradient,
                border: `1px solid ${border}`,
                borderRadius: 3, position: "relative", overflow: "hidden",
                "&:hover": {
                  transform: "translateY(-6px)",
                  borderColor: color,
                  "& .role-glow": { opacity: 1 },
                  "& .role-icon": { transform: "scale(1.1) rotate(-5deg)" },
                },
                transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                backdropFilter: "blur(10px)",
              }}>
                {/* Glow */}
                <Box className="role-glow" sx={{
                  position: "absolute", inset: 0, opacity: 0,
                  background: `radial-gradient(ellipse at top left, ${alpha(color, 0.1)} 0%, transparent 60%)`,
                  transition: "opacity 0.4s",
                }} />

                <Chip label={tag} sx={{
                  mb: 3, height: 24, fontSize: "0.65rem", fontFamily: "'Syne', sans-serif",
                  fontWeight: 700, letterSpacing: "0.15em",
                  background: alpha(color, 0.15), color, border: `1px solid ${alpha(color, 0.4)}`,
                }} />

                <Box className="role-icon" sx={{
                  color, mb: 2,
                  transition: "transform 0.3s",
                  display: "inline-block",
                }}>
                  {icon}
                </Box>

                <Typography variant="h3" sx={{ fontSize: "2rem", mb: 1.5, color: "#F0F6FF" }}>
                  {headline}
                </Typography>
                <Typography sx={{ color: "text.secondary", mb: 3, lineHeight: 1.7, fontSize: "0.95rem" }}>
                  {desc}
                </Typography>

                <Stack spacing={1} sx={{ mb: 4 }}>
                  {features.map((f) => (
                    <Box key={f} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                      <Box sx={{
                        width: 6, height: 6, borderRadius: "50%",
                        background: color, flexShrink: 0,
                        boxShadow: `0 0 8px ${color}`,
                      }} />
                      <Typography sx={{ fontSize: "0.85rem", color: "text.secondary", fontWeight: 500 }}>
                        {f}
                      </Typography>
                    </Box>
                  ))}
                </Stack>

                <Button
                  fullWidth
                  onClick={onSignup}
                  endIcon={<ArrowForward />}
                  sx={{
                    background: alpha(color, 0.12),
                    border: `1px solid ${alpha(color, 0.4)}`,
                    color,
                    "&:hover": { background: alpha(color, 0.22), borderColor: color },
                    py: 1.2,
                  }}
                >
                  Join as {role}
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}