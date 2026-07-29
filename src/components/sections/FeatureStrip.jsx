import { TOKEN } from "../../constants/tokens";

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE — FeatureStrip
// Três cartões brancos (Produção / Indústria / Mercado) que sobrepõem
// a base do hero, indicando o fluxo de valor do MATOPIPA.
// ─────────────────────────────────────────────────────────────────────────────
export function FeatureStrip() {
  const features = [
    {
      title: "Produção",
      sub: "Apoio direto ao pequeno produtor",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width={34} height={34} style={{ color: TOKEN.leaf, flexShrink: 0 }}>
          <path d="M12 2C8 6 6 10 6 13a6 6 0 0012 0c0-3-2-7-6-11z" stroke="currentColor" strokeWidth={1.6} />
        </svg>
      ),
    },
    {
      title: "Indústria",
      sub: "A engrenagem que faltava",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width={34} height={34} style={{ color: TOKEN.leaf, flexShrink: 0 }}>
          <rect x={3} y={8} width={18} height={12} rx={2} stroke="currentColor" strokeWidth={1.6} />
          <path d="M8 8V6a4 4 0 018 0v2" stroke="currentColor" strokeWidth={1.6} />
        </svg>
      ),
    },
    {
      title: "Mercado",
      sub: "Colocação do produto com rentabilidade",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width={34} height={34} style={{ color: TOKEN.leaf, flexShrink: 0 }}>
          <circle cx={9} cy={20} r={1.4} fill="currentColor" />
          <circle cx={18} cy={20} r={1.4} fill="currentColor" />
          <path d="M3 4h2l2.4 12.2a2 2 0 002 1.8h8.2a2 2 0 002-1.6L21 9H6" stroke="currentColor" strokeWidth={1.6} />
        </svg>
      ),
    },
  ];

  return (
    <div style={{ position: "relative", zIndex: 2, marginTop: -58 }}>
      <div style={{
        width: "100%", maxWidth: 1180, margin: "0 auto", padding: "0 24px",
        display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 18,
      }}
        className="feature-grid"
      >
        {features.map((f) => (
          <div key={f.title} style={{
            background: TOKEN.white, borderRadius: 16, padding: "22px 24px",
            display: "flex", alignItems: "center", gap: 14,
            boxShadow: "0 18px 44px -22px rgba(47,74,44,0.35)",
          }}>
            {f.icon}
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.98rem", color: TOKEN.forest }}>{f.title}</div>
              <div style={{ fontSize: "0.83rem", color: TOKEN.sage, marginTop: 2 }}>{f.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
