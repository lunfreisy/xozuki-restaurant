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