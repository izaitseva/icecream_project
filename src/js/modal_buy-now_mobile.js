 (() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open_buy-now_mobile]"),
    closeModalBtn: document.querySelector("[data-modal-close_buy-now_mobile]"),
    modal: document.querySelector("[data-menu]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();