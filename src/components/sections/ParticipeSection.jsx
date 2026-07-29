import { TOKEN } from "../../constants/tokens";
import { PHOTO } from "../../constants/photos";
import { Eyebrow } from "../common/Eyebrow";
import { Container } from "../common/Container";
import { RevealSection } from "../common/RevealSection";
import { JoinForm } from "../forms/JoinForm";

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE — ParticipeSection
// CTA final: banner com foto de campo + formulário de captação flutuante.
// ─────────────────────────────────────────────────────────────────────────────
export function ParticipeSection() {
  return (
    <RevealSection id="participe">
      <Container>
        {/* Banner fotográfico com texto centralizado */}
        <div style={{
          position: "relative", borderRadius: 18, overflow: "hidden",
          padding: "72px 40px", textAlign: "center",
          boxShadow: "0 18px 44px -22px rgba(47,74,44,0.35)",
        }}>
          <img
            src={PHOTO.ctaBanner}
            alt="Plantação verde vista do alto"
            loading="lazy"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
          />
          <div style={{
            position: "absolute", inset: 0, zIndex: 1,
            background: "linear-gradient(180deg, rgba(24,38,21,0.55), rgba(24,38,21,0.82))",
          }} />
          <div style={{ position: "relative", zIndex: 2, maxWidth: 640, margin: "0 auto" }}>
            <Eyebrow light>Faça parte</Eyebrow>
            <h2 style={{
              fontFamily: "'Fraunces', Georgia, serif", fontWeight: 700,
              fontSize: "clamp(1.8rem, 3.2vw, 2.7rem)", color: "#fff", marginBottom: 18,
            }}>
              Seja um empreendedor que veste o propósito.{" "}
              <em style={{ color: TOKEN.lime, fontStyle: "italic" }}>Vista MATOPIPA.</em>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.86)", margin: "0 auto 28px", maxWidth: 520 }}>
              Diga como você quer entrar no projeto e deixe seus dados — nossa equipe entra em contato.
            </p>
          </div>
        </div>

        {/* Cartão do formulário sobreposto ao banner */}
        <div style={{
          background: TOKEN.white, borderRadius: 18, padding: 36,
          maxWidth: 760, marginInline: "auto", marginTop: -64,
          position: "relative", zIndex: 3,
          boxShadow: "0 18px 44px -22px rgba(47,74,44,0.35)",
        }}>
          <JoinForm />
        </div>
      </Container>
    </RevealSection>
  );
}
