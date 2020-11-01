/* Cute little script that makes Constanze smile when you click her. */
var avatar = null;
var clicked = false;

// Preload the image so it pops in instantly when we need it.
var img = new Image();
img.src = "img/avatar/clicked.gif";

function click() {
  if (clicked) {
    return;
  }
  clicked = true;

  if (avatar.classList.contains("wiggle")) {
    avatar.classList.remove("wiggle");
  }

  avatar.src = "img/avatar/clicked.gif"
  avatar.classList.add("clicked");
}

document.addEventListener("DOMContentLoaded", () => {
  avatar = document.getElementById("avatar");
  if (avatar == undefined) {
    return;
  }

  if (!avatar.classList.contains("wiggle")) {
    avatar.classList.add("wiggle");
  }
  
  avatar.addEventListener("click", click);
});