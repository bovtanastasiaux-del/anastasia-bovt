/* ============================================================
   Portfolio — shared JS (reveal, cursor, tweaks, hero motion)
   ============================================================ */

(() => {
  // ---------- Scroll reveal ----------
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  // ---------- Cursor spotlight ----------
  const dot = document.createElement("div");
  dot.className = "cursor-dot";
  document.body.appendChild(dot);
  let tx = 0, ty = 0, cx = 0, cy = 0;
  window.addEventListener("mousemove", (e) => { tx = e.clientX; ty = e.clientY; });
  (function loop(){
    cx += (tx - cx) * 0.22;
    cy += (ty - cy) * 0.22;
    dot.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    requestAnimationFrame(loop);
  })();
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest("a, button, .hoverable")) dot.classList.add("hover");
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest("a, button, .hoverable")) dot.classList.remove("hover");
  });

  // ---------- Magnetic links ----------
  document.querySelectorAll("[data-magnetic]").forEach(el => {
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width/2);
      const dy = e.clientY - (r.top + r.height/2);
      el.style.transform = `translate(${dx*0.15}px, ${dy*0.15}px)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "";
    });
  });

  // ---------- Hero cursor spotlight variant ----------
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.addEventListener("mousemove", (e) => {
      const r = hero.getBoundingClientRect();
      hero.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
      hero.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
    });
  }

  // ---------- Time widget (frozen) ----------
  // Intentionally static; rendered value is baked into HTML.

  // ---------- Tweaks ----------
  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "theme": "dark",
    "accent": "#a78bff",
    "heroMotion": "spotlight",
    "grain": 0.06,
    "cursor": true,
    "layout": "grid"
  }/*EDITMODE-END*/;

  const state = { ...TWEAK_DEFAULTS };

  const accents = [
    { name: "Lavender", val: "#a78bff", alt: "#c9b8ff" },
    { name: "Citrus",   val: "#e8ff7a", alt: "#f1ffa3" },
    { name: "Coral",    val: "#ff8a6a", alt: "#ffb09a" },
    { name: "Mint",     val: "#7affc4", alt: "#a8ffd9" },
    { name: "Sky",      val: "#7ac8ff", alt: "#a8daff" }
  ];

  function apply() {
    document.documentElement.setAttribute("data-theme", state.theme);
    const accObj = accents.find(a => a.val === state.accent) || accents[0];
    document.documentElement.style.setProperty("--accent", accObj.val);
    document.documentElement.style.setProperty("--accent-2", accObj.alt);
    document.documentElement.style.setProperty("--grain", state.grain);
    document.body.classList.toggle("cursor-on", !!state.cursor);
    document.body.setAttribute("data-hero", state.heroMotion);
    document.body.setAttribute("data-layout", state.layout);
  }
  apply();

  function persist() {
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: state }, "*");
  }

  // Build panel
  function buildTweaks() {
    if (document.getElementById("tweaks-panel")) return;
    const panel = document.createElement("div");
    panel.className = "tweaks";
    panel.id = "tweaks-panel";
    panel.innerHTML = `
      <h4>Tweaks <span style="color:var(--fg-4)">v1</span></h4>

      <div class="tw-row"><label>Theme</label>
        <div class="tw-chips" data-group="theme">
          <button class="tw-chip" data-val="dark">Dark</button>
          <button class="tw-chip" data-val="light">Light</button>
        </div>
      </div>

      <div class="tw-row"><label>Accent</label>
        <div class="tw-chips" data-group="accent">
          ${accents.map(a => `<button class="tw-color" data-val="${a.val}" style="background:${a.val}" title="${a.name}"></button>`).join("")}
        </div>
      </div>

      <div class="tw-row"><label>Hero motion</label>
        <div class="tw-chips" data-group="heroMotion">
          <button class="tw-chip" data-val="spotlight">Spot</button>
          <button class="tw-chip" data-val="gradient">Mesh</button>
          <button class="tw-chip" data-val="marquee">Type</button>
          <button class="tw-chip" data-val="quiet">Quiet</button>
        </div>
      </div>

      <div class="tw-row"><label>Layout</label>
        <div class="tw-chips" data-group="layout">
          <button class="tw-chip" data-val="grid">Grid</button>
          <button class="tw-chip" data-val="stack">Stack</button>
        </div>
      </div>

      <div class="tw-row"><label>Grain</label>
        <input type="range" min="0" max="0.2" step="0.01" value="${state.grain}" data-group="grain" style="width:110px">
      </div>

      <div class="tw-row"><label>Cursor FX</label>
        <div class="tw-chips" data-group="cursor">
          <button class="tw-chip" data-val="true">On</button>
          <button class="tw-chip" data-val="false">Off</button>
        </div>
      </div>
    `;
    document.body.appendChild(panel);

    function sync() {
      panel.querySelectorAll(".tw-chips").forEach(grp => {
        const key = grp.dataset.group;
        grp.querySelectorAll("[data-val]").forEach(el => {
          const v = el.dataset.val;
          const match = String(state[key]) === v;
          el.classList.toggle("on", match);
        });
      });
    }
    sync();

    panel.addEventListener("click", (e) => {
      const t = e.target.closest("[data-val]");
      if (!t) return;
      const grp = t.parentElement.dataset.group;
      let v = t.dataset.val;
      if (v === "true") v = true;
      else if (v === "false") v = false;
      state[grp] = v;
      apply(); sync(); persist();
    });
    panel.addEventListener("input", (e) => {
      if (e.target.type === "range") {
        state[e.target.dataset.group] = parseFloat(e.target.value);
        apply(); persist();
      }
    });
  }

  // Edit-mode protocol
  window.addEventListener("message", (e) => {
    if (!e.data || typeof e.data !== "object") return;
    if (e.data.type === "__activate_edit_mode") {
      buildTweaks();
      document.getElementById("tweaks-panel")?.classList.add("open");
    }
    if (e.data.type === "__deactivate_edit_mode") {
      document.getElementById("tweaks-panel")?.classList.remove("open");
    }
  });
  window.parent.postMessage({ type: "__edit_mode_available" }, "*");

  // Smooth scroll for ToC
  document.querySelectorAll("[data-scroll]").forEach(a => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || !id.startsWith("#")) return;
      const t = document.querySelector(id);
      if (t) {
        e.preventDefault();
        window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
      }
    });
  });
})();
