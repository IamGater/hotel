const swiper = new Swiper('.swiper', {
    // Optional parameters
    
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
  });

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal() {
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  }
  function closeModal() {
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }

AOS.init();
  
const burger = document.querySelector('.burger')

burger.addEventListener('click', () => {
  burger.classList.toggle('burger_active')
})


const extractNodesFrom = selector => {
  [...document.querySelectorAll(selector)].forEach(fw => {
    const parent = fw.parentNode;
    [...fw.children].forEach(child => {
      parent.appendChild(child);
    });

    parent.removeChild(fw);
  });
};



 const checkMediaQuery = () => {
  if (window.innerWidth < 992) {
    extractNodesFrom(".fw");
   } else {
     console.log('1')
    // extractNodesFrom(".fw");
  }
}
checkMediaQuery()
