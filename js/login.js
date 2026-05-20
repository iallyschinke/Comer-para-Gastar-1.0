/* MENU MOBILE */

const btnMenuMobile = document.querySelector(".btn-menu-mobile");
const header = document.querySelector(".header");
const linksMenu = document.querySelectorAll(".menu a");

if (btnMenuMobile && header) {
  btnMenuMobile.addEventListener("click", () => {
    header.classList.toggle("menu-aberto");

    btnMenuMobile.innerHTML = header.classList.contains("menu-aberto")
      ? "×"
      : "☰";
  });
}

linksMenu.forEach((link) => {
  link.addEventListener("click", () => {
    if (header && btnMenuMobile) {
      header.classList.remove("menu-aberto");
      btnMenuMobile.innerHTML = "☰";
    }
  });
});

/* MOSTRAR / ESCONDER SENHAS */

const botoesVerSenha = document.querySelectorAll(".btn-ver-senha");

botoesVerSenha.forEach((botao) => {
  botao.addEventListener("click", () => {
    const campoSenha = botao.closest(".campo-senha");
    if (!campoSenha) return;

    const inputSenha = campoSenha.querySelector(".input-senha");
    const imagemOlho = botao.querySelector("img");

    if (!inputSenha) return;

    const senhaEstaVisivel = inputSenha.type === "text";

    inputSenha.type = senhaEstaVisivel ? "password" : "text";

    if (imagemOlho) {
      imagemOlho.src = senhaEstaVisivel
        ? "imagens/olho-login.png"
        : "imagens/olho-fechado-login.png";
    }

    botao.setAttribute(
      "aria-label",
      senhaEstaVisivel ? "Mostrar senha" : "Esconder senha",
    );
  });
});

/* LOGIN */

const formLogin = document.querySelector(".form-login");

if (formLogin) {
  formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = "dashboard.html";
  });
}

/* CADASTRO */

const formCadastro = document.querySelector(".form-cadastro");

if (formCadastro) {
  formCadastro.addEventListener("submit", (event) => {
    event.preventDefault();

    const nomeUsuario = formCadastro.querySelector('input[type="text"]')?.value;

    if (nomeUsuario) {
      localStorage.setItem("nomeUsuario", nomeUsuario);
    }

    window.location.href = "dashboard.html";
  });
}

/* SCROLL REVEAL */

const elementosReveal = document.querySelectorAll(".scroll-reveal");

function revelarElementos() {
  const alturaTela = window.innerHeight * 0.95;

  elementosReveal.forEach((elemento) => {
    const topoElemento = elemento.getBoundingClientRect().top;

    if (topoElemento < alturaTela) {
      elemento.classList.add("ativo");
    }
  });
}

window.addEventListener("scroll", revelarElementos);
window.addEventListener("load", revelarElementos);
window.addEventListener("resize", revelarElementos);

revelarElementos();
