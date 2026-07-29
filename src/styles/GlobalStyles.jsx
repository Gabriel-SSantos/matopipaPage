import { TOKEN } from "../constants/tokens";

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE — GlobalStyles
// CSS global injetado via <style> (sem build). Fontes, reset, responsividade
// de grade, animação de scroll reveal e utilitários usados pelo site inteiro.
// ─────────────────────────────────────────────────────────────────────────────
export function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,500&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; }
      @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
      body {
        background: ${TOKEN.cream};
        color: ${TOKEN.forest};
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 16px;
        line-height: 1.65;
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
      }
      img, svg { display: block; max-width: 100%; }
      a { color: inherit; text-decoration: none; }
      ul { list-style: none; }

      /* ─ Responsividade de grade ─ */
      .feature-grid { grid-template-columns: repeat(3, minmax(0,1fr)) !important; }
      .grid-2  { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 56px; align-items: center; }
      .grid-4  { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 20px; }
      .kit-wrap { display: grid; grid-template-columns: minmax(0,1.05fr) minmax(0,0.95fr); gap: 36px; align-items: start; }

      @media (max-width: 880px) {
        .grid-2  { grid-template-columns: 1fr !important; gap: 36px !important; }
        .grid-4  { grid-template-columns: 1fr 1fr !important; }
        .kit-wrap { grid-template-columns: 1fr !important; }
        .hide-mobile { display: none !important; }
        .feature-grid { grid-template-columns: 1fr !important; }
        .partner-photo { aspect-ratio: auto !important; max-height: 300px; }
        .menu-hamburger { display: inline-flex !important; }
      }
      @media (max-width: 560px) {
        .grid-4  { grid-template-columns: 1fr !important; }
        .joinform { grid-template-columns: 1fr !important; }
      }
      @media (max-width: 480px) {
        .nav-cta-btn { display: none !important; }
      }

      /* ─ Scroll reveal ─ */
      .reveal-section { opacity: 0; transform: translateY(18px); transition: opacity 0.7s ease, transform 0.7s ease; }
      .reveal-section.visible { opacity: 1; transform: translateY(0); }
      @media (prefers-reduced-motion: reduce) {
        .reveal-section { opacity: 1 !important; transform: none !important; transition: none !important; }
      }

      /* ─ Pilar ─ */
      .pilar { display: grid; grid-template-columns: 60px 1fr; gap: 20px; padding: 26px 0; border-bottom: 1px solid ${TOKEN.line}; }
      .pilar:last-child { border-bottom: none; }

      /* ─ Join form grid ─ */
      .joinform { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
      .joinform .full { grid-column: 1 / -1; }

      /* ─ Badge da engrenagem ─ */
      @keyframes matopipaSpin { to { transform: rotate(360deg); } }
      .matopipa-gear-spin {
        transform-origin: 60px 60px;
        animation: matopipaSpin 40s linear infinite;
      }
      @media (prefers-reduced-motion: reduce) {
        .matopipa-gear-spin { animation: none; }
      }
    `}</style>
  );
}
