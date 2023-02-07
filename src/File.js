// Create the function
export function AjoutLibrary(urlOfTheLibrary) {
  const script = document.createElement("script");
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}

export const libraryList = [
  "/assets/vendor/jquery/jquery.min.js",
  "/assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
  "/assets/vendor/jquery.easing/jquery.easing.min.js",
  "/assets/vendor/php-email-form/validate.js",
  "/assets/vendor/waypoints/jquery.waypoints.min.js",
  "/assets/vendor/owl.carousel/owl.carousel.min.js",
  "/assets/vendor/isotope-layout/isotope.pkgd.min.js",
  "/assets/vendor/venobox/venobox.min.js",
  "/assets/js/jquery.js",
  "/assets/js/main.js"
];
