# Backlog de Tarefas - Redesenho Minimalista e Moderno

Este documento serve para organizar e rastrear o progresso do redesenho minimalista de padrão internacional, corrigindo as deformações e imagens superdimensionadas.

---

## 🚀 Checklist de Correção e Polimento Visual

### 🐛 Fase 1: Correção Imediata de Bugs de Dimensionamento (RCA)
- [x] Corrigir o bug da seta azul gigante em `Channels.js` (Mapear largura e altura fixas com `w-4 h-4` e estilos inline de segurança)
- [x] Ajustar as proporções e dimensões das imagens no Hero e no About para conter seu tamanho de exibição nativo
- [x] Remover backgrounds complexos barulhentos que interferem na legibilidade

### 🌟 Fase 2: Redesenho Moderno do Hero Section
- [x] Atualizar `Hero.js` para um layout limpo com fundo escuro elegante (#09090f) e brilho radial suave de atmosfera
- [x] Reduzir o avatar de Pracy para `w-44 h-44` (176px) com borda fina e glow sutil, sem elementos de arco-íris gigantizados
- [x] Simplificar os badges das facetas profissionais para uma linha única ("Dubladora • Cantora • Maga • Criadora") com tipografia refinada e clean
- [x] Espaçar adequadamente os elementos verticais para evitar sobreposição de menus ou botões em telas pequenas

### 🔮 Fase 3: Redesenho Minimalista da Seção Sobre (Quem Sou Eu)
- [x] Atualizar `About.js` para um layout de 2 colunas equilibrado
- [x] Limitar a exibição da foto casual `about-photo.png` para dimensões máximas rígidas (`max-w-[280px]` e `max-h-[360px]`), com cantos arredondados e sombra sutil
- [x] Redesenhar os cards de identidade para caixas compactas e translúcidas (`bg-white/[0.02]`) com ícones neon discretos e bordas ultra-finas

### 📱 Fase 4: Redesenho e Clean-up dos Canais
- [x] Simplificar os cards de `Channels.js` para um visual minimalista de glassmorphism fosco suave e compactado
- [x] Garantir que todos os SVGs tenham tamanhos fixados rigidamente
- [x] Otimizar o espaçamento interno (paddings) e as sombras

### 🎵 Fase 5: Ajustes de Proporção nas Seções de Música & Livro
- [x] Conter o tamanho da capa do álbum Transcendental em `Music.js` a no máximo `w-48 h-48` no desktop
- [x] Conter a representação 3D do livro em `Book.js` a no máximo `w-44 h-60` com lombada estilizada e efeito tridimensional controlado

### 🛠️ Fase 6: Validação de Layout, Responsividade & Deploy
- [x] Rodar o servidor de desenvolvimento Next.js
- [x] Validar o layout no navegador para garantir 0 ocorrências de deformações ou imagens gigantes
- [x] Realizar commit final das correções e efetuar push para o GitHub
