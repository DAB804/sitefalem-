<script>
    window.addEventListener("scroll", function () {
      let nav = document.querySelector("nav");
      let nav_list = document.querySelector(".nav-list");
      let position_nav = window.scrollY > 100;
      nav.classList.toggle("nav-scrolling-active", position_nav);
    });
  </script>