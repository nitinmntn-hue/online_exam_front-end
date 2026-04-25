"use client";
import {
    Box,
} from "@mui/material";


// ─── NAV ──────────────────────────────────────────────────────────────────────
export default function GridBackground() {
    return (
        <Box sx={{
            position: "fixed", inset: 0, zIndex: 0, overflow: "hidden",
            background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,245,255,0.12) 0%, transparent 70%)",
        }}>
            {/* Grid lines */}
            <Box sx={{
                position: "absolute", inset: 0,
                backgroundImage: `
          linear-gradient(rgba(0,245,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,245,255,0.04) 1px, transparent 1px)
        `,
                backgroundSize: "60px 60px",
            }} />
            {/* Aurora blobs */}
            <Box sx={{
                position: "absolute", width: 600, height: 600,
                borderRadius: "50%", top: "-200px", left: "-100px",
                background: "radial-gradient(circle, rgba(0,245,255,0.08) 0%, transparent 70%)",
                animation: "pulse 8s ease-in-out infinite",
                "@keyframes pulse": {
                    "0%,100%": { transform: "scale(1)", opacity: 0.6 },
                    "50%": { transform: "scale(1.2)", opacity: 1 },
                },
            }} />
            <Box sx={{
                position: "absolute", width: 500, height: 500,
                borderRadius: "50%", bottom: "-100px", right: "-80px",
                background: "radial-gradient(circle, rgba(255,45,120,0.08) 0%, transparent 70%)",
                animation: "pulse 10s ease-in-out infinite 2s",
            }} />
            <Box sx={{
                position: "absolute", width: 300, height: 300,
                borderRadius: "50%", top: "40%", left: "55%",
                background: "radial-gradient(circle, rgba(120,80,255,0.1) 0%, transparent 70%)",
                animation: "pulse 7s ease-in-out infinite 1s",
            }} />
            {/* Scanline overlay */}
            <Box sx={{
                position: "absolute", inset: 0,
                background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
                pointerEvents: "none",
            }} />
        </Box>
    );
}