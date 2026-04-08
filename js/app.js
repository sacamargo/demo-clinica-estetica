/**
 * =============================================================================
 * Lógica de la landing — Normalmente no hace falta tocar esto por cliente
 * =============================================================================
 */

const LANG_KEY = "clinic-landing-lang";
const SUPPORTED_LANGS = ["es", "en"];

function getStoredLang() {
  try {
    const s = localStorage.getItem(LANG_KEY);
    if (s && SUPPORTED_LANGS.includes(s)) return s;
  } catch (_) {}
  return "es";
}

function setStoredLang(lang) {
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch (_) {}
}

function applyTheme(theme) {
  const r = document.documentElement;
  const c = theme.colors;
  r.style.setProperty("--color-primary", c.primary);
  r.style.setProperty("--color-primary-dim", c.primaryDim);
  r.style.setProperty("--color-on-primary", c.onPrimary);
  r.style.setProperty("--color-background", c.background);
  r.style.setProperty("--color-on-surface", c.onSurface);
  r.style.setProperty("--color-on-surface-variant", c.onSurfaceVariant);
  r.style.setProperty("--color-surface-container-low", c.surfaceContainerLow);
  r.style.setProperty("--color-surface-container-highest", c.surfaceContainerHighest);
  r.style.setProperty("--color-outline-variant", c.outlineVariant);
}

/**
 * @param {string} phone Dígitos con código de país
 * @param {string} [message]
 */
function buildWhatsAppUrl(phone, message) {
  const digits = String(phone || "").replace(/\D/g, "");
  if (!digits) return "#";
  const q = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${digits}${q}`;
}

function getContent(lang) {
  return lang === "en" ? CONTENT_EN : CONTENT_ES;
}

function esc(s) {
  if (s == null) return "";
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// --- HEADER -----------------------------------------------------------------

function renderHeader(c, waUrl, lang) {
  const navItems = c.nav.items
    .map(
      (item) =>
        `<a class="nav-link text-xs uppercase tracking-widest text-[color:var(--color-on-surface)]/70 hover:text-[color:var(--color-primary)] transition-colors duration-300" href="${esc(item.href)}">${esc(item.label)}</a>`
    )
    .join("");

  const langButtons = SUPPORTED_LANGS.map(
    (code) =>
      `<button type="button" class="lang-btn px-2 py-1 text-[10px] uppercase tracking-widest rounded ${
        code === lang
          ? "bg-[color:var(--color-primary)]/15 text-[color:var(--color-primary)] font-bold"
          : "text-[color:var(--color-on-surface)]/60 hover:text-[color:var(--color-primary)]"
      }" data-lang="${code}">${code}</button>`
  ).join("");

  return `
    <div class="flex justify-between items-center px-6 md:px-12 py-5 md:py-6 w-full max-w-screen-2xl mx-auto gap-4">
      <a class="font-headline text-xl md:text-2xl font-light text-[color:var(--color-on-surface)] tracking-tighter shrink-0" href="#home">${esc(c.clinicName)}</a>
      <nav class="hidden md:flex items-center gap-8 lg:gap-10 flex-1 justify-center min-w-0" aria-label="Principal">${navItems}</nav>
      <div class="flex items-center gap-2 md:gap-3 shrink-0">
        <div class="flex items-center rounded border border-[color:var(--color-outline-variant)]/40 p-0.5" role="group" aria-label="${esc(c.langLabel)}">${langButtons}</div>
        <a class="btn-primary text-[color:var(--color-on-primary)] font-semibold px-4 py-2.5 md:px-6 md:py-3 rounded-lg text-xs md:text-sm tracking-wide shadow-sm hover:translate-y-[-1px] transition-all duration-300 active:scale-95 whitespace-nowrap" href="${esc(waUrl)}" target="_blank" rel="noopener noreferrer">${esc(c.nav.cta)}</a>
      </div>
    </div>`;
}

// --- HERO -------------------------------------------------------------------

function renderHero(c, waUrl) {
  const h = c.hero;
  const avatars = h.trustCard.avatars
    .map(
      (a, i) =>
        `<div class="w-10 h-10 rounded-full border-2 border-white bg-[color:var(--color-primary)]/20 flex items-center justify-center text-xs font-bold text-[color:var(--color-on-surface)]">${esc(a.initials)}</div>`
    )
    .join("");

  return `
    <section class="relative min-h-[90vh] md:min-h-screen flex items-center pt-28 pb-16 md:pt-24 overflow-hidden" id="home">
      <div class="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div class="lg:col-span-6 z-10 order-2 lg:order-1 text-center lg:text-left">
          <span class="inline-block text-[color:var(--color-primary)] font-label text-sm uppercase tracking-[0.2em] mb-4 md:mb-6">${esc(h.badge)}</span>
          <h1 class="font-headline text-4xl sm:text-5xl lg:text-7xl leading-[1.1] text-[color:var(--color-on-surface)] mb-6 md:mb-8 -tracking-[0.02em]">
            ${esc(h.headline)} <span class="italic text-[color:var(--color-primary-dim)]">${esc(h.headlineItalic)}</span> ${esc(h.headlineRest)}
          </h1>
          <p class="text-[color:var(--color-on-surface-variant)] text-base md:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 mb-8 md:mb-10 font-light leading-relaxed">${esc(h.subheadline)}</p>
          <div class="flex flex-col sm:flex-row items-center lg:items-start gap-6">
            <div class="space-y-3 w-full sm:w-auto">
              <a class="btn-primary text-[color:var(--color-on-primary)] px-8 py-4 md:py-5 rounded-lg font-bold inline-flex items-center justify-center gap-3 w-full sm:w-auto group transition-all duration-300" href="${esc(waUrl)}" target="_blank" rel="noopener noreferrer">
                ${esc(h.cta)}
                <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform text-xl" aria-hidden="true">trending_flat</span>
              </a>
              <p class="text-[color:var(--color-primary)] font-label text-[10px] md:text-xs uppercase tracking-widest opacity-80 pl-0 lg:pl-2 text-center lg:text-left">${esc(h.ctaNote)}</p>
            </div>
          </div>
        </div>
        <div class="lg:col-span-6 relative h-[420px] sm:h-[520px] lg:h-[800px] order-1 lg:order-2">
          <div class="absolute inset-0 bg-[color:var(--color-surface-container-low)] rounded-tl-[4rem] md:rounded-tl-[10rem] overflow-hidden -right-6 sm:-right-12 lg:right-0">
            <img alt="${esc(h.imageAlt)}" class="w-full h-full object-cover mix-blend-multiply opacity-90" src="${esc(h.image)}" loading="eager" />
          </div>
          <div class="absolute bottom-4 left-0 md:bottom-12 md:-left-6 md:left-0 p-6 md:p-8 bg-white/85 backdrop-blur-xl rounded-xl shadow-2xl max-w-xs border border-[color:var(--color-outline-variant)]/20 mx-auto md:mx-0 lg:-left-12 right-0 md:right-auto">
            <div class="flex items-center gap-4 mb-3">
              <div class="flex -space-x-2">${avatars}</div>
              <p class="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-on-surface-variant)]">${esc(h.trustCard.title)}</p>
            </div>
            <p class="text-sm italic text-[color:var(--color-on-surface)]">"${esc(h.trustCard.quote)}"</p>
          </div>
        </div>
      </div>
    </section>`;
}

// --- TRUST ------------------------------------------------------------------

function renderTrust(c) {
  const stats = c.trust.stats
    .map(
      (s) => `
    <div class="space-y-4">
      <h3 class="font-headline text-[color:var(--color-primary)] ${/\d/.test(s.value) ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl pt-2 leading-tight"}">${esc(s.value)}</h3>
      <p class="font-label text-[10px] md:text-xs uppercase tracking-[0.2em] text-[color:var(--color-on-surface-variant)] font-bold">${esc(s.label)}</p>
      <div class="h-px w-12 bg-[color:var(--color-outline-variant)]/30 mx-auto"></div>
    </div>`
    )
    .join("");

  return `
    <section class="py-16 md:py-24 bg-[color:var(--color-surface-container-low)]" aria-label="Métricas">
      <div class="container mx-auto px-6 md:px-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-center">${stats}</div>
      </div>
    </section>`;
}

// --- BEFORE / AFTER ---------------------------------------------------------

function renderBeforeAfter(c) {
  const b = c.beforeAfter;
  const cases = b.cases
    .map(
      (item) => `
    <div class="relative max-w-5xl mx-auto group mb-16 last:mb-0">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-1 bg-[color:var(--color-surface-container-highest)] overflow-hidden rounded-xl shadow-xl">
        <div class="relative h-[380px] md:h-[520px] lg:h-[600px]">
          <img alt="" class="w-full h-full object-cover" src="${esc(item.before)}" loading="lazy" />
          <div class="absolute bottom-4 left-4 md:bottom-6 md:left-6 px-3 py-2 md:px-4 bg-black/40 backdrop-blur-md text-white font-label text-[10px] md:text-xs uppercase tracking-widest rounded">${esc(b.beforeLabel)}</div>
        </div>
        <div class="relative h-[380px] md:h-[520px] lg:h-[600px]">
          <img alt="" class="w-full h-full object-cover" src="${esc(item.after)}" loading="lazy" />
          <div class="absolute bottom-4 right-4 md:bottom-6 md:right-6 px-3 py-2 md:px-4 bg-[color:var(--color-primary)]/80 backdrop-blur-md text-white font-label text-[10px] md:text-xs uppercase tracking-widest rounded">${esc(b.afterLabel)}</div>
        </div>
      </div>
      <div class="absolute inset-y-0 left-1/2 -ml-px w-0.5 bg-[color:var(--color-primary)]/50 hidden md:block pointer-events-none" aria-hidden="true">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center border border-[color:var(--color-primary)]/20">
          <span class="material-symbols-outlined text-[color:var(--color-primary)] text-lg md:text-xl">unfold_more</span>
        </div>
      </div>
      <p class="text-center text-sm text-[color:var(--color-on-surface-variant)] mt-4 italic font-headline">${esc(item.caption)}</p>
    </div>`
    )
    .join("");

  return `
    <section class="py-20 md:py-32 bg-[color:var(--color-background)] overflow-hidden" id="${esc(b.id)}">
      <div class="container mx-auto px-6 md:px-12">
        <div class="mb-12 md:mb-20 text-center max-w-3xl mx-auto">
          <h2 class="font-headline text-3xl md:text-4xl lg:text-5xl text-[color:var(--color-on-surface)] mb-4 md:mb-6">${esc(b.title)}</h2>
          <p class="text-[color:var(--color-on-surface-variant)] font-light text-base md:text-lg">${esc(b.subtitle)}</p>
        </div>
        ${cases}
      </div>
    </section>`;
}

// --- PROCEDURES -------------------------------------------------------------

function renderProcedures(c) {
  const p = c.procedures;
  const cards = p.items
    .map(
      (item) => `
    <div class="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-[color:var(--color-outline-variant)]/10 hover:border-[color:var(--color-primary)]/30 transition-all duration-500">
      <span class="material-symbols-outlined text-[color:var(--color-primary)] text-3xl mb-4 md:mb-6 block" aria-hidden="true">${esc(item.icon)}</span>
      <h4 class="font-headline text-lg md:text-xl mb-3">${esc(item.title)}</h4>
      <p class="text-[color:var(--color-on-surface-variant)] text-sm font-light leading-relaxed">${esc(item.text)}</p>
    </div>`
    )
    .join("");

  return `
    <section class="py-20 md:py-28 bg-[color:var(--color-background)] border-t border-[color:var(--color-outline-variant)]/15" id="${esc(p.id)}">
      <div class="container mx-auto px-6 md:px-12">
        <div class="max-w-3xl mb-12 md:mb-16">
          <h2 class="font-headline text-3xl md:text-4xl text-[color:var(--color-on-surface)] mb-4">${esc(p.title)}</h2>
          <p class="text-[color:var(--color-on-surface-variant)] text-base md:text-lg font-light">${esc(p.subtitle)}</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">${cards}</div>
      </div>
    </section>`;
}

// --- INTERNATIONAL ----------------------------------------------------------

function renderInternational(c) {
  const x = c.international;
  const cards = x.cards
    .map(
      (item) => `
    <div class="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-[color:var(--color-outline-variant)]/5 hover:border-[color:var(--color-primary)]/20 transition-all duration-500">
      <span class="material-symbols-outlined text-[color:var(--color-primary)] text-3xl mb-4 md:mb-6 block">${esc(item.icon)}</span>
      <h4 class="font-headline text-lg md:text-xl mb-3">${esc(item.title)}</h4>
      <p class="text-[color:var(--color-on-surface-variant)] text-sm font-light leading-relaxed">${esc(item.text)}</p>
    </div>`
    )
    .join("");

  return `
    <section class="py-20 md:py-32 bg-[color:var(--color-surface-container-low)]" id="${esc(x.id)}">
      <div class="container mx-auto px-6 md:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div class="lg:col-span-5 flex flex-col justify-center">
            <span class="text-[color:var(--color-primary)] font-label text-xs uppercase tracking-[0.3em] mb-4">${esc(x.eyebrow)}</span>
            <h2 class="font-headline text-3xl md:text-4xl lg:text-6xl text-[color:var(--color-on-surface)] mb-6 md:mb-8 leading-tight">${esc(x.title)}</h2>
            <p class="text-[color:var(--color-on-surface-variant)] text-base md:text-lg font-light leading-relaxed">${esc(x.body)}</p>
          </div>
          <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">${cards}</div>
        </div>
      </div>
    </section>`;
}

// --- ABOUT + LOCATION (compact) --------------------------------------------

function renderAboutLocation(c) {
  const a = c.about;
  const l = c.location;
  return `
    <section class="py-16 md:py-20 bg-[color:var(--color-background)]" id="${esc(a.id)}">
      <div class="container mx-auto px-6 md:px-12 max-w-4xl text-center md:text-left">
        <h2 class="font-headline text-2xl md:text-3xl text-[color:var(--color-on-surface)] mb-4">${esc(a.title)}</h2>
        <p class="text-[color:var(--color-on-surface-variant)] font-light leading-relaxed mb-12">${esc(a.body)}</p>
        <div id="${esc(l.id)}" class="rounded-xl border border-[color:var(--color-outline-variant)]/20 p-8 bg-[color:var(--color-surface-container-low)]">
          <h3 class="font-headline text-xl mb-2">${esc(l.title)}</h3>
          <p class="text-[color:var(--color-on-surface-variant)] text-sm mb-4">${esc(l.body)}</p>
          <p class="text-sm text-[color:var(--color-on-surface)] mb-4">${esc(c.contact.address)}</p>
          <a class="inline-flex text-[color:var(--color-primary)] font-semibold text-sm uppercase tracking-widest hover:underline" href="${esc(c.contact.mapsUrl)}" target="_blank" rel="noopener noreferrer">${esc(l.ctaMaps)}</a>
        </div>
      </div>
    </section>`;
}

// --- TESTIMONIALS -----------------------------------------------------------

function renderTestimonials(c) {
  const t = c.testimonials;
  const items = t.items
    .map(
      (item, idx) => `
    <div class="bg-[color:var(--color-surface-container-low)] p-8 md:p-10 rounded-2xl relative overflow-hidden group ${idx === 1 ? "border-t-2 border-[color:var(--color-primary)]/20" : ""}">
      <div class="absolute -top-4 -right-4 text-[100px] md:text-[120px] text-[color:var(--color-primary)]/5 font-headline pointer-events-none" aria-hidden="true">“</div>
      <div class="flex items-center gap-4 mb-6 md:mb-8">
        <div class="w-12 h-12 rounded-full bg-[color:var(--color-outline-variant)]/20 overflow-hidden shrink-0">
          <img alt="" class="w-full h-full object-cover" src="${esc(item.photo)}" loading="lazy" />
        </div>
        <div>
          <h5 class="font-bold text-[color:var(--color-on-surface)]">${esc(item.name)}</h5>
          <p class="text-[color:var(--color-primary)] text-xs uppercase tracking-widest font-bold">${esc(item.location)}</p>
        </div>
      </div>
      <p class="text-[color:var(--color-on-surface-variant)] leading-relaxed font-light italic">"${esc(item.quote)}"</p>
    </div>`
    )
    .join("");

  return `
    <section class="py-20 md:py-32 bg-[color:var(--color-background)] overflow-hidden" id="testimonials">
      <div class="container mx-auto px-6 md:px-12">
        <h2 class="font-headline text-3xl md:text-4xl text-center mb-12 md:mb-24">${esc(t.title)}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">${items}</div>
      </div>
    </section>`;
}

// --- FINAL CTA --------------------------------------------------------------

function renderFinalCta(c, waUrl) {
  const f = c.finalCta;
  return `
    <section class="py-20 md:py-32 relative overflow-hidden">
      <div class="absolute inset-0 bg-[color:var(--color-surface-container-highest)] opacity-30" aria-hidden="true"></div>
      <div class="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <h2 class="font-headline text-4xl md:text-5xl lg:text-7xl mb-8 md:mb-12 text-[color:var(--color-on-surface)]">${esc(f.title)}</h2>
        <div class="max-w-2xl mx-auto space-y-6 md:space-y-8">
          <p class="text-[color:var(--color-on-surface-variant)] text-lg md:text-xl font-light">${esc(f.body)}</p>
          <div class="flex flex-col items-center gap-4 md:gap-6">
            <a class="btn-primary text-[color:var(--color-on-primary)] px-10 md:px-12 py-5 md:py-6 rounded-lg text-base md:text-lg font-bold shadow-2xl hover:scale-[1.02] transition-transform inline-flex items-center justify-center" href="${esc(waUrl)}" target="_blank" rel="noopener noreferrer">${esc(f.cta)}</a>
            <p class="text-[color:var(--color-primary)] text-xs md:text-sm uppercase tracking-widest font-bold">${esc(f.note)}</p>
          </div>
        </div>
      </div>
    </section>`;
}

// --- FOOTER -----------------------------------------------------------------

function renderFooter(c) {
  const f = c.footer;
  const legal = f.legal
    .map((x) => `<a class="text-[color:var(--color-on-surface-variant)] hover:text-[color:var(--color-primary)] transition-all text-sm font-light" href="${esc(x.href)}">${esc(x.label)}</a>`)
    .join("");
  const queries = f.queries
    .map((x) => `<a class="text-[color:var(--color-on-surface-variant)] hover:text-[color:var(--color-primary)] transition-all text-sm font-light" href="${esc(x.href)}">${esc(x.label)}</a>`)
    .join("");

  return `
    <footer class="bg-[color:var(--color-surface-container-low)] py-16 md:py-20 px-6 md:px-12">
      <div class="max-w-screen-2xl mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-12 mb-12 md:mb-16 text-center md:text-left">
          <div>
            <a class="font-headline text-2xl md:text-3xl text-[color:var(--color-on-surface)]" href="#home">${esc(c.clinicName)}</a>
            <p class="text-[color:var(--color-on-surface-variant)] text-sm mt-3 md:mt-4 tracking-wide font-light">${esc(c.clinicTagline)}</p>
          </div>
          <div class="flex flex-col sm:flex-row gap-10 md:gap-12">
            <div class="flex flex-col gap-3">
              <p class="font-bold text-xs uppercase tracking-widest mb-1 text-[color:var(--color-on-surface)]">${esc(f.legalTitle)}</p>
              ${legal}
            </div>
            <div class="flex flex-col gap-3">
              <p class="font-bold text-xs uppercase tracking-widest mb-1 text-[color:var(--color-on-surface)]">${esc(f.queriesTitle)}</p>
              ${queries}
            </div>
          </div>
        </div>
        <div class="h-px w-full bg-[color:var(--color-outline-variant)]/20 mb-8"></div>
        <div class="flex flex-col md:flex-row justify-between items-center text-[color:var(--color-on-surface)]/60 text-[10px] md:text-xs tracking-widest uppercase font-light gap-4">
          <p>${esc(f.copyright)}</p>
          <div class="flex gap-4 md:gap-6">
            <a href="${esc(c.social.instagram)}" class="hover:text-[color:var(--color-primary)] transition-colors" target="_blank" rel="noopener noreferrer">${esc(f.socialLabels.instagram)}</a>
            <a href="${esc(c.social.youtube)}" class="hover:text-[color:var(--color-primary)] transition-colors" target="_blank" rel="noopener noreferrer">${esc(f.socialLabels.youtube)}</a>
            <a href="${esc(c.social.linkedin)}" class="hover:text-[color:var(--color-primary)] transition-colors" target="_blank" rel="noopener noreferrer">${esc(f.socialLabels.linkedin)}</a>
          </div>
        </div>
      </div>
    </footer>`;
}

function renderFab(waUrl) {
  return `
    <a class="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[60] bg-[#25D366] text-white p-3.5 md:p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center" href="${esc(waUrl)}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
      <svg class="w-7 h-7 md:w-8 md:h-8 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
    </a>`;
}

// --- BOOT -------------------------------------------------------------------

function mount(lang) {
  const c = getContent(lang);
  const waUrl = buildWhatsAppUrl(c.contact.whatsapp, c.contact.whatsappMessage);

  document.documentElement.lang = c.meta.lang;
  document.title = c.meta.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && c.meta.description) {
    metaDesc.setAttribute("content", c.meta.description);
  }

  applyTheme(THEME);

  const root = document.getElementById("landing-root");
  if (!root) return;

  root.innerHTML = `
    <header class="fixed top-0 w-full z-50 bg-[color:var(--color-background)]/85 backdrop-blur-md border-b border-[color:var(--color-outline-variant)]/10" id="site-header">${renderHeader(c, waUrl, lang)}</header>
    <main>
      ${renderHero(c, waUrl)}
      ${renderTrust(c)}
      ${renderBeforeAfter(c)}
      ${renderProcedures(c)}
      ${renderInternational(c)}
      ${renderAboutLocation(c)}
      ${renderTestimonials(c)}
      ${renderFinalCta(c, waUrl)}
      ${renderFooter(c)}
    </main>
    ${renderFab(waUrl)}
  `;

  root.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = btn.getAttribute("data-lang");
      if (!next || next === lang) return;
      setStoredLang(next);
      mount(next);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  mount(getStoredLang());
});
