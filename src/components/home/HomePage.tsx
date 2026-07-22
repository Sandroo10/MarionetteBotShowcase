import { CommandStrip } from "../command-strip"
import { FinalCta } from "../final-cta"
import { Footer } from "../footer"
import { HeroSection } from "../hero-section"
import { Navbar } from "../navbar"
import { TrailerSection } from "../trailer-section"
import { homePageStyles } from "./HomePage.styles"

export function HomePage() {
  return (
    <main className={homePageStyles()}>
      <Navbar />
      <HeroSection />
      <CommandStrip />
      <TrailerSection />
      <FinalCta />
      <Footer />
    </main>
  )
}
