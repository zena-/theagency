import { EMAIL, MAILTO } from '../lib/work'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap foot">
        <p>© {new Date().getFullYear()} Nosazena LLC</p>
        <p className="verse">P91</p>
        <a href={MAILTO}>{EMAIL}</a>
      </div>
    </footer>
  )
}
