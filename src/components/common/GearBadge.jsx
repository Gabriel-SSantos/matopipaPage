import { TOKEN } from "../../constants/tokens";

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE — GearBadge
// Ícone circular SVG gerado programaticamente: dentes de engrenagem que giram
// (via CSS keyframe, definido em GlobalStyles) ao redor de um grafo de rede
// cooperativa central. Representa visualmente a "engrenagem que conecta
// produtores ao mercado".
// ─────────────────────────────────────────────────────────────────────────────
export function GearBadge() {
  const cx = 60, cy = 60, r = 50;
  const teethCount = 16;
  const networkRadius = 28, nodeCount = 6;

  // Gera as elipses externas (dentes da engrenagem)
  const teeth = Array.from({ length: teethCount }, (_, i) => {
    const angle = (i / teethCount) * Math.PI * 2;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    const deg = (angle * 180) / Math.PI + 90;
    return (
      <ellipse
        key={i}
        cx={x} cy={y} rx={3} ry={8}
        transform={`rotate(${deg} ${x} ${y})`}
        fill={i % 2 === 0 ? TOKEN.leaf : TOKEN.clay}
      />
    );
  });

  // Gera o grafo de rede interna (hub + spoke + nodes)
  const network = Array.from({ length: nodeCount }, (_, i) => {
    const angle = (i / nodeCount) * Math.PI * 2 - Math.PI / 2;
    const x = cx + networkRadius * Math.cos(angle);
    const y = cy + networkRadius * Math.sin(angle);
    return (
      <g key={i}>
        <line x1={cx} y1={cy} x2={x} y2={y} stroke={TOKEN.leafLight} strokeWidth={1.2} />
        <circle cx={x} cy={y} r={3} fill={TOKEN.leafLight} />
      </g>
    );
  });

  return (
    <div style={{
      position: "absolute", zIndex: 3, right: 36, bottom: -44,
      width: 118, height: 118, borderRadius: "50%",
      background: TOKEN.white,
      display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: "0 14px 30px -10px rgba(47,74,44,0.4)",
    }}>
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <g className="matopipa-gear-spin">{teeth}</g>
        <circle cx={cx} cy={cy} r={30} fill="none" stroke={TOKEN.lime} strokeWidth={1} />
        {network}
        <circle cx={cx} cy={cy} r={5} fill={TOKEN.forest} />
      </svg>
    </div>
  );
}
