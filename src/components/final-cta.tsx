import { Bot } from "lucide-react"
import { siteConfig } from "../data/site"
import { ctaStyles } from "./compcss/final-cta/FinalCta.styles"
import { ButtonLink } from "./ui/Button"

export function FinalCta() {
  const isInviteConfigured = Boolean(siteConfig.inviteUrl)

  return (
    <section className={ctaStyles.root()} aria-labelledby="invite-title">
      <div className={ctaStyles.checker()} />
      <div className={ctaStyles.inner()}>
        <div>
          <h2 id="invite-title" className={ctaStyles.title()}>Keep the music box wound.</h2>
          <p className={ctaStyles.note()}>Invite Marionette MusicBox, join a voice channel, and start the night shift.</p>
        </div>
        <ButtonLink href={siteConfig.inviteUrl} target={isInviteConfigured ? "_blank" : undefined} rel={isInviteConfigured ? "noreferrer" : undefined} aria-disabled={!isInviteConfigured} title={isInviteConfigured ? undefined : "Discord invite link is not configured"} className="shrink-0 border-ink bg-ink px-7 text-bone hover:border-alarm hover:bg-alarm hover:text-white">
          <Bot size={18} aria-hidden="true" /> Add to your server
        </ButtonLink>
      </div>
    </section>
  )
}
