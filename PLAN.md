# Novo Plano de Implementação - Design Moderno, Minimalista e Equilibrado

Este documento apresenta a estratégia revisada para redesenhar o site de Pracy, adotando uma abordagem moderna, minimalista de padrão internacional, com proporções contidas, grids bem-diagramados, sem poluição visual ou imagens superdimensionadas desnecessárias.

---

## 🔍 Análise de Causa Raiz (RCA) do Layout Anterior

1. **Seta Azul Gigante (Print 1):** Ocorreu devido ao uso da classe inválida `w-4.5 h-4.5` no SVG da seta. Como o Tailwind não possui essa classe mapeada nativamente, o SVG ficou sem largura e altura explícitas no CSS compilado, fazendo com que ele se expandisse para ocupar 100% da largura e altura da tela.
2. **Imagens Gigantescas no About (Print 2 & 3):** A imagem `about-photo.png` foi renderizada com `w-full h-auto` em uma coluna de grid que se alarga muito em telas horizontais largas, fazendo com que a imagem se expandisse de forma desproporcional e engolisse toda a viewport vertical do usuário.
3. **Hero Esmagado e Sobreposto (Print 2):** O Hero forçava um `min-h-screen` com paddings dinâmicos e um avatar de 240px (`w-60 h-60`), o que empurrava as coisas para fora da viewport em telas curtas ou janelas não maximizadas, atropelando os textos e o menu.

---

## 🎨 Diretrizes do Novo Design Minimalista & Premium

1. **Contenção Rígida de Imagens:** Nenhuma imagem do site poderá se expandir livremente. Definiremos limites máximos rígidos de altura e largura (`max-h-[...]`, `max-w-[...]`) com `object-cover` e centralização para garantir elegância e consistência em qualquer tamanho de monitor.
2. **Eliminação de Poluição Visual:** Removeremos backgrounds barulhentos que brigam com as fotos. Usaremos fundos escuros puros e sofisticados (`#09090f` ou `#0b0a13`) com gradientes radiais ultra-suaves de neon como pontos de luz discretos no fundo.
3. **Tipografia e Espaçamentos Nobres:** Acentos neon discretos, tipografia refinada e espaçamentos equilibrados que garantem descanso visual e legibilidade premium.
4. **Resolução de Bugs de Layout:** Mapeamento estrito de classes nativas do Tailwind CSS e estilos inline de salvaguarda nos SVGs para assegurar que nenhum ícone ou seta sofra deformações.

---

## 🛠️ Detalhamento das Alterações por Componente

### 🌟 Hero Section (`components/Hero.js`)
* **Background:** Fundo escuro limpo (#09090f) sem imagens de textura barulhenta. Um leve e sutil brilho radial de roxo profundo de fundo para atmosfera.
* **Retrato da Pracy:** Reduzir o tamanho para `w-40 h-40` ou `w-44 h-44` (máximo de 176px). Remover o gradiente de arco-íris gigante e usar uma borda fina dourada ou roxa neon discreta.
* **Badges de Identidades:** Organizar em uma linha única e elegante ("Dubladora • Cantora • Maga • Criadora") sem fundos de cores chamativas empilhadas que brigam entre si.
* **Redes Sociais:** Dispostas em pequenos círculos minimalistas cinzas translúcidos com hover neon sutil.

### 🔮 Seção Sobre (`components/About.js`)
* **Layout:** Grid de duas colunas muito bem equilibradas:
  * **Esquerda (Biografia):** Tipografia limpa, biografia bem-diagramada em fonte legível com espaçamento nobre.
  * **Direita (Foto Casual e Cards):** A imagem `about-photo.png` será compacta e contida (tamanho máximo fixo de `max-h-[320px]` e `w-[240px]`), centralizada ao lado de um grid de cards de identidade limpos.
* **Cards de Identidade:** Grid minimalista de 2x2. Cada card será um box discreto com fundo escuro semi-transparente (`bg-white/[0.02]`), borda muito fina de `border-white/10`, ícones neon coloridos e descrições curtas e discretas.

### 📱 Seção Canais (`components/Channels.js`)
* **SVG de Seta:** Ajustado para as classes nativas e válidas `w-4 h-4` com estilo inline explícito `style={{ width: '16px', height: '16px' }}` garantindo tamanho sob controle absoluto em qualquer navegador.
* **Visual dos Cards:** Reduzidos para caixas compactas e modernas com glassmorphism fosco suave, emojis contidos (`w-12 h-12`) e rodapé limpo.

### 🎵 Seção Música (`components/Music.js`)
* **Capa do Álbum:** Limitada a um tamanho máximo fixo de `w-48 h-48` com cantos arredondados discretos e sombra fosca simples.
* **Player do Spotify:** Centralizado com o conteúdo em layout limpo horizontal.

### 📖 Seção Livro (`components/Book.js`)
* **Capa do Livro:** Redimensionada para um modelo tridimensional contido e elegante de `w-40 h-56` (proporção clássica de livro de mesa), sem expandir desproporcionalmente.
