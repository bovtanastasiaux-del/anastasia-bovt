export interface TocItem {
  id: string
  label: string
}

export interface CaseData {
  slug: string
  pageTitle: string
  breadcrumbCase: string
  h1HTML: string
  sub: string
  metaCells: { k: string; v: string }[]
  heroGlow: string
  heroInnerHTML: string
  toc: TocItem[]
  articleHTML: string
  nextSlug: string
  nextTitle: string
  nextNum: string
  nextGlow: string
  nextLabel: string
}

export const cases: CaseData[] = [
  {
    slug: 'yezzz',
    pageTitle: 'Yezzz — Anastasia Bovt',
    breadcrumbCase: 'Case 01',
    h1HTML: 'Making a strong offer<br/>feel <em>obvious</em>.',
    sub: 'Redesigning the activation funnel for a mobile operator embedded inside Ukraine\'s largest supermarket app. The product was working — the communication around it wasn\'t.',
    metaCells: [
      { k: 'Client', v: 'Yezzz · embedded in Silpo' },
      { k: 'Year', v: '2026' },
      { k: 'Role', v: 'Product Designer' },
      { k: 'Platforms', v: 'iOS · Android' },
      { k: 'Scope', v: 'Funnel & conversion redesign' },
      { k: 'Outcome', v: '+69.1% conversion rate' },
    ],
    heroGlow: 'violet',
    heroInnerHTML: `
      <div class="glow violet"></div>
      <div class="chrome-lg mobile-hero">
        <div class="tbar"><span class="url" style="margin-left:0">9:41 · Yezzz</span></div>
        <div class="app" style="gap:14px">
          <div class="hd">Free mobile.<br>Just <em>shop as usual.</em></div>
          <div style="display:flex;flex-direction:column;gap:8px">
            <div style="height:10px;background:rgba(255,255,255,0.08);border-radius:3px;width:88%"></div>
            <div style="height:10px;background:rgba(255,255,255,0.06);border-radius:3px;width:72%"></div>
            <div style="height:10px;background:rgba(255,255,255,0.06);border-radius:3px;width:60%"></div>
          </div>
          <div style="margin-top:auto;padding:14px;border-radius:8px;background:var(--accent);color:#0e0e10;font-family:var(--mono);font-size:11px;letter-spacing:0.1em;text-transform:uppercase;text-align:center">Activate Yezzz</div>
        </div>
      </div>
    `,
    toc: [
      { id: 'overview', label: 'Overview' },
      { id: 'problem', label: 'The problem' },
      { id: 'research', label: 'Research' },
      { id: 'strategy', label: 'Strategy' },
      { id: 'dive1', label: 'Deep dive · Before' },
      { id: 'dive2', label: 'Deep dive · After' },
      { id: 'onboarding', label: 'Onboarding' },
      { id: 'validation', label: 'Validation' },
      { id: 'reflection', label: 'Reflection' },
    ],
    articleHTML: `
      <p class="lede reveal">Yezzz is a mobile operator <em>embedded</em> inside a supermarket app — buy your groceries, get mobile service for free. The offer was genuinely strong. The problem was that almost no one understood it well enough to act on it.</p>

      <div class="sec" id="overview">
        <div class="sec-label">01 — Overview</div>
        <h2 class="reveal">A product that worked — but couldn't be <em>read</em>.</h2>
        <p class="reveal">Yezzz lives inside Silpo, Ukraine's largest grocery app, with millions of active users already loyal to the brand. Demand wasn't the issue. I led the redesign of the full activation experience — from first impression through post-activation — to figure out where comprehension broke down, why trust eroded, and what it would take to make a compelling product feel as compelling as it actually was.</p>
      </div>

      <div class="sec" id="problem">
        <div class="sec-label">02 — Problem</div>
        <h2 class="reveal">A 2.35% conversion rate on a <em>strong</em> offer.</h2>
        <p class="reveal">The unique value proposition was simple: get mobile coverage you effectively pay for through your regular grocery shopping. The user base was already there. The blocker wasn't motivation — it was comprehension and trust.</p>
        <p class="reveal">When the conversion rate stays low on an offer that should be obvious, the barrier is experiential, not motivational. The data agreed: <strong>87% of users dropped off at the very first screen</strong>, before ever reaching the activation flow.</p>
        <figure class="reveal">
          <div class="img">
            <div class="abs-fill" style="background:linear-gradient(135deg,#1a1822,#1a1a24)"></div>
            <div class="abs-glow violet"></div>
            <div class="abs-card"><div class="placeholder"><small>Funnel · 138,482 → 3,251</small>87%<br><span style="font-size:0.4em">drop at step one</span></div></div>
          </div>
          <figcaption><span>Fig. 01 — Funnel visualization. Users entering the Yezzz screen vs. completing activation.</span><span>01 / 09</span></figcaption>
        </figure>
      </div>

      <div class="sec" id="research">
        <div class="sec-label">03 — Research &amp; discovery</div>
        <h2 class="reveal">Fifteen interviews, three user groups.</h2>
        <p class="reveal">We ran 15 in-depth interviews across three groups defined by their stage of interaction with Yezzz. Each session focused on three areas: the activation experience itself, comprehension of the service model, and what drives or blocks trust when switching mobile operators.</p>
        <h3>What we heard</h3>
        <ul class="reveal">
          <li><strong>Before activation.</strong> Users who didn't understand the mechanic upfront simply lost interest. The offer read like a one-time promotion, not an ongoing service model.</li>
          <li><strong>During activation.</strong> The flow confused users. Many couldn't tell if they were completing steps correctly. The number portability process felt opaque and high-stakes — even though users reported being less afraid of switching operators than we'd assumed.</li>
          <li><strong>After activation.</strong> Users couldn't track their tariff status. They didn't know which billing period was active, whether they'd met the spending condition, or what would happen if they fell short.</li>
        </ul>
        <blockquote class="reveal">"Did I meet the condition in February? Will I get free service in March? How am I supposed to know?"<cite>— Tetiana, activated user</cite></blockquote>
        <p class="reveal">The consistent theme across all three groups: <strong>the product was working. The communication around it wasn't.</strong></p>
      </div>

      <div class="sec" id="strategy">
        <div class="sec-label">04 — Strategy</div>
        <h2 class="reveal">Fifteen hypotheses, two real problems.</h2>
        <p class="reveal">Research surfaced ~15 hypotheses. We scored each using the ICE framework to separate high-leverage interventions from noise, which produced a clear priority stack. The highest-priority issues clustered around two distinct problems:</p>
        <ul class="reveal">
          <li><strong>Comprehension before activation.</strong> Users needed to understand what they were signing up for before being asked to act. Any friction introduced before comprehension was established caused drop-off — and it did.</li>
          <li><strong>Visibility after activation.</strong> Users who successfully activated had no reliable way to track their status. This eroded trust and reduced the likelihood of re-engagement the following month.</li>
        </ul>
        <figure class="reveal">
          <div class="img">
            <div class="abs-fill" style="background:linear-gradient(135deg,#181820,#1a1a24)"></div>
            <div class="abs-glow violet"></div>
            <div class="abs-card"><div class="placeholder"><small>ICE scoring matrix</small>Impact × Confidence × Ease</div></div>
          </div>
          <figcaption><span>Fig. 02 — ICE matrix used to triage research hypotheses.</span><span>03 / 09</span></figcaption>
        </figure>
      </div>

      <div class="sec" id="dive1">
        <div class="sec-label">05 — Deep dive 01</div>
        <h2 class="reveal">Transparent conditions, <em>before</em> activation.</h2>
        <p class="reveal">Users arriving at the Yezzz screen didn't know what the service required of them. The spending condition (₴2,000/month) was only revealed after the first purchase. Without that information upfront, the offer felt ambiguous — and ambiguous offers get ignored.</p>
        <h3>The decision</h3>
        <p class="reveal">I restructured the main screen to lead with the mechanic, not the marketing. The value proposition — what you get, what it costs, how the monthly cycle works — was explained in plain language before any action was requested. Benefits were listed clearly. The ₴200 fallback tariff was shown alongside the free tier so users could see the full picture.</p>
        <p class="reveal">By the time a user reached the activation CTA, they should have no unanswered questions about what they're signing up for.</p>
        <figure class="grid2 reveal">
          <div class="img">
            <div class="panel"><div class="abs-glow coral"></div><div class="abs-card"><div class="placeholder"><small>Before</small>Vague</div></div></div>
            <div class="panel"><div class="abs-glow violet"></div><div class="abs-card"><div class="placeholder"><small>After</small>Mechanic-first</div></div></div>
          </div>
          <figcaption><span>Fig. 03 — Original marketing-forward landing vs. redesigned mechanic-first screen.</span><span>05 / 09</span></figcaption>
        </figure>
      </div>

      <div class="sec" id="dive2">
        <div class="sec-label">06 — Deep dive 02</div>
        <h2 class="reveal">Status visibility, <em>after</em> activation.</h2>
        <p class="reveal">Activated users had no clear way to track their tariff status. They couldn't see remaining minutes or data, identify which billing cycle was active, or know whether they were on track to meet the monthly spending condition. This wasn't just a UX gap — it was a trust problem. Users who can't tell if a product is working for them assume it isn't.</p>
        <h3>The decision</h3>
        <p class="reveal">I added visual usage progress for minutes and data directly to the account screen — a quick-read status that answered the most common post-activation questions without requiring any navigation. Billing cycle dates and free-package conditions were surfaced inline, with clear language about what the current cycle required and when it would reset.</p>
        <p class="reveal">I also added a dedicated FAQ addressing the most common questions about tariff conditions, the spending mechanic, and billing rules. Confusion had been building silently — this gave users a self-serve path to answers without contacting support.</p>
        <figure class="grid2 reveal">
          <div class="img">
            <div class="panel"><div class="abs-glow amber"></div><div class="abs-card"><div class="placeholder"><small>Before</small>Sparse</div></div></div>
            <div class="panel"><div class="abs-glow fresh"></div><div class="abs-card"><div class="placeholder"><small>After</small>At-a-glance</div></div></div>
          </div>
          <figcaption><span>Fig. 04 — Account screen, before and after.</span><span>07 / 09</span></figcaption>
        </figure>
      </div>

      <div class="sec" id="onboarding">
        <div class="sec-label">07 — Onboarding</div>
        <h2 class="reveal">Two flows, two moments.</h2>
        <p class="reveal">Two onboarding flows were added at different points in the funnel, each solving a distinct problem.</p>
        <ul class="reveal">
          <li><strong>Pre-activation.</strong> New visitors to the Yezzz section had no context for what the service was. A brief flow explains what Yezzz is and what it offers before asking for any commitment.</li>
          <li><strong>Post-activation.</strong> Newly activated users didn't know where to find their package status. A guided walkthrough of the account screen — package status, balance, billing cycle — appears immediately after activation.</li>
        </ul>
      </div>

      <div class="sec" id="validation">
        <div class="sec-label">08 — Validation</div>
        <h2 class="reveal">Tested with 43 participants.</h2>
        <p class="reveal">Updated designs were tested with 43 participants: 13 in moderated Figma sessions for behavioral depth, 30 in unmoderated tests via Maze and Lyssna for broader coverage. Testing covered three stages: first-impression comprehension, activation flow navigation, and post-activation status understanding.</p>
        <p class="reveal">Users understood tariff conditions significantly better than in the original flow and moved through activation with noticeably more confidence. Moderated sessions surfaced two edge cases that were addressed before shipping.</p>
        <div class="results-band reveal">
          <div class="stat">
            <div class="k">Conversion rate</div>
            <div class="v">+<em>69%</em></div>
            <div class="c">on the redesigned activation funnel</div>
          </div>
          <div class="stat">
            <div class="k">First-screen drop-off</div>
            <div class="v">−<em>54%</em></div>
            <div class="c">from the 87% baseline</div>
          </div>
          <div class="stat">
            <div class="k">Tested with</div>
            <div class="v"><em>43</em></div>
            <div class="c">moderated + unmoderated participants</div>
          </div>
        </div>
      </div>

      <div class="sec" id="reflection">
        <div class="sec-label">09 — Reflection</div>
        <h2 class="reveal">What I'd <em>keep doing</em>.</h2>
        <p class="reveal">The problem wasn't the product — it was the gap between what the product offered and what users understood. The work wasn't about changing the offer; it was about making it visible and believable at the right moments.</p>
        <p class="reveal">Qualitative research unlocked things analytics couldn't. The funnel showed where users dropped off. Interviews explained why. The insight that users didn't know they'd already met the conditions for free service — invisible eligibility — came entirely from conversations, not from data.</p>
        <p class="reveal">Constraints shaped better decisions. The MNP flow couldn't be redesigned due to legal requirements. The main app screen had limited real estate. Working within those boundaries pushed the work toward communication and framing rather than structural changes — which turned out to be exactly what was needed.</p>
      </div>
    `,
    nextSlug: 'phlex',
    nextTitle: 'Phlex',
    nextNum: '02',
    nextGlow: 'aqua',
    nextLabel: 'Next case — 02 / 06',
  },

  {
    slug: 'phlex',
    pageTitle: 'Phlex — Anastasia Bovt',
    breadcrumbCase: 'Case 02',
    h1HTML: 'Making swim data<br/>feel <em>readable</em>.',
    sub: 'Three years of product design on a swimming performance tracker — from MVP through gamification, social competition, and a coach-facing web dashboard.',
    metaCells: [
      { k: 'Client', v: 'Phlex Swim' },
      { k: 'Year', v: '2022 — 2025' },
      { k: 'Role', v: 'Lead Product Designer' },
      { k: 'Platforms', v: 'iOS · Android · Web' },
      { k: 'Scope', v: 'Mobile · Web · Hardware UX' },
      { k: 'Outcome', v: '+14% Day-30 retention · 2.3× session frequency' },
    ],
    heroGlow: 'aqua',
    heroInnerHTML: `
      <div class="glow aqua"></div>
      <div class="chrome-lg mobile-hero">
        <div class="tbar"><span class="url" style="margin-left:0">Live · Lane 4</span></div>
        <div class="app" style="gap:14px">
          <div class="hd"><em>2:14</em><br><span style="font-size:0.55em;color:rgba(255,255,255,0.6)">/100m · pace</span></div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
            <div style="padding:12px;border:1px solid rgba(255,255,255,0.08);border-radius:8px"><div style="font-family:var(--mono);font-size:9px;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:4px">Stroke</div><div style="font-family:var(--serif);color:#fff;font-size:18px">38 spm</div></div>
            <div style="padding:12px;border:1px solid rgba(255,255,255,0.08);border-radius:8px"><div style="font-family:var(--mono);font-size:9px;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:4px">SWOLF</div><div style="font-family:var(--serif);color:#fff;font-size:18px">42</div></div>
            <div style="padding:12px;border:1px solid rgba(255,255,255,0.08);border-radius:8px"><div style="font-family:var(--mono);font-size:9px;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:4px">HR</div><div style="font-family:var(--serif);color:#fff;font-size:18px">148</div></div>
            <div style="padding:12px;border:1px solid rgba(255,255,255,0.08);border-radius:8px"><div style="font-family:var(--mono);font-size:9px;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:4px">Set</div><div style="font-family:var(--serif);color:#fff;font-size:18px">3 / 6</div></div>
          </div>
        </div>
      </div>
    `,
    toc: [
      { id: 'overview', label: 'Overview' },
      { id: 'problem', label: 'The problem' },
      { id: 'research', label: 'Research' },
      { id: 'dive1', label: 'Onboarding' },
      { id: 'dive2', label: 'Gamification' },
      { id: 'dive3', label: 'Competition' },
      { id: 'results', label: 'Impact' },
      { id: 'reflection', label: 'Reflection' },
    ],
    articleHTML: `
      <p class="lede reveal">Phlex connects with hardware wearables to capture pace, stroke rate and heart rate in real time — then turns that data into something swimmers can <em>act on</em>. The challenge: make metrics feel motivating for casual lap swimmers and trustworthy enough for professionals.</p>

      <div class="sec" id="overview">
        <div class="sec-label">01 — Overview</div>
        <h2 class="reveal">Three years on one product.</h2>
        <p class="reveal">I led product design across three years of continuous iteration: MVP, gamification, social competition, and a coach-facing web dashboard. The core challenge throughout was making data feel readable and motivating for two fundamentally different users — swimmers tracking personal progress, and coaches managing a roster of athletes — without the product feeling split or bloated.</p>
      </div>

      <div class="sec" id="problem">
        <div class="sec-label">02 — Problem</div>
        <h2 class="reveal">Swimming is <em>chronically</em> underserved.</h2>
        <p class="reveal">Running and cycling have mature ecosystems that make data intuitive and motivating. Swimming has almost nothing that works well — most tools require manual lap counting, fail to sync reliably with hardware, or surface raw data that means nothing poolside.</p>
        <p class="reveal">Phlex had the hardware advantage. The design problem: that data is worthless if swimmers can't read it quickly, understand what it means, and feel motivated to come back tomorrow.</p>
        <p class="reveal">A second challenge: Phlex had to serve two fundamentally different users inside one product — swimmers tracking personal progress, and coaches managing a roster.</p>
        <figure class="grid2 reveal">
          <div class="img">
            <div class="panel"><div class="abs-glow coral"></div><div class="abs-card"><div class="placeholder"><small>What data exists</small>Raw metrics</div></div></div>
            <div class="panel"><div class="abs-glow aqua"></div><div class="abs-card"><div class="placeholder"><small>What swimmers need</small>Insight</div></div></div>
          </div>
          <figcaption><span>Fig. 01 — Reframing the problem from "more data" to "readable insight."</span><span>02 / 10</span></figcaption>
        </figure>
      </div>

      <div class="sec" id="research">
        <div class="sec-label">03 — Research</div>
        <h2 class="reveal">Continuous interviews shaped every roadmap.</h2>
        <p class="reveal">I ran structured user interviews at multiple stages — at launch, at 12 months, and beyond. Continuous interviews were the primary input for every major decision.</p>
        <ul class="reveal">
          <li><strong>Metrics without context intimidate instead of motivate.</strong> Casual swimmers saw their score and felt confused. Professionals wanted granular data, but needed it readable in seconds — between sets, wet hands, sun glare.</li>
          <li><strong>Solo tracking loses users after the first few weeks.</strong> Without external accountability, motivation fades. Swimmers who trained with clubs retained far better — because of social structure, not coaching.</li>
          <li><strong>Coaches were managing progress in spreadsheets.</strong> Screenshots from athletes, manual trend tracking. A clear product opportunity with obvious professional frustration behind it.</li>
        </ul>
        <blockquote class="reveal">"I don't need more numbers. I need to know if I'm faster than last Tuesday."<cite>— Swim club member, 12-month interview</cite></blockquote>
      </div>

      <div class="sec" id="dive1">
        <div class="sec-label">04 — Deep dive 01</div>
        <h2 class="reveal">Making the product's <em>depth</em> visible.</h2>
        <p class="reveal">Phlex launched without formal onboarding. Early on that was fine — the product was small and the core tracking loop was discoverable. Two years in, the product had grown: gamification, goal tracking, competition, coach tools. Features that took months to build were invisible to new users who'd never been shown they existed.</p>
        <p class="reveal">New users would track a few sessions and churn — never reaching the features that would have kept them engaged. Retention data showed a consistent drop-off at the end of week one.</p>
        <h3>The decision</h3>
        <p class="reveal">A focused onboarding sequence on first launch — short, skippable, purposeful. Each screen highlighted one feature category (performance tracking, levels and progress, group competition, coach tools) with a single-sentence explanation of why it mattered.</p>
        <p class="reveal"><strong>Impact:</strong> users accessing at least 3 distinct feature areas in their first 14 days rose from ~29% to ~61%.</p>
      </div>

      <div class="sec" id="dive2">
        <div class="sec-label">05 — Deep dive 02</div>
        <h2 class="reveal">A points system tied to <em>real</em> performance.</h2>
        <p class="reveal">Solo performance tracking has a well-documented drop-off curve. The first few weeks are high-engagement — everything is new, progress is visible. After that, without a reason to return beyond habit, users disengage. Day-30 retention was where Phlex was losing people.</p>
        <h3>The decision</h3>
        <p class="reveal">A points-and-levels system where every workout generates a score — calculated from the session's actual metrics weighted against the user's stated training goals. Points accumulate across workouts and advance the user through a progression of levels. The system reflects genuine performance, not just frequency.</p>
        <p class="reveal">This was important for credibility. Swimmers know their times. A gamification system that rewarded attendance without recognizing performance would have been dismissed immediately by serious users. Tying points to real metrics made the levels feel <em>earned</em>.</p>
      </div>

      <div class="sec" id="dive3">
        <div class="sec-label">06 — Deep dive 03</div>
        <h2 class="reveal">Adding the <em>social</em> layer.</h2>
        <p class="reveal">Gamification improved retention significantly, but it relied entirely on intrinsic motivation — personal goals, personal records, personal levels. For a large segment of users, that wasn't enough to sustain long-term engagement.</p>
        <p class="reveal">Research had shown that swimmers who trained with clubs retained far better than solo users. The social structure was the differentiating factor.</p>
        <h3>The decision</h3>
        <p class="reveal">Leagues — time-limited group competitions where swimmers compete on a shared leaderboard within a defined challenge window (typically 4 weeks). Leagues can be open (any Phlex user) or private (invite-only for clubs or friend groups).</p>
        <p class="reveal">Sponsored prizes changed the dynamic significantly. Phlex partnered with swim brands to offer gear for League winners, which drove external recruitment — users invited non-Phlex swimmers to join a League, which became one of the top acquisition channels post-launch.</p>
        <figure class="reveal">
          <div class="img">
            <div class="abs-fill" style="background:linear-gradient(135deg,#0f1820,#121822)"></div>
            <div class="abs-glow aqua"></div>
            <div class="abs-card"><div class="placeholder"><small>League · Spring 26</small>4-week ladder</div></div>
          </div>
          <figcaption><span>Fig. 02 — League leaderboard view, mid-cycle.</span><span>07 / 10</span></figcaption>
        </figure>
      </div>

      <div class="sec" id="results">
        <div class="sec-label">07 — Impact</div>
        <h2 class="reveal">The <em>numbers</em>.</h2>
        <div class="results-band reveal">
          <div class="stat">
            <div class="k">Day-30 retention</div>
            <div class="v">+<em>14%</em></div>
            <div class="c">post-gamification launch</div>
          </div>
          <div class="stat">
            <div class="k">Session frequency</div>
            <div class="v"><em>2.3×</em></div>
            <div class="c">level-active users vs. not</div>
          </div>
          <div class="stat">
            <div class="k">Active League boost</div>
            <div class="v"><em>1.8×</em></div>
            <div class="c">session frequency during competition</div>
          </div>
        </div>
        <p class="reveal" style="margin-top:32px">Leagues became the top acquisition channel within 2 months of launch. MAU grew in the quarter following release. Sponsored Leagues generated 3.1× higher invite rates than non-sponsored ones.</p>
      </div>

      <div class="sec" id="reflection">
        <div class="sec-label">08 — Reflection</div>
        <h2 class="reveal">Trust before <em>features</em>.</h2>
        <p class="reveal">Three years on one product clarified something about the relationship between trust and features. Every motivational layer — points, levels, competition — only worked because the underlying tracking data was reliable. Swimmers are precise people who know their times. Features built on top of that data either confirm trust or destroy it.</p>
        <p class="reveal">The evolution from individual gamification to group competition also validated a sequencing principle: solo progress metrics sustain early engagement; social accountability sustains long-term behavior. The two systems weren't alternatives — they were stages. Gamification built the performance baseline. Competition made that baseline meaningful in relation to others.</p>
      </div>
    `,
    nextSlug: 'tutorly',
    nextTitle: 'Tutorly',
    nextNum: '03',
    nextGlow: 'fresh',
    nextLabel: 'Next case — 03 / 06',
  },

  {
    slug: 'tutorly',
    pageTitle: 'Tutorly — Anastasia Bovt',
    breadcrumbCase: 'Case 03',
    h1HTML: 'Two products,<br/>one <em>infrastructure</em>.',
    sub: 'An online learning platform serving students who want to learn and tutors who want to build a business — without bloating the interface for either.',
    metaCells: [
      { k: 'Client', v: 'Tutorly' },
      { k: 'Year', v: '2023' },
      { k: 'Role', v: 'Lead Product Designer' },
      { k: 'Platforms', v: 'iOS · Android · Web' },
      { k: 'Scope', v: 'End-to-end · System' },
      { k: 'Outcome', v: '+40% onboarding completion · 50+ components' },
    ],
    heroGlow: 'fresh',
    heroInnerHTML: `
      <div class="glow fresh"></div>
      <div class="chrome-lg">
        <div class="tbar"><i></i><i></i><i></i><span class="url">tutorly.app/tutor/home</span></div>
        <div class="app" style="display:grid;grid-template-columns:1fr 1fr;gap:18px">
          <div style="display:flex;flex-direction:column;gap:10px">
            <div class="hd" style="font-size:28px">Next lesson<br><em style="color:var(--accent)">in 14 min</em></div>
            <div style="height:1px;background:rgba(255,255,255,0.08)"></div>
            <div style="height:10px;background:rgba(255,255,255,0.08);border-radius:3px;width:80%"></div>
            <div style="height:10px;background:rgba(255,255,255,0.06);border-radius:3px;width:60%"></div>
          </div>
          <div style="display:grid;grid-template-rows:1fr 1fr;gap:10px">
            <div style="border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:14px"><div style="font-family:var(--mono);font-size:9px;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:6px">This month</div><div style="font-family:var(--serif);color:#fff;font-size:22px">€2,184</div></div>
            <div style="border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:14px"><div style="font-family:var(--mono);font-size:9px;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:6px">Active students</div><div style="font-family:var(--serif);color:#fff;font-size:22px">28</div></div>
          </div>
        </div>
      </div>
    `,
    toc: [
      { id: 'overview', label: 'Overview' },
      { id: 'problem', label: 'The problem' },
      { id: 'research', label: 'Research' },
      { id: 'strategy', label: 'Strategy' },
      { id: 'dive1', label: 'Dual onboarding' },
      { id: 'dive2', label: 'Tutor dashboard' },
      { id: 'results', label: 'Impact' },
      { id: 'reflection', label: 'Reflection' },
    ],
    articleHTML: `
      <p class="lede reveal">Tutorly needed a platform that worked for two fundamentally different people. I designed the entire product architecture, both role-specific experiences, and a scalable component system that supported everything from video lessons to earnings tracking — <em>without bloating the interface</em>.</p>

      <div class="sec" id="overview">
        <div class="sec-label">01 — Overview</div>
        <h2 class="reveal">One platform, two products.</h2>
        <p class="reveal">Most online learning platforms are built for one side of the market. Tools designed for tutors are clunky for students. Tools optimized for students give tutors almost no control over their own business. Tutorly needed to serve both — not with a one-size-fits-all interface, but with two purpose-built experiences inside the same product.</p>
      </div>

      <div class="sec" id="problem">
        <div class="sec-label">02 — Problem</div>
        <h2 class="reveal">Hidden complexity, both ways.</h2>
        <p class="reveal">The core tension: complexity for tutors had to stay invisible to students. Every feature added for one role was a potential source of confusion for the other. A toggle-based "switch roles" model would have shipped a compromised experience to both sides.</p>
      </div>

      <div class="sec" id="research">
        <div class="sec-label">03 — Research</div>
        <h2 class="reveal">Twelve discovery interviews.</h2>
        <p class="reveal">I ran interviews with 12 users — 6 current tutors and 6 students across different subject areas and age groups. Three patterns became the design foundation:</p>
        <ul class="reveal">
          <li><strong>Students don't want to manage — they want to progress.</strong> Every extra click between "open the app" and "start the lesson" caused drop-off. Progress visibility wasn't a nice-to-have — it was directly tied to whether students came back.</li>
          <li><strong>Tutors think like business owners, not teachers.</strong> Their first questions were about earnings, scheduling, and client management — not pedagogy. The product needed to support that mindset from day one.</li>
          <li><strong>Onboarding drop-off is where most platforms fail.</strong> Tutors who couldn't publish a course in their first session never returned. Students who couldn't book a lesson within 5 minutes never converted.</li>
        </ul>
      </div>

      <div class="sec" id="strategy">
        <div class="sec-label">04 — Strategy</div>
        <h2 class="reveal">Two products sharing one <em>infrastructure</em>.</h2>
        <p class="reveal">I made the early call to treat students and tutors as two separate products sharing one infrastructure — not one product with role toggles. That meant separate onboarding flows tuned to each role's first-use goal; role-specific dashboards, not a universal home screen; and a shared design system under the hood so engineering could build once.</p>
        <p class="reveal">I deliberately deprioritized the social layer (reviews, ratings, Q&amp;A) for v1. It added complexity without addressing the core activation problem. The first release focused on three things: <strong>discovery, booking, and progress</strong> — the minimum loop to make Tutorly genuinely useful on day one.</p>
      </div>

      <div class="sec" id="dive1">
        <div class="sec-label">05 — Deep dive 01</div>
        <h2 class="reveal">Dual onboarding.</h2>
        <p class="reveal">The initial flow was a single linear path that asked both students and tutors to complete the same steps before they could do anything meaningful. Tutors answered questions about their learning goals. Students were asked to set up payment before they'd seen a single tutor profile. The result: high drop-off from both sides.</p>
        <h3>The decision</h3>
        <p class="reveal">I split onboarding into two purpose-built paths, each ending at the user's <em>first real action</em>, not at email confirmation.</p>
        <ul class="reveal">
          <li><strong>For tutors:</strong> bio → availability → profile live. The finish line was a shareable profile URL. Seeing their own profile, bookable and real, was the activation moment.</li>
          <li><strong>For students:</strong> subject or goal → tutor browse → profile view → book. The flow was designed to reach the first tutor profile within 3 taps. Account details and payment setup happened after the student had already chosen someone.</li>
        </ul>
        <p class="reveal">Every field not essential to the first session was deferred to a post-activation prompt.</p>
        <figure class="grid2 reveal">
          <div class="img">
            <div class="panel"><div class="abs-glow violet"></div><div class="abs-card"><div class="placeholder"><small>Tutor path</small>3 screens</div></div></div>
            <div class="panel"><div class="abs-glow fresh"></div><div class="abs-card"><div class="placeholder"><small>Student path</small>3 screens</div></div></div>
          </div>
          <figcaption><span>Fig. 01 — Onboarding flows side-by-side, with divergence after role selection.</span><span>04 / 09</span></figcaption>
        </figure>
      </div>

      <div class="sec" id="dive2">
        <div class="sec-label">06 — Deep dive 02</div>
        <h2 class="reveal">The tutor dashboard.</h2>
        <p class="reveal">Tutors needed to manage schedules, monitor earnings, track students, assign homework, and run video sessions — all without the interface becoming a second job.</p>
        <h3>The decision</h3>
        <p class="reveal">I designed the dashboard around <em>time</em>, not feature categories. The top section always shows the next lesson. Earnings and pending actions sit below as secondary context. Deep management flows — course editor, student progress, withdrawals — live one tap deeper.</p>
        <h3>Trade-offs</h3>
        <p class="reveal"><strong>Shared component system vs. divergent experiences.</strong> One design system underneath two distinct experiences. Engineering moved faster without UX inconsistency — at the cost of more upfront design work, since every component had to be thought through in both contexts.</p>
        <p class="reveal"><strong>Video lessons in v1.</strong> The team wanted to build native video conferencing. I pushed back. Integrating a proven third-party solution for v1 let us focus design effort on the surrounding context — pre-lesson prep, in-lesson materials, post-lesson follow-up — which was where the real differentiation lived.</p>
        <p class="reveal"><strong>Homework templates.</strong> First iteration required tutors to build homework from scratch every time. After testing I introduced templates. Reuse rate in beta: ~74%.</p>
      </div>

      <div class="sec" id="results">
        <div class="sec-label">07 — Impact</div>
        <h2 class="reveal">The <em>numbers</em>.</h2>
        <div class="results-band reveal">
          <div class="stat">
            <div class="k">Onboarding completion</div>
            <div class="v">+<em>40%</em></div>
            <div class="c">vs. initial prototype</div>
          </div>
          <div class="stat">
            <div class="k">Homework template reuse</div>
            <div class="v">~<em>74%</em></div>
            <div class="c">tutor adoption in beta</div>
          </div>
          <div class="stat">
            <div class="k">Design system</div>
            <div class="v"><em>50+</em></div>
            <div class="c">components across student &amp; tutor</div>
          </div>
        </div>
      </div>

      <div class="sec" id="reflection">
        <div class="sec-label">08 — Reflection</div>
        <h2 class="reveal">Two simple things, not one <em>complex</em> one.</h2>
        <p class="reveal">Designing for two user types inside one product isn't about compromise — it's about identifying where the experiences can share infrastructure and where they must diverge completely. The temptation is to find a universal solution. The better answer is usually to build two simple things instead of one complex one.</p>
        <p class="reveal">Progress visibility didn't just improve retention. It changed how students talked about the product — from "I use Tutorly" to "I'm working toward my certificate." Framing the product around progress rather than features was the most impactful shift of the whole project.</p>
      </div>
    `,
    nextSlug: 'fractl',
    nextTitle: 'Fractl',
    nextNum: '04',
    nextGlow: 'deep',
    nextLabel: 'Next case — 04 / 06',
  },

  {
    slug: 'fractl',
    pageTitle: 'Fractl — Anastasia Bovt',
    breadcrumbCase: 'Case 04',
    h1HTML: 'Three modes,<br/>one <em>model</em>.',
    sub: 'A low-code platform that lets non-technical builders ship business applications — without patronizing the developers who need its full power.',
    metaCells: [
      { k: 'Client', v: 'Fractl' },
      { k: 'Year', v: '2023' },
      { k: 'Role', v: 'Lead Product Designer' },
      { k: 'Platforms', v: 'Web' },
      { k: 'Scope', v: '0→1 · Interface model · System' },
      { k: 'Outcome', v: 'Visual + code + AI editors in sync' },
    ],
    heroGlow: 'deep',
    heroInnerHTML: `
      <div class="glow deep"></div>
      <div class="chrome-lg">
        <div class="tbar"><i></i><i></i><i></i><span class="url">fractl.studio/app/customer-portal</span></div>
        <div class="app" style="display:grid;grid-template-columns:200px 1fr;gap:18px;padding:18px">
          <div style="display:flex;flex-direction:column;gap:8px">
            <div style="height:8px;background:var(--accent);border-radius:3px;width:70%"></div>
            <div style="height:8px;background:rgba(255,255,255,0.08);border-radius:3px;width:55%"></div>
            <div style="height:8px;background:rgba(255,255,255,0.08);border-radius:3px;width:60%"></div>
            <div style="height:8px;background:rgba(255,255,255,0.08);border-radius:3px;width:45%"></div>
            <div style="height:8px;background:rgba(255,255,255,0.08);border-radius:3px;width:50%"></div>
          </div>
          <div style="display:grid;grid-template-rows:auto 1fr;gap:10px">
            <div style="display:flex;gap:6px"><span style="padding:6px 10px;border-radius:6px;background:var(--accent);color:#0e0e10;font-family:var(--mono);font-size:10px">Visual</span><span style="padding:6px 10px;border-radius:6px;border:1px solid rgba(255,255,255,0.12);font-family:var(--mono);font-size:10px;color:rgba(255,255,255,0.55)">Code</span><span style="padding:6px 10px;border-radius:6px;border:1px solid rgba(255,255,255,0.12);font-family:var(--mono);font-size:10px;color:rgba(255,255,255,0.55)">AI</span></div>
            <div style="border:1px dashed rgba(255,255,255,0.1);border-radius:8px;background:linear-gradient(180deg,rgba(167,139,255,0.08),transparent)"></div>
          </div>
        </div>
      </div>
    `,
    toc: [
      { id: 'overview', label: 'Overview' },
      { id: 'problem', label: 'The problem' },
      { id: 'research', label: 'Research' },
      { id: 'strategy', label: 'Strategy' },
      { id: 'reflection', label: 'Reflection' },
    ],
    articleHTML: `
      <p class="lede reveal">Fractl lets users build complex business applications through data modeling and visual logic — <em>without writing infrastructure code</em>. The design challenge: make a developer-grade tool feel accessible without patronizing the developers who need its full power.</p>

      <div class="sec" id="overview">
        <div class="sec-label">01 — Overview</div>
        <h2 class="reveal">From zero, for everyone.</h2>
        <p class="reveal">I led product design from zero: defining the interface model, designing three distinct user modes, and building the scalable design system that supported the entire platform. The product had to feel native to developers, business analysts, and product managers — sometimes on the same team.</p>
      </div>

      <div class="sec" id="problem">
        <div class="sec-label">02 — Problem</div>
        <h2 class="reveal">Weeks of <em>invisible</em> work, before anything moves.</h2>
        <p class="reveal">Building business applications typically requires weeks of backend setup before any visible progress. Database schemas, API connections, business logic — all of it must be configured before a single screen can function. For non-technical users this is a hard wall. Even experienced developers find it repetitive and time-consuming.</p>
      </div>

      <div class="sec" id="research">
        <div class="sec-label">03 — Research</div>
        <h2 class="reveal">Two personas, one platform.</h2>
        <p class="reveal">I mapped two distinct personas from stakeholder interviews and comparable-tool analysis:</p>
        <ul class="reveal">
          <li><strong>Professional developers.</strong> Want power, speed, flexibility. They'll use visual tools if it's faster than writing boilerplate — but they need escape hatches to code when required.</li>
          <li><strong>No-code builders.</strong> Typically product managers or business analysts. Comfortable with logic and data concepts, uncomfortable with code syntax. They need the visual model to be the <em>primary</em> interface, not a secondary companion to code.</li>
        </ul>
        <p class="reveal">The critical insight: all personas need to coexist in the same platform. A team might have one developer and three business analysts. The platform had to feel native to all of them.</p>
        <figure class="grid2 reveal">
          <div class="img">
            <div class="panel"><div class="abs-glow deep"></div><div class="abs-card"><div class="placeholder"><small>Persona A</small>Developer</div></div></div>
            <div class="panel"><div class="abs-glow violet"></div><div class="abs-card"><div class="placeholder"><small>Persona B</small>No-code builder</div></div></div>
          </div>
          <figcaption><span>Fig. 01 — Two personas sharing one platform.</span><span>02 / 05</span></figcaption>
        </figure>
      </div>

      <div class="sec" id="strategy">
        <div class="sec-label">04 — Strategy</div>
        <h2 class="reveal">"Three modes, one model."</h2>
        <p class="reveal">I proposed an architecture where a single underlying data model could be viewed and edited through three different interfaces — visual canvas, low-code editor, and AI prompt — all staying in sync.</p>
        <p class="reveal">This was the highest-risk architectural decision in the project. Keeping three editing surfaces synchronized in real time required significant engineering investment. I worked directly with the lead engineer to define where the sync boundaries were, what state could drift, and what had to be exactly consistent at all times.</p>
        <p class="reveal">The strategic payoff: users could switch modes mid-task without losing context. A developer could sketch the data model visually, drop into code to handle edge cases, and hand off to a no-code builder — all within the same session.</p>
        <figure class="reveal">
          <div class="img">
            <div class="abs-fill" style="background:linear-gradient(135deg,#16161e,#1a1a24)"></div>
            <div class="abs-glow deep"></div>
            <div class="abs-card"><div class="placeholder"><small>Visual ↔ Code ↔ AI</small>One model</div></div>
          </div>
          <figcaption><span>Fig. 02 — Editing modes binding to a shared underlying model.</span><span>04 / 05</span></figcaption>
        </figure>
      </div>

      <div class="sec" id="reflection">
        <div class="sec-label">05 — Reflection</div>
        <h2 class="reveal">The model, not the <em>UI</em>.</h2>
        <p class="reveal">The hardest problem in building tools for multiple technical levels isn't the UI — it's the model. If the underlying information architecture tries to serve everyone simultaneously, it ends up serving no one well. "Three modes, one model" worked because the model itself was clean enough to represent faithfully at different abstraction levels.</p>
      </div>
    `,
    nextSlug: 'olas',
    nextTitle: 'OLAS',
    nextNum: '05',
    nextGlow: 'coral',
    nextLabel: 'Next case — 05 / 06',
  },

  {
    slug: 'olas',
    pageTitle: 'OLAS — Anastasia Bovt',
    breadcrumbCase: 'Case 05',
    h1HTML: 'Designing for<br/>the worst <em>second</em>.',
    sub: 'A maritime safety app that monitors everyone on board in real time. When someone falls overboard, the interface has to perform — sun glare, motion, wet screens, panic.',
    metaCells: [
      { k: 'Client', v: 'OLAS' },
      { k: 'Year', v: '2022 — 2023' },
      { k: 'Role', v: 'Lead UI/UX Designer' },
      { k: 'Platforms', v: 'iOS · Android' },
      { k: 'Scope', v: 'End-to-end mobile' },
      { k: 'Outcome', v: 'Three states, designed in inverse order' },
    ],
    heroGlow: 'coral',
    heroInnerHTML: `
      <div class="glow coral"></div>
      <div class="chrome-lg mobile-hero">
        <div class="tbar"><span class="url" style="margin-left:0">● ALERT · 14:32:08</span></div>
        <div class="app" style="gap:12px;background:rgba(220,40,40,0.06)">
          <div class="hd" style="color:#ff7a7a">Man overboard<br><em style="color:var(--accent)">Marco · Tag 03</em></div>
          <div style="padding:14px;border-radius:8px;border:1px solid rgba(255,122,122,0.3);background:rgba(255,122,122,0.06)">
            <div style="font-family:var(--mono);font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.5);margin-bottom:6px">Distance · 38m astern</div>
            <div style="font-family:var(--serif);color:#fff;font-size:22px">Marker dropped</div>
          </div>
          <div style="margin-top:auto;padding:16px;border-radius:10px;background:#ff5252;color:#fff;font-family:var(--mono);font-size:12px;letter-spacing:0.12em;text-transform:uppercase;text-align:center;font-weight:500">Confirm — call rescue</div>
        </div>
      </div>
    `,
    toc: [
      { id: 'overview', label: 'Overview' },
      { id: 'problem', label: 'The problem' },
      { id: 'research', label: 'Research' },
      { id: 'strategy', label: 'Strategy' },
      { id: 'reflection', label: 'Reflection' },
    ],
    articleHTML: `
      <p class="lede reveal">OLAS connects wearable trackers and engine-integrated devices to a mobile app that monitors everyone on board in real time. If someone falls overboard, the captain is alerted in seconds — and for solo sailors, the app <em>automatically</em> contacts rescue services.</p>

      <div class="sec" id="overview">
        <div class="sec-label">01 — Overview</div>
        <h2 class="reveal">Designed for the seconds that matter.</h2>
        <p class="reveal">I designed the entire mobile experience from scratch, optimizing every interface decision for emergency conditions: sun glare, motion, wet screens, stress. An interface that's confusing under normal conditions is annoying. An interface that's confusing during a man-overboard event can be fatal.</p>
      </div>

      <div class="sec" id="problem">
        <div class="sec-label">02 — Problem</div>
        <h2 class="reveal">The window closes in <em>minutes</em>.</h2>
        <p class="reveal">Falling overboard is one of the leading causes of death in recreational boating. Most incidents happen in daylight, in calm conditions, within reach of help — but without a fast enough alert mechanism, the window to respond closes in minutes.</p>
        <p class="reveal">Existing safety tools were either passive (life jackets) or required the victim to activate them. The OLAS hardware closed that gap — but it needed software that could perform reliably under the exact conditions where everything else fails.</p>
      </div>

      <div class="sec" id="research">
        <div class="sec-label">03 — Research</div>
        <h2 class="reveal">Three dimensions of constraint.</h2>
        <p class="reveal">I conducted research across three dimensions: user scenarios, hardware behavior, and environmental constraints.</p>
        <ul class="reveal">
          <li><strong>User scenarios.</strong> Four primary contexts: multi-person recreational sailing, family sailing with children and pets, solo sailing (highest risk), and commercial / charter use. Each scenario had different alert-logic requirements and different primary users.</li>
          <li><strong>Hardware behavior.</strong> I worked directly with the hardware team to understand each transmitter's signal characteristics (wristband, tag, engine unit), detection ranges, and failure modes. The UI had to accurately represent device state, including degraded states.</li>
          <li><strong>Environmental constraints.</strong> Sun glare, salt spray, motion, gloved hands, single-handed operation while at the helm. Every interface choice was checked against these.</li>
        </ul>
        <figure class="reveal">
          <div class="img">
            <div class="abs-fill" style="background:linear-gradient(135deg,#16121a,#1a1620)"></div>
            <div class="abs-glow coral"></div>
            <div class="abs-card"><div class="placeholder"><small>Conditions matrix</small>Glare · Wet · Motion · Stress</div></div>
          </div>
          <figcaption><span>Fig. 01 — Each maritime condition mapped to a UI implication.</span><span>02 / 04</span></figcaption>
        </figure>
      </div>

      <div class="sec" id="strategy">
        <div class="sec-label">04 — Strategy</div>
        <h2 class="reveal">Design the alert state <em>first</em>.</h2>
        <p class="reveal">I defined three distinct interface states that had to be designed with equal rigor:</p>
        <ul class="reveal">
          <li><strong>Normal state.</strong> Real-time monitoring view. All devices visible, all crew accounted for. Users spend 99% of their time here — it had to be calm, informative, and low-cognitive-load.</li>
          <li><strong>Alert state.</strong> Man-overboard detected. The design had to perform perfectly under maximum stress. Every other concern was subordinate to: <em>can a panicked captain confirm or dismiss this alert correctly on the first try?</em></li>
          <li><strong>Setup state.</strong> Device pairing, network configuration, crew assignment. Only used at dock, before departure. Could be more complex — but still reliable, because setup errors would surface as false alerts during use.</li>
        </ul>
        <p class="reveal">I made the deliberate decision to design the alert state first, then design the normal state around the constraints the alert established.</p>
      </div>

      <div class="sec" id="reflection">
        <div class="sec-label">05 — Reflection</div>
        <h2 class="reveal">The measure of a <em>good</em> interface.</h2>
        <p class="reveal">Designing for emergencies exposed a principle I now apply everywhere: the measure of a good interface isn't how it performs when everything is fine. It's how it performs when nothing is.</p>
        <p class="reveal">Every design constraint imposed by the maritime environment was also a general UX principle pushed to its logical extreme: high contrast, large touch targets, clear single-action states, no unnecessary complexity. Working under these constraints produced a cleaner, more intentional design than I would have reached without them.</p>
      </div>
    `,
    nextSlug: 'careyou',
    nextTitle: 'Care You',
    nextNum: '06',
    nextGlow: 'fresh',
    nextLabel: 'Next case — 06 / 06',
  },

  {
    slug: 'careyou',
    pageTitle: 'Care You — Anastasia Bovt',
    breadcrumbCase: 'Case 06',
    h1HTML: 'Coordination,<br/>not <em>features</em>.',
    sub: 'A healthcare platform connecting patients, carers, clinicians, and insurers — designed to reduce hospital readmissions during the highest-risk period: home care after discharge.',
    metaCells: [
      { k: 'Client', v: 'Care You' },
      { k: 'Year', v: '2022' },
      { k: 'Role', v: 'UI/UX Designer' },
      { k: 'Platforms', v: 'iOS · Android · Web' },
      { k: 'Scope', v: 'Multi-role end-to-end · Admin · System' },
      { k: 'Outcome', v: 'Four roles · One coordination layer' },
    ],
    heroGlow: 'fresh',
    heroInnerHTML: `
      <div class="glow fresh"></div>
      <div class="chrome-lg">
        <div class="tbar"><i></i><i></i><i></i><span class="url">careyou.health/network/sarah-l</span></div>
        <div class="app" style="display:grid;grid-template-columns:1fr 1fr;gap:18px">
          <div style="display:flex;flex-direction:column;gap:10px">
            <div class="hd" style="font-size:28px">Sarah L.<br><em style="font-size:0.6em;color:rgba(255,255,255,0.55)">Post-discharge · day 4</em></div>
            <div style="height:1px;background:rgba(255,255,255,0.08)"></div>
            <div style="display:flex;gap:6px;flex-wrap:wrap">
              <span style="padding:5px 10px;border-radius:999px;background:rgba(122,255,196,0.12);color:#7affc4;font-family:var(--mono);font-size:10px">Patient</span>
              <span style="padding:5px 10px;border-radius:999px;background:rgba(167,139,255,0.12);color:var(--accent);font-family:var(--mono);font-size:10px">Carer</span>
              <span style="padding:5px 10px;border-radius:999px;background:rgba(107,197,255,0.12);color:#6bc5ff;font-family:var(--mono);font-size:10px">Clinician</span>
              <span style="padding:5px 10px;border-radius:999px;background:rgba(255,184,106,0.12);color:#ffb86a;font-family:var(--mono);font-size:10px">Insurer</span>
            </div>
          </div>
          <div style="display:grid;grid-template-rows:1fr 1fr;gap:10px">
            <div style="border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:14px"><div style="font-family:var(--mono);font-size:9px;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:6px">Tasks today</div><div style="font-family:var(--serif);color:#fff;font-size:22px">4 of 6</div></div>
            <div style="border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:14px"><div style="font-family:var(--mono);font-size:9px;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:6px">Risk score</div><div style="font-family:var(--serif);color:#7affc4;font-size:22px">Low</div></div>
          </div>
        </div>
      </div>
    `,
    toc: [
      { id: 'overview', label: 'Overview' },
      { id: 'problem', label: 'The problem' },
      { id: 'strategy', label: 'Strategy' },
      { id: 'system', label: 'System' },
      { id: 'reflection', label: 'Reflection' },
    ],
    articleHTML: `
      <p class="lede reveal">Hospital readmissions within 30 days of discharge are one of the most expensive and preventable problems in healthcare. Most aren't medical failures — they're <em>coordination</em> failures.</p>

      <div class="sec" id="overview">
        <div class="sec-label">01 — Overview</div>
        <h2 class="reveal">One platform, four roles.</h2>
        <p class="reveal">Care You connects patients, carers, clinicians, and insurers in one platform — reducing hospital readmissions by improving coordination during the highest-risk period: post-discharge home care. I designed the entire multi-role mobile experience and admin panel, plus a flexible design system that healthcare organizations could brand without custom development.</p>
      </div>

      <div class="sec" id="problem">
        <div class="sec-label">02 — Problem</div>
        <h2 class="reveal">Existing tools serve <em>one</em> role, not the chain.</h2>
        <p class="reveal">Patients don't know what to do at home. Carers don't have the right information. Clinicians can't easily monitor risk between appointments.</p>
        <p class="reveal">Existing tools either serve only clinicians (complex, not patient-friendly) or only patients (disconnected from clinical workflows). Nothing connected all four roles — provider, insurer, patient, and carer — in a shared ecosystem.</p>
      </div>

      <div class="sec" id="strategy">
        <div class="sec-label">03 — Strategy</div>
        <h2 class="reveal">Value lives in <em>coordination</em>.</h2>
        <p class="reveal">I defined the core product bet early: Care You's value lives in coordination, not features. The platform's job wasn't to add new medical capabilities — it was to make the coordination between existing roles faster, clearer, and less error-prone. That reframing influenced every prioritization decision.</p>
        <h3>v1 scope</h3>
        <ul class="reveal">
          <li><strong>Care network creation.</strong> Connecting patient + carer + clinician in one shared context.</li>
          <li><strong>Task assignment and tracking.</strong> Daily tasks visible to everyone in the network.</li>
          <li><strong>Risk assessment questionnaires.</strong> Surfacing risk before it becomes a re-admission.</li>
          <li><strong>Educational content library.</strong> Discharge instructions, in plain language.</li>
        </ul>
        <p class="reveal">I deprioritized real-time monitoring hardware integration for v1 — the software coordination layer had to prove value before adding device complexity.</p>
      </div>

      <div class="sec" id="system">
        <div class="sec-label">04 — System</div>
        <h2 class="reveal">A theming layer, not a fork.</h2>
        <p class="reveal">For healthcare organizations, the business requirement was clear: branding customization without custom dev work. I designed a theming system that allowed organizations to apply brand colors, logos, and tone of voice across all four role experiences with a single configuration layer.</p>
        <figure class="reveal">
          <div class="img">
            <div class="abs-fill" style="background:linear-gradient(135deg,#161a18,#191e1c)"></div>
            <div class="abs-glow fresh"></div>
            <div class="abs-card"><div class="placeholder"><small>One config layer</small>Four role surfaces</div></div>
          </div>
          <figcaption><span>Fig. 01 — Branding propagates from a single config to all four role surfaces.</span><span>02 / 03</span></figcaption>
        </figure>
      </div>

      <div class="sec" id="reflection">
        <div class="sec-label">05 — Reflection</div>
        <h2 class="reveal">Re-framing as the <em>first</em> design move.</h2>
        <p class="reveal">The most consequential decision wasn't a layout, a flow, or a component — it was the reframing of the product's value from features to coordination. Every prioritization argument afterwards became easier because the question stopped being "what's the best feature?" and started being "what would make the chain work?".</p>
      </div>
    `,
    nextSlug: 'yezzz',
    nextTitle: 'Yezzz',
    nextNum: '01',
    nextGlow: 'violet',
    nextLabel: 'Back to start — 01 / 06',
  },
]

export function getCaseBySlug(slug: string): CaseData | undefined {
  return cases.find((c) => c.slug === slug)
}
