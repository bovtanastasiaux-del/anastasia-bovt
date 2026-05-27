import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="nav">
      <Link className="nav-brand" href="/">
        <span className="dot"></span>
        <span>Anastasia Bovt</span>
        <span className="role">— Product Designer</span>
      </Link>
      <div className="nav-links">
        <Link href="/#work">Work</Link>
        <Link href="/#about">About</Link>
        <Link href="/projects">Index</Link>
        <Link href="/#contact">Contact</Link>
      </div>
      <Link className="nav-cta hoverable" href="/#contact" data-magnetic="">
        Let&apos;s talk <span className="arr">↗</span>
      </Link>
    </nav>
  )
}
