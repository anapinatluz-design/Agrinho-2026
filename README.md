# Agrinho-2026

# 🚜 Agrinho 2026 — Fazenda do Futuro 🚀

> **Tema:** *“Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente”*

Este projeto foi desenvolvido como uma aplicação web interativa para o **Programa Agrinho 2026**. Através de uma interface dinâmica de "Mapa Interativo", o usuário explora uma propriedade rural moderna e descobre como a tecnologia de ponta atua lado a lado com a preservação ambiental. Após a exploração completa, os usuários podem testar seus conhecimentos em um Quiz educativo e gamificado.

---

## 💡 Sobre o Projeto

O grande desafio do agronegócio moderno é produzir alimentos em larga escala mantendo os recursos naturais intactos para as próximas gerações. Este site materializa o conceito da **"Fazenda do Futuro"**, dividindo a propriedade em 7 pilares estratégicos interativos:

1. **🌱 Lavoura Inteligente:** Produção de alta precisão baseada em dados e mapeamento para otimizar áreas já existentes sem desmatamento.
2. **📊 Sensores de Solo:** Monitoramento em tempo real de umidade e nutrientes, economizando água e evitando excesso de fertilizantes.
3. **🛸 Monitoramento de Drones:** Detecção precoce de pragas para uma aplicação cirúrgica e reduzida de defensivos agrícolas.
4. **🌳 Reserva Legal:** Área protegida por lei que garante a sobrevivência da biodiversidade local e de insetos polinizadores.
5. **💧 Água Limpa Protegida:** Preservação dos rios e nascentes através da mata ciliar, evitando a erosão e o assoreamento.
6. **⚡ Usina de Energia Limpa:** Utilização de matrizes solar e eólica na propriedade para reduzir as emissões de carbono a quase zero.
7. **🐄 Integração L-P-F (Lavoura-Pecuária-Floresta):** Sinergia total onde árvores, grãos e gado compartilham o mesmo espaço, enriquecendo o solo e garantindo o bem-estar animal.

---

## 🎮 Funcionalidades Principais

- **Mapa Interativo (Hotspots):** Botões flutuantes posicionados estrategicamente sobre o mapa com efeito visual de pulsação (`CSS Keyframes`).
- **Janelas Flutuantes Dinâmicas (Modais):** Ao clicar em qualquer ponto do mapa, o JavaScript injeta o conteúdo específico e abre uma janela elegante com efeito de desfoque de fundo (`backdrop-filter`).
- **Bloqueio por Progresso:** O botão do Quiz permanece oculto até que o usuário explore com sucesso todos os 7 pontos da fazenda, garantindo a leitura do conteúdo.
- **Sistema de Quiz Gamificado:** Um questionário dinâmico com 7 perguntas que avaliam de forma limpa o aprendizado, exibindo uma tela de pontuação com feedback e opção de reiniciar.
- **Design Eco-Futurista:** Paleta de cores moderna inspirada na tecnologia limpa, misturando cinza escuro, branco e detalhes em verde néon.

---

## 🛠️ Tecnologias Utilizadas

O desenvolvimento foi realizado inteiramente no ambiente **Visual Studio Code (VS Code)**, utilizando tecnologias web nativas para garantir leveza e acessibilidade:

- **HTML5:** Estruturação semântica de layouts, botões de mapeamento e elementos modais.
- **CSS3:** Estilização baseada em Flexbox/Grid, posicionamento absoluto de pontos de interesse, efeitos visuais modernos e animações.
- **JavaScript (ES6+):** Manipulação dinâmica do DOM, controle de estados de visitação (utilizando a estrutura `Set`), lógica de progressão do Quiz e cálculo de acertos em tempo real.

---

## 🗂️ Estrutura de Arquivos

```text
agrinho-2026/
├── index.html        # Estrutura principal do site e modais
├── style.css         # Identidade visual, animações e responsividade
├── script.js         # Banco de dados das explicações/perguntas e lógica interativa
└── agrinho2026.png   # Imagem oficial do mapa da Fazenda do Futuro
