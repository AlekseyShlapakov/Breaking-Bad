$ (document).ready (function () {
  /*------ Плавная прокрутка ---------*/
  $ ('a[href*=#]').on ('click', function (e) {
    var anchor = $ (this);
    $ ('html, body').stop ().animate (
      {
        scrollTop: $ (anchor.attr ('href')).offset ().top,
      },
      777
    );
    e.preventDefault ();
    return false;
  });
});

 /*-------- Кнопка навигации ----*/
 const menuToggle = document.querySelector("#menu-togle");
 const mobileNavContainer = document.querySelector("#mobile-nav");
 // const castContainer = document.querySelector('#jesse');

 menuToggle.onclick = function() {
   menuToggle.classList.toggle("menu-icon-active");
   mobileNavContainer.classList.toggle("mobile-nav--active");
   // castContainer.classList.toggle('display-none');
 };

/*------ Slider in header! ---------*/

const bgImg = document.querySelector ('.wrapper');

const firstText = document.querySelector ('.middle-panel__first-text');

const secondText = document.querySelector ('.middle-panel__second-text');

const thirdText = document.querySelector ('.middle-panel__third-text');

document.querySelector ('.row-menu').addEventListener ('click', function (e) {
  let target = e.target;

  if (
    target.hasAttribute ('data-direction') &&
    target.getAttribute ('data-direction') == 'right'
  ) {
    firstText.style.display = 'none';
    secondText.style.display = 'block';

    secondText.classList.add('fade');
    bgImg.style.backgroundImage = 'url(./img/header-img/jesse.png)';
    // transition: all 0.3s ease-in;
    bgImg.style.transition = 'all 0.3s ease-in';
    secondText.style.transition = 'all 0.3s ease-in';
  } 
});

document.querySelector ('.row-menu__second').addEventListener ('click', function (e) {
  let target = e.target;

 if (
    target.hasAttribute ('data-direction') &&
    target.getAttribute ('data-direction') == 'right-second'
  ) {
    firstText.style.display = 'none';
    secondText.style.display = 'none';
    thirdText.style.display = 'block';
    bgImg.style.backgroundImage = 'url(./img/header-img/mike.png)';
  } else if (
    target.hasAttribute ('data-direction') &&
    target.getAttribute ('data-direction') == 'left-second'
  ) {
    firstText.style.display = 'block';
    secondText.style.display = 'none';
    thirdText.style.display = 'none';
    bgImg.style.backgroundImage = 'url(./img/header-img/walter.png)';
  }
});

document.querySelector ('.row-menu__third').addEventListener ('click', function (e) {
  let target = e.target;

 if (
    target.hasAttribute ('data-direction') &&
    target.getAttribute ('data-direction') == 'left-third'
  ) {
    firstText.style.display = 'none';
    secondText.style.display = 'block';
    thirdText.style.display = 'none';
    bgImg.style.backgroundImage = 'url(./img/header-img/jesse.png)';
  }
});



/*------ Slider section fourth! ---------*/


const firstMiniaturesWrap = document.querySelector ('.section-fourth__miniatures--first');
const secondMiniaturesWrap = document.querySelector ('.section-fourth__miniatures--second');
const sectionFourArrowsFirst = document.querySelector ('.section-fourth__arrows--first');
const sectionFourArrowsSecond = document.querySelector ('.section-fourth__arrows--second');

const test = document.querySelector ('.section-fourth__arrow');

document.querySelector ('.section-fourth__arrows--first').addEventListener ('click', function (e) {
  let target = e.target;

  if (
    target.hasAttribute ('data-direction--miniatures') &&
    target.getAttribute ('data-direction--miniatures') == 'right'
  ) {
    firstMiniaturesWrap.style.display = 'none';
    secondMiniaturesWrap.style.display = 'block';

    sectionFourArrowsFirst.style.display = 'none';
    sectionFourArrowsSecond.style.display = 'block';

    firstMiniaturesWrap.style.transition = 'all 0.5s ease-in';
    secondMiniaturesWrap.style.transition = 'all 0.5s ease-in';
  }
});

document.querySelector ('.section-fourth__arrows--second').addEventListener ('click', function (e) {
  let target = e.target;

  if (
    target.hasAttribute ('data-direction--miniatures') &&
    target.getAttribute ('data-direction--miniatures') == 'left'
  ) {
    firstMiniaturesWrap.style.display = 'block';
    secondMiniaturesWrap.style.display = 'none';

    sectionFourArrowsFirst.style.display = 'block';
    sectionFourArrowsSecond.style.display = 'none';

    firstMiniaturesWrap.style.transition = 'all 0.5s ease-in';
    secondMiniaturesWrap.style.transition = 'all 0.5s ease-in';
  } 
});



// const firstMiniaturesWrap = document.querySelector ('.section-fourth__miniatures--first');
// const firstArrow = document.querySelector ('.arrow-opacity');

// const secondMiniaturesWrap = document.querySelector ('.section-fourth__miniatures--second');

// // const thirdText = document.querySelector ('.middle-panel__third-text');

// document.querySelector ('.section-fourth__arrow').addEventListener ('click', function (e) {
//   let target = e.target;

//   if (
//     target.hasAttribute ('data-direction--miniatures') &&
//     target.getAttribute ('data-direction--miniatures') == 'right'
//   ) {
//     firstMiniaturesWrap.style.display = 'none';
//     firstArrow.style.display = 'row-menu__right--opacity';
//     secondMiniaturesWrap.style.display = 'block';

//     firstMiniaturesWrap.style.transition = 'all 0.5s ease-in';
//     secondMiniaturesWrap.style.transition = 'all 0.5s ease-in';
//   } 
// });


const actors = Array.from(document.querySelectorAll ('[data-description=section-fourth--actor]'));
// console.log('actors', actors);
const walter = document.querySelector ('.section-fourth--walter');

actors.map(actor => console.log(actor.className));

document.querySelector ('.section-fourth__preview').addEventListener ('click', function (e) {
  let target = e.target;
  console.log('target', target);

  actors.map(actor => {
    if(target.className === actor.className) {
      actor.style.display = 'block';
      walter.style.display = 'none';
    }
  });
});