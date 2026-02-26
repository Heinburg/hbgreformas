// ===============================
// MENU HAMBURGUER
// ===============================

const hamburguer = document.getElementById("hamburguer");
const menu = document.querySelector(".menu");
const linksMenu = document.querySelectorAll(".menu a");

if (hamburguer && menu) {
  hamburguer.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  // Fecha o menu ao clicar em um link
  linksMenu.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
}


// ===============================
// ABRIR FORMULÁRIO AO CLICAR NO CARD
// ===============================

const cards = document.querySelectorAll(".card");
const forms = document.querySelectorAll(".form-servico");

cards.forEach(card => {
  card.addEventListener("click", () => {

    const servico = card.dataset.servico;

    forms.forEach(form => {
      form.style.display = "none";
    });

    const formAtivo = document.getElementById(`form-${servico}`);

    if (formAtivo) {
      formAtivo.style.display = "block";
      formAtivo.scrollIntoView({ behavior: "smooth" });
    }

  });
});


// ===============================
// ENVIO PARA WHATSAPP (PROFISSIONAL)
// ===============================

forms.forEach(form => {
  form.addEventListener("submit", function(e) {

    e.preventDefault();

    const formData = new FormData(form);

    let mensagem = "Olá HBG Reformas!%0A%0ASolicitação de Orçamento:%0A%0A";

    for (let [key, value] of formData.entries()) {
      mensagem += `${key}: ${value}%0A`;
    }

    const numeroEmpresa = "5551991972451";
    const url = `https://wa.me/${numeroEmpresa}?text=${mensagem}`;

    window.open(url, "_blank");

  });
});


// ===============================
// CARROSSEL
// ===============================

const carousel = document.querySelector(".carousel");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

if (carousel && next && prev) {

  next.addEventListener("click", () => {
    carousel.scrollBy({
      left: 300,
      behavior: "smooth"
    });
  });

  prev.addEventListener("click", () => {
    carousel.scrollBy({
      left: -300,
      behavior: "smooth"
    });
  });

}