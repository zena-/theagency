import { stack } from '../lib/work'

export default function StackSection({ intro }) {
  return (
    <section id="stack" className="section wrap">
      <div className="section-head">
        <h2>The tools I use every day.</h2>
        <p className="muted">{intro}</p>
      </div>
      <div className="stack-grid">
        {stack.map((group) => (
          <div className="card stack-card" key={group.label}>
            <h3>{group.label}</h3>
            <ul className="chips">
              {group.items.map((item) => (
                <li key={item} className={item === 'and more' ? 'more' : undefined}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
