"use client";
import { useState, useEffect, useRef } from "react";
import {
  Box, Button, Container, Typography, Modal, TextField,
  Tab, Tabs, IconButton, InputAdornment, Chip, Avatar,
  Fade, Backdrop, Divider, Paper, Grid, Stack
} from "@mui/material";
import {  alpha } from "@mui/material/styles";
import {
  Visibility, VisibilityOff, Close, Google, GitHub,
  School, MenuBook, Timer, EmojiEvents, TrendingUp,
  Shield, Speed, Groups, AutoAwesome, ArrowForward,
  CheckCircle, StarBorder, Bolt
} from "@mui/icons-material";
import RoleSection from "../components/ui/roleSection";
import Navbar from "../components/layout/header";


// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero({ onSignup }) {
  return (
    <Box sx={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      pt: 12, pb: 8, position: "relative",
    }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", position: "relative" }}>
          {/* Eyebrow */}
          <Chip
            label="🚀  The Future of Online Assessment"
            sx={{
              mb: 4, height: 32, fontSize: "0.72rem",
              fontFamily: "'Syne', sans-serif", fontWeight: 600, letterSpacing: "0.08em",
              background: "rgba(0,245,255,0.08)",
              border: "1px solid rgba(0,245,255,0.25)",
              color: "#00F5FF",
            }}
          />

          {/* Main heading */}
          <Typography variant="h1" sx={{
            fontSize: { xs: "2.5rem", sm: "4rem", md: "5.5rem", lg: "7rem" },
            lineHeight: 0.95, mb: 3,
            background: "linear-gradient(180deg, #F0F6FF 0%, rgba(240,246,255,0.5) 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            EXAM
            <Box component="span" sx={{
              display: "block",
              background: "linear-gradient(90deg, #00F5FF 0%, #7850FF 50%, #FF2D78 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              REIMAGINED
            </Box>
          </Typography>

          <Typography variant="body1" sx={{
            maxWidth: 560, mx: "auto", mb: 6, color: "text.secondary",
            fontSize: "1.1rem", lineHeight: 1.7, fontWeight: 300,
          }}>
            A next-generation exam platform where students achieve their potential
            and teachers deliver brilliant assessments — powered by AI, built for excellence.
          </Typography>

          {/* CTA row */}
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap", mb: 8 }}>
            <Button
              onClick={onSignup}
              size="large"
              endIcon={<ArrowForward />}
              sx={{
                background: "linear-gradient(90deg, #00F5FF, #7850FF)",
                color: "#030712", fontWeight: 800,
                px: 4, py: 1.5, fontSize: "0.85rem",
                "&:hover": {
                  boxShadow: "0 0 40px rgba(0,245,255,0.5), 0 0 80px rgba(120,80,255,0.3)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s",
              }}
            >
              Start for Free
            </Button>
            <Button
              size="large"
              variant="outlined"
              sx={{
                borderColor: "rgba(0,245,255,0.4)", color: "#00F5FF",
                px: 4, py: 1.5, fontSize: "0.85rem",
                "&:hover": { borderColor: "#00F5FF", background: "rgba(0,245,255,0.05)" },
              }}
            >
              Watch Demo
            </Button>
          </Box>

          {/* Floating stats */}
          <Grid container spacing={3} justifyContent="center" sx={{ maxWidth: 700, mx: "auto" }}>
            {[
              { value: "2M+", label: "Students", icon: <School sx={{ fontSize: 18 }} /> },
              { value: "98%", label: "Accuracy Rate", icon: <CheckCircle sx={{ fontSize: 18 }} /> },
              { value: "150K+", label: "Exams Created", icon: <MenuBook sx={{ fontSize: 18 }} /> },
              { value: "45+", label: "Countries", icon: <Groups sx={{ fontSize: 18 }} /> },
            ].map(({ value, label, icon }) => (
              <Grid item xs={6} sm={3} key={label}>
                <Box sx={{
                  p: 2, textAlign: "center",
                  background: "rgba(13,17,23,0.7)",
                  border: "1px solid rgba(0,245,255,0.12)",
                  backdropFilter: "blur(10px)",
                  borderRadius: 2,
                  "&:hover": { borderColor: "rgba(0,245,255,0.4)", transform: "translateY(-4px)" },
                  transition: "all 0.3s",
                }}>
                  <Box sx={{ color: "#00F5FF", mb: 0.5 }}>{icon}</Box>
                  <Typography variant="h4" sx={{
                    fontFamily: "'Orbitron', monospace", fontSize: "1.6rem",
                    background: "linear-gradient(135deg, #00F5FF, #7850FF)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  }}>{value}</Typography>
                  <Typography sx={{ fontSize: "0.7rem", color: "text.secondary", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>{label}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}



// ─── FEATURES ─────────────────────────────────────────────────────────────────
function Features() {
  const items = [
    { icon: <Timer />, title: "Real-time Proctoring", desc: "AI-powered eye tracking and tab monitoring to ensure exam integrity." },
    { icon: <TrendingUp />, title: "Deep Analytics", desc: "Granular reports on performance trends, weak areas, and improvement paths." },
    { icon: <Shield />, title: "Bank-grade Security", desc: "End-to-end encryption and zero-trust architecture for your exam data." },
    { icon: <Speed />, title: "Lightning Fast", desc: "Sub-100ms latency globally with edge-deployed infrastructure." },
    { icon: <AutoAwesome />, title: "AI Question Gen", desc: "Generate thousands of unique questions from a syllabus in seconds." },
    { icon: <EmojiEvents />, title: "Gamification", desc: "Badges, streaks, and leaderboards that make learning addictive." },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 14 }, position: "relative" }}>
      <Box sx={{
        position: "absolute", left: "50%", top: "50%",
        transform: "translate(-50%, -50%)",
        width: 800, height: 400,
        background: "radial-gradient(ellipse, rgba(120,80,255,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h2" sx={{
            fontSize: { xs: "2rem", md: "3.5rem" },
            background: "linear-gradient(90deg, #00F5FF, #7850FF)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            mb: 2,
          }}>
            EVERY EDGE. COVERED.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {items.map(({ icon, title, desc }) => (
            <Grid item xs={12} sm={6} md={4} key={title}>
              <Box sx={{
                p: 3.5, height: "100%",
                background: "rgba(13,17,23,0.6)",
                border: "1px solid rgba(0,245,255,0.08)",
                borderRadius: 2, backdropFilter: "blur(10px)",
                "&:hover": {
                  borderColor: "rgba(0,245,255,0.3)",
                  "& .feat-icon": { color: "#00F5FF", transform: "scale(1.1)" },
                },
                transition: "all 0.3s",
              }}>
                <Box className="feat-icon" sx={{
                  color: "#7850FF", mb: 2, display: "inline-flex",
                  transition: "all 0.3s",
                }}>
                  {icon}
                </Box>
                <Typography variant="h6" sx={{ mb: 1, fontSize: "1rem" }}>{title}</Typography>
                <Typography sx={{ color: "text.secondary", fontSize: "0.88rem", lineHeight: 1.65 }}>{desc}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

// ─── CTA BANNER ───────────────────────────────────────────────────────────────
function CTABanner({ onSignup }) {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, position: "relative" }}>
      <Container maxWidth="md">
        <Box sx={{
          p: { xs: 4, md: 8 }, textAlign: "center",
          background: "linear-gradient(135deg, rgba(0,245,255,0.06), rgba(120,80,255,0.06), rgba(255,45,120,0.06))",
          border: "1px solid rgba(0,245,255,0.2)",
          borderRadius: 4, position: "relative", overflow: "hidden",
        }}>
          <Box sx={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse at center, rgba(120,80,255,0.1) 0%, transparent 70%)",
          }} />
          <Typography sx={{
            fontSize: "0.72rem", fontFamily: "'Syne', sans-serif", fontWeight: 700,
            letterSpacing: "0.2em", textTransform: "uppercase", color: "#00F5FF", mb: 2,
          }}>
            ⚡ Zero Setup · Free Forever Plan
          </Typography>
          <Typography variant="h2" sx={{
            fontSize: { xs: "2rem", md: "3.5rem" }, mb: 2,
            background: "linear-gradient(180deg, #F0F6FF, rgba(240,246,255,0.6))",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            READY TO BEGIN?
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 5, fontSize: "1rem" }}>
            Join over 2 million students and 100,000 educators who've already made the switch.
          </Typography>
          <Button
            size="large"
            onClick={onSignup}
            endIcon={<ArrowForward />}
            sx={{
              background: "linear-gradient(90deg, #00F5FF, #7850FF, #FF2D78)",
              color: "#030712", fontWeight: 900, px: 5, py: 1.8, fontSize: "0.9rem",
              "&:hover": {
                boxShadow: "0 0 60px rgba(0,245,255,0.4), 0 0 120px rgba(255,45,120,0.2)",
                transform: "translateY(-3px) scale(1.02)",
              },
              transition: "all 0.3s",
            }}
          >
            Create Free Account
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

// ─── AUTH MODAL ───────────────────────────────────────────────────────────────
function AuthModal({ open, onClose, initialTab = 0 }) {
  const [tab, setTab] = useState(initialTab);
  const [role, setRole] = useState("student");
  const [showPw, setShowPw] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => { if (open) setTab(initialTab); }, [open, initialTab]);

  const tabColor = "#00F5FF";

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: { timeout: 400, sx: { backdropFilter: "blur(10px)", background: "rgba(3,7,18,0.7)" } } }}
    >
      <Fade in={open}>
        <Box sx={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "95vw", sm: 460 },
          maxHeight: "95vh", overflowY: "auto",
          background: "#0D1117",
          border: "1px solid rgba(0,245,255,0.2)",
          borderRadius: 3, outline: "none",
          boxShadow: "0 0 80px rgba(0,245,255,0.15), 0 40px 80px rgba(0,0,0,0.6)",
          overflow: "hidden",
        }}>
          {/* Modal header glow */}
          <Box sx={{
            height: 3,
            background: "linear-gradient(90deg, #00F5FF, #7850FF, #FF2D78)",
          }} />

          <Box sx={{ p: { xs: 3, sm: 4 } }}>
            {/* Close */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box sx={{
                  width: 28, height: 28,
                  background: "linear-gradient(135deg, #00F5FF, #7850FF)",
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Bolt sx={{ fontSize: 14, color: "#030712" }} />
                </Box>
                <Typography sx={{
                  fontFamily: "'Orbitron', monospace", fontSize: "0.9rem",
                  background: "linear-gradient(90deg, #00F5FF, #7850FF)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  letterSpacing: "0.15em",
                }}>NEXAMIFY</Typography>
              </Box>
              <IconButton onClick={onClose} size="small" sx={{ color: "text.secondary", "&:hover": { color: "#FF2D78" } }}>
                <Close fontSize="small" />
              </IconButton>
            </Box>

            {/* Tabs */}
            <Tabs
              value={tab}
              onChange={(_, v) => setTab(v)}
              sx={{
                mb: 3,
                "& .MuiTabs-indicator": { background: tabColor, height: 2 },
                "& .Mui-selected": { color: `${tabColor} !important` },
                "& .MuiTab-root": { color: "text.secondary", flex: 1 },
                borderBottom: "1px solid rgba(0,245,255,0.12)",
              }}
            >
              <Tab label="Sign In" />
              <Tab label="Create Account" />
            </Tabs>

            {/* SIGN IN */}
            {tab === 0 && (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography variant="h5" sx={{ fontSize: "1.4rem", mb: 0.5 }}>Welcome back</Typography>
                <Typography sx={{ color: "text.secondary", fontSize: "0.85rem", mb: 1 }}>
                  Continue your learning journey
                </Typography>

                <TextField fullWidth label="Email Address" type="email" variant="outlined" size="small" />
                <TextField
                  fullWidth label="Password" type={showPw ? "text" : "password"} variant="outlined" size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton size="small" onClick={() => setShowPw(!showPw)} sx={{ color: "text.secondary" }}>
                          {showPw ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <Typography sx={{ fontSize: "0.78rem", color: "#00F5FF", cursor: "pointer", "&:hover": { textDecoration: "underline" } }}>
                    Forgot password?
                  </Typography>
                </Box>

                <Button
                  fullWidth variant="contained"
                  sx={{
                    py: 1.4, background: "linear-gradient(90deg, #00F5FF, #7850FF)",
                    color: "#030712", fontWeight: 800, mt: 1,
                    "&:hover": { boxShadow: "0 0 30px rgba(0,245,255,0.4)", transform: "translateY(-1px)" },
                    transition: "all 0.2s",
                  }}
                >
                  Sign In
                </Button>

                <Divider sx={{ my: 1, borderColor: "rgba(255,255,255,0.08)", "&::before,&::after": { borderColor: "rgba(255,255,255,0.08)" } }}>
                  <Typography sx={{ fontSize: "0.72rem", color: "text.secondary", px: 1 }}>OR CONTINUE WITH</Typography>
                </Divider>

                <Box sx={{ display: "flex", gap: 2 }}>
                  {[{ icon: <Google fontSize="small" />, label: "Google" }, { icon: <GitHub fontSize="small" />, label: "GitHub" }].map(({ icon, label }) => (
                    <Button
                      key={label} fullWidth variant="outlined"
                      startIcon={icon}
                      sx={{
                        borderColor: "rgba(0,245,255,0.2)", color: "text.secondary",
                        fontSize: "0.75rem",
                        "&:hover": { borderColor: "#00F5FF", color: "#00F5FF", background: "rgba(0,245,255,0.05)" },
                      }}
                    >
                      {label}
                    </Button>
                  ))}
                </Box>

                <Typography sx={{ textAlign: "center", fontSize: "0.82rem", color: "text.secondary", mt: 1 }}>
                  No account?{" "}
                  <Box component="span" sx={{ color: "#00F5FF", cursor: "pointer", fontWeight: 600, "&:hover": { textDecoration: "underline" } }}
                    onClick={() => setTab(1)}>
                    Sign up free
                  </Box>
                </Typography>
              </Box>
            )}

            {/* SIGN UP */}
            {tab === 1 && (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography variant="h5" sx={{ fontSize: "1.4rem", mb: 0.5 }}>Create account</Typography>
                <Typography sx={{ color: "text.secondary", fontSize: "0.85rem", mb: 1 }}>
                  Choose your role to get started
                </Typography>

                {/* Role selector */}
                <Box sx={{ display: "flex", gap: 2, mb: 1 }}>
                  {[
                    { value: "student", label: "Student", icon: <School sx={{ fontSize: 18 }} />, color: "#00F5FF" },
                    { value: "teacher", label: "Teacher", icon: <MenuBook sx={{ fontSize: 18 }} />, color: "#FF2D78" },
                  ].map(({ value, label, icon, color }) => (
                    <Box
                      key={value}
                      onClick={() => setRole(value)}
                      sx={{
                        flex: 1, py: 1.5, px: 2,
                        display: "flex", flexDirection: "column", alignItems: "center", gap: 0.5,
                        border: `1.5px solid ${role === value ? color : "rgba(255,255,255,0.1)"}`,
                        borderRadius: 2, cursor: "pointer",
                        background: role === value ? alpha(color, 0.08) : "transparent",
                        color: role === value ? color : "text.secondary",
                        transition: "all 0.2s",
                        "&:hover": { borderColor: color, color },
                      }}
                    >
                      {icon}
                      <Typography sx={{ fontSize: "0.78rem", fontFamily: "'Syne', sans-serif", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                        {label}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Box sx={{ display: "flex", gap: 2 }}>
                  <TextField fullWidth label="First Name" variant="outlined" size="small" />
                  <TextField fullWidth label="Last Name" variant="outlined" size="small" />
                </Box>
                <TextField fullWidth label="Email Address" type="email" variant="outlined" size="small" />
                {role === "teacher" && (
                  <TextField fullWidth label="Institution / School" variant="outlined" size="small" />
                )}
                <TextField
                  fullWidth label="Password" type={showPw ? "text" : "password"} variant="outlined" size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton size="small" onClick={() => setShowPw(!showPw)} sx={{ color: "text.secondary" }}>
                          {showPw ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  fullWidth label="Confirm Password" type={showConfirm ? "text" : "password"} variant="outlined" size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton size="small" onClick={() => setShowConfirm(!showConfirm)} sx={{ color: "text.secondary" }}>
                          {showConfirm ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <Button
                  fullWidth variant="contained"
                  sx={{
                    py: 1.4, mt: 0.5,
                    background: role === "student"
                      ? "linear-gradient(90deg, #00F5FF, #7850FF)"
                      : "linear-gradient(90deg, #FF2D78, #7850FF)",
                    color: "#030712", fontWeight: 800,
                    "&:hover": { boxShadow: `0 0 30px ${role === "student" ? "rgba(0,245,255,0.4)" : "rgba(255,45,120,0.4)"}`, transform: "translateY(-1px)" },
                    transition: "all 0.2s",
                  }}
                >
                  Create {role === "student" ? "Student" : "Teacher"} Account
                </Button>

                <Divider sx={{ my: 0.5, borderColor: "rgba(255,255,255,0.08)", "&::before,&::after": { borderColor: "rgba(255,255,255,0.08)" } }}>
                  <Typography sx={{ fontSize: "0.72rem", color: "text.secondary", px: 1 }}>OR</Typography>
                </Divider>

                <Box sx={{ display: "flex", gap: 2 }}>
                  {[{ icon: <Google fontSize="small" />, label: "Google" }, { icon: <GitHub fontSize="small" />, label: "GitHub" }].map(({ icon, label }) => (
                    <Button
                      key={label} fullWidth variant="outlined"
                      startIcon={icon}
                      sx={{
                        borderColor: "rgba(0,245,255,0.2)", color: "text.secondary", fontSize: "0.75rem",
                        "&:hover": { borderColor: "#00F5FF", color: "#00F5FF", background: "rgba(0,245,255,0.05)" },
                      }}
                    >
                      {label}
                    </Button>
                  ))}
                </Box>

                <Typography sx={{ textAlign: "center", fontSize: "0.8rem", color: "text.secondary" }}>
                  Already have an account?{" "}
                  <Box component="span" sx={{ color: "#00F5FF", cursor: "pointer", fontWeight: 600, "&:hover": { textDecoration: "underline" } }}
                    onClick={() => setTab(0)}>
                    Sign in
                  </Box>
                </Typography>

                <Typography sx={{ fontSize: "0.72rem", color: "text.secondary", textAlign: "center" }}>
                  By signing up, you agree to our{" "}
                  <Box component="span" sx={{ color: "#00F5FF", cursor: "pointer" }}>Terms</Box>
                  {" & "}
                  <Box component="span" sx={{ color: "#00F5FF", cursor: "pointer" }}>Privacy Policy</Box>
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}



// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function ExamHomePage() {
  const [authOpen, setAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState(0);

  const openLogin  = () => { setAuthTab(0); setAuthOpen(true); };
  const openSignup = () => { setAuthTab(1); setAuthOpen(true); };

  return (
    <>
        {/* All sections sit above the background */}
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Navbar onLogin={openLogin} onSignup={openSignup} />
          <Hero onSignup={openSignup} />
          <RoleSection onSignup={openSignup} />
          <Features />
          <CTABanner onSignup={openSignup} />
          {/* <Footer /> */}
        </Box>
        <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} initialTab={authTab} />
    </>
  );
}