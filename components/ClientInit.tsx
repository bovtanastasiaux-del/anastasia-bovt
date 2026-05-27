'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ClientInit() {
  const pathname = usePathname()

  // Cursor + magnetic (runs once globally)
  useEffect(() => {
    const dot = document.createElement('div')
    dot.className = 'cursor-dot'
    document.body.appendChild(dot)

    let tx = 0, ty = 0, cx = 0, cy = 0, rafId: number

    const onMove = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
    }
    window.addEventListener('mousemove', onMove)

    const loop = () => {
      cx += (tx - cx) * 0.22
      cy += (ty - cy) * 0.22
      dot.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`
      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)

    const onOver = (e: MouseEvent) => {
      if ((e.target as Element)?.closest('a, button, .hoverable'))
        dot.classList.add('hover')
    }
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element)?.closest('a, button, .hoverable'))
        dot.classList.remove('hover')
    }
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    // Magnetic — event delegation so it works across navigations
    const onMagMove = (e: MouseEvent) => {
      const el = (e.target as Element)?.closest('[data-magnetic]') as HTMLElement
      if (!el) return
      const r = el.getBoundingClientRect()
      el.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * 0.15}px, ${(e.clientY - (r.top + r.height / 2)) * 0.15}px)`
    }
    const onMagOut = (e: MouseEvent) => {
      const el = (e.target as Element)?.closest('[data-magnetic]') as HTMLElement
      if (el && !el.contains(e.relatedTarget as Node)) el.style.transform = ''
    }
    document.addEventListener('mousemove', onMagMove)
    document.addEventListener('mouseout', onMagOut)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      document.removeEventListener('mousemove', onMagMove)
      document.removeEventListener('mouseout', onMagOut)
      cancelAnimationFrame(rafId)
      dot.remove()
    }
  }, [])

  // Scroll reveal + hero spotlight (re-runs on every navigation)
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal:not(.in)').forEach((el) => io.observe(el))

    const hero = document.querySelector('.hero') as HTMLElement | null
    if (hero) {
      const onHeroMove = (e: MouseEvent) => {
        const r = hero.getBoundingClientRect()
        hero.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`)
        hero.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`)
      }
      hero.addEventListener('mousemove', onHeroMove)
      return () => {
        io.disconnect()
        hero.removeEventListener('mousemove', onHeroMove)
      }
    }

    return () => io.disconnect()
  }, [pathname])

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const a = (e.target as Element)?.closest('[data-scroll]') as HTMLAnchorElement | null
      if (!a) return
      const id = a.getAttribute('href')
      if (!id?.startsWith('#')) return
      const target = document.querySelector(id)
      if (target) {
        e.preventDefault()
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth',
        })
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}
