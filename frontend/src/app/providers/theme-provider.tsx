"use client";
import { ReactNode } from "react";

// No-op theme provider: rely on system prefers-color-scheme via CSS.
export function ThemeProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}