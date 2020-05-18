$(document).ready(function() {
  /*------ Плавная прокрутка ---------*/
  $("a[href*=#]").on("click", function(e) {
    var anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top
        },
        777
      );
    e.preventDefault();
    return false;
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
});

$("#jesse").click(function() {
  console.log("Click!");
  $(".section-fourth__right-jesse").toggleClass("display-block");
  $(".section-fourth__right").toggleClass("display-none");
});

/*---------Упражнение---------*/

var markResult1 = 1111199;
var markResult2 = 120;
var markResult3 = 103;

var markAllResult = (markResult1 + markResult2 + markResult3) / 3;
console.log(markAllResult);

var paulResult1 = 2220;
var paulResult2 = 82;
var paulResult3 = 35;

var paulAllResult = (paulResult1 + paulResult2 + paulResult3) / 3;
console.log(paulAllResult);

if (markAllResult > paulAllResult) {
  console.log("Победила команда Марка");
} else if (markAllResult === paulAllResult) {
  console.log("Победила дружба!");
} else {
  console.log("Победила команда Пола!");
}

var maryResult1 = 87;
var maryResult2 = 105;
var maryResult3 = 140;

var maryAllResult = (maryResult1 + maryResult2 + maryResult3) / 3;
console.log(maryAllResult);

if (markAllResult > paulAllResult && markAllResult > maryAllResult) {
  console.log("Победила команда Марка");
} else if (paulAllResult > markAllResult && paulAllResult > maryAllResult) {
  console.log("Победила команда Пола");
} else if (maryAllResult > markAllResult && maryAllResult > paulAllResult) {
  console.log("Победила команда Мэри");
} else {
  console.log("Ничья!");
}

/*Функции*/

function sayHello() {
  console.log("Hello!");
}

sayHello();
sayHello();
sayHello();
sayHello();
sayHello();
sayHello();
sayHello();
sayHello();
sayHello();
sayHello();
sayHello();
sayHello();
sayHello();
sayHello();
sayHello();
sayHello();
sayHello();
sayHello();
