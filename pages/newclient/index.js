import { useState } from 'react'
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WorkCard from '../../components/WorkCard'
import StackSection from '../../components/StackSection'
import { services, featured } from '../../lib/work'

const EMAIL_RE = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/
const PHONE_RE = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

const empty = { Company: '', Name: '', Email: '', Phone: '', website: '' }

export default function NewClient() {
  const [fields, setFields] = useState(empty)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const set = (key) => (e) => setFields((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!EMAIL_RE.test(fields.Email) || !PHONE_RE.test(fields.Phone)) {
      setStatus('invalid')
      return
    }
    setStatus('sending')
    try {
      const body = new URLSearchParams({ 'form-name': 'clientForm', ...fields })
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      if (!res.ok) throw new Error(`Form post failed: ${res.status}`)
      setFields(empty)
      setStatus('sent')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

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
              <a href="#form" className="btn">
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

        <section id="form" className="section wrap">
          <div className="form-panel">
            <div>
              <h2>Skyrocket your business with expert web development.</h2>
              <p>Leave your details and I&#39;ll get back to you to arrange your free consultation.</p>
            </div>
            <form
              name="clientForm"
              onSubmit={handleSubmit}
              data-netlify="true"
              netlify-honeypot="bot-field"
              noValidate
            >
              <label>
                Company
                <input type="text" required autoComplete="organization" value={fields.Company} onChange={set('Company')} />
              </label>
              <label>
                Name
                <input type="text" required autoComplete="name" value={fields.Name} onChange={set('Name')} />
              </label>
              <label>
                Email
                <input type="email" required autoComplete="email" value={fields.Email} onChange={set('Email')} />
              </label>
              <label>
                Phone
                <input type="tel" required autoComplete="tel" placeholder="555-123-4567" value={fields.Phone} onChange={set('Phone')} />
              </label>
              <label>
                Website
                <input type="text" required placeholder="yoursite.com" value={fields.website} onChange={set('website')} />
              </label>
              <button type="submit" className="btn btn-light" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : "Let's talk"}
              </button>
              <p className={`form-msg ${status}`} role="status" aria-live="polite">
                {status === 'sent' && "Thanks! I'll be in touch shortly."}
                {status === 'invalid' && 'Please check your email address and a 10 digit phone number.'}
                {status === 'error' && 'Something went wrong. Please try again or email me directly.'}
              </p>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
