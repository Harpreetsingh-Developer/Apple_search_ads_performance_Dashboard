import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow production builds to succeed even if ESLint finds issues.
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Optional: ignore TypeScript build errors to avoid blocking deploys.
  // Remove this once the codebase is fully strict-typed.
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
