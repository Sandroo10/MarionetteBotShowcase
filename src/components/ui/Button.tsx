import type { AnchorHTMLAttributes, ReactNode } from "react"
import type { VariantProps } from "class-variance-authority"
import { buttonStyles } from "./Button.styles"
import { cn } from "../../lib/utils"

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonStyles> & {
    children: ReactNode
  }

export function ButtonLink({ className, intent, size, children, ...props }: ButtonLinkProps) {
  return (
    <a className={cn(buttonStyles({ intent, size }), className)} {...props}>
      {children}
    </a>
  )
}
