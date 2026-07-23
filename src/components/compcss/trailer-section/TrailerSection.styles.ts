import { cva } from "class-variance-authority"

export const trailerStyles = {
  root: cva("relative overflow-hidden border-b border-white/10 bg-ink py-20 sm:py-28"),
  grid: cva("mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8"),
  kicker: cva("mb-3 text-xs font-bold uppercase text-amber"),
  title: cva("font-display text-5xl uppercase leading-none text-bone sm:text-6xl"),
  copy: cva("mt-5 max-w-md text-sm leading-7 text-ash"),
  meta: cva("mt-7 grid max-w-sm grid-cols-2 border-l border-t border-white/10 text-[11px] uppercase text-ash"),
  metaItem: cva("border-b border-r border-white/10 p-3"),
  frame: cva("relative aspect-video overflow-hidden border border-white/20 bg-black shadow-[12px_12px_0_rgba(109,59,120,0.16)]"),
  video: cva("size-full bg-black object-contain"),
  corner: cva("pointer-events-none absolute left-3 top-3 border border-alarm bg-black/75 px-3 py-2 text-[10px] font-bold uppercase text-alarm"),
}
