import Link from 'next/link'
import CopyEmailButton from './CopyEmailButton'

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
        <Link href="/#contact">Contact</Link>
      </div>
      <CopyEmailButton email="bovt.anastasia.ux@gmail.com" />
    </nav>
  )
}
