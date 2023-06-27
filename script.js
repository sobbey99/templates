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

  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobileMenu");
  const closeMenu = document.querySelector(".closeMenu");
  const allMobileMenuItems = document.querySelectorAll(
    "li.navigation__item_mobile"
  );

  hamburger.addEventListener("click", (e) => {
    e.preventDefault();
    hamburger.classList.toggle("hamburger_active");
    mobileMenu.classList.toggle("active");
  });

  closeMenu.addEventListener("click", (e) => {
    e.preventDefault();
    mobileMenu.classList.remove("active");
    hamburger.classList.remove("hamburger_active");
  });

  allMobileMenuItems.forEach((item) => {
    item.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      hamburger.classList.remove("hamburger_active");
    });
  });
});
