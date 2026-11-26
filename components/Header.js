import Link from 'next/link'
import { MAILTO } from '../lib/work'

export default function Header({ home = true }) {
  const prefix = home ? '' : '/'
  return (
    <header className="site-header">
      <div className="wrap bar">
        <Link href="/" className="brand" aria-label="Nosazena home">
          <span className="brand-mark" aria-hidden="true" />
          nosazena
        </Link>
        <nav aria-label="Main">
          <a href={`${prefix}#case-studies`}>Case studies</a>
          <a href={`${prefix}#work`}>Work</a>
          <a href={`${prefix}#stack`}>Stack</a>
          <a href={`${prefix}#services`}>Services</a>
          <a href={home ? '#contact' : '#form'}>Contact</a>
        </nav>
        <a href={home ? MAILTO : '#form'} className="btn btn-small">
          Let&#39;s talk
        </a>
      </div>
    </header>
  )
}
