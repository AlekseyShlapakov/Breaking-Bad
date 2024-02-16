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
    bgImg.style.transition = 'all 0.5s ease-in';
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


/*--------- Rouls slider ---------*/

const actors = Array.from(document.querySelectorAll ('.section-fourth__preview-img'));
const actorsPhotos = Array.from(document.querySelectorAll ('.section-fourth__right'));
const actorsDescriptions = Array.from(document.querySelectorAll ('.section-fourth--actor'));
const bgPrevImages = Array.from(document.querySelectorAll ('.section-fourth__preview-img--bg'));
const prevLinks = Array.from(document.querySelectorAll ('.section-fourth__preview-title'));

actors.map((actor, index) => {
  actor.addEventListener('click', function () {
    actorsPhotos.map(photo => photo.style.display = 'none');
    actorsDescriptions.map(description => description.style.display = 'none');
    bgPrevImages.map((bgPrevImg, i) => {
      i === index ? bgPrevImg.classList.add('hidden') : bgPrevImg.classList.remove('hidden');
    });
    prevLinks.map((prevLink, i) => {
      i === index ? prevLink.classList.add('acent-color') : prevLink.classList.remove('acent-color');
    });

    setTimeout(() => {
      actorsPhotos[index].classList.remove('hidden');
      actorsDescriptions[index].classList.remove('hidden');
    });

    actorsPhotos.map(photo => photo.classList.add('hidden'));
    actorsDescriptions.map(description => description.classList.add('hidden'));

    actorsPhotos[index].style.display = 'block';
    actorsDescriptions[index].style.display = 'block';
    
  });
});

/*--------- Rouls mobile slider ---------*/

const actorsSliderArrowsLeft = Array.from(document.querySelectorAll ('.section-four__miniatures-arrow--left'));

const actorsSliderArrowsRight = Array.from(document.querySelectorAll ('.section-four__miniatures-arrow--right'));

actorsSliderArrowsRight.map((arrow, index) => {
  arrow.addEventListener('click', function () {
    actorsPhotos.map(photo => photo.style.display = 'none');
    actorsDescriptions.map(description => description.style.display = 'none');

    setTimeout(() => {
      if (index === actorsSliderArrowsRight.length - 1) {
        actorsPhotos[0].classList.remove('hidden');
        actorsDescriptions[0].classList.remove('hidden');
      } else {
        actorsPhotos[index + 1].classList.remove('hidden');
        actorsDescriptions[index + 1].classList.remove('hidden');
      }
    });

    actorsPhotos.map(photo => photo.classList.add('hidden'));
    actorsDescriptions.map(description => description.classList.add('hidden'));

    if (index === actorsSliderArrowsRight.length - 1) {
      actorsPhotos[0].style.display = 'block';
      actorsDescriptions[0].style.display = 'block';
    } else {
      actorsPhotos[index + 1].style.display = 'block';
      actorsDescriptions[index + 1].style.display = 'block';
    }
  })
})


actorsSliderArrowsLeft.map((arrow, index) => {
  arrow.addEventListener('click', function () {
    actorsPhotos.map(photo => photo.style.display = 'none');
    actorsDescriptions.map(description => description.style.display = 'none');

    setTimeout(() => {
      if (index === 0) {
        actorsPhotos[actorsSliderArrowsRight.length - 1].classList.remove('hidden');
        actorsDescriptions[actorsSliderArrowsRight.length - 1].classList.remove('hidden');
      } else {
        actorsPhotos[index - 1].classList.remove('hidden');
        actorsDescriptions[index - 1].classList.remove('hidden');
      }
    });

    actorsPhotos.map(photo => photo.classList.add('hidden'));
    actorsDescriptions.map(description => description.classList.add('hidden'));

    if (index === 0) {
      actorsPhotos[actorsSliderArrowsRight.length - 1].style.display = 'block';
      actorsDescriptions[actorsSliderArrowsRight.length - 1].style.display = 'block';
    } else {
      actorsPhotos[index - 1].style.display = 'block';
      actorsDescriptions[index - 1].style.display = 'block';
    }
  })
})

/*--------- End rouls mobile slider ---------*/

/*--------- Select seasons ----------*/

const subSelectItems = document.querySelector('.sub-items');
const subSelectItems2 = document.querySelector('.sub-items-2');

const subSelectItemsSeasonOne = document.querySelector('.season-1');
const subSelectItemsSeasonTwo = document.querySelector('.season-2');
const subSelectItemsSeasonThree = document.querySelector('.season-3');
const subSelectItemsSeasonFour = document.querySelector('.season-4');
const subSelectItemsSeasonFive = document.querySelector('.season-5');

const allEpisodes = Array.from(document.querySelectorAll ('.wrap__img-test'));
console.log('allEpisodes', allEpisodes);

document.querySelector('.navigation').addEventListener('click', function(e) {
  const target = e.target;
  if(
    target.hasAttribute('data-description') &&
    target.getAttribute ('data-description') == 'sub-items'
  ) {
    subSelectItems.style.display = 'block';
  }

})

document.querySelector('.sub-items').addEventListener('click', function (e) {
  const target = e.target;

  e.preventDefault();

  document.querySelector('.select-item p').innerHTML = target.innerHTML;

  localStorage.setItem('id', target.id);

  subSelectItems.style.display = 'none';

})

document.querySelector('.sub-items-2').addEventListener('click', function (e) {
  const target = e.target;

  e.preventDefault();

  document.querySelector('.select-2__item p').innerHTML = target.innerHTML;

  localStorage.setItem('episode', target.id);

  console.log('local', localStorage.getItem('episode'));

  target.closest('ul').style.display = 'none';

  const currentId = localStorage.getItem('episode');

  allEpisodes.map((episode, i) => {
    allEpisodes[i].style.display = 'none';
    allEpisodes[currentId].style.display = 'block';
  })



})


document.querySelector('.navigation').addEventListener('click', function(e) {
  const target = e.target;
  if(
    target.hasAttribute('data-description') &&
    target.getAttribute ('data-description') == 'select-2__sub-items' &&
    localStorage.getItem('id') === '1 season'
  ) {
    subSelectItemsSeasonOne.style.display = 'block';
  }

  if(
    target.hasAttribute('data-description') &&
    target.getAttribute ('data-description') == 'select-2__sub-items' &&
    localStorage.getItem('id') === '2 season'
  ) {
    subSelectItemsSeasonTwo.style.display = 'block';
  }

  if(
    target.hasAttribute('data-description') &&
    target.getAttribute ('data-description') == 'select-2__sub-items' &&
    localStorage.getItem('id') === '3 season'
  ) {
    subSelectItemsSeasonThree.style.display = 'block';
  }

  if(
    target.hasAttribute('data-description') &&
    target.getAttribute ('data-description') == 'select-2__sub-items' &&
    localStorage.getItem('id') === '4 season'
  ) {
    subSelectItemsSeasonFour.style.display = 'block';
  }

  if(
    target.hasAttribute('data-description') &&
    target.getAttribute ('data-description') == 'select-2__sub-items' &&
    localStorage.getItem('id') === '5 season'
  ) {
    subSelectItemsSeasonFive.style.display = 'block';
  }

})


// document.onclick = function (e) {
//   if (e.target.className !== "navigation") {
//     subNav.style.display = "none";
//   };
// };
