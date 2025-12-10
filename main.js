// дождь
const rainContainer = document.querySelector('.rain-container');
const dropsCount = 100;

for(let i = 0; i < dropsCount; i++) {
const drop = document.createElement('div');
drop.classList.add('raindrop');

drop.style.width = (Math.random() * 2 + 1) + 'px';
drop.style.height = (Math.random() * 15 + 10) + 'px';
drop.style.left = (Math.random() * 100) + '%';
drop.style.animationDuration = (Math.random() * 1 + 0.8) + 's';
drop.style.animationDelay = (Math.random() * 2) + 's';

rainContainer.appendChild(drop);
}

  // меню
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.menu-card');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentIndex = 0;

  function showCard(index) {
    cards.forEach((card, i) => {
      card.classList.toggle('active', i === index);
    });
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
  });

  showCard(currentIndex);
});

  // открытие и закрытие модалки
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.btn[data-target]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetId = btn.getAttribute('data-target');
      const modal = document.getElementById(targetId);
      if(modal) modal.classList.add('show'); // показываем модалку
    });
  });

  document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modal = btn.closest('.menu-modal');
      if(modal) modal.classList.remove('show');
    });
  });
});

