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
   console.log("Grgr")

   goBack.addEventListener("click", () => {
      productsMenu.classList.remove("products-open");
   });

   // Sign in
   const signIn = document.querySelector(".sign-in");
   const signInLink = document.getElementById("sign-in-link");
   const signInBack = document.querySelector(".sign-in-back");
   const signUpBtn = document.querySelector(".sign-ing-button");
   const signUp = document.querySelector(".sign-up2");
   const signUpBack = document.querySelector(".sign-up-back");
   const signInButton = document.querySelector(".sign-up-button");

   signInLink.addEventListener("click", () => {
      signIn.classList.toggle("sign-in-active");
   });

   signInBack.addEventListener("click", () => {
      signIn.classList.remove("sign-in-active");
   });

   signUpBtn.addEventListener("click", () => {
      signUp.classList.add("sign-up-active");
      signIn.classList.remove("sign-in-active");
   });

   signUpBack.addEventListener("click", () => {
      signUp.classList.remove("sign-up-active");
   });
   
   signInButton.addEventListener("click", () => {
      signIn.classList.add("sign-in-active");
      signUp.classList.remove("sign-up-active");
   });
};

cont()