import Image from 'next/image'
import { about, caseStudies } from '../lib/work'

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section wrap">
      <div className="about-me">
        <div className="headshot">
          <Image src={about.headshot} alt={about.alt} fill sizes="180px" />
        </div>
        <div>
          <h2>{about.title}</h2>
          <p className="muted">{about.text}</p>
        </div>
      </div>

      {caseStudies.map((c, i) => (
        <article className={`case${i % 2 ? ' reverse' : ''}`} key={c.id}>
          <a href={c.href} target="_blank" rel="noreferrer" className="case-shot" aria-label={`Visit ${c.name}`}>
            <Image src={c.image} alt={`${c.name} website screenshot`} fill sizes="(max-width: 900px) 100vw, 540px" />
          </a>
          <div className="case-body">
            <ul className="chips">
              {c.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <h3>{c.title}</h3>
            <p>{c.intro}</p>
            <ul className="did">
              {c.did.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <p className="takeaway">{c.takeaway}</p>
            <a href={c.href} target="_blank" rel="noreferrer" className="btn btn-ghost btn-small">
              Visit {c.name} ↗
            </a>
          </div>
        </article>
      ))}
    </section>
  )
}
