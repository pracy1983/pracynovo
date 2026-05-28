# Plano de Implementação - Redesenho e Polimento do Pracy Hub Místico

Este documento apresenta a estratégia de redesenho e polimento visual e funcional para transformar o site de Pracy em um Hub vibrante, artístico, místico e de padrão internacional, eliminando placeholders genéricos e integrando fotos reais de alta qualidade.

---

## 🔮 Objetivo Principal

Substituir os recursos visuais provisórios (emojis e arquivos 404) por assets reais ultra-premium gerados especificamente para o projeto, refinar as transições e estilos Tailwind nos componentes do site, e certificar-se de que tudo carrega com perfeição e alta performance no Next.js.

---

## 🛡️ Decisões de Design (Acessibilidade & Estética Premium)

1. **Wow Factor & Cores:** Uso estratégico da paleta de cores "Arco-íris Místico" com roxos profundos (`#0F0F1E` no background), contrastando com glows neon saturados (rosa, laranja, ciano e ouro) que dão profundidade espacial e brilho mágico ao hub.
2. **Substituição de Emojis por Assets Reais:** No Hero, o emoji `🦄` será substituído pelo retrato premium da Pracy com uma aura mágica animada.
3. **Otimização de Mídia:** Criação de imagens de alta resolução no formato correto e salvas no diretório `public/images/placeholders/` e `public/images/` para resolver todos os erros de carregamento e 404 detectados no console.
4. **Responsividade Estrita:** Garantia de flexibilidade total em celulares (1 coluna, textos centralizados, espaçamentos menores) até telas de alta resolução (layouts fluidos de 3-4 colunas, assimetrias agradáveis).

---

## 🖼️ Mapeamento de Assets de Mídia a Serem Gerados

Usaremos a inteligência de geração de imagens de ponta para produzir os seguintes assets premium:

| Nome do Arquivo | Descrição Visual | Resolução | Onde será usado |
| :--- | :--- | :--- | :--- |
| `pracy-portrait.jpg` | Retrato de uma jovem e bela mulher com estilo alternativo místico e cabelos com nuances coloridas de roxo/rosa. Expressão calorosa e mágica, estúdio de dublagem profissional ao fundo com iluminação suave em tons de violeta e dourado. | 800x800px | Hero Section (Imagem Principal) |
| `hero-background.jpg` | Fundo abstrato místico em alta resolução, com desfoques suaves de lente, orbs luminosas, nuances de roxo profundo, magenta e poeira estelar dourada. | 1920x1080px | Hero Section (Fundo) |
| `about-photo.jpg` | Foto casual e artística da Pracy sorrindo em um estúdio moderno, com microfone de gravação profissional à frente e luzes neon vibrantes de arco-íris cobrindo a cena. | 600x800px | Seção Quem Sou Eu (Sobre) |
| `album-cover.jpg` | Capa de álbum musical mística intitulada "Transcendental", contendo artes abstratas de geometria sagrada, nebulosas estelares e luz cósmica em tons de azul profundo e dourado. | 600x600px | Seção Música (Álbum) |
| `book-cover.jpg` | Capa do livro "Na Descoberta de Mim" contendo o contorno de uma borboleta cintilante feita de pura luz dourada sobre um fundo de floresta mágica noturna com tons roxos e névoa esotérica. | 600x900px | Seção Livro (Destaque) |

---

## 🛠️ Mudanças Propostas por Componente

### 🌟 Componente Hero (`components/Hero.js`)
* **Modificação:** Substituição do emoji `🦄` pela imagem real `pracy-portrait.jpg` com animação de entrada suave e borda iluminada com gradiente giratório.
* **Fundo:** Aplicação da imagem `hero-background.jpg` com opacidade controlada (`opacity-30`) e desfoque nativo atrás do gradiente de partículas flutuantes.

### 🔮 Componente Sobre (`components/About.js`)
* **Modificação:** Substituição do layout 100% simétrico por um layout de duas colunas:
  * **Esquerda:** Biografia detalhada com tipografia Playfair Display e botões de chamada rápida para ação, acompanhada da nova imagem casual de estúdio `about-photo.jpg`.
  * **Direita:** Grid assíncrono exibindo os 4 cards de identidade (Dubladora, Cantora, Maga e Criadora), realçando os efeitos de hover glow de forma elegante.

### 📱 Componente Canais (`components/Channels.js`)
* **Modificação:** Otimização dos cards de canais. Em vez de emojis brutos, os cards passarão a usar imagens reais em miniaturas vibrantes correspondentes de forma semi-transparente como backgrounds do card, ou ícones desenhados com filtros e layouts modernos de acrílico (glassmorphism).

### 🎵 Componente Música (`components/Music.js`)
* **Modificação:** Apontar a capa do álbum para a imagem real `album-cover.jpg`, eliminando o erro de 404, e ajustar a sombra de projeção do álbum para acompanhar as cores cósmicas da arte.

### 📖 Componente Livro (`components/Book.js`)
* **Modificação:** Integrar a capa real do livro (`book-cover.jpg`) no card 3D rotativo, mantendo o efeito físico tridimensional de profundidade na rotação e agregando um valor visual espetacular para o produto físico da Pracy.

---

## 🧪 Plano de Verificação

### Testes Manuais
1. **Resolução de Erros:** Executar o build do Next.js localmente e verificar na aba Network do navegador se todos os assets carregam com status `200 OK` (0 ocorrências de 404).
2. **Design Responsivo:** Testar o layout nos modos mobile (iPhone 12/13/14 Pro - 390px), tablet (iPad Air - 820px) e desktop (FullHD - 1920px), avaliando quebras de layout ou sobreposição de textos.
3. **Fluidez:** Validar se a rotação 3D do livro e as partículas do Hero estão rodando com suavidade a 60 FPS sem gargalos de CPU.
