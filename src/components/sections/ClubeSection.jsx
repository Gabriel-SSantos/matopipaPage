import { TOKEN } from "../../constants/tokens";
import { PHOTO } from "../../constants/photos";
import { Eyebrow } from "../common/Eyebrow";
import { Container } from "../common/Container";
import { RevealSection } from "../common/RevealSection";

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE — ClubeSection
// Clube de Vantagens MATOPIPA: quatro cartões com foto + título + descrição.
// ─────────────────────────────────────────────────────────────────────────────
export function ClubeSection() {
  const cards = [
    {
      img: PHOTO.clube1, alt: "Produtor sorrindo com cesto de colheita",
      title: "Cartão fidelidade",
      desc: "Preços diferenciados para as famílias cadastradas no projeto.",
    },
    {
      img: PHOTO.clube2, alt: "Campo de cultivo com fileiras verdes",
      title: "Acesso facilitado",
      desc: "Mais facilidade para obter produtos domésticos e de uso agrícola.",
    },
    {
      img: PHOTO.clube3, alt: "Vista aérea de plantação verde",
      title: "Fundo de reserva",
      desc: "Uma reserva coletiva pensada para os momentos de imprevisto.",
    },
    {
      img: PHOTO.clube4, alt: "Produtor cuidando da colheita no campo",
      title: "Seguro agrícola",
      desc: "Proteção agrícola e prestamista para o produtor e sua família.",
    },
  ];

  return (
    <RevealSection id="clube">
      <Container>
        <Eyebrow>Clube de Vantagens MATOPIPA</Eyebrow>
        <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 700, color: TOKEN.forest, marginBottom: 18 }}>
          Poder de compra real para quem vive do campo
        </h2>
        <p style={{ fontSize: "1.14rem", color: TOKEN.sage, maxWidth: 600, marginBottom: 40 }}>
          Aqui conectamos bens de consumo às famílias do campo de forma facilitada.
          O Clube une a produção agrícola ao consumo das famílias, transformando o esforço
          do campo em poder de compra real.
        </p>

        <div className="grid-4">
          {cards.map((c) => (
            <div key={c.title} style={{
              background: TOKEN.white, borderRadius: 18, overflow: "hidden",
              boxShadow: "0 18px 44px -22px rgba(47,74,44,0.35)",
              transition: "transform 0.25s ease",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              {/* Foto do cartão */}
              <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                <img src={c.img} alt={c.alt} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: "20px 20px 22px" }}>
                <span style={{
                  display: "inline-block",
                  fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem",
                  letterSpacing: "0.06em", textTransform: "uppercase",
                  background: TOKEN.lime, color: TOKEN.forest,
                  borderRadius: 6, padding: "4px 10px", marginBottom: 10,
                }}>
                  Benefício
                </span>
                <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 700, fontSize: "1.05rem", marginBottom: 6 }}>
                  {c.title}
                </h3>
                <p style={{ fontSize: "0.92rem", margin: 0, color: TOKEN.sage }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </RevealSection>
  );
}
