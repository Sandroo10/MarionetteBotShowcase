import { cva } from "class-variance-authority"

export const ctaStyles = {
  root: cva("relative overflow-hidden bg-bone py-20 text-ink"),
  checker: cva("absolute inset-x-0 top-0 h-3 opacity-80 [background-image:linear-gradient(45deg,#080708_25%,transparent_25%),linear-gradient(-45deg,#080708_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#080708_75%),linear-gradient(-45deg,transparent_75%,#080708_75%)] [background-position:0_0,0_6px,6px_-6px,-6px_0] [background-size:12px_12px]"),
  inner: cva("relative mx-auto flex max-w-7xl flex-col justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8"),
  title: cva("max-w-3xl font-display text-5xl uppercase leading-none sm:text-6xl"),
  note: cva("mt-4 max-w-2xl text-sm leading-6 text-black/65"),
}
