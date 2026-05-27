import Link from 'next/link'
import './home.css'

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <header className="hero">
        <div className="hero-bg"></div>
        <div className="hero-grid"></div>

        <div className="hero-top">
          <div className="group">
            <span className="status">Available · Summer &apos;26</span>
          </div>
          <div className="group desktop">
            <span>Based · Lisbon, PT</span>
            <span>18:45 UTC</span>
            <span>47°N · 9°W</span>
          </div>
        </div>

        <div className="hero-main">
          <h1 className="hero-title">
            <span className="l1"><span className="inner">Designing <em>calm</em></span></span>
            <span className="l2"><span className="inner">in <em>complex</em> systems.</span></span>
          </h1>
        </div>

        <div className="hero-bottom">
          <p className="hero-lede reveal d2">
            <strong>Anastasia Bovt</strong> — product designer working across telecom, sport, edu,
            dev tools, safety and health. I work at the intersection of research, systems thinking,
            and craft.
          </p>
          <div className="hero-meta reveal d3">
            <div className="cell">
              <div className="k">Focus</div>
              <div className="v">Product · UX · Systems</div>
            </div>
            <div className="cell">
              <div className="k">Currently</div>
              <div className="v">Available for new work</div>
            </div>
            <div className="cell">
              <div className="k">Index</div>
              <div className="v">06 / 06 cases</div>
            </div>
          </div>
        </div>

        <div className="scroll-cue">
          <span>Scroll</span>
          <span className="line"></span>
        </div>
      </header>

      {/* STRIP */}
      <div className="strip">
        <div className="strip-track">
          <span>Product Design</span>
          <span>UX Research</span>
          <span>Design Systems</span>
          <span>Interaction</span>
          <span>Prototyping</span>
          <span>Motion</span>
          <span>Mobile</span>
          <span>Web</span>
          <span>Product Design</span>
          <span>UX Research</span>
          <span>Design Systems</span>
          <span>Interaction</span>
          <span>Prototyping</span>
          <span>Motion</span>
          <span>Mobile</span>
          <span>Web</span>
        </div>
      </div>

      {/* WORK */}
      <section id="work">
        <div className="sec-head">
          <div className="lhs">
            <span className="num">01 / WORK</span>
            <h2 className="reveal">Selected <em>projects</em></h2>
          </div>
          <div className="rhs reveal d1">2022 — 2026</div>
        </div>

        <div className="work">
          <div className="work-grid">
            {/* 01 · Yezzz */}
            <Link className="work-card hoverable reveal" href="/case/yezzz">
              <div className="shot">
                <div className="image ph ph-01 mobile">
                  <div className="glow"></div>
                  <div className="chrome">
                    <div className="bar"><span className="url">9:41 · Yezzz</span></div>
                    <div className="body">
                      <div className="main">
                        <div className="header-row"></div>
                        <div className="content-row"><div></div><div></div><div></div></div>
                        <div className="content-row"><div></div><div></div><div></div></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tag-marquee">
                  <div className="tag-marquee-track">
                    <span>Mobile operator</span><span>Funnel</span><span>+69% conv.</span><span>Research</span>
                    <span>Mobile operator</span><span>Funnel</span><span>+69% conv.</span><span>Research</span>
                  </div>
                </div>
                <div className="overlay"><span>Case study</span><span className="cta">Read <span className="arr">↗</span></span></div>
              </div>
              <div className="meta">
                <div className="title">Yezzz</div>
                <div className="year">2026</div>
                <div className="desc">Activation funnel rewritten around comprehension — +69.1% conversion on an offer that was already strong.</div>
                <div className="tags"><span>Product Design</span><span>Research</span><span>Mobile</span></div>
              </div>
            </Link>

            {/* 02 · Phlex */}
            <Link className="work-card hoverable reveal d1" href="/case/phlex">
              <div className="shot">
                <div className="image ph ph-03 mobile">
                  <div className="glow"></div>
                  <div className="chrome">
                    <div className="bar"><span className="url">Live · Lane 4</span></div>
                    <div className="body">
                      <div className="main">
                        <div className="header-row"></div>
                        <div className="content-row"><div></div><div></div><div></div></div>
                        <div className="content-row"><div></div><div></div><div></div></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tag-marquee">
                  <div className="tag-marquee-track">
                    <span>Swim tracker</span><span>Hardware UX</span><span>Gamification</span><span>3-year arc</span>
                    <span>Swim tracker</span><span>Hardware UX</span><span>Gamification</span><span>3-year arc</span>
                  </div>
                </div>
                <div className="overlay"><span>Case study</span><span className="cta">Read <span className="arr">↗</span></span></div>
              </div>
              <div className="meta">
                <div className="title">Phlex</div>
                <div className="year">2022 — 2025</div>
                <div className="desc">A swimming performance tracker. From MVP to gamification, leagues, and a coach-facing dashboard.</div>
                <div className="tags"><span>Lead PD</span><span>Mobile</span><span>Web</span></div>
              </div>
            </Link>

            {/* 03 · Tutorly */}
            <Link className="work-card hoverable reveal" href="/case/tutorly">
              <div className="shot">
                <div className="image ph ph-05">
                  <div className="glow"></div>
                  <div className="chrome">
                    <div className="bar"><i></i><i></i><i></i><span className="url">tutorly.app/tutor/home</span></div>
                    <div className="body">
                      <div className="side"></div>
                      <div className="main">
                        <div className="header-row"></div>
                        <div className="content-row"><div></div><div></div><div></div></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tag-marquee">
                  <div className="tag-marquee-track">
                    <span>Two-sided</span><span>Onboarding</span><span>System</span><span>+40% activation</span>
                    <span>Two-sided</span><span>Onboarding</span><span>System</span><span>+40% activation</span>
                  </div>
                </div>
                <div className="overlay"><span>Case study</span><span className="cta">Read <span className="arr">↗</span></span></div>
              </div>
              <div className="meta">
                <div className="title">Tutorly</div>
                <div className="year">2023</div>
                <div className="desc">Two products inside one platform. Separate onboarding for students and tutors over a shared system.</div>
                <div className="tags"><span>Lead PD</span><span>End-to-end</span><span>System</span></div>
              </div>
            </Link>

            {/* 04 · Fractl */}
            <Link className="work-card hoverable reveal d1" href="/case/fractl">
              <div className="shot">
                <div className="image ph ph-04">
                  <div className="glow"></div>
                  <div className="chrome">
                    <div className="bar"><i></i><i></i><i></i><span className="url">fractl.studio/canvas</span></div>
                    <div className="body">
                      <div className="side"></div>
                      <div className="main">
                        <div className="header-row"></div>
                        <div className="content-row"><div></div><div></div><div></div></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tag-marquee">
                  <div className="tag-marquee-track">
                    <span>Low-code</span><span>Visual + Code + AI</span><span>0→1</span><span>Dev tools</span>
                    <span>Low-code</span><span>Visual + Code + AI</span><span>0→1</span><span>Dev tools</span>
                  </div>
                </div>
                <div className="overlay"><span>Case study</span><span className="cta">Read <span className="arr">↗</span></span></div>
              </div>
              <div className="meta">
                <div className="title">Fractl</div>
                <div className="year">2023</div>
                <div className="desc">&quot;Three modes, one model.&quot; A low-code platform that meets developers and builders where they each work.</div>
                <div className="tags"><span>Lead PD</span><span>0→1</span><span>System</span></div>
              </div>
            </Link>

            {/* 05 · OLAS */}
            <Link className="work-card hoverable reveal" href="/case/olas">
              <div className="shot">
                <div className="image ph ph-02 mobile">
                  <div className="glow"></div>
                  <div className="chrome">
                    <div className="bar"><span className="url">● ALERT · 14:32</span></div>
                    <div className="body">
                      <div className="main">
                        <div className="header-row"></div>
                        <div className="content-row"><div></div><div></div><div></div></div>
                        <div className="content-row"><div></div><div></div><div></div></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tag-marquee">
                  <div className="tag-marquee-track">
                    <span>Maritime</span><span>Safety</span><span>Emergency UX</span><span>Hardware</span>
                    <span>Maritime</span><span>Safety</span><span>Emergency UX</span><span>Hardware</span>
                  </div>
                </div>
                <div className="overlay"><span>Case study</span><span className="cta">Read <span className="arr">↗</span></span></div>
              </div>
              <div className="meta">
                <div className="title">OLAS</div>
                <div className="year">2022 — 2023</div>
                <div className="desc">Man-overboard safety. An interface designed for sun glare, motion, wet screens, and panic — alert state first.</div>
                <div className="tags"><span>Lead UI/UX</span><span>Mobile</span><span>Hardware</span></div>
              </div>
            </Link>

            {/* 06 · Care You */}
            <Link className="work-card hoverable reveal d1" href="/case/careyou">
              <div className="shot">
                <div className="image ph ph-06">
                  <div className="glow"></div>
                  <div className="chrome">
                    <div className="bar"><i></i><i></i><i></i><span className="url">careyou.health/network</span></div>
                    <div className="body">
                      <div className="side"></div>
                      <div className="main">
                        <div className="header-row"></div>
                        <div className="content-row"><div></div><div></div><div></div></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tag-marquee">
                  <div className="tag-marquee-track">
                    <span>Healthcare</span><span>Multi-role</span><span>Coordination</span><span>System</span>
                    <span>Healthcare</span><span>Multi-role</span><span>Coordination</span><span>System</span>
                  </div>
                </div>
                <div className="overlay"><span>Case study</span><span className="cta">Read <span className="arr">↗</span></span></div>
              </div>
              <div className="meta">
                <div className="title">Care You</div>
                <div className="year">2022</div>
                <div className="desc">Connecting patients, carers, clinicians and insurers in one platform — value in coordination, not features.</div>
                <div className="tags"><span>UI/UX</span><span>Multi-role</span><span>System</span></div>
              </div>
            </Link>
          </div>
        </div>

        <div className="view-all">
          <Link className="link hoverable" href="/projects" data-magnetic="">
            View all projects
            <span className="arrow">↗</span>
          </Link>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <div className="about-visual reveal">
          <div className="glow"></div>
          <div className="mono-frame">
            <div className="initials">Ab</div>
          </div>
          <div className="label">Lisbon · 2026</div>
        </div>

        <div>
          <div className="eyebrow reveal" style={{ marginBottom: '28px' }}>02 / ABOUT</div>
          <div className="about-body">
            <p className="reveal">
              Hi, I&apos;m <em>Anastasia</em>. I design products at the intersection of research,
              systems thinking, and craft — making complex tools feel obvious to the people using
              them.
            </p>
            <p className="reveal d1 soft">
              My work spans fintech, healthcare, sport, edu, and developer tools. I write, sketch,
              prototype, and ship. I care most about the quiet decisions: the density of a screen,
              the feel of a transition, the one sentence that replaces a paragraph.
            </p>
            <p className="reveal d2 soft">
              Currently <em>available</em> for new collaborations.
            </p>
          </div>

          <div className="about-grid">
            <div className="stat reveal">
              <div className="k">Experience</div>
              <div className="v">5+ yrs</div>
              <div className="c">across consumer &amp; B2B</div>
            </div>
            <div className="stat reveal d1">
              <div className="k">Case studies</div>
              <div className="v">06</div>
              <div className="c">end-to-end, shipped</div>
            </div>
            <div className="stat reveal d2">
              <div className="k">Industries</div>
              <div className="v">6</div>
              <div className="c">telecom, sport, edu, dev, safety, health</div>
            </div>
          </div>

          <div className="skills reveal">
            <div className="k">Toolkit</div>
            <div className="list">
              {['Figma', 'Framer', 'Origami', 'Rive', 'Notion', 'After Effects', 'Linear', 'Principle', 'HTML · CSS'].map(
                (s) => (
                  <span key={s}>{s}</span>
                )
              )}
            </div>
          </div>

          <div className="skills reveal d1">
            <div className="k">Approach</div>
            <div className="list">
              {['User-centered', 'Data-informed', 'Systems thinking', 'Research-led', 'Prototype-first', 'Write as a tool'].map(
                (s) => (
                  <span key={s}>{s}</span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* RECOGNITION */}
      <section className="recognition">
        <div className="sec-head" style={{ padding: '0 0 20px' }}>
          <div className="lhs">
            <span className="num">03 / RECOGNITION</span>
            <h2 className="reveal" style={{ fontSize: 'clamp(28px,3.2vw,44px)' }}>
              Selected <em>press &amp; awards</em>
            </h2>
          </div>
          <div className="rhs reveal d1">A short list</div>
        </div>
        <div className="rec-grid">
          <div className="rec reveal">
            <div className="when">2025</div>
            <div className="what">Site of the Day</div>
            <div className="who">Awwwards</div>
          </div>
          <div className="rec reveal d1">
            <div className="when">2025</div>
            <div className="what">FWA of the Day</div>
            <div className="who">The FWA</div>
          </div>
          <div className="rec reveal d2">
            <div className="when">2024</div>
            <div className="what">Design Team of the Year — Finalist</div>
            <div className="who">Fast Company Innovation</div>
          </div>
          <div className="rec reveal d3">
            <div className="when">2024</div>
            <div className="what">Featured interview</div>
            <div className="who">Sidebar · Mindsparkle</div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="contact-bg"></div>
        <div className="contact-inner">
          <div className="eyebrow reveal">04 / CONTACT</div>
          <h2 className="reveal d1">
            Let&apos;s make
            <br />
            something <em>quiet</em>
            <br />
            and <em>considered</em>.
          </h2>
          <a
            className="email hoverable reveal d2"
            href="mailto:hello@bovt.design"
            data-magnetic=""
          >
            hello@bovt.design
            <span className="arr">↗</span>
          </a>
          <div className="contact-row reveal d3">
            <a href="#">Twitter ↗</a>
            <a href="#">LinkedIn ↗</a>
            <a href="#">Read.cv ↗</a>
            <a href="#">Are.na ↗</a>
            <a href="#">Dribbble ↗</a>
          </div>
        </div>
      </section>
    </>
  )
}
