import { cva } from "class-variance-authority"

export const heroStyles = {
  root: cva("relative flex h-[100svh] min-h-[640px] items-end overflow-hidden border-b border-white/10 pt-24 sm:items-center"),
  image: cva("absolute inset-0 size-full object-cover object-[68%_center] sm:object-center"),
  shade: cva("absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,8,0.98)_0%,rgba(8,7,8,0.82)_37%,rgba(8,7,8,0.18)_72%,rgba(8,7,8,0.48)_100%)] max-sm:bg-[linear-gradient(0deg,rgba(8,7,8,0.99)_0%,rgba(8,7,8,0.56)_58%,rgba(8,7,8,0.2)_100%)]"),
  scanlines: cva("pointer-events-none absolute inset-0 opacity-20 [animation:scan-drift_8s_linear_infinite] [background-image:repeating-linear-gradient(0deg,transparent_0,transparent_3px,rgba(255,255,255,0.07)_4px)]"),
  content: cva("relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-8 lg:px-8"),
  copy: cva("max-w-2xl"),
  eyebrow: cva("mb-4 flex items-center gap-3 text-xs font-bold uppercase text-amber"),
  signal: cva("size-2 bg-alarm shadow-[0_0_12px_#b8202e] [animation:signal-blink_1.6s_steps(1)_infinite]"),
  title: cva("max-w-[11ch] font-display text-6xl uppercase leading-[0.82] text-bone sm:text-7xl lg:text-8xl"),
  summary: cva("mt-6 max-w-xl border-l-2 border-alarm pl-4 text-sm leading-7 text-white/75 sm:text-base"),
  actions: cva("mt-7 flex flex-wrap gap-3"),
  status: cva("mt-8 flex flex-wrap gap-x-7 gap-y-2 text-[11px] font-bold uppercase text-ash"),
  statusItem: cva("flex items-center gap-2 before:size-1 before:bg-bruise before:content-['']"),
  scrollCue: cva("absolute bottom-4 left-1/2 z-20 grid size-12 -translate-x-1/2 place-items-center text-bone transition hover:text-alarm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bone [animation:scroll-cue_1.8s_ease-in-out_infinite] sm:bottom-5"),
}
