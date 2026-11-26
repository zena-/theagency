import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WorkCard from '../components/WorkCard'
import StackSection from '../components/StackSection'
import CaseStudies from '../components/CaseStudies'
import { MAILTO, EMAIL, services, groups, principles, workedWith } from '../lib/work'

const heroFrames = [
  { src: '/work/chili-b.webp', alt: 'Chili B. website', cls: 'f1' },
  { src: '/work/caravan.webp', alt: 'Caravan Wellness website', cls: 'f2' },
  { src: '/work/nuts.webp', alt: 'Nuts.com website', cls: 'f3' },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Nosazena</title>
        <meta
          name="description"
          content="I build fast, good looking websites, online stores, and campaigns."
        />
        <meta property="og:title" content="Nosazena | Websites and online stores for any business" />
        <meta
          property="og:description"
          content="Fast, good looking websites and online stores for any business."
        />
      </Head>

      <Header />

      <main>
        <section className="hero wrap">
          <div className="hero-copy">
            <h1>
              Websites that turn visitors into <em>customers</em>.
            </h1>
            <p className="lede">
              I build fast, good looking websites and online stores for any kind of business. Retail is where I&#39;ve spent most of my time, with work for Tommy John, BJ&#39;s Wholesale, Nuts.com and Apple, and I run my own beverage brand, so I know what a site has to do for the business.
            </p>
            <div className="actions">
              <a href={MAILTO} className="btn">
                Let&#39;s talk about your project
              </a>
            </div>
          </div>
          <div className="hero-stack" aria-hidden="false">
            {heroFrames.map((f) => (
              <div className={`frame ${f.cls}`} key={f.src}>
                <div className="frame-bar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="frame-shot">
                  <Image src={f.src} alt={f.alt} fill priority sizes="(max-width: 900px) 70vw, 420px" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="worked-with wrap" aria-label="Brands I have worked with">
          <p>Clients:</p>
          <ul>
            {workedWith.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </section>

        <CaseStudies />

        <section id="work" className="section wrap">
          {groups.map((group) => (
            <div className="group" key={group.id}>
              <div className="group-head">
                <h3>{group.title}</h3>
                <p className="muted">{group.blurb}</p>
              </div>
              <div
                className={`grid work${group.layout === 'feature' ? ' feature' : ''}${
                  group.items.length === 2 ? ' two' : ''
                }`}
              >
                {group.items.map((item) => (
                  <WorkCard item={item} key={item.name} />
                ))}
              </div>
            </div>
          ))}
        </section>

        <StackSection intro="" />

        <section className="section wrap">
          <div className="grid principles">
            {principles.map((p) => (
              <div key={p.title} className="principle">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="section wrap">
          <div className="section-head">
            <h2>What I can build for you.</h2>
          </div>
          <div className="grid services">
            {services.map((s, i) => (
              <article className="card service" key={s.title}>
                <span className="num">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section wrap">
          <div className="cta-band">
            <h2>Have a project in mind?</h2>
            <p>Tell me what you&#39;re building. The first conversation is free.</p>
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
