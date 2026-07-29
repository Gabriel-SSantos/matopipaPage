/**
 * App.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Site institucional do MATOPIPA — Plataforma de Inclusão Produtiva
 *
 * Estrutura de componentes:
 *   <App />                          ← raiz, monta toda a página
 *     <GlobalStyles />               ← CSS global (styles/GlobalStyles.jsx)
 *     <Navbar />                     ← barra de navegação sticky + menu mobile
 *     <HeroSection />                ← banner principal com foto de fundo e badge
 *       <GearBadge />                ← ícone animado de "engrenagem cooperativa"
 *       <FeatureStrip />             ← três cartões: Produção / Indústria / Mercado
 *     <StatsSection />               ← quatro números em destaque
 *     <AboutSection />               ← missão, citação, valores
 *     <ProgramaSection />            ← kit de adesão R$ 1.680 + vantagens
 *     <ClubeSection />               ← clube de vantagens (quatro cartões com foto)
 *     <ParceriasSection />           ← modelo de parceria varejista
 *     <PilaresSection />             ← quatro pilares estratégicos numerados
 *     <ParticipeSection />           ← CTA banner + formulário de captação
 *       <JoinForm />                 ← formulário com seletor de papel e confirmação
 *     <Footer />                     ← rodapé verde-mata
 *
 * Dependências em runtime (nenhuma lib extra necessária):
 *   - React 18+
 *   - Fontes Google: Fraunces, Inter, JetBrains Mono (carregadas via GlobalStyles)
 *   - Imagens: banco Pexels (licença gratuita) — substitua por fotos do projeto
 *
 * Como usar:
 *   1. Copie a pasta src/ para o seu projeto React (Vite ou Create React App)
 *   2. No main.jsx/index.jsx importe e renderize: <App />
 *   3. Para produção, conecte JoinForm (components/forms/JoinForm.jsx) a um
 *      backend, webhook, planilha ou serviço de e-mail/WhatsApp — hoje ele só
 *      exibe confirmação visual.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { GlobalStyles } from "./styles/GlobalStyles";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { StatsSection } from "./components/sections/StatsSection";
import { AboutSection } from "./components/sections/AboutSection";
import { ProgramaSection } from "./components/sections/ProgramaSection";
import { ClubeSection } from "./components/sections/ClubeSection";
import { ParceriasSection } from "./components/sections/ParceriasSection";
import { PilaresSection } from "./components/sections/PilaresSection";
import { ParticipeSection } from "./components/sections/ParticipeSection";

export default function App() {
  return (
    <div lang="pt-BR">
      <GlobalStyles />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ProgramaSection />
      <ClubeSection />
      <ParceriasSection />
      <PilaresSection />
      <ParticipeSection />
      <Footer />
    </div>
  );
}
