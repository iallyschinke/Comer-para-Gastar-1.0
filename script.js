// HEADER COM EFEITO AO ROLAR
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  header.classList.toggle("header-scroll", window.scrollY > 60);
});

// MENU ATIVO AO ROLAR
const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {
  let atual = "";

  sections.forEach((section) => {
    const topo = section.offsetTop - 160;

    if (scrollY >= topo) {
      atual = section.getAttribute("id");
    }
  });

  links.forEach((link) => {
    link.classList.remove("ativo");

    if (link.getAttribute("href") === `#${atual}`) {
      link.classList.add("ativo");
    }
  });
});

// ANIMAÇÃO REVEAL MODERNA
const revealElements = document.querySelectorAll(
  ".hero-conteudo, .hero-imagem, .resumo-card, .sobre-texto, .card-dica, .calculadora-texto, .calculadora-card, .alerta-imagem, .contato-formulario, .contato-imagem, .outros-canais",
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-ativo");
      }
    });
  },
  {
    threshold: 0.18,
  },
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
  revealObserver.observe(element);
});

// EFEITO MAGNÉTICO NOS BOTÕES
const magneticButtons = document.querySelectorAll(
  ".btn-header, .btn-principal, .btn-secundario, .btn-enviar",
);

magneticButtons.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "translateY(-4px)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translateY(0)";
  });
});

// CARD 3D COM LUZ SEGUINDO O MOUSE
const cards = document.querySelectorAll(".card-dica");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 12;
    const rotateX = (y / rect.height - 0.5) * -12;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);

    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
  });
});

// CONTADOR ANIMADO
const numeros = document.querySelectorAll(".sobre-itens strong");

const contadorObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const textoOriginal = el.textContent;
      const numero = parseInt(textoOriginal.replace(/\D/g, ""));

      if (isNaN(numero)) return;

      let atual = 0;
      const incremento = Math.ceil(numero / 45);

      const contador = setInterval(() => {
        atual += incremento;

        if (atual >= numero) {
          el.textContent = textoOriginal;
          clearInterval(contador);
        } else {
          el.textContent = textoOriginal.includes("%")
            ? `${atual}%`
            : String(atual).padStart(2, "0");
        }
      }, 25);

      contadorObserver.unobserve(el);
    });
  },
  {
    threshold: 0.8,
  },
);

numeros.forEach((num) => contadorObserver.observe(num));

// PARALLAX SUAVE NAS IMAGENS PRINCIPAIS
const parallaxImages = document.querySelectorAll(".alerta-imagem img");

window.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 18;
  const y = (e.clientY / window.innerHeight - 0.5) * 18;

  parallaxImages.forEach((img, index) => {
    const intensidade = (index + 1) * 0.35;

    img.style.transform = `translate(${x * intensidade}px, ${y * intensidade}px)`;
  });
});

// BOTÃO VOLTAR AO TOPO AUTOMÁTICO
const botaoTopo = document.createElement("button");
botaoTopo.className = "botao-topo";
botaoTopo.innerHTML = "↑";
document.body.appendChild(botaoTopo);

window.addEventListener("scroll", () => {
  botaoTopo.classList.toggle("mostrar", window.scrollY > 500);
});

botaoTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// FRAMES DO GORDÃO

const framesGordao = [
  "imagens/gordao-frame-1.png",
  "imagens/gordao-frame-2.png",
  "imagens/gordao-frame-3.png",
  "imagens/gordao-frame-4.png",
];

const temposGordao = [700, 700, 700, 1500];

let frameGordaoAtual = 0;

const imagemGordao = document.getElementById("gordao-frame");

function animarGordao() {
  imagemGordao.src = framesGordao[frameGordaoAtual];

  const tempoAtual = temposGordao[frameGordaoAtual];

  frameGordaoAtual++;

  if (frameGordaoAtual >= framesGordao.length) {
    frameGordaoAtual = 0;
  }

  setTimeout(animarGordao, tempoAtual);
}

animarGordao();

// FRAMES DA LASCA DE PAREDE

const framesLasca = [
  "imagens/lasca-frame-1.png",
  "imagens/lasca-frame-2.png",
  "imagens/lasca-frame-3.png",
  "imagens/lasca-frame-4.png",
];

const temposLasca = [700, 700, 700, 1500];

let frameLascaAtual = 0;

const imagemLasca = document.getElementById("lasca-frame");

function animarLasca() {
  imagemLasca.src = framesLasca[frameLascaAtual];

  const tempoAtual = temposLasca[frameLascaAtual];

  frameLascaAtual++;

  if (frameLascaAtual >= framesLasca.length) {
    frameLascaAtual = 0;
  }

  setTimeout(animarLasca, tempoAtual);
}

animarLasca();

// =========================
// MENU MOBILE
// =========================
