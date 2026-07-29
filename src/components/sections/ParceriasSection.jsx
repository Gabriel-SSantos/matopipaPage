import { TOKEN } from "../../constants/tokens";
import { PHOTO } from "../../constants/photos";
import { Eyebrow } from "../common/Eyebrow";
import { Container } from "../common/Container";
import { RevealSection } from "../common/RevealSection";
import { CheckItem } from "../common/CheckItem";
import { Btn } from "../common/Btn";

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE — ParceriasSection
// Modelo de parceria varejista: foto de handshake + listas de como funciona
// e benefícios para o parceiro. Layout: foto (esquerda) / texto (direita).
// ─────────────────────────────────────────────────────────────────────────────
export function ParceriasSection() {
  const comoFunciona = [
    "Redução dos custos de cobrança e do risco de crédito individual",
    "Borderô de pagamento único da agroindústria",
  ];

  const beneficios = [
    "Aumento de vendas",
    "Inadimplência zero",
    "Selo ESG",
    "Marketing direcionado e gratuito",
    "Eficiência logística",
  ];

  const colLabel = (text) => (
    <div style={{
      fontFamily: "'JetBrains Mono', monospace", fontSize: "0.76rem",
      letterSpacing: "0.1em", textTransform: "uppercase", color: TOKEN.leaf, marginBottom: 14,
    }}>
      {text}
    </div>
  );

  return (
    <RevealSection id="parcerias" tint>
      <Container>
        <div className="grid-2">
          {/* Foto de parceria */}
          <div className="partner-photo" style={{
            borderRadius: 18, overflow: "hidden", aspectRatio: "4/5",
            boxShadow: "0 18px 44px -22px rgba(47,74,44,0.35)",
          }}>
            <img
              src={PHOTO.partner}
              alt="Aperto de mãos selando uma parceria"
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Texto e listas */}
          <div>
            <Eyebrow>Parcerias</Eyebrow>
            <span style={{
              display: "inline-block",
              fontFamily: "'JetBrains Mono', monospace", fontSize: "0.76rem",
              letterSpacing: "0.05em", color: TOKEN.forest,
              background: TOKEN.lime, borderRadius: 999, padding: "6px 16px", marginBottom: 16,
            }}>
              Modelo de parceria · Varejista de móveis
            </span>
            <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 700, color: TOKEN.forest, marginBottom: 18 }}>
              Conectamos bens de consumo às famílias do campo
            </h2>
            <p style={{ fontSize: "1.14rem", color: TOKEN.sage, maxWidth: 600, marginBottom: 24 }}>
              O MATOPIPA atua como agente de compensação financeira entre a agroindústria e
              o parceiro, reduzindo custo de cobrança e risco de crédito individual.
            </p>

            {colLabel("Como funciona")}
            <ul style={{ display: "flex", flexDirection: "column", gap: 13, marginBottom: 24 }}>
              {comoFunciona.map((i) => <CheckItem key={i}>{i}</CheckItem>)}
            </ul>

            {colLabel("Benefícios para o parceiro")}
            <ul style={{ display: "flex", flexDirection: "column", gap: 13 }}>
              {beneficios.map((i) => <CheckItem key={i}>{i}</CheckItem>)}
            </ul>

            <div style={{ marginTop: 28 }}>
              <Btn href="#participe" variant="ghost">Seja um parceiro</Btn>
            </div>
          </div>
        </div>
      </Container>
    </RevealSection>
  );
}
