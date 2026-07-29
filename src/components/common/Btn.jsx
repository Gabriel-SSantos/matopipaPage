import { TOKEN } from "../../constants/tokens";

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE — Btn
// Botão de ação com variantes: primary | ghost | light | ghost-white.
// "full" expande para 100% da largura do container.
// ─────────────────────────────────────────────────────────────────────────────
export function Btn({ children, variant = "primary", full = false, onClick, type = "button", href }) {
  const base = {
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
    padding: "14px 26px", borderRadius: 999, fontWeight: 600, fontSize: "0.95rem",
    cursor: "pointer", border: "1px solid transparent", textAlign: "center",
    maxWidth: "100%", width: full ? "100%" : undefined, transition: "all 0.25s ease",
    fontFamily: "'Inter', system-ui, sans-serif",
    textDecoration: "none",
  };
  const styles = {
    primary: { background: TOKEN.leaf, color: "#fff" },
    ghost:   { borderColor: TOKEN.forest, color: TOKEN.forest, background: "transparent" },
    light:   { background: "#fff", color: TOKEN.forest },
    "ghost-white": { borderColor: "#fff", color: "#fff", background: "transparent" },
  };

  const merged = { ...base, ...(styles[variant] || styles.primary) };

  if (href) {
    return <a href={href} style={merged}>{children}</a>;
  }
  return (
    <button type={type} onClick={onClick} style={merged}>
      {children}
    </button>
  );
}
