import { cva } from "class-variance-authority"

export const buttonStyles = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 border px-5 py-3 text-sm font-bold uppercase transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bone focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
  {
    variants: {
      intent: {
        primary: "border-alarm bg-alarm text-white shadow-alarm hover:border-bone hover:bg-bone hover:text-ink",
        ghost: "border-white/25 bg-black/25 text-bone backdrop-blur-sm hover:border-bone hover:bg-bone hover:text-ink",
      },
      size: {
        default: "h-12",
        compact: "h-10 min-h-10 px-4 py-2 text-xs",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "default",
    },
  },
)
