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
    bgImg.style.backgroundImage = 'url(../img/header-img/jesse1.png)';
    // transition: all 0.3s ease-in;
    // bgImg.style.transition = 'all 1s ease-in';
    // secondText.style.transition = 'all 1s ease-in';
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
    bgImg.style.backgroundImage = 'url(../img/header-img/walter.png)';
  } else if (
    target.hasAttribute ('data-direction') &&
    target.getAttribute ('data-direction') == 'left-second'
  ) {
    firstText.style.display = 'block';
    secondText.style.display = 'none';
    thirdText.style.display = 'none';
    bgImg.style.backgroundImage = 'url(../img/header-img/walter.png)';
  }
});

document.querySelector ('.row-menu__third').addEventListener ('click', function (e) {
  let target = e.target;
  console.log('target', target)

 if (
    target.hasAttribute ('data-direction') &&
    target.getAttribute ('data-direction') == 'left-third'
  ) {
    firstText.style.display = 'none';
    secondText.style.display = 'block';
    thirdText.style.display = 'none';
    bgImg.style.backgroundImage = 'url(../img/header-img/jesse1.png)';
  }
});
