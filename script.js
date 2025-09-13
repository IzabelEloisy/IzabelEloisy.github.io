// ======= BUSCA =======
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", () => {
  const termo = searchInput.value.toLowerCase();
  document.querySelectorAll(".item").forEach(item => {
    const nome = item.querySelector("h2").innerText.toLowerCase();
    item.style.display = nome.includes(termo) ? "block" : "none";
  });
});

// ======= FILTROS =======
const botoes = document.querySelectorAll(".filtros button");
botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    botoes.forEach(b => b.classList.remove("ativo"));
    botao.classList.add("ativo");

    const filtro = botao.getAttribute("data-filter");
    document.querySelectorAll(".item").forEach(item => {
      if (filtro === "all" || item.dataset.categoria === filtro) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// ======= MODAL =======
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitulo = document.getElementById("modal-titulo");
const modalPreco = document.getElementById("modal-preco");
const modalDesc = document.getElementById("modal-desc");
const fechar = document.getElementById("fechar");

document.querySelectorAll(".item").forEach(item => {
  item.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = item.querySelector("img").src;
    modalTitulo.innerText = item.querySelector("h2").innerText;
    modalPreco.innerText = item.querySelector("p").innerText;
    modalDesc.innerText = item.dataset.descricao;
  });
});

fechar.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});