

(function() {
  "use strict";

  /**ESTO SIRVE
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }



  /**ESTO SIRVE
   * Easy on scroll event listener  TRANSICIONES
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**ESTO SIVE
   * Aparece en color el icono que esta siendo usado en el nav
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)



  /** ESTO SIRVE
   * Flechita Back To top
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }


/*ESTO SIRVE*/ 
  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

 
    /**ESTO SIRVE
   * Mobile nav toggle hace aparecer el nav en modo celu
   */
    on('click', '.mobile-nav-toggle', function(e) {
      select('body').classList.toggle('mobile-nav-active')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
    })

  // Obtener referencias a los elementos
const mobileNavToggle = document.getElementById('mobileNavToggle');
const tomasContainer = document.querySelector('.tomas-container');

// Agregar un evento de clic al icono de navegación móvil
mobileNavToggle.addEventListener('click', function() {
    // Verificar si el contenedor está actualmente visible
    if (tomasContainer.style.display !== 'none') {
        // Si está visible, ocultarlo
        tomasContainer.style.display = 'none';
    } else {
        // Si está oculto, mostrarlo
        tomasContainer.style.display = 'block';
    }
});

})()