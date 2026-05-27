import { notFound } from 'next/navigation'
import Link from 'next/link'
import { cases, getCaseBySlug } from '@/data/cases'
import TocSidebar from '@/components/TocSidebar'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const c = getCaseBySlug(slug)
  if (!c) return {}
  return { title: c.pageTitle }
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const c = getCaseBySlug(slug)
  if (!c) notFound()

  return (
    <>
      <header className="cs-head">
        <div>
          <div className="breadcrumb">
            <Link href="/projects">Index</Link>
            <span>/</span>
            <span>{c.breadcrumbCase}</span>
            <span>/</span>
            <span style={{ color: 'var(--fg)' }}>{c.slug === 'careyou' ? 'Care You' : c.slug.charAt(0).toUpperCase() + c.slug.slice(1)}</span>
          </div>
          <h1
            className="reveal"
            dangerouslySetInnerHTML={{ __html: c.h1HTML }}
          />
          <p className="sub reveal d1">{c.sub}</p>
        </div>
        <div className="meta reveal d2">
          {c.metaCells.map((cell) => (
            <div className="cell" key={cell.k}>
              <div className="k">{cell.k}</div>
              <div className="v">{cell.v}</div>
            </div>
          ))}
        </div>
      </header>

      <section className="cs-hero">
        <div
          className="frame reveal"
          dangerouslySetInnerHTML={{ __html: c.heroInnerHTML }}
        />
      </section>

      <section className="cs-layout">
        <TocSidebar items={c.toc} />
        <article
          className="cs-article"
          dangerouslySetInnerHTML={{ __html: c.articleHTML }}
        />
      </section>

      <Link
        className="next-cs hoverable"
        href={`/case/${c.nextSlug}`}
        data-magnetic=""
      >
        <div>
          <div className="label">{c.nextLabel}</div>
          <div className="title">{c.nextTitle} →</div>
        </div>
        <div className="preview">
          <div className={`abs-glow ${c.nextGlow}`}></div>
          <div className="abs-card">
            <div className="placeholder">{c.nextTitle}</div>
          </div>
        </div>
      </Link>
    </>
  )
}
