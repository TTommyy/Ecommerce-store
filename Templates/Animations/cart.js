function cont() {
   // Nav => solid background
   const nav = document.querySelector(".nav");
   const navB = document.querySelector(".nav-b");

   nav.classList.add("scroll-nav");
   navB.classList.add("nav-b-active");

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
   const couponDel = document.querySelector(".coupon-del");
   const couponAlert = document.querySelector(".coupon-alert");

   couponButton.addEventListener("click", () => {
      if (coupon.value == couponWord) {
         price.innerHTML = "$49.99";
         couponDel.classList.add("coupon-cancel");
      } else {
         couponAlert.style = "color: red";
         setTimeout(() => couponAlert.style = "color: transparent", 3000);
      }
   });

   couponDel.addEventListener("click", () => {
      coupon.value = "";
      price.innerHTML = "$59.99";
      couponDel.classList.remove("coupon-cancel");
   });

   function qDesktop() { // Media query for desktop
      let mediaDesktop = window.matchMedia("(min-width: 1025px)");
      let mediaDesktop2 = window.matchMedia("(max-width: 1280px)");

      if (mediaDesktop.matches && mediaDesktop2.matches) {

         // Nav - background
         const navD = document.querySelector(".nav-b");
   
         window.addEventListener("scroll", () => {
            let windowPositionD = window.scrollY > 0;
            navD.classList.toggle("nav-b-active", windowPositionD);
         });

      } else {
         console.log("Width > 1280px");
      }
   }
}

cont()