import { ListMusic, Radio, SkipForward, Volume2 } from "lucide-react"

const inviteUrl = import.meta.env.VITE_DISCORD_INVITE_URL?.trim()

export const siteConfig = {
  name: "Marionette MusicBox",
  inviteUrl,
  trailer: {
    webm: "/videos/marionette-trailer.webm",
    mp4: "/videos/marionette-trailer.mp4",
    poster: "/images/marionette-hero.png",
  },
}

export const commands = [
  { command: "/play", detail: "Find a track or paste a link", icon: Radio },
  { command: "/queue", detail: "See what the night has lined up", icon: ListMusic },
  { command: "/skip", detail: "Move the music box forward", icon: SkipForward },
  { command: "/nowplaying", detail: "Reveal the current signal", icon: Volume2 },
]
