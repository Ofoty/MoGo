
// Accordion
document.querySelectorAll('.faq__header').forEach((item) =>
  item.addEventListener('click', () => {
    const parent = item.parentNode;


    if(parent.classList.contains('faq__item--active')) {
      parent.classList.remove('faq__item--active');
    } else {
      document.querySelectorAll('.faq__item').forEach((child) => child.classList.remove('faq__item--active'))
      parent.classList.add('faq__item--active')
    }
  })
)

// Slider

let position = 0;
const slidesToShow = 1;
const container = document.querySelector('.review__content');
const track = document.querySelector('.reviews__container');
const btnPrev = document.querySelector('.reviews__btn--prev');
const btnNext = document.querySelector('.reviews__btn--next');
const items = document.querySelectorAll('.reviews__item');
const itemsCount = items.length;
const itemWidth = container.clientWidth;


btnPrev.addEventListener('click', () => {
  
  position += itemWidth;
  setPosition();
  checkBtns();
})

btnNext.addEventListener('click', () => {
  
  position -= itemWidth;
  
  setPosition();
  checkBtns();
})

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
}

const checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
}

checkBtns();