'use client'

import './projects.css'
import Link from 'next/link'
import { useState, useRef, useCallback } from 'react'

type Cat = 'all' | 'product' | 'ux' | 'mobile' | 'web' | 'systems'
type View = 'list' | 'grid'

const PROJECTS = [
  {
    n: '01', title: 'Yezzz', em: 'Telecom', year: '2026',
    cat: ['product', 'mobile', 'ux'],
    desc: 'Activation funnel rebuilt around comprehension — +69.1% conversion on an already-strong offer.',
    tags: ['Product', 'Research', 'Mobile'],
    ph: 'ph-01', href: '/case/yezzz',
  },
  {
    n: '02', title: 'Phlex', em: 'Sport', year: '2022–25',
    cat: ['product', 'mobile', 'web', 'systems'],
    desc: 'Three years on a swim performance tracker — MVP, gamification, leagues, and a coach dashboard.',
    tags: ['Lead PD', 'Mobile', 'Web'],
    ph: 'ph-03', href: '/case/phlex',
  },
  {
    n: '03', title: 'Tutorly', em: 'Edu', year: '2023',
    cat: ['product', 'ux', 'web', 'systems'],
    desc: 'Two products sharing one infrastructure. Separate onboarding for students and tutors.',
    tags: ['Lead PD', 'End-to-end', 'System'],
    ph: 'ph-05', href: '/case/tutorly',
  },
  {
    n: '04', title: 'Fractl', em: 'Dev tools', year: '2023',
    cat: ['product', 'systems', 'web'],
    desc: '"Three modes, one model." A low-code platform that meets developers and builders both.',
    tags: ['Lead PD', '0→1', 'System'],
    ph: 'ph-04', href: '/case/fractl',
  },
  {
    n: '05', title: 'OLAS', em: 'Safety', year: '2022–23',
    cat: ['ux', 'mobile'],
    desc: 'Man-overboard alerts for sailors. An interface designed for sun glare, motion, wet screens, panic.',
    tags: ['Lead UI/UX', 'Mobile', 'Hardware'],
    ph: 'ph-02', href: '/case/olas',
  },
  {
    n: '06', title: 'Care You', em: 'Health', year: '2022',
    cat: ['product', 'ux', 'mobile', 'web', 'systems'],
    desc: 'Connecting patients, carers, clinicians and insurers — value lives in coordination, not features.',
    tags: ['UI/UX', 'Multi-role', 'System'],
    ph: 'ph-06', href: '/case/careyou',
  },
]

export default function ProjectsPage() {
  const [activeCat, setActiveCat] = useState<Cat>('all')
  const [view, setView] = useState<View>('list')
  const previewRef = useRef<HTMLDivElement>(null)

  const filtered = PROJECTS.filter(
    (p) => activeCat === 'all' || p.cat.includes(activeCat)
  )

  const showPreview = useCallback((idx: number) => {
    const pv = previewRef.current
    if (!pv) return
    pv.classList.add('on')
    pv.querySelectorAll('.slide').forEach((s, i) => {
      s.classList.toggle('on', i === idx)
    })
  }, [])

  const hidePreview = useCallback(() => {
    previewRef.current?.classList.remove('on')
  }, [])

  const movePreview = useCallback((e: React.MouseEvent) => {
    const pv = previewRef.current
    if (!pv) return
    pv.style.left = e.clientX + 140 + 'px'
    pv.style.top = e.clientY + 'px'
  }, [])

  return (
    <>
      <header className="page-top">
        <h1 className="reveal">
          The <em>index</em>,<br />2021–2026
        </h1>
        <p className="note reveal d1">
          Every shipped project, end to end. Six entries, filterable. Hover a row to preview.
        </p>
      </header>

      <div className="filters">
        <div className="filter-group">
          {(['all', 'product', 'ux', 'mobile', 'web', 'systems'] as Cat[]).map((cat) => (
            <button
              key={cat}
              className={activeCat === cat ? 'on' : ''}
              onClick={() => setActiveCat(cat)}
            >
              {cat === 'all' ? (
                <>All <span style={{ color: 'var(--fg-4)' }}>· 6</span></>
              ) : cat === 'ux' ? 'UX/UI' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
        <div className="view-toggle">
          {(['list', 'grid'] as View[]).map((v) => (
            <button
              key={v}
              className={view === v ? 'on' : ''}
              onClick={() => setView(v)}
            >
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div
        className="idx-preview"
        ref={previewRef}
        aria-hidden="true"
      >
        {filtered.map((p) => (
          <div className="slide" key={p.href}>
            <div className={`ph ${p.ph}`} style={{ position: 'absolute', inset: 0 }}>
              <div className="glow" />
              <div className="label">{p.em}</div>
            </div>
          </div>
        ))}
      </div>

      {view === 'list' && (
        <div className="idx-list">
          {filtered.map((p, i) => (
            <Link
              key={p.href}
              className="idx-row hoverable"
              href={p.href}
              onMouseEnter={() => showPreview(i)}
              onMouseLeave={hidePreview}
              onMouseMove={movePreview}
            >
              <div className="num">{p.n}</div>
              <div className="title">
                {p.title.slice(0, -p.title.split(' ').slice(-1)[0].length)}
                <em>{p.title.split(' ').slice(-1)[0]}</em>
              </div>
              <div className="desc">{p.desc}</div>
              <div className="tags">
                {p.tags.map((t, ti) => (
                  <span key={t}>{ti > 0 ? ' · ' : ''}{t}</span>
                ))}
              </div>
              <div className="year">{p.year}</div>
              <div className="arr">↗</div>
            </Link>
          ))}
        </div>
      )}

      {view === 'grid' && (
        <div className="idx-grid">
          <div className="grid-cards">
            {filtered.map((p) => (
              <Link key={p.href} className="gc hoverable" href={p.href}>
                <div className="shot">
                  <div className={`image ph ${p.ph}`}>
                    <div className="glow" />
                    <div className="label">{p.em}</div>
                  </div>
                </div>
                <div className="meta">
                  <div className="t">{p.title}</div>
                  <div className="y">{p.year}</div>
                </div>
                <div className="sub">{p.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
