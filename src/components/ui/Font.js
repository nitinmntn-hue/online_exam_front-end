"use client";
import { useState, useEffect, useRef } from "react";
// ─── GOOGLE FONT LOADER ───────────────────────────────────────────────────────
export function FontLoader() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Orbitron:wght@700;800;900&family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);
  return null;
}