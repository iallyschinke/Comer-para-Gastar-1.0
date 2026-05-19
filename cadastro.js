const btnMenuMobile = document.querySelector(".btn-menu-mobile");
const header = document.querySelector(".header");
const linksMenu = document.querySelectorAll(".menu a");

btnMenuMobile.addEventListener("click", () => {
  header.classList.toggle("menu-aberto");

  btnMenuMobile.innerHTML = header.classList.contains("menu-aberto")
    ? "×"
    : "☰";
});

linksMenu.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("menu-aberto");
    btnMenuMobile.innerHTML = "☰";
  });
});

/* SCROLL REVEAL */

const elementosReveal = document.querySelectorAll(".scroll-reveal");

const observer = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("ativo");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

elementosReveal.forEach((elemento) => {
  observer.observe(elemento);
});
