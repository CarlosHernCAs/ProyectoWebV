// Selección de elementos del modal
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalImg = document.getElementById("modal-img");
const modalPrice = document.getElementById("modal-price");
const modalDesc = document.getElementById("modal-desc");
const closeBtn = document.querySelector(".modal .close");

// Asignar evento a cada botón "Vista previa"
document.querySelectorAll(".btn-preview").forEach(button => {
  button.addEventListener("click", () => {
    const title = button.getAttribute("data-title");
    const img = button.getAttribute("data-img");
    const price = button.getAttribute("data-price");
    const desc = button.getAttribute("data-desc");

    // Insertar valores en el modal
    modalTitle.textContent = title;
    modalImg.src = img;
    modalPrice.textContent = price;
    modalDesc.textContent = desc;

    // Mostrar modal
    modal.style.display = "flex";
  });
});

// Cerrar modal al hacer clic en la "X"
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Cerrar modal si se hace clic fuera del contenido
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
