import { useState, useEffect, useRef } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// HOOK — useScrollReveal
// Adiciona a classe CSS "is-visible" quando o elemento entra no viewport.
// Respeita prefers-reduced-motion para quem desabilita animações.
// ─────────────────────────────────────────────────────────────────────────────
export function useScrollReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Se o usuário prefere redução de movimento, mostra imediatamente
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}
