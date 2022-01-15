const portfolioRef = document.querySelector('.portfolio');
const portfolioCardsRef = document.querySelectorAll('.portfolio__item');

const filterRef = document.querySelector('.filter');
const buttonsRef = document.querySelectorAll('.filter__button');
console.log('buttonsRef', buttonsRef);

function filterPortfolio(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const selectedBtnType = event.target.dataset.type;

  portfolioCardsRef.forEach(card => {
    if (
      card.classList.contains(`${selectedBtnType}`) ||
      selectedBtnType === 'js-all'
    ) {
      card.classList.remove('portfolio__item--hidden');
    } else {
      card.classList.add('portfolio__item--hidden');
    }
  });

  buttonsRef.forEach(button => {
    if (button.dataset.type === selectedBtnType) {
      button.classList.add('filter__button--active');
    } else {
      button.classList.remove('filter__button--active');
    }
  });
}

filterRef.addEventListener('click', filterPortfolio);
