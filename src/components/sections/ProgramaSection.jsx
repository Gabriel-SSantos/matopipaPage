import { TOKEN } from "../../constants/tokens";
import { PHOTO } from "../../constants/photos";
import { Eyebrow } from "../common/Eyebrow";
import { Container } from "../common/Container";
import { RevealSection } from "../common/RevealSection";
import { CheckItem } from "../common/CheckItem";
import { Btn } from "../common/Btn";

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE — ProgramaSection
// Apresenta o kit de adesão R$ 1.680 com lista de itens incluídos e
// uma coluna lateral de vantagens para quem aderir agora.
// ─────────────────────────────────────────────────────────────────────────────
export function ProgramaSection() {
  const kitItens = [
    "14 camisetas com design institucional do Projeto MATOPIPA",
    <>Livro <em>A Bíblia e o Cooperativismo</em></>,
    "Carteirinha de membro do projeto",
    "Acesso ao App/Portal de Treinamento — técnicas de cultivo e gestão",
    "Certificado de Sócio Fundador da implantação do projeto",
  ];

  const vantagens = [
    "Pontos de benefício empreendedor",
    "Rentabilidade indireta",
    "Aumento na geração de renda",
    "Apoio direto à sustentabilidade e à inclusão produtiva",
  ];

  return (
    <RevealSection id="programa" tint>
      <Container>
        <Eyebrow>Programa de Empreendedores MATOPIPA</Eyebrow>
        <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 700, color: TOKEN.forest, marginBottom: 18 }}>
          Faça parte do projeto com o kit de adesão ao negócio
        </h2>
        <p style={{ fontSize: "1.14rem", color: TOKEN.sage, maxWidth: 600, marginBottom: 44 }}>
          Um ponto de entrada simples e direto: você adere ao Programa de Empreendedores
          MATOPIPA (PEM) e recebe tudo o que precisa para começar a caminhar com o projeto.
        </p>

        <div className="kit-wrap">
          {/* Ticket do kit */}
          <div style={{
            background: TOKEN.white, borderRadius: 18, padding: 34,
            boxShadow: "0 18px 44px -22px rgba(47,74,44,0.35)",
          }}>
            <div style={{
              display: "flex", alignItems: "baseline", justifyContent: "space-between",
              flexWrap: "wrap", gap: 10,
              borderBottom: `1px dashed ${TOKEN.line}`, paddingBottom: 22, marginBottom: 22,
            }}>
              <div>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "clamp(1.9rem, 4vw, 2.4rem)", color: TOKEN.leaf, fontWeight: 600,
                }}>
                  R$ 1.680,00
                </div>
                <div style={{ fontSize: "0.8rem", color: TOKEN.sage, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Kit de adesão · pagamento único
                </div>
              </div>
            </div>
            <ul style={{ display: "flex", flexDirection: "column", gap: 15 }}>
              {kitItens.map((item, i) => (
                <CheckItem key={i}>{item}</CheckItem>
              ))}
            </ul>
            {/* Carimbo de Sócio Fundador */}
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem",
              letterSpacing: "0.1em", textTransform: "uppercase",
              border: `1px solid ${TOKEN.clay}`, color: TOKEN.clay,
              borderRadius: 6, padding: "6px 12px",
              transform: "rotate(-2deg)", marginTop: 24, display: "inline-block",
            }}>
              Sócio Fundador
            </span>
          </div>

          {/* Coluna lateral: foto + vantagens */}
          <div>
            <div style={{
              borderRadius: 18, overflow: "hidden", aspectRatio: "16/11",
              marginBottom: 18, boxShadow: "0 18px 44px -22px rgba(47,74,44,0.35)",
            }}>
              <img
                src={PHOTO.kitSide}
                alt="Cesto com colheita fresca de frutas e vegetais"
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: "0.76rem",
              letterSpacing: "0.1em", textTransform: "uppercase", color: TOKEN.leaf, marginBottom: 14,
            }}>
              Vantagens de quem entra agora
            </div>
            {vantagens.map((v) => (
              <div key={v} style={{
                background: TOKEN.lime, borderRadius: 14, padding: "18px 20px", marginBottom: 12,
              }}>
                <p style={{ margin: 0, color: TOKEN.forest, fontSize: "0.93rem", fontWeight: 500 }}>{v}</p>
              </div>
            ))}
            <Btn href="#participe" full>Quero meu kit</Btn>
          </div>
        </div>
      </Container>
    </RevealSection>
  );
}
