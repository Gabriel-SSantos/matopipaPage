import { TOKEN } from "../../constants/tokens";

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE — CheckItem
// Item de lista com ícone de check verde para listas de benefícios.
// ─────────────────────────────────────────────────────────────────────────────
export function CheckItem({ children }) {
  return (
    <li style={{ display: "flex", gap: 10, alignItems: "flex-start", color: TOKEN.forest, fontSize: "0.95rem" }}>
      <svg viewBox="0 0 20 20" fill="none" width={17} height={17} style={{ flexShrink: 0, marginTop: 3, color: TOKEN.leaf }}>
        <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {children}
    </li>
  );
}
