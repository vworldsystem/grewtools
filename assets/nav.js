// /assets/nav.js
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("gt-nav");
  if (!nav) return;

  const toggle = nav.querySelector(".toggle");
  const links = nav.querySelector(".links");

  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // 링크 클릭 시 닫힘
  nav.querySelectorAll(".links a").forEach((a) => {
    a.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  });
});
