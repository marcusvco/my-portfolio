import { useEffect } from "react"

/**
 * Registers GSAP and all plugins on the client only.
 * Prevents "Cannot use import statement outside a module" in Netlify server bundle.
 */
export function ClientGsapRegistration() {
  useEffect(() => {
    let cancelled = false
    async function register() {
      const [
        gsapMod,
        drawSvgPkg,
        scrambleTextPkg,
        scrollSmootherPkg,
        scrollToPkg,
        scrollTriggerPkg,
        splitTextPkg,
      ] = await Promise.all([
        import("gsap"),
        import("gsap/DrawSVGPlugin"),
        import("gsap/ScrambleTextPlugin"),
        import("gsap/ScrollSmoother"),
        import("gsap/ScrollToPlugin"),
        import("gsap/ScrollTrigger"),
        import("gsap/SplitText"),
      ])
      if (cancelled) return
      const gsap = gsapMod.default
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
      gsap.registerPlugin(
        ScrollTrigger,
        ScrollToPlugin,
        ScrollSmoother,
        SplitText,
        ScrambleTextPlugin,
        DrawSVGPlugin,
      )
    }
    register()
    return () => {
      cancelled = true
    }
  }, [])
  return null
}
