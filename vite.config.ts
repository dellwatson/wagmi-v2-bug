import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import react from "@vitejs/plugin-react-swc";

import path from "path";
// import glsl from "vite-plugin-glsl";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // unocss(),
    react(),
  ],
  assetsInclude: [
    "**/*.json",
    "**/*.gltf",
    "**/*.glb",
    "**/*.jpeg",
    "**/*.png",
    "**/*.lottie",
    "**/*.mp3",
    "**/*.cube",
    "**/*.hdr",
    "**/*.glsl",
  ],
});
