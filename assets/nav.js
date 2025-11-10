// /assets/nav.js
// nav-loader.js로 nav.html이 불러와진 뒤에 실행되도록 0.5초 대기
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const navRoot = document.getElementById("gt-nav");
    if (!navRoot) return console.warn("nav root not found");

    const toggle = navRoot.querySelector(".toggle");
    const links = navRoot.querySelector(".links");

    if (!toggle || !links) {
      console.warn("nav toggle or links not found yet");
      return;
    }

    console.log("✅ nav.js loaded and active");

    // 햄버거 클릭시 메뉴 열기/닫기
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // 모바일에서 링크 클릭 시 자동 닫기
    links.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          links.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    });

    // 화면 크기 바뀔 때 자동 닫기
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }, 500);
});
