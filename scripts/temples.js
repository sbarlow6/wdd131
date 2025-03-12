document.addEventListener("DOMContentLoaded", () => {
  
  const menuActivador = document.getElementById("menu-activador");
  const menu = document.getElementById("menu");

   menuActivador.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});
