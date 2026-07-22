import { cva } from "class-variance-authority"

export const commandStyles = {
  root: cva("scroll-mt-16 border-b border-white/10 bg-soot py-20"),
  inner: cva("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"),
  header: cva("mb-10 flex flex-col justify-between gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end"),
  kicker: cva("mb-2 text-xs font-bold uppercase text-alarm"),
  title: cva("font-display text-4xl uppercase text-bone sm:text-5xl"),
  note: cva("max-w-md text-sm leading-6 text-ash sm:text-right"),
  grid: cva("grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4"),
  item: cva("group min-h-48 border-b border-r border-white/10 p-6 transition hover:bg-white/[0.04]"),
  icon: cva("mb-9 text-bruise transition group-hover:text-alarm"),
  command: cva("font-display text-3xl uppercase text-bone"),
  detail: cva("mt-3 text-xs leading-5 text-ash"),
}
