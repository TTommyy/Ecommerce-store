function cont() {
   // Nav => solid background
   const nav = document.querySelector(".nav");

   window.addEventListener("scroll", () => {
      let windowPosition = window.scrollY > 0;
      nav.classList.toggle("scroll-nav", windowPosition);
   });

   // Nav - burger
   const burger = document.querySelector(".burger-menu");
   const burgerMenu = document.querySelector(".nav-menu");

   burger.addEventListener("click", () => {
      burger.classList.toggle("burger-open");
      burgerMenu.classList.toggle("openM");

      if (burger.classList !== "burger-open") {
         productsMenu.classList.remove("products-open");
      }

      if (window.scrollY < 1) {
         nav.classList.toggle("scroll-nav");
      }
   });

   // Nav - products
   const products = document.querySelector(".link-products");
   const productsMenu = document.querySelector(".nav-products")

   products.addEventListener("click", () => {
      productsMenu.classList.toggle("products-open");
   });

   const goBack = document.querySelector(".nav-back");

   goBack.addEventListener("click", () => {
      productsMenu.classList.remove("products-open");
   });
};

cont()