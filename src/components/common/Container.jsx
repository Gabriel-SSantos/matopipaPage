// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE — Container
// Wrapper de largura máxima para alinhar o conteúdo das seções.
// ─────────────────────────────────────────────────────────────────────────────
export function Container({ children, style: s = {} }) {
  return (
    <div style={{ 
      width: "100%", 
      maxWidth: 1180, 
      margin: "0 auto", 
      padding: "0 24px", ...s }}>
      {children}
    </div>
  );
}
