document.addEventListener("DOMContentLoaded", ready);

function changeClass(item, e) {
  if (window.innerWidth >= 1280) return;
  const titleElement = item.querySelector('.year__title');
  titleElement.classList.toggle('year__title--hide');
  titleElement.classList.toggle('year__title--show');
}

function toggleMenu(e) {
  const menuToggler = document.querySelector('.page-header__menu-toggler');
  const navigation = document.querySelector('.page-header__nav');

  menuToggler.classList.toggle('page-header__menu-toggler--line');
  navigation.classList.toggle('page-header__nav--closed');

  menuToggler.classList.toggle('page-header__menu-toggler--cross');
  navigation.classList.toggle('page-header__nav--opened');
}

function toggleClass(item, className, e) {
  // if (window.innerWidth >= 1280) return;
  item.classList.toggle(className);
  if (/(^Скрыть$|^Подробнее$)/.test(e.srcElement.innerText)) {
    e.srcElement.innerText = e.srcElement.innerText === 'Подробнее' ? 'Скрыть' : 'Подробнее';
  }
}

function ready() {

  const workItems = document.querySelectorAll('.works__item, .equipment__item');
  const menuToggler = document.querySelector('.page-header__menu-toggler');
  const serviceItems = document.querySelectorAll('.services__item-wrapper');
  const productItems = document.querySelectorAll('.product__item-wrapper');
  const productCatalogs = document.querySelectorAll('.product__catalog');
  const form  = document.querySelector('form');
  const submitButton = document.querySelector('.form__button');

  form.addEventListener('submit', (event) => {
    // stop form submission
    event.preventDefault();
    submitButton.disabled = true;
    let formData = new FormData(form);
    fetch('https://formsubmit.co/info@eeg-rus.ru', {
      body: formData,
      method: "post"
    }).then(res => {
      if (res.status === 200) {
        alert('Спасибо, форма была успешно отправлена! ❤');
        form.reset();
        submitButton.disabled = false;
      } else {
        alert('Не удалось отправить форму, пожалуйста, повторите попытку позже 🙏');
        submitButton.disabled = false;
      }
    }).catch(err => {
      alert('Не удалось отправить форму, пожалуйста, повторите попытку позже 🙏');
      submitButton.disabled = false;
    });

});
  // const yearList = document.querySelectorAll('.year__list');

  // yearList.forEach(item => item.addEventListener('click', toggleClass.bind(this, item, 'reset-size')))

  if (window.innerWidth >= 1280) {
    workItems.forEach(item => {
      const titleElement = item.querySelector('.year__title')
      titleElement.classList.remove('year__title--hide');
      titleElement.classList.add('year__title--show');
    })
  }

  workItems.forEach(item => item.addEventListener('click', changeClass.bind(this, item)))
  menuToggler.addEventListener('click', toggleMenu);

  serviceItems.forEach(item => item
    .querySelector('.services__item-link')
    .addEventListener('click', toggleClass.bind(this, item, 'services__item-wrapper--undetailed'))
  )

  productItems.forEach(item => item
    .querySelector('h3')
    .addEventListener('click', toggleClass.bind(this, item, 'product__item-wrapper--closed'))
  )

  productCatalogs.forEach(item => item
    .querySelector('.catalog__link')
    .addEventListener('click', toggleClass.bind(this, item, 'product__catalog--opened'))
  )

  const backToTopButton = document.querySelector('#backToTopButton');
  const html = document.querySelector('html');

  window.addEventListener('scroll', function() {
    if (html.scrollTop > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }

    const yearList = document.querySelectorAll('.year__list');
    [...yearList].forEach((el, index) => {
      const elMidPosition = el.offsetTop - window.innerHeight / 3 * 2;
      // const elMidPosition = el.offsetTop + el.getBoundingClientRect().height - window.innerHeight / 3 * 2;
      // if (index === 0) {
      //   console.log(`${html.scrollTop} > ${elMidPosition}`)
      //   console.log(html.scrollTop > elMidPosition);
      // }
      if (html.scrollTop > elMidPosition && !el.classList.contains('reset-size')) {
        el.classList.add('reset-size')
      }
    })
  })

  backToTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  })

}



