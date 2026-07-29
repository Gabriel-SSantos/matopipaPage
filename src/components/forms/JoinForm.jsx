import { useState } from "react";
import { TOKEN } from "../../constants/tokens";
import { Btn } from "../common/Btn";

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE — JoinForm
// Formulário de captação de interesse: seletor de papel + nome + contato.
//
// Estado local:
//   role    — papel selecionado (Empreendedor / Produtor rural / etc.)
//   nome    — texto do campo nome
//   contato — texto do campo contato
//   sent    — boolean; true quando o formulário foi enviado com sucesso
//
// ⚠ ATENÇÃO: o formulário hoje apenas exibe uma confirmação visual.
//   Para produção, substitua o handleSubmit por uma chamada fetch() ao
//   seu backend, webhook (Zapier/Make), planilha (Google Sheets API) ou
//   serviço de WhatsApp.
// ─────────────────────────────────────────────────────────────────────────────
export function JoinForm() {
  const [role, setRole] = useState("");
  const [nome, setNome] = useState("");
  const [contato, setContato] = useState("");
  const [sent, setSent] = useState(false);

  const roles = ["Empreendedor", "Produtor rural", "Loja parceira", "Médico parceiro"];

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: enviar { role, nome, contato } para backend real
    console.log("Interesse registrado:", { role, nome, contato });
    setSent(true);
    setNome("");
    setContato("");
    setRole("");
  }

  const inputStyle = {
    width: "100%", background: TOKEN.cream,
    border: `1px solid ${TOKEN.line}`, borderRadius: 10,
    padding: "14px 16px", color: TOKEN.forest,
    fontFamily: "'Inter', system-ui, sans-serif", fontSize: "0.95rem",
    outline: "none",
  };

  return (
    <div>
      {/* Seletor de papel */}
      <div role="group" aria-label="Quero fazer parte como" style={{ display: "flex", gap: 12, flexWrap: "wrap", margin: "22px 0 28px" }}>
        {roles.map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setRole(r)}
            style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: "0.85rem", letterSpacing: "0.03em",
              border: `1px solid ${role === r ? TOKEN.leaf : TOKEN.line}`,
              borderRadius: 999, padding: "10px 20px",
              cursor: "pointer",
              background: role === r ? TOKEN.leaf : "transparent",
              color: role === r ? "#fff" : TOKEN.forest,
              transition: "all 0.2s ease",
            }}
          >
            {r}
          </button>
        ))}
      </div>

      {/* Campos */}
      <form className="joinform" onSubmit={handleSubmit}>
        <input
          type="text" placeholder="Seu nome" required
          value={nome} onChange={(e) => setNome(e.target.value)}
          style={inputStyle}
        />
        <input
          type="tel" placeholder="WhatsApp ou e-mail" required
          value={contato} onChange={(e) => setContato(e.target.value)}
          style={inputStyle}
        />
        <div className="full">
          <Btn type="submit">Quero fazer parte</Btn>
          <p style={{ fontSize: "0.85rem", marginTop: 14, color: TOKEN.sage }}>
            Ao enviar, você será contatado pela equipe MATOPIPA com os próximos passos.
          </p>
          {/* Mensagem de confirmação */}
          {sent && (
            <div style={{
              marginTop: 18, padding: "14px 18px", borderRadius: 10,
              background: TOKEN.lime, border: `1px solid ${TOKEN.leaf}`,
              color: TOKEN.forest, fontSize: "0.92rem",
            }}>
              Recebemos seu interesse! Em breve a equipe MATOPIPA entra em contato. ✅
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
