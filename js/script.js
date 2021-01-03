document.querySelectorAll('.faq__item').forEach((item) =>
  item.addEventListener('click', () => {
    if(item.classList.contains('faq__item--active')) {
      item.classList.remove('faq__item--active');
    } else {
      item.classList.add('faq__item--active');
    }
  })
)