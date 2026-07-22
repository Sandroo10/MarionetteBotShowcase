import { cva } from "class-variance-authority"

export const footerStyles = {
  root: cva("border-t border-white/10 bg-ink py-8"),
  inner: cva("mx-auto flex max-w-7xl flex-col gap-4 px-4 text-[11px] leading-5 text-ash sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8"),
  brand: cva("font-bold uppercase text-bone"),
  legal: cva("max-w-3xl md:text-right"),
}
