# Documentação de Lógica e Regras de Negócio - Pracy Hub Místico

Este documento consolida toda a lógica de funcionamento, componentes de interação, estados de interface e integrações externas do site de Pracy, servindo como uma "fonte da verdade" (Source of Truth) para novos desenvolvimentos.

---

## 🔮 Lógica do Componente Hero (`Hero.js`)

O Hero section serve como o portal de entrada do site e deve impactar visualmente o usuário imediatamente.

### 1. Sistema de Partículas Flutuantes
* **Finalidade:** Criar uma atmosfera mágica e mística (efeito orbes flutuando).
* **Lógica:**
  * Um array de 20 partículas é gerado no client-side após a montagem do componente (`mounted` state) para evitar erros de hidratação (SSR vs CSR).
  * Cada partícula possui um delay (`idx * 0.2`) e uma cor do Arco-íris Místico sorteada a partir de classes utilitárias do Tailwind.
  * O Framer Motion anima as partículas no eixo Y (subindo do rodapé da tela até desaparecer) e no eixo X (suave oscilação horizontal usando `Math.random()` para criar trajetórias orgânicas).

### 2. Animação de Aura e Glow
* **Finalidade:** Dar destaque e um aspecto cósmico à imagem principal da Pracy.
* **Lógica:**
  * Um elemento de background circular com classe `.gradient-rainbow` e filtro `blur-2xl` pulsa suavemente atrás do retrato.
  * O contorno da imagem é envolto por um gradiente que roda uma animação infinita de brilho (`glow`).

---

## 🦄 Lógica do Componente Sobre (`About.js`)

A seção apresenta a biografia e as 4 principais facetas profissionais de Pracy de forma assimétrica e interativa.

### 1. Cards de Identidade
* **Lógica:**
  * Um grid de 4 colunas que se transforma em 1 coluna em aparelhos móveis.
  * Cada card representa uma identidade: **Dubladora**, **Cantora**, **Maga** e **Criadora**.
  * Cada card possui:
    * Um gradiente de cor específico associado à sua área (Roxo, Rosa, Laranja e Azul-Verde).
    * Um efeito hover que projeta um glow de cor correspondente (`glow-purple`, `glow-pink`, `glow-orange`, `glow-cyan`) com desfoque de fundo e elevação de card (`translateY(-10px)`).

---

## 📱 Lógica do Componente Canais (`Channels.js`)

O grid consolida toda a presença digital da Pracy em diferentes mídias.

### 1. Mapeamento das Plataformas
* **Lógica:**
  * Um array de objetos mapeia: YouTube, Instagram, TikTok e Spotify.
  * Cada canal possui um link externo configurado com `target="_blank"` e `rel="noopener noreferrer"` por questões de segurança e SEO.
  * Cada plataforma exibe um emoji correspondente ao tema e seu respectivo ícone svg com um hover de escala que aciona uma borda de luz com gradiente arco-íris personalizado.

---

## 🎵 Lógica do Componente de Música (`Music.js`)

Espaço dedicado a divulgar a faceta musical de Pracy com foco no seu álbum "Transcendental".

### 1. Player de Áudio Incorporado (Spotify Embed)
* **Lógica:**
  * Incorpora um iframe do Spotify configurado com permissões de autoplay e encriptação de mídia.
  * O design premium ao redor do player simula ondas sonoras cósmicas flutuando através de orbes desfocados animados (`blur-3xl`) que orbitam a capa do álbum.

---

## 📖 Lógica do Componente do Livro (`Book.js`)

Destaque do livro "Na Descoberta de Mim".

### 1. Card com Efeito Perspectiva 3D
* **Lógica:**
  * Utiliza propriedades do CSS Moderno e Tailwind (`transformStyle: 'preserve-3d'`, `perspective: '1000px'`) juntamente com o Framer Motion.
  * Ao passar o mouse (`hover`), o card rotaciona nos eixos X e Y (`rotateY: 15, rotateX: -10`), dando a impressão de profundidade física de um livro real tridimensional.

---

## 🎓 Lógica de Cursos & Atendimentos (`Services.js`)

Célula de conversão do site, dividida em duas grandes áreas com gradientes fortes e CTAs evidentes.

### 1. Efeito Hover 3D e Glow
* **Lógica:**
  * Duas propostas de grande impacto visual: **Cursos** (Gradiente Roxo → Azul) e **Atendimentos** (Gradiente Rosa → Laranja).
  * Ambos os cards utilizam rotação 3D sutil ao hover e efeito glow que acompanha o movimento para dar sensação física de toque.

---

## 💬 Lógica da Comunidade (`Community.js`)

Seção focada no crescimento do ecossistema do Telegram.

### 1. Indicadores de Status Ativo
* **Lógica:**
  * Exibe pequenos orbes pulsantes em verde, rosa e ciano com animação `.animate-pulse` simulando status online e engajamento dinâmico.
