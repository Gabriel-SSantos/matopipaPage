import { useState } from "react";
import { TOKEN } from "../../constants/tokens";
import { LogoIcon } from "../common/LogoIcon";

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE — Navbar
// Barra de navegação sticky com logo + links + botão CTA.
// Em telas < 880px colapsa para menu hambúrguer (estado controlado por useState).
// ─────────────────────────────────────────────────────────────────────────────
export function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#programa", label: "Programa" },
    { href: "#sobre",    label: "Sobre" },
    { href: "#clube",    label: "Clube" },
    { href: "#parcerias", label: "Parcerias" },
    { href: "#pilares",  label: "Pilares" },
    { href: "#participe", label: "Participe" },
  ];

  const linkStyle = {
    fontSize: "0.92rem", color: TOKEN.forest, fontWeight: 500,
    opacity: 0.8, transition: "opacity 0.2s ease", cursor: "pointer",
    textDecoration: "none",
  };

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(247,246,236,0.92)",
      backdropFilter: "blur(10px)",
      borderBottom: `1px solid ${TOKEN.line}`,
    }}>
      <div style={{
        width: "100%", maxWidth: 1180, margin: "0 auto", padding: "0 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        paddingBlock: 14,
      }}>
        {/* Logo / Brand */}
        <a href="#inicio" style={{
          display: "flex", alignItems: "center", gap: 10,
          fontFamily: "'Fraunces', Georgia, serif", fontWeight: 700, fontSize: "1.3rem", color: TOKEN.forest,
        }}>
          <LogoIcon />
          MATOPIPA
        </a>

        {/* Links desktop */}
        <nav style={{ display: "flex", alignItems: "center", gap: 30 }} className="hide-mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} style={linkStyle}>{l.label}</a>
          ))}
        </nav>

        {/* CTA + hambúrguer */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <a href="#participe" className="nav-cta-btn" style={{
            background: TOKEN.leaf, color: "#fff",
            padding: "10px 22px", borderRadius: 999, fontWeight: 600, fontSize: "0.9rem",
            display: "inline-flex", alignItems: "center", justifyContent: "center",
          }}>
            Fazer parte
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
            style={{
              display: "none",       // override via .menu-hamburger em @media (GlobalStyles)
              background: "none", border: `1px solid ${TOKEN.line}`,
              color: TOKEN.forest, borderRadius: 8, padding: "8px 10px", cursor: "pointer",
            }}
            className="menu-hamburger"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Menu mobile expansível */}
      {open && (
        <nav style={{
          display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 18,
          background: TOKEN.cream, padding: 24, borderBottom: `1px solid ${TOKEN.line}`,
        }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} style={linkStyle} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
