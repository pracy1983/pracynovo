# Backlog de Tarefas - Redesenho Pracy Hub Místico

Este documento serve para organizar e rastrear o progresso de cada tarefa necessária para a execução do redesenho completo do site da Pracy.

---

## 🚀 Checklist Geral do Redesenho

### 📂 Fase 1: Geração de Assets & Resolução de 404s
- [x] Criar diretórios de imagens `public/images` e `public/images/placeholders` se não existirem
- [x] Gerar imagem premium `pracy-portrait.jpg` (Retrato profissional com aura mística) via IA (Salvo como PNG)
- [x] Gerar imagem premium `hero-background.jpg` (Fundo cósmico com orbes luminosas e desfoques) via IA (Salvo como PNG)
- [x] Gerar imagem premium `about-photo.jpg` (Foto casual sorrindo em estúdio com neon arco-íris) via IA (Salvo como PNG)
- [x] Gerar imagem premium `album-cover.jpg` (Capa do álbum musical Transcendental) via IA (Salvo como PNG)
- [x] Gerar imagem premium `book-cover.jpg` (Capa tridimensional do livro Na Descoberta de Mim) via IA (Salvo como PNG)

### 🌟 Fase 2: Redesenho do Hero Section
- [x] Atualizar `Hero.js` para usar as imagens reais `pracy-portrait.png` e `hero-background.png`
- [x] Substituir o emoji `🦄` pela imagem real do retrato de forma responsiva
- [x] Refinar o gradiente rotativo ao redor do avatar para um efeito glow dinâmico de altíssimo nível
- [x] Otimizar os tempos de transição do Framer Motion e o número de partículas geradas no client-side

### 🔮 Fase 3: Redesenho da Seção Sobre (Quem Sou Eu)
- [x] Atualizar `About.js` para layout de duas colunas (Desktop) e empilhado (Mobile)
- [x] Incorporar a imagem `about-photo.png` ao lado da biografia profissional
- [x] Ajustar espaçamento, sombras e glows coloridos nos 4 cards de identidade ao hover
- [x] Otimizar tamanho de tipografia Playfair Display e legibilidade das descrições

### 📱 Fase 4: Redesenho da Seção Canais
- [x] Atualizar `Channels.js` para modernizar o visual dos cards (Visual de glassmorphism transparente)
- [x] Substituir os emojis brutos por ícones customizados, gradientes integrados de alta densidade e acentos de cor sutis

### 🎵 Fase 5: Redesenho da Seção Música
- [x] Atualizar `Music.js` alterando o caminho do placeholder para `/images/placeholders/album-cover.png`
- [x] Ajustar o contorno e sombra de dispersão da capa para combinar com os tons místico-cósmicos da nova capa gerada
- [x] Verificar a integração e funcionamento do player Spotify embed

### 📖 Fase 6: Redesenho da Seção Livro
- [x] Atualizar `Book.js` integrando a capa real `book-cover.png` no card com profundidade 3D
- [x] Polir os ângulos de rotação do efeito perspectiva ao hover

### 🛠️ Fase 7: Revisão, Performance & Testes
- [ ] Rodar o servidor de desenvolvimento `npm run dev` localmente
- [ ] Verificar a aba Network para garantir 0 ocorrências de erros 404
- [ ] Testar responsividade móvel em telas pequenas e tablets
- [ ] Fazer commit final no Git e publicar as mudanças na ramificação atual
