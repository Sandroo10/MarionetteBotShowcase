import { cva } from "class-variance-authority"

export const navStyles = {
  root: cva("fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-md"),
  inner: cva("mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"),
  brand: cva("flex min-w-0 items-center gap-3 text-bone no-underline"),
  mark: cva("size-9 shrink-0 overflow-hidden border border-bone/40 bg-black"),
  markImage: cva("size-full object-cover object-[50%_36%]"),
  name: cva("truncate font-display text-lg uppercase tracking-normal sm:text-xl"),
  links: cva("hidden items-center gap-7 text-xs font-bold uppercase text-ash md:flex"),
  link: cva("transition hover:text-bone"),
}
