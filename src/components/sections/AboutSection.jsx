import { TOKEN } from "../../constants/tokens";
import { PHOTO } from "../../constants/photos";
import { Eyebrow } from "../common/Eyebrow";
import { Container } from "../common/Container";
import { RevealSection } from "../common/RevealSection";

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE — AboutSection
// Seção "Sobre nós": missão do MATOPIPA, citação destacada e valores do projeto.
// Layout de duas colunas: texto à esquerda, foto à direita.
// ─────────────────────────────────────────────────────────────────────────────
export function AboutSection() {
  const valores = ["Ética", "Respeito", "Transparência", "Inovação", "Qualidade"];

  return (
    <RevealSection id="sobre">
      <Container>
        <div className="grid-2">
          {/* Coluna de texto */}
          <div>
            <Eyebrow>Sobre nós</Eyebrow>
            <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 700, color: TOKEN.forest, marginBottom: 18 }}>
              Um modelo que une fé, propósito e empreendedorismo
            </h2>
            <p style={{ color: TOKEN.sage, marginBottom: 16 }}>
              Criamos um modelo inovador de geração de receita que une fé, propósito e
              empreendedorismo: o Programa de Empreendedores MATOPIPA (PEM).
            </p>
            {/* Citação principal do projeto */}
            <blockquote style={{
              fontFamily: "'Fraunces', Georgia, serif", fontStyle: "italic", fontWeight: 500,
              fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)", color: TOKEN.forest,
              borderLeft: `3px solid ${TOKEN.leaf}`, paddingLeft: 22, margin: "28px 0",
              lineHeight: 1.45,
            }}>
              "O problema não é a falta de produção. É a falta de uma engrenagem industrial
              e logística eficiente. Nós somos essa engrenagem."
            </blockquote>
            <p style={{ color: TOKEN.sage }}>
              Oportunidades como essa são raras. O mercado existe, e esta proposta é
              acessível a qualquer pessoa disposta a trabalhar, se dedicar e seguir em
              frente. É assim que se alcançam os resultados.
            </p>
            {/* Chips de valores */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 24 }}>
              {valores.map((v) => (
                <span key={v} style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: "0.76rem",
                  letterSpacing: "0.04em", background: TOKEN.white,
                  border: `1px solid ${TOKEN.line}`, borderRadius: 999,
                  padding: "8px 16px", color: TOKEN.forest,
                }}>
                  {v}
                </span>
              ))}
            </div>
          </div>

          {/* Foto do produtor */}
          <div style={{
            borderRadius: 18, overflow: "hidden", aspectRatio: "4/5",
            boxShadow: "0 18px 44px -22px rgba(47,74,44,0.35)",
          }}>
            <img
              src={PHOTO.about}
              alt="Produtor colhendo hortaliças frescas em campo verde"
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </Container>
    </RevealSection>
  );
}
