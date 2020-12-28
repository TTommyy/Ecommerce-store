function cont() {
   // Nav => solid background
   const nav = document.querySelector(".nav");

   nav.classList.add("scroll-nav");

   // Nav - burger
   const burger = document.querySelector(".burger-menu");
   const burgerMenu = document.querySelector(".nav-menu");

   burger.addEventListener("click", () => {
      burger.classList.toggle("burger-open");
      burgerMenu.classList.toggle("openM");

      if (burger.classList !== "burger-open") {
         productsMenu.classList.remove("products-open");
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
}

cont()