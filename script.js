// 1. INFORMAÇÕES DO MAPA
const informacoesFazenda = {
    lavoura: { titulo: "1. Lavoura Inteligente", icone: "🌱", texto: "Cultivo de alta precisão usando dados para evitar desmatamento." },
    sensores: { titulo: "2. Sensores de Solo", icone: "📊", texto: "Medem umidade e nutrientes para economizar água e adubo." },
    drones: { titulo: "3. Monitoramento de Drones", icone: "🛸", texto: "Identificam pragas precocemente, reduzindo o uso de químicos." },
    reserva: { titulo: "4. Reserva Legal", icone: "🌳", texto: "Área protegida que garante biodiversidade e polinizadores." },
    agua: { titulo: "5. Água Limpa Protegida", icone: "💧", texto: "Mata ciliar evita erosão e garante água pura para a fazenda." },
    usina: { titulo: "6. Usina de Energia Limpa", icone: "⚡", texto: "Fontes renováveis (sol e vento) que eliminam emissões de carbono." },
    ilpf: { titulo: "7. Integração L-P-F", icone: "🐄", texto: "União de lavoura, gado e floresta para solo rico e bem-estar animal." }
};

// 2. PERGUNTAS DO QUIZ
const perguntasQuiz = [
    { n: "Fácil", q: "Qual tecnologia é usada para 'enxergar' a saúde das plantas lá do céu?", r: ["Tratores", "Drones", "Caminhões"], c: 1 },
    { n: "Fácil", q: "Onde a fazenda do futuro busca energia para não poluir o ar?", r: ["Carvão", "Petróleo", "Sol e Vento"], c: 2 },
    { n: "Médio", q: "Para que servem os sensores instalados no meio da terra?", r: ["Medir a umidade do solo", "Contar os animais", "Atrair chuva"], c: 0 },
    { n: "Médio", q: "O que a Mata Ciliar protege principalmente?", r: ["As estradas", "Os rios e nascentes", "Os galpões"], c: 1 },
    { n: "Médio", q: "Qual a principal vantagem da Reserva Legal para a lavoura?", r: ["Sombra para o trator", "Abrigar polinizadores (abelhas)", "Esconder ferramentas"], c: 1 },
    { n: "Difícil", q: "O que significa a sigla ILPF?", r: ["Indústria de Leite e Produtos Fortes", "Integração Lavoura-Pecuária-Floresta", "Irrigação Livre para Pequenas Fazendas"], c: 1 },
    { n: "Difícil", q: "Como a tecnologia ajuda a manter o equilíbrio ambiental?", r: ["Produzindo mais na mesma área", "Tirando todas as árvores", "Usando mais água"], c: 0 }
];

// VARIÁVEIS DE CONTROLE
let pontosVisitados = new Set();
let perguntaAtual = 0;
let acertos = 0;

// ELEMENTOS
const modalInfo = document.getElementById('modal-info');
const modalQuiz = document.getElementById('modal-quiz');
const containerBtnQuiz = document.getElementById('container-btn-quiz');

// LOGICA DE EXPLORAÇÃO
document.querySelectorAll('.ponto-clique').forEach(botao => {
    botao.addEventListener('click', () => {
        const local = botao.getAttribute('data-local');
        const dados = informacoesFazenda[local];
        
        document.getElementById('modal-titulo').innerText = dados.titulo;
        document.getElementById('modal-icone').innerText = dados.icone;
        document.getElementById('modal-texto').innerText = dados.texto;
        modalInfo.classList.add('modal-visivel');

        // Registrar visita
        pontosVisitados.add(local);
        if(pontosVisitados.size === 7) {
            containerBtnQuiz.style.display = "block";
        }
    });
});

// FECHAR MODAL INFO
document.getElementById('fechar-modal').onclick = () => modalInfo.classList.remove('modal-visivel');

// LOGICA DO QUIZ
document.getElementById('btn-iniciar-quiz').onclick = () => {
    modalQuiz.classList.add('modal-visivel');
    carregarPergunta();
};

function carregarPergunta() {
    const p = perguntasQuiz[perguntaAtual];
    document.getElementById('num-pergunta').innerText = perguntaAtual + 1;
    
    // LINHA CORRIGIDA: Agora exibe apenas o texto da pergunta (ocultando o nível p.n)
    document.getElementById('pergunta-texto').innerHTML = p.q;
    
    const containerRespostas = document.getElementById('opcoes-respostas');
    containerRespostas.innerHTML = "";
    
    p.r.forEach((resp, index) => {
        const btn = document.createElement('button');
        btn.innerText = resp;
        btn.className = 'btn-opcao';
        btn.onclick = () => verificarResposta(index);
        containerRespostas.appendChild(btn);
    });
}

function verificarResposta(escolha) {
    if(escolha === perguntasQuiz[perguntaAtual].c) acertos++;
    
    perguntaAtual++;
    if(perguntaAtual < perguntasQuiz.length) {
        carregarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    document.getElementById('quiz-tela-pergunta').style.display = "none";
    document.getElementById('quiz-tela-resultado').style.display = "block";
    document.getElementById('feedback-resultado').innerText = `Você acertou ${acertos} de 7 perguntas sobre a Fazenda do Futuro!`;
}

// Fechar se clicar fora
window.onclick = (e) => {
    if (e.target == modalInfo) modalInfo.classList.remove('modal-visivel');
    if (e.target == modalQuiz) modalQuiz.classList.remove('modal-visivel');
};