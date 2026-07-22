import { siteConfig } from "../data/site"
import { navStyles } from "./compcss/navbar/Navbar.styles"

export function Navbar() {
  return (
    <header className={navStyles.root()}>
      <nav className={navStyles.inner()} aria-label="Main navigation">
        <a href="#top" className={navStyles.brand()} aria-label={`${siteConfig.name} home`}>
          <span className={navStyles.mark()} aria-hidden="true">
            <img className={navStyles.markImage()} src="/images/marionette-logo.png" alt="" />
          </span>
          <span className={navStyles.name()}>{siteConfig.name}</span>
        </a>
        <div className={navStyles.links()}>
          <a className={navStyles.link()} href="#commands">Commands</a>
          <a className={navStyles.link()} href="#trailer">Trailer</a>
        </div>
      </nav>
    </header>
  )
}
