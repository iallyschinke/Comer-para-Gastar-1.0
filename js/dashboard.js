const btnAbrirMenu = document.querySelector(".btn-abrir-menu");
const btnFecharMenu = document.querySelector(".btn-fechar-menu");
const sidebar = document.querySelector(".sidebar");
const overlayMenu = document.querySelector(".overlay-menu");

function abrirMenu() {
  sidebar.classList.add("ativo");
  overlayMenu.classList.add("ativo");
}

function fecharMenu() {
  sidebar.classList.remove("ativo");
  overlayMenu.classList.remove("ativo");
}

btnAbrirMenu.addEventListener("click", abrirMenu);
btnFecharMenu.addEventListener("click", fecharMenu);
overlayMenu.addEventListener("click", fecharMenu);

/* NOME DO USUÁRIO */

const nomeUsuario = localStorage.getItem("nomeUsuario");
const tituloUsuario = document.querySelector("#nome-usuario");

if (nomeUsuario && tituloUsuario) {
  tituloUsuario.textContent = `Olá, ${nomeUsuario}!`;
}

/* FAVORITAR DICA */

const btnFavorito = document.querySelector(".btn-favorito");

btnFavorito.addEventListener("click", () => {
  btnFavorito.classList.toggle("ativo");

  if (btnFavorito.classList.contains("ativo")) {
    btnFavorito.textContent = "♥";
  } else {
    btnFavorito.textContent = "♡";
  }
});

/* MENU ATIVO */

const linksMenu = document.querySelectorAll(".menu-dashboard a");

linksMenu.forEach((link) => {
  link.addEventListener("click", () => {
    linksMenu.forEach((item) => item.classList.remove("ativo"));
    link.classList.add("ativo");

    if (window.innerWidth <= 850) {
      fecharMenu();
    }
  });
});

/* EFEITO DE ROLAGEM / SCROLL REVEAL */

const elementosAnimados = document.querySelectorAll(
  ".reveal-up, .reveal-left, .reveal-right, .reveal-zoom, .reveal-card",
);

const observerScroll = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0.08) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  },
  {
    threshold: [0, 0.08, 0.15],
    rootMargin: "0px 0px -3% 0px",
  },
);

elementosAnimados.forEach((elemento) => {
  observerScroll.observe(elemento);
});
