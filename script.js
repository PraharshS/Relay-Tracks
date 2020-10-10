$(".site-slider").not(".slick-initialized").slick({
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
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

const words = [
  "Exposure to diverse career paths.",
  "Network of inspiring peers and alumni.",
  "Guidance from the best professionals.",

  "Collaboration with like-minded students",
  "Limitless career opportunities",
  "Learning alongside ambitious peers",
  "Scope to work on path-breaking projects",
  "Develop skills needed for the real world",
];
let K = 0;
let timer;

function typingEffect() {
  let word = words[K].split("");
  var loopTyping = function () {
    if (word.length > 0) {
      document.getElementById("word").innerHTML += word.shift();
    } else {
      deletingEffect();
      return false;
    }
    timer = setTimeout(loopTyping, 100);
  };
  loopTyping();
}

function deletingEffect() {
  let word = words[K].split("");
  var loopDeleting = function () {
    if (word.length > 0) {
      word.pop();
      document.getElementById("word").innerHTML = word.join("");
    } else {
      if (words.length > K + 1) {
        K++;
      } else {
        K = 0;
      }
      typingEffect();
      return false;
    }
    timer = setTimeout(loopDeleting, 100);
  };
  loopDeleting();
}

typingEffect();
