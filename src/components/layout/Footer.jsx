import { TOKEN } from "../../constants/tokens";
import { Container } from "../common/Container";
import { LogoIcon } from "../common/LogoIcon";

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE — Footer
// Rodapé verde-mata com logo, tagline e links de navegação.
// ─────────────────────────────────────────────────────────────────────────────
export function Footer() {
  const links = ["#programa", "#sobre", "#clube", "#parcerias", "#pilares", "#participe"];
  const labels = ["Programa", "Sobre", "Clube", "Parcerias", "Pilares", "Participe"];

  return (
    <footer style={{ background: TOKEN.forest, color: "rgba(247,246,236,0.92)", padding: "52px 0 32px" }}>
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 24 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "'Fraunces', Georgia, serif", fontWeight: 700, fontSize: "1.15rem", color: "#fff" }}>
              <LogoIcon />
              MATOPIPA
            </div>
            <div style={{ color: "rgba(247,246,236,0.65)", fontSize: "0.88rem", marginTop: 6 }}>
              Promovendo a Inclusão Produtiva
            </div>
          </div>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {links.map((href, i) => (
              <a key={href} href={href} style={{ color: "rgba(247,246,236,0.78)", fontSize: "0.88rem" }}>
                {labels[i]}
              </a>
            ))}
          </div>
        </div>
        <div style={{
          borderTop: "1px solid rgba(247,246,236,0.16)", marginTop: 36, paddingTop: 20,
          fontSize: "0.8rem", color: "rgba(247,246,236,0.55)",
        }}>
          © 2026 MATOPIPA. Plataforma de inclusão produtiva conduzida pelo cooperativismo.
        </div>
      </Container>
    </footer>
  );
}
