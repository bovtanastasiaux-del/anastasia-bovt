import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-big">
        Bovt <em>Anastasia</em> — 2026
      </div>
      <div className="footer-row">
        <div className="col">
          <h5>Index</h5>
          <Link href="/#work">Work</Link>
          <Link href="/projects">All projects</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
        </div>
        <div className="col">
          <h5>Elsewhere</h5>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
          <a href="#">Read.cv</a>
          <a href="#">Are.na</a>
        </div>
        <div className="col">
          <h5>Colophon</h5>
          <span>Set in Instrument Serif &amp; Inter Tight.</span>
          <br />
          <span>Built in 2026.</span>
        </div>
        <div className="col" style={{ textAlign: 'right' }}>
          <h5>Status</h5>
          <span style={{ color: 'var(--fg)' }}>Available · Summer &apos;26</span>
          <br />
          <span>Lisbon, Portugal</span>
        </div>
      </div>
    </footer>
  )
}
