import { TOKEN } from "../../constants/tokens";
import { Container } from "../common/Container";
import { RevealSection } from "../common/RevealSection";

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE — StatsSection
// Quatro números em destaque para dar dimensão rápida ao projeto.
// Alterna fundo lime / branco para criar ritmo visual.
// ─────────────────────────────────────────────────────────────────────────────
export function StatsSection() {
  const stats = [
    { num: "R$ 1.680", label: "Kit de adesão ao Programa", alt: true },
    { num: "14",       label: "Camisetas institucionais no kit", alt: false },
    { num: "04",       label: "Pilares estratégicos do projeto", alt: false },
    { num: "05",       label: "Valores que guiam o MATOPIPA", alt: true },
  ];

  return (
    <RevealSection style={{ paddingTop: 148 }}>
      <Container>
        <div className="grid-4">
          {stats.map((s) => (
            <div key={s.label} style={{
              background: s.alt ? TOKEN.lime : TOKEN.white,
              borderRadius: 16, padding: "28px 22px",
              boxShadow: "0 18px 44px -22px rgba(47,74,44,0.35)",
            }}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "clamp(1.7rem, 3vw, 2.2rem)", fontWeight: 600, color: TOKEN.forest,
              }}>
                {s.num}
              </div>
              <div style={{ fontSize: "0.86rem", color: TOKEN.sage, marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </RevealSection>
  );
}
