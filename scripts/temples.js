
document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("LastModified").textContent = "Last Modified: " + document.lastModified;

let openMenuBtn
let closeMenuBtn
let mobileMenu

document.addEventListener("DOMContentLoaded", function () { 

  openMenuBtn = document.getElementById("open-menu"); 

  closeMenuBtn = document.getElementById("close-menu"); 

  mobileMenu = document.getElementById("mobile-menu"); 

  

  openMenuBtn.addEventListener("click", () => { 

    mobileMenu.classList.add("active"); 

  }); 

  

  closeMenuBtn.addEventListener("click", () => { 

    mobileMenu.classList.remove("active"); 
    console.log("Close Button clicked")
  }); 

  

  // Opcional: cerrar el menú al hacer clic en un enlace 

  const navLinks = mobileMenu.querySelectorAll("a"); 

  navLinks.forEach(link => 

    link.addEventListener("click", () => { 

      mobileMenu.classList.remove("active"); 

    }) 

  ); 

}); 


/*
document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("LastModified").textContent = "Last Modified: " + document.lastModified;



const menuButton = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    const isOpen = navMenu.classList.contains("show");
    menuButton.textContent = isOpen ? "❌" : "☰";
});

*/