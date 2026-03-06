import netlify from "@netlify/vite-plugin-tanstack-start"
import tailwindcss from "@tailwindcss/vite"
import { devtools } from "@tanstack/devtools-vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import { fileURLToPath, URL } from "node:url"
import { defineConfig } from "vite"
import viteTsConfigPaths from "vite-tsconfig-paths"

const gsapStubPath = fileURLToPath(
  new URL("./src/gsap-ssr-stub.ts", import.meta.url),
)

export default defineConfig((env) => {
  // When building the server bundle (Netlify/TanStack Start), alias gsap to a stub
  // so we avoid "Cannot use import statement outside a module" (gsap is ESM).
  const isSsr =
    (env as { ssr?: boolean }).ssr === true || process.env.SSR === "1"
  return {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        ...(isSsr && {
          gsap: gsapStubPath,
          "gsap/ScrollTrigger": gsapStubPath,
          "gsap/ScrollSmoother": gsapStubPath,
          "gsap/SplitText": gsapStubPath,
          "gsap/ScrambleTextPlugin": gsapStubPath,
          "gsap/DrawSVGPlugin": gsapStubPath,
        }),
      },
    },
    plugins: [
      devtools(),
      viteTsConfigPaths({ projects: ["./tsconfig.json"] }),
      tailwindcss(),
      tanstackStart(),
      viteReact(),
      netlify(),
    ],
  }
})
