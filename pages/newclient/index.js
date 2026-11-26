import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WorkCard from '../../components/WorkCard'
import StackSection from '../../components/StackSection'
import { MAILTO, EMAIL, services, featured } from '../../lib/work'

export default function NewClient() {
  return (
    <>
      <Head>
        <title>Nosazena | Transform your website today</title>
        <meta
          name="description"
          content="Custom websites and online stores: new builds, redesigns and landing pages. Free consultations, no obligation."
        />
      </Head>

      <Header home={false} />

      <main>
        <section className="hero wrap">
          <div className="hero-copy">
            <h1>
              Transform your website <em>today</em>.
            </h1>
            <p className="lede">
              Need a new site built from scratch, or an existing one redesigned? I build fast,
              responsive, search-friendly websites in React and Next.js, tailored to your business
              and easy for your team to manage.
            </p>
            <div className="actions">
              <a href={MAILTO} className="btn">
                Get in touch
              </a>
              <a href="#work" className="btn btn-ghost">
                See the work
              </a>
            </div>
            <p className="muted small">Free consultation. No risk, no obligation.</p>
          </div>
          <ul className="points card">
            {services.map((s) => (
              <li key={s.title}>
                <strong>{s.title}</strong>
                <span>{s.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="work" className="section wrap">
          <div className="section-head">
            <h2>Recent work for brands you know.</h2>
          </div>
          <div className="grid work">
            {featured.map((item) => (
              <WorkCard item={item} key={item.name} />
            ))}
          </div>
        </section>

        <StackSection intro="Proficient in JavaScript, CSS, Tailwind, React.js and Next.js, with hands on experience across many CMSs, including WordPress, Shopify, Contentful and Sanity." />

        <section id="contact" className="section wrap">
          <div className="cta-band">
            <h2>Skyrocket your business with expert web development.</h2>
            <p>Tell me about your project and I&#39;ll arrange your free consultation.</p>
            <a href={MAILTO} className="btn btn-light">
              {EMAIL}
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
