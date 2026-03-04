import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { TanStackDevtools } from "@tanstack/react-devtools"
import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import gsap from "gsap"
import drawSvgPkg from "gsap/DrawSVGPlugin"
import scrambleTextPkg from "gsap/ScrambleTextPlugin"
import scrollSmootherPkg from "gsap/ScrollSmoother"
import scrollToPkg from "gsap/ScrollToPlugin"
import scrollTriggerPkg from "gsap/ScrollTrigger"
import splitTextPkg from "gsap/SplitText"

const DrawSVGPlugin =
  (drawSvgPkg as { DrawSVGPlugin?: unknown }).DrawSVGPlugin ??
  (drawSvgPkg as { default?: unknown }).default ??
  drawSvgPkg
const ScrambleTextPlugin =
  (scrambleTextPkg as { ScrambleTextPlugin?: unknown }).ScrambleTextPlugin ??
  (scrambleTextPkg as { default?: unknown }).default ??
  scrambleTextPkg
const ScrollSmoother =
  (scrollSmootherPkg as { ScrollSmoother?: unknown }).ScrollSmoother ??
  (scrollSmootherPkg as { default?: unknown }).default ??
  scrollSmootherPkg
const ScrollToPlugin =
  (scrollToPkg as { ScrollToPlugin?: unknown }).ScrollToPlugin ??
  (scrollToPkg as { default?: unknown }).default ??
  scrollToPkg
const ScrollTrigger =
  (scrollTriggerPkg as { ScrollTrigger?: unknown }).ScrollTrigger ??
  (scrollTriggerPkg as { default?: unknown }).default ??
  scrollTriggerPkg
const SplitText =
  (splitTextPkg as { SplitText?: unknown }).SplitText ??
  (splitTextPkg as { default?: unknown }).default ??
  splitTextPkg
import appCss from "../styles.css?url"

gsap.registerPlugin(
  ScrollTrigger,
  ScrollToPlugin,
  ScrollSmoother,
  SplitText,
  ScrambleTextPlugin,
  DrawSVGPlugin,
)

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Portfolio",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="antialiased selection:bg-blue-600 selection:text-white">
        <ThemeProvider>
          <TooltipProvider>
            <Header />
            <div id="smooth-wrapper">
              <div id="smooth-content">{children}</div>
            </div>
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
