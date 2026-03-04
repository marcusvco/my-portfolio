/**
 * Stub for GSAP used only in SSR/server bundle.
 * Prevents "Cannot use import statement outside a module" when Netlify runs the server.
 * The real GSAP is loaded on the client via dynamic imports.
 */

const noop = () => {}
const contextStub = () => ({
  add: noop,
  revert: noop,
})

const gsapStub = {
  registerPlugin: noop,
  context: (_fn: () => void, _scope?: unknown) => contextStub(),
  set: noop,
  to: noop,
  from: noop,
  fromTo: noop,
  quickTo: () => noop,
  utils: { interpolate: (_a: number, _b: number, _t: number) => 0 },
}

export default gsapStub
export const DrawSVGPlugin = {}
export const ScrambleTextPlugin = {}
export const ScrollSmoother = { create: noop }
export const ScrollToPlugin = {}
export const ScrollTrigger = { create: noop }
export const SplitText = { create: noop }
