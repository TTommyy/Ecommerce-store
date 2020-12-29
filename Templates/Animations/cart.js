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

   // Coupon
   const coupon = document.getElementById("cart-coupon-input");
   const price = document.querySelector(".c-recap-amm");
   const couponWord = "Dog";
   const couponButton = document.querySelector(".cart-coupon button");

   couponButton.addEventListener("click", () => {
      if (coupon.value == couponWord) {
         price.innerHTML = "$49.99";
      }
   });
}

cont()