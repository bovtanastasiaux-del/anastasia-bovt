import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-big">
        Bovt <em>Anastasia</em>
      </div>
      <div className="footer-row">
        <div className="col">
          <h5>Navigation</h5>
          <Link href="/#work">Work</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
        </div>
        <div className="col">
          <h5>Colophon</h5>
          <span>Set in Instrument Serif &amp; Inter Tight.</span>
        </div>
        <div className="col" style={{ textAlign: 'right' }}>
          <h5>Status</h5>
          <span style={{ color: 'var(--fg)' }}>Available · Summer &apos;26</span>
          <br />
          <span>Based in Ukraine</span>
        </div>
      </div>
    </footer>
  )
}
