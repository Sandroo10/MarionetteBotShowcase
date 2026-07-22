import { siteConfig } from "../data/site"
import { footerStyles } from "./compcss/footer/Footer.styles"

export function Footer() {
  return (
    <footer className={footerStyles.root()}>
      <div className={footerStyles.inner()}>
        <p className={footerStyles.brand()}>{siteConfig.name}</p>
        <p className={footerStyles.legal()}>
          Fan-made Discord music bot. Not affiliated with or endorsed by Scott Cawthon, Steel Wool Studios, Five Nights at Freddy&apos;s, or Discord. All referenced names and characters belong to their respective owners.
        </p>
      </div>
    </footer>
  )
}
