import { TOKEN } from "../../constants/tokens";
import { useScrollReveal } from "../../hooks/useScrollReveal";

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE — RevealSection
// Wrapper que aplica animação de entrada via IntersectionObserver.
// Todos os <section> do site usam este wrapper para consistência.
// ─────────────────────────────────────────────────────────────────────────────
export function RevealSection({ children, id, tint = false, style: extraStyle = {} }) {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      ref={ref}
      id={id}
      className={`reveal-section${visible ? " visible" : ""}`}
      style={{
        position: "relative",
        padding: "100px 0",
        background: tint ? TOKEN.creamAlt : TOKEN.cream,
        ...extraStyle,
      }}
    >
      {children}
    </section>
  );
}
