var row = document.querySelector(".left");
// row.children[1].classList.add("activeRow");
// row.children[1].lastElementChild.classList.add("activeP");
for (let index = 0; index < row.children.length; index++) {
  setTimeout(() => {
    row.children[index].classList.add("activeRow");
    row.children[index].lastElementChild.classList.add("activeP");
  }, 3000);
}

// setInterval(() => {
//   for (let index = 0; index < row.children.length; index++) {
//     for (let j = 0; j < row.children.length; j++) {
//       if (j == index) {
//         // console.log(j);
//         row.children[j].classList.add("activeRow");
//         row.children[j].lastElementChild.classList.add("activeP");
//       } else {
//         row.children[j].classList.remove("activeRow");
//         row.children[j].lastElementChild.classList.remove("activeP");
//       }
//     }
//   }
// }, 3000);
row.children[2].lastElementChild.classList.remove("activeP");
$(".animationText").not(".slick-initialized").slick({
  autoplay: true,
  autoplaySpeed: 1500,
  vertical: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  // fade: true,
  // centerMode: true,
  // centerMargin: "30px",
  prevArrow: ".site-slider .slider-btn .prev",
  nextArrow: ".site-slider .slider-btn .next",
});
$(".site-slider").not(".slick-initialized").slick({
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: ".site-slider .slider-btn .prev",
  nextArrow: ".site-slider .slider-btn .next",
});
$(".right").not(".slick-initialized").slick({
  autoplay: true,
  autoplaySpeed: 3000,
  // dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: ".site-slider .slider-btn .prev",
  nextArrow: ".site-slider .slider-btn .next",
});

// var btn = document.querySelector(".menu");
// var nav = document.querySelector(".nav-list");

// btn.addEventListener("click", function () {
//   console.log("clickd");
//   nav.classList.toggle("show");
// });

// const words = [
//   "Exposure to diverse career paths.",
//   "Network of inspiring peers and alumni.",
//   "Guidance from the best professionals.",

//   "Collaboration with like-minded students",
//   "Limitless career opportunities",
//   "Learning alongside ambitious peers",
//   "Scope to work on path-breaking projects",
//   "Develop skills needed for the real world",
// ];
// let K = 0;
// let timer;

// function typingEffect() {
//   let word = words[K].split("");
//   var loopTyping = function () {
//     if (word.length > 0) {
//       document.getElementById("word").innerHTML += word.shift();
//     } else {
//       deletingEffect();
//       return false;
//     }
//     timer = setTimeout(loopTyping, 100);
//   };
//   loopTyping();
// }

// function deletingEffect() {
//   let word = words[K].split("");
//   var loopDeleting = function () {
//     if (word.length > 0) {
//       word.pop();
//       document.getElementById("word").innerHTML = word.join("");
//     } else {
//       if (words.length > K + 1) {
//         K++;
//       } else {
//         K = 0;
//       }
//       typingEffect();
//       return false;
//     }
//     timer = setTimeout(loopDeleting, 100);
//   };
//   loopDeleting();
// }

// typingEffect();
