
const SMALLCUPS = document.querySelectorAll('.cup-small');
const LITERS = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

BigCup();

SMALLCUPS.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx));
  });
  
  function highlightCups(idx) {
    if (
      SMALLCUPS[idx].classList.contains('full') &&
      !SMALLCUPS[idx].nextElementSibling.classList.contains('full')
    ) {
      idx--;
    }
  
    SMALLCUPS.forEach((cup, idx2) => {
      if (idx2 <= idx) {
        cup.classList.add('full');
      } else {
        cup.classList.remove('full');
      }
    });

  BigCup();
}

function BigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = SMALLCUPS.length;

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'VISIBLE';
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    LITERS.innerText = `${2 - fullCups * 0.25}L`;
  }
}
