window.addEventListener("scroll", function () {
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
$(document).ready(function () {
  $(".menu-toggle").click(function () {
    $("nav").toggleClass("active");
  });
});
