import { TOKEN } from "../../constants/tokens";
import { PHOTO } from "../../constants/photos";
import { Eyebrow } from "../common/Eyebrow";
import { Btn } from "../common/Btn";
import { Container } from "../common/Container";
import { GearBadge } from "../common/GearBadge";
import { FeatureStrip } from "./FeatureStrip";

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE — HeroSection
// Banner principal com foto de campo agrícola ao fundo, overlay gradiente,
// headline principal, subtexto, botões CTA e FeatureStrip sobreposto.
// ─────────────────────────────────────────────────────────────────────────────
export function HeroSection() {
  return (
    <section id="inicio" style={{ paddingTop: 56, paddingBottom: 0, background: TOKEN.cream }}>
      {/* Foto de fundo com overlay */}
      <div style={{ position: "relative", minHeight: 560, display: "flex", alignItems: "center" }}>
        <img
          src={PHOTO.hero}
          alt="Campo agrícola visto do alto, dividido em pequenas glebas verdes"
          loading="eager"
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", zIndex: 0, borderRadius: "0 0 40px 40px",
          }}
        />
        {/* Gradiente da esquerda para a direita */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1, borderRadius: "0 0 40px 40px",
          background: "linear-gradient(100deg, rgba(20,32,18,0.82) 0%, rgba(20,32,18,0.55) 38%, rgba(20,32,18,0.12) 68%, rgba(20,32,18,0.02) 100%)",
        }} />

        {/* Conteúdo textual sobreposto */}
        <div style={{ position: "relative", zIndex: 2, padding: "80px 0 120px", width: "100%" }}>
          <Container style={{ maxWidth: 760 }}>
            <Eyebrow light>Cooperativismo · Fé · Empreendedorismo</Eyebrow>
            <h1 style={{
              fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600,
              fontSize: "clamp(2.3rem, 5vw, 4rem)", lineHeight: 1.08,
              color: "#fff", marginBottom: 20,
            }}>
              O campo já produz.{" "}
              <br />
              Faltava a{" "}
              <em style={{ fontStyle: "italic", fontWeight: 500, color: TOKEN.lime }}>engrenagem</em>.
            </h1>
            <p style={{ fontSize: "1.14rem", color: "rgba(255,255,255,0.86)", maxWidth: 600 }}>
              MATOPIPA é a plataforma de inclusão produtiva conduzida pelo cooperativismo.
              Apoiamos o pequeno produtor desde a produção até a colocação do produto no
              mercado — para gerar mais resultado e mais rentabilidade para quem planta.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 32 }}>
              <Btn href="#programa" variant="light">Conhecer o Programa de Empreendedores</Btn>
              <Btn href="#participe" variant="ghost-white">Quero fazer parte</Btn>
            </div>
          </Container>
        </div>

        {/* Badge circular animado (visível somente em desktop) */}
        <div className="hide-mobile">
          <GearBadge />
        </div>
      </div>

      {/* Cartões de fluxo sobrepostos à base do hero */}
      <FeatureStrip />
    </section>
  );
}
