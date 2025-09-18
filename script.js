function toggleNavbar() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
 
  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const navCollapse = document.querySelector(".navbar-collapse");
    const navbarToggler = document.querySelector(".navbar-toggler i");

    // Close navbar on link click
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (navCollapse.classList.contains("show")) {
          document.querySelector(".navbar-toggler").click();
        }
      });
    });

    // Change toggler icon between list and x
    document.querySelector(".navbar-toggler").addEventListener("click", function () {
      if (navbarToggler.classList.contains("bi-list")) {
        navbarToggler.classList.replace("bi-list", "bi-x");
        navbarToggler.classList.add("text-white");
      } else {
        navbarToggler.classList.replace("bi-x", "bi-list");
      }
    });
  }); 
 
