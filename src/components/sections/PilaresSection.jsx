import { TOKEN } from "../../constants/tokens";
import { Eyebrow } from "../common/Eyebrow";
import { Container } from "../common/Container";
import { RevealSection } from "../common/RevealSection";

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE — PilaresSection
// Quatro pilares estratégicos do projeto numerados com linhas divisórias.
// A numeração sequencial indica prioridade/ordem estratégica.
// ─────────────────────────────────────────────────────────────────────────────
export function PilaresSection() {
  const pilares = [
    {
      num: "01",
      title: "Crédito Estruturado e Moeda Verde",
      desc: "Mecanismos de crédito pensados para o ciclo produtivo do pequeno produtor, com incentivo a práticas sustentáveis.",
    },
    {
      num: "02",
      title: "Centros de Experiência e Serviços",
      subtitle: "(Showrooms Comunitários)",
      desc: "Espaços de referência onde o produtor encontra serviços, capacitação e contato direto com o mercado.",
    },
    {
      num: "03",
      title: "Logística Reversa e Eficiência Operacional",
      desc: "Fluxos logísticos que reduzem perdas e custos, do escoamento da produção à entrega final.",
    },
    {
      num: "04",
      title: "Vantagens Coletivas e Identidade Regional",
      desc: "Benefícios construídos em conjunto, valorizando a identidade e a força produtiva de cada região.",
    },
  ];

  return (
    <RevealSection id="pilares">
      <Container>
        <Eyebrow>Pilares Estratégicos</Eyebrow>
        <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 700, color: TOKEN.forest, marginBottom: 32 }}>
          A estrutura que sustenta o projeto
        </h2>

        <div>
          {pilares.map((p) => (
            <div key={p.num} className="pilar">
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "1.5rem", color: TOKEN.leafLight,
              }}>
                {p.num}
              </span>
              <div>
                <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 700, marginBottom: 6 }}>
                  {p.title}{" "}
                  {p.subtitle && (
                    <span style={{ fontWeight: 400, fontSize: "0.9rem", color: TOKEN.sage }}>{p.subtitle}</span>
                  )}
                </h3>
                <p style={{ margin: 0, color: TOKEN.sage, maxWidth: 560 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </RevealSection>
  );
}
