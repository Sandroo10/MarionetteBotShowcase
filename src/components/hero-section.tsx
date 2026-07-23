import { Bot, ChevronDown, Play } from "lucide-react"
import { siteConfig } from "../data/site"
import { heroStyles } from "./compcss/hero-section/HeroSection.styles"
import { ButtonLink } from "./ui/Button"

export function HeroSection() {
  const isInviteConfigured = Boolean(siteConfig.inviteUrl)

  return (
    <section id="top" className={heroStyles.root()} aria-labelledby="hero-title">
      <img className={heroStyles.image()} src="/images/marionette-hero.png" alt="Fan art of the Marionette beside an old music box in a dark pizzeria" />
      <div className={heroStyles.shade()} />
      <div className={heroStyles.scanlines()} />
      <div className={heroStyles.content()}>
        <div className={heroStyles.copy()}>
          <p className={heroStyles.eyebrow()}><span className={heroStyles.signal()} /> Signal online / night shift active</p>
          <h1 id="hero-title" className={heroStyles.title()}>Marionette MusicBox</h1>
          <p className={heroStyles.summary()}>
            A fan-made Discord music bot built for shared queues, late-night sessions, and one more song before 6 AM.
          </p>
          <div className={heroStyles.actions()}>
            <ButtonLink href={siteConfig.inviteUrl} target={isInviteConfigured ? "_blank" : undefined} rel={isInviteConfigured ? "noreferrer" : undefined} aria-disabled={!isInviteConfigured} title={isInviteConfigured ? undefined : "Discord invite link is not configured"}>
              <Bot size={18} aria-hidden="true" /> Add to Discord
            </ButtonLink>
            <ButtonLink href="#trailer" intent="ghost">
              <Play size={18} aria-hidden="true" /> Watch trailer
            </ButtonLink>
          </div>
          <div className={heroStyles.status()} aria-label="Bot highlights">
            <span className={heroStyles.statusItem()}>Slash commands</span>
            <span className={heroStyles.statusItem()}>Queue control</span>
            <span className={heroStyles.statusItem()}>24/7 ready</span>
          </div>
        </div>
      </div>
      <a className={heroStyles.scrollCue()} href="#commands" aria-label="Scroll to commands">
        <ChevronDown size={30} strokeWidth={1.5} aria-hidden="true" />
      </a>
    </section>
  )
}
