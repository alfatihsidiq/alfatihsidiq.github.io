document.addEventListener("DOMContentLoaded", function () {
  var navbarToggler = document.querySelector(".navbar-toggler");
  var navbarNav = document.querySelector("#navbarNav");

  document.querySelectorAll("#navbarNav .nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.getComputedStyle(navbarNav).display !== "none") {
        navbarToggler.click(); // Simulate click to close the menu
      }
    });
  });
});
