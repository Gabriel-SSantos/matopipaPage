import { TOKEN } from "../../constants/tokens";

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE — LogoIcon
// SVG do logo MATOPIPA: círculo de cooperação com 6 nós conectados ao centro.
// ─────────────────────────────────────────────────────────────────────────────
export function LogoIcon() {
  const points = 6;
  const r = 12;
  const cx = 20, cy = 20;

  const spokes = Array.from({ length: points }, (_, i) => {
    const angle = (i / points) * Math.PI * 2 - Math.PI / 2;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    return (
      <g key={i}>
        <line x1={cx} y1={cy} x2={x} y2={y} stroke={TOKEN.leaf} strokeWidth={1.2} opacity={0.85} />
        <circle cx={x} cy={y} r={2} fill={TOKEN.leaf} />
      </g>
    );
  });

  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width={30} height={30} style={{ flexShrink: 0 }}>
      <circle cx={cx} cy={cy} r={18} stroke={TOKEN.leaf} strokeWidth={1.6} />
      <circle cx={cx} cy={cy} r={4.5} fill={TOKEN.leaf} />
      {spokes}
    </svg>
  );
}
