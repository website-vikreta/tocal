// Passive event listeners
jQuery.event.special.touchstart = {
   setup: function (_, ns, handle) {
      this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
   }
};
jQuery.event.special.touchmove = {
   setup: function (_, ns, handle) {
      this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
   }
};

// Handling Scoll
$(window).scroll(function () {
   if ($(this).scrollTop() > 80) {
      $('#header').addClass('scroll');
   } else {
      $('#header').removeClass('scroll');
   }

   if ($(this).scrollTop() < 300) {
      $('#goToTop').addClass('hidden');
   } else {
      $('#goToTop').removeClass('hidden');
   }
});

$(window).on('load', function () {
   // Initiate Animation
   AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
   });
})

function goToTop() {
   document.body.scrollTop = 0; // For Safari
   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
