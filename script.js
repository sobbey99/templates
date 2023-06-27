window.addEventListener("DOMContentLoaded", () => {
  const allTriggerModalPhoneBtns = document.querySelectorAll(
    ".check-buttons .view-phone"
  );

  const allCloseModalPhoneBtns = document.querySelectorAll(".close-themodal");

  allTriggerModalPhoneBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      if (e.target.nodeName == "IMG") {
        const phoneModal = e.target.parentNode.nextElementSibling;
        phoneModal.classList.toggle("phone-modal_active");
      } else if (e.target.nodeName == "A") {
        const phoneModal = e.target.nextElementSibling;
        phoneModal.classList.toggle("phone-modal_active");
      }
    });
  });

  allCloseModalPhoneBtns.forEach((close) => {
    close.addEventListener("click", (e) => {
      if (e.target.nodeName == "IMG") {
        e.target.parentNode.parentNode.parentNode.classList.remove(
          "phone-modal_active"
        );
      } else if (e.target.nodeName == "DIV") {
        e.target.parentNode.parentNode.classList.remove("phone-modal_active");
      }
    });
  });
});
