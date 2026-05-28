import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

// After build, copy index.html to 404.html so GitHub Pages serves the
// built SPA shell on any deep-link refresh instead of a stale fallback.
const spa404Fallback = (): Plugin => ({
  name: "spa-404-fallback",
  apply: "build",
  closeBundle() {
    const out = resolve(__dirname, "docs");
    const src = resolve(out, "index.html");
    const dst = resolve(out, "404.html");
    if (existsSync(src)) copyFileSync(src, dst);
  },
});

// GitHub Pages project site base path.
// If you switch to a user site (username.github.io) or a custom domain,
// set base to "/" instead.
export default defineConfig({
  base: "/zach-benalayat-product-portfolio/",
  build: {
    // GitHub Pages "Deploy from a branch" serves /docs on main
    outDir: "docs",
    emptyOutDir: true,
  },
  plugins: [
    TanStackRouterVite({
      target: "react",
      autoCodeSplitting: true,
      routesDirectory: "src/routes",
      generatedRouteTree: "src/routeTree.gen.ts",
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
    spa404Fallback(),
  ],
  resolve: {
    dedupe: ["react", "react-dom", "@tanstack/react-router"],
  },
  server: {
    host: true,
    port: 8080,
    strictPort: false,
  },
});
