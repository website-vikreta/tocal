// ===========================================================
// ! HEADER of the website
// ===========================================================
// Class
class WebsiteFooter extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `
      <footer class="bg-dark-950 text-dark-50">
         <div class="flex flex-col gap-14 lg:gap-20 py-20 lg:py-24">
            <!-- Top Footer -->
            <aside>
               <div class="container">
                  <div class="flex flex-col gap-2 md:gap-0">
                     <h3 class="heading text-3xl leading-[120%] font-arimo font-[500]">
                        Don't let your doubts scratch your head.
                     </h3>
                     <h4 class="text-xl">Let us help you.</h4>

                     <div class="flex flex-wrap gap-3 mt-5">
                        <a href="./our-services.html#bookAPilot" class="btn btn__secondary btn__secondary--bordered">
                           Book a free Pilot
                        </a>
                        <a href="./contact-us.html" class="btn btn__primary">
                           <span>Send Us a Message</span>
                           <i class="bi bi-arrow-right"></i>
                        </a>
                     </div>
                  </div>
               </div>
            </aside>
            <!-- Main Footer -->
            <aside>
               <div class="container flex flex-col gap-10 lg:flex-row lg:justify-between">
                  <div class="about flex flex-col gap-3 max-w-[500px]">
                     <h4 class="text-lg font-[700]">About Us</h4>
                     <p class="para text-dark-100 mb-2">
                        At TOCAL, we specialise in hyperlocal and last-mile delivery services. Our platform offers a
                        dedicated fleet of delivery executives equipped with EVs, providing fast and efficient delivery...
                        <a href="./about-us.html" class="text-primary-600 underline hover:text-purple">Read More</a>
                     </p>
                     <p class="para">
                        <span class="font-[600] italic block">Address:</span>
                        <span class="text-sm text-dark-100">VMG3+X4, 1642/C, A Block, AECS Layout – A Block, AECS Layout,
                           Singasandra,
                           Bengaluru, Karnataka 560068</span>
                     </p>
                     <div class="flex flex-wrap gap-10 gap-y-3">
                        <p class="para">
                           <span class="font-[600] italic block">Email:</span>
                           <span class="text-sm text-dark-100">
                              <a href="mailto:info@dbytdynamics.com"
                                 class="underline hover:text-primary-700">info@dbytdynamics.com</a>
                           </span>
                        </p>
                        <p class="para">
                           <span class="font-[600] italic block">Phone:</span>
                           <span class="text-sm text-dark-100 flex gap-2">
                              <a href="tel:918222042225" class="underline hover:text-primary-700">+91-8222042225</a>
                           </span>
                        </p>
                     </div>
                  </div>
                  <div class="links flex flex-wrap gap-20 gap-y-10">
                     <ul class="flex flex-col gap-3">
                        <li>
                           <h4 class="text-lg font-[700]">Important Links</h4>
                        </li>
                        <li>
                           <a href="/our-services.html"
                              class="flex items-center gap-2 text-dark-200 font-[300] hover:text-primary-600 leading-[100%]">
                              <i class="bi bi-caret-right-fill text-primary-600"></i>
                              <span>Our Services</span>
                           </a>
                        </li>
                        <li>
                           <a href="/about-us.html"
                              class="flex items-center gap-2 text-dark-200 font-[300] hover:text-primary-600 leading-[100%]">
                              <i class="bi bi-caret-right-fill text-primary-600"></i>
                              <span>About Us</span>
                           </a>
                        </li>
                        <li>
                           <a href="/become-a-driver.html"
                              class="flex items-center gap-2 text-dark-200 font-[300] hover:text-primary-600 leading-[100%]">
                              <i class="bi bi-caret-right-fill text-primary-600"></i>
                              <span>Become a Driver</span>
                           </a>
                        </li>
                        <li>
                           <a href="/contact-us.html"
                              class="flex items-center gap-2 text-dark-200 font-[300] hover:text-primary-600 leading-[100%]">
                              <i class="bi bi-caret-right-fill text-primary-600"></i>
                              <span>Contact Us</span>
                           </a>
                        </li>
                     </ul>
                     <ul class="flex flex-col gap-3">
                        <li>
                           <h4 class="text-lg font-[700]">Miscellaneous</h4>
                        </li>
                        <li>
                           <a href="#"
                              class="flex items-center gap-2 text-dark-200 font-[300] hover:text-primary-600 leading-[100%]">
                              <i class="bi bi-caret-right-fill text-primary-600"></i>
                              <span>Terms & Conditions</span>
                           </a>
                        </li>
                        <li>
                           <a href="#"
                              class="flex items-center gap-2 text-dark-200 font-[300] hover:text-primary-600 leading-[100%]">
                              <i class="bi bi-caret-right-fill text-primary-600"></i>
                              <span>Privacy Policy</span>
                           </a>
                        </li>
                        <li>
                           <a href="#"
                              class="flex items-center gap-2 text-dark-200 font-[300] hover:text-primary-600 leading-[100%]">
                              <i class="bi bi-caret-right-fill text-primary-600"></i>
                              <span>Become a Driver</span>
                           </a>
                        </li>
                        <li>
                           <a href="#"
                              class="flex items-center gap-2 text-dark-200 font-[300] hover:text-primary-600 leading-[100%]">
                              <i class="bi bi-caret-right-fill text-primary-600"></i>
                              <span>Insurance Policy</span>
                           </a>
                        </li>
                        <li>
                           <a href="#"
                              class="flex items-center gap-2 text-dark-200 font-[300] hover:text-primary-600 leading-[100%]">
                              <i class="bi bi-caret-right-fill text-primary-600"></i>
                              <span>Disclaimer</span>
                           </a>
                        </li>
                        <li>
                           <a href="#"
                              class="flex items-center gap-2 text-dark-200 font-[300] hover:text-primary-600 leading-[100%]">
                              <i class="bi bi-caret-right-fill text-primary-600"></i>
                              <span>Partner Policy</span>
                           </a>
                        </li>
                     </ul>
                     <ul class="flex flex-col gap-3">
                        <li>
                           <h4 class="text-lg font-[700]">Follow Us</h4>
                        </li>
                        <li class="flex flex-wrap gap-2">
                           <a href="https://www.instagram.com/tocal.dbyt/"
                              class="inline-block w-10 aspect-square rounded-lg bg-dark-700 flex items-center justify-center ease-in duration-300 hover:bg-[#E1306C]"
                              title="Follow Us" target="_blank">
                              <i class="bi bi-instagram"></i>
                           </a>
                           <a href="https://www.facebook.com/tocal.dbyt"
                              class="inline-block w-10 aspect-square rounded-lg bg-dark-700 flex items-center justify-center ease-in duration-300 hover:bg-[#4267B2]"
                              title="Become a Friend" target="_blank">
                              <i class="bi bi-facebook"></i>
                           </a>
                           <a href="https://www.linkedin.com/company/dbyt-dynamics-mobility-solutions-private-limited/"
                              class="inline-block w-10 aspect-square rounded-lg bg-dark-700 flex items-center justify-center ease-in duration-300 hover:bg-[#0077b5]"
                              title="Connect with Us" target="_blank">
                              <i class="bi bi-linkedin"></i>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </aside>
         </div>
         <!-- Copyright -->
         <div class="copyright bg-black">
            <div class="container">
               <div class="flex justify-center items-center p-2 text-sm font-[300]">
                  &copy; 2023. All rights reserved &nbsp;| &nbsp;<a href="https://www.tocal.in"
                     class="underline hover:text-primary-600">tocal.in</a>
               </div>
            </div>
         </div>

         <!-- Go to Top -->
         <div href="#" id="goToTop" class="
               hidden flex justify-center items-center 
               w-10 aspect-square p-2 
               bg-black hover:bg-primary-700 rounded-lg cursor-pointer
               fixed right-5 bottom-5 z-index-10" onclick="goToTop()" title="Go to top">
            <i class="bi bi-arrow-up"></i>
         </div>
      </footer>
      `;
   }
}
// Rendering
customElements.define('website-footer', WebsiteFooter);