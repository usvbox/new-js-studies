'use strict';

///////////////////////////////////////
// Elements

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const header = document.querySelector('.header');
const navLinksEl = document.querySelector('.nav__links');

// Modals

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Page Navigation

// document.querySelectorAll('.nav__link').forEach(link =>
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   })
// );

navLinksEl.addEventListener('click', function (e) {
  e.preventDefault();
  // if (e.target.classList.contains('nav__link'))
  //if (e.target.matches('.nav__link'))
  if (e.target.matches('.nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Created Elements

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies for improved performance.';
message.innerHTML =
  'We use cookies for improved performance. <button class="btn btn--close-cookie">Got it!</button>';
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

header.after(message);
const cookieBtnEl = document.querySelector('.btn--close-cookie');

cookieBtnEl.addEventListener('click', () => {
  message.remove();
});

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

// Scrolling

btnScrollTo.addEventListener('click', e => {
  const s1coords = section1.getBoundingClientRect();
  //console.log(s1coords);
  //console.log(e.target.getBoundingClientRect());
  console.log('Current scroll (X/Y)', window.pageYOffset, window.pageXOffset);
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  console.log(
    s1coords.left + window.pageXOffset,
    s1coords.top + window.pageYOffset
  );
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  //window.scrollTo(0, 200);

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  section1.scrollIntoView({ behavior: 'smooth' });
});

/////////////////////////
// Lectures

////// DOM Traversing

const h1 = document.querySelector('h1');

//// Going Downwards: child

console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.style.color = 'orangered';
h1.lastElementChild.style.color = 'white';

//// Going Upwards: parent

console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary';

//// Going sideways: sibling

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(el => {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});

//Attributes

// console.log(message.style.backgroundColor);
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// console.log(document);

// const AllSections = document.querySelectorAll('.section');
// console.log(AllSections);
//
// document.getElementById('section--1');
//
// const AllButtons = document.getElementsByTagName('button');
// console.log(AllButtons);
//
// console.log(document.getElementsByClassName('btn'));

//header.append(message);
//header.prepend(message);
//header.append(message.cloneNode(true));
//header.before(message);
// document.documentElement.style.setProperty('--color-primary', 'orangered');
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.className);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('designer', 'Roman');
// console.log(logo.getAttribute('designer'));
// logo.alt = 'Beautiful minimalist logo';
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.getAttribute('src'));
// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));
//
// //Data Attributes
// console.log(logo.dataset.versionNumber);
//
// //Classes
// logo.classList.add('class1', 'class2');
// logo.classList.remove('class2');
// logo.classList.toggle('class1');
// logo.classList.contains('class1');

// const h1 = document.querySelector('h1');
//
// const displayHeader = () => {
//   alert("onmousenter: Great! You're reading the heading");
// };
// h1.addEventListener('mouseenter', displayHeader);
//
// setTimeout(() => h1.removeEventListener('mouseenter', displayHeader), 3000);

// h1.onmouseenter = e => {
//   alert("onmousenter: Great! You're reading the heading");
// };

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1)) + min;
//
// const randomColor = () => `rgb(
//   ${randomInt(0, 255)},
//   ${randomInt(0, 255)},
//   ${randomInt(0, 255)})`;
//
// console.log(randomColor());
//
// const featuresEl = document.querySelector('.nav__link');
// const itemsEl = document.querySelector('.nav__item');
// const linksEl = document.querySelector('.nav__links');
// const navEl = document.querySelector('.nav');
//
// featuresEl.addEventListener('click', function (e) {
//   e.preventDefault();
//   this.style.backgroundColor = randomColor();
//   console.log('Link', e.target);
//   console.log('El', featuresEl);
// });
//
// linksEl.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Links', e.target);
//   console.log('El', linksEl);
//   console.log(this === e.currentTarget);
//   e.stopPropagation();
// });
//
// navEl.addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('Nav', e.target);
//     console.log('El', navEl);
//   },
//   true
// );
