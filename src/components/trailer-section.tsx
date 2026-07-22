import { siteConfig } from "../data/site"
import { trailerStyles } from "./compcss/trailer-section/TrailerSection.styles"

export function TrailerSection() {
  return (
    <section id="trailer" className={trailerStyles.root()} aria-labelledby="trailer-title">
      <div className={trailerStyles.grid()}>
        <div>
          <p className={trailerStyles.kicker()}>Archived footage</p>
          <h2 id="trailer-title" className={trailerStyles.title()}>See the bot in action</h2>
          <p className={trailerStyles.copy()}>
            From joining voice to building a queue, the trailer shows a full listening session without cutting away from Discord.
          </p>
          <dl className={trailerStyles.meta()}>
            <div className={trailerStyles.metaItem()}><dt>Feed</dt><dd className="mt-1 text-bone">Discord desktop</dd></div>
            <div className={trailerStyles.metaItem()}><dt>Signal</dt><dd className="mt-1 text-bone">1080p / stereo</dd></div>
          </dl>
        </div>
        <div className={trailerStyles.frame()}>
          <video className={trailerStyles.video()} controls preload="metadata" poster={siteConfig.trailer.poster}>
            <source src={siteConfig.trailer.webm} type="video/webm" />
            <source src={siteConfig.trailer.mp4} type="video/mp4" />
            Your browser does not support embedded video.
          </video>
          <span className={trailerStyles.corner()}>Trailer / night 01</span>
        </div>
      </div>
    </section>
  )
}
