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
    let mensagem = "Olá HBG Reformas!\n\nSolicitação de Orçamento:\n\n";

    for (let [key, value] of formData.entries()) {
      mensagem += `${key}: ${value}\n`;
    }

    const numeroEmpresa = "5551991972451";
    const url = `https://wa.me/${numeroEmpresa}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
  });
});


// ===============================
// CARROSSEL
// ===============================

const carousel = document.querySelector(".carousel");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

if (next && prev && carousel) {
  next.addEventListener("click", () => {
    carousel.scrollBy({ left: 340, behavior: "smooth" });
  });

  prev.addEventListener("click", () => {
    carousel.scrollBy({ left: -340, behavior: "smooth" });
  });
}