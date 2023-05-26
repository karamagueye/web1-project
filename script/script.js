var marqueeContainer = document.getElementById("marquee-container");
var marqueeText = document.getElementById("marquee-text");

function marqueeAnimation() {
  marqueeText.style.transform = "translateX(" + marqueeContainer.offsetWidth + "px)";
  marqueeText.style.transition = "transform 5s linear";
  marqueeText.addEventListener("transitionend", function() {
    marqueeText.style.transform = "translateX(0)";
    marqueeText.style.transition = "";
    marqueeAnimation();
  });
}

marqueeAnimation();













