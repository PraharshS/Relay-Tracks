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
let i = 0;
let timer;

function typingEffect() {
  let word = words[i].split("");
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
  let word = words[i].split("");
  var loopDeleting = function () {
    if (word.length > 0) {
      word.pop();
      document.getElementById("word").innerHTML = word.join("");
    } else {
      if (words.length > i + 1) {
        i++;
      } else {
        i = 0;
      }
      typingEffect();
      return false;
    }
    timer = setTimeout(loopDeleting, 100);
  };
  loopDeleting();
}

typingEffect();
