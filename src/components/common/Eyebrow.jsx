import { TOKEN } from "../../constants/tokens";

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE — Eyebrow
// Label monospace em verde-folha com bolinha à esquerda.
// Aparece acima dos títulos de seção para contextualizar o bloco.
// ─────────────────────────────────────────────────────────────────────────────
export function Eyebrow({ children, light = false }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 10,
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase",
      color: light ? TOKEN.lime : TOKEN.leaf,
      marginBottom: 16,
    }}>
      <span style={{
        width: 7, height: 7,
        background: light ? TOKEN.lime : TOKEN.leaf,
        borderRadius: "50%", display: "inline-block", flexShrink: 0,
      }} />
      {children}
    </div>
  );
}
