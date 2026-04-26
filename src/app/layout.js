'use client';
import { useState, useEffect, useRef } from "react";
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from '../theme/theme';
import Footer from '../components/layout/footer';
import GridBackground from '../components/ui/gridBG';
import { FontLoader } from '../components/ui/Font';
import Navbar from '../components/layout/header';

export default function RootLayout({ children }) {
    const [authOpen, setAuthOpen] = useState(false);
      const [authTab, setAuthTab] = useState(0);
    const openLogin  = () => { setAuthTab(0); setAuthOpen(true); };
  const openSignup = () => { setAuthTab(1); setAuthOpen(true); };
    return (
        <html lang="en">
            <body>
                <ThemeProvider theme={theme}>
                    <FontLoader />
                    <CssBaseline />
                    <Navbar onLogin={openLogin} onSignup={openSignup} />
                    <Box sx={{ minHeight: "100vh", background: "#030712", position: "relative", color: "text.primary" }}>

                    <GridBackground />
                    <Box sx={{  }}>{children}</Box>
                    <Footer />
                    </Box>
                </ThemeProvider>
            </body>
        </html>
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