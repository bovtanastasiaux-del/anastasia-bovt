'use client'

import { useEffect, useRef } from 'react'

export interface TocItem {
  id: string
  label: string
}

export default function TocSidebar({ items }: { items: TocItem[] }) {
  const barRef = useRef<HTMLDivElement>(null)
  const pctRef = useRef<HTMLSpanElement>(null)
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([])

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[]
    if (!sections.length) return

    const onScroll = () => {
      const mid = window.scrollY + window.innerHeight * 0.35
      let active = sections[0]
      for (const s of sections) {
        if (s.offsetTop <= mid) active = s
      }
      linksRef.current.forEach((a) => {
        if (a) a.classList.toggle('active', a.getAttribute('href') === '#' + active.id)
      })
      const h = document.body.scrollHeight - window.innerHeight
      const pct = Math.min(100, Math.max(0, (window.scrollY / h) * 100))
      if (barRef.current) barRef.current.style.setProperty('--pct', pct.toFixed(0) + '%')
      if (pctRef.current) pctRef.current.textContent = pct.toFixed(0) + '%'
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [items])

  return (
    <aside className="cs-toc">
      <h5>Contents</h5>
      <ol>
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              data-scroll=""
              ref={(el) => {
                linksRef.current[i] = el
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
      <div className="progress-wrap">
        <div className="progress">
          <span ref={pctRef}>0%</span>
          <span>read</span>
        </div>
        <div className="bar" ref={barRef}></div>
      </div>
    </aside>
  )
}
