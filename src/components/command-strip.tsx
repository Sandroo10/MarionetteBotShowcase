import { commands } from "../data/site"
import { commandStyles } from "./compcss/command-strip/CommandStrip.styles"

export function CommandStrip() {
  return (
    <section id="commands" className={commandStyles.root()} aria-labelledby="commands-title">
      <div className={commandStyles.inner()}>
        <header className={commandStyles.header()}>
          <div>
            <p className={commandStyles.kicker()}>Camera feed 02</p>
            <h2 id="commands-title" className={commandStyles.title()}>Control the music box</h2>
          </div>
          <p className={commandStyles.note()}>Simple commands keep the queue moving while everyone stays in the voice channel.</p>
        </header>
        <div className={commandStyles.grid()}>
          {commands.map(({ command, detail, icon: Icon }) => (
            <article key={command} className={commandStyles.item()}>
              <Icon className={commandStyles.icon()} size={25} strokeWidth={1.5} aria-hidden="true" />
              <h3 className={commandStyles.command()}>{command}</h3>
              <p className={commandStyles.detail()}>{detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
