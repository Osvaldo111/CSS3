/**
 * Initialize the app
 */
var transNode = document.getElementById("transition");
var animationNode = document.getElementById("animation");
var tranfNode = document.getElementById("tranfEffect");

// localStorage.removeItem("tasks");
function init() {
  // alert("Hello");
  transEffect();
  animationEffect();
  transfEffect();
}
init();

function transEffect() {
  //Change the width
  transNode.onclick = () => {
    transNode.style.width = "500px";
  };
}

function animationEffect() {
  animationNode.onclick = () => {
    animationNode.className = "animationEffectRepeat";
  };

  animationNode.addEventListener("webkitAnimationEnd", () => {
    animationNode.className = "animationEffect";
  });
}
var degree = 20;
function transfEffect() {
  tranfNode.onclick = () => {
    // tranfNode.className = "transfoEffetcRepeat";

    tranfNode.style.transform = "rotate(" + degree + "deg)";
    degree += 20;
  };
}
