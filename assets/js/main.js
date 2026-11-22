// Menú desplegable en móvil
(function () {
  var sidebar = document.querySelector(".sidebar");
  var toggle = document.querySelector(".menu-toggle");
  if (!sidebar || !toggle) return;

  toggle.addEventListener("click", function () {
    var open = sidebar.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && sidebar.classList.contains("open")) {
      sidebar.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus();
    }
  });
})();
