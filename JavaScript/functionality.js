// Open and close sidebar
function openNav() {
  document.getElementById("mySidebar").style.width = "60%";
  document.getElementById("mySidebar").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidebar").style.display = "none";
}

// To add sound function to page video
document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("myVideo");
  const muteButton = document.getElementById("toggleMute");

  // Try to play the video with sound after user interaction
  function enableSound() {
    video.muted = false;
    video
      .play()
      .catch((error) => console.log("Autoplay with sound blocked:", error));
  }

  // Automatically try to unmute after user interaction
  document.body.addEventListener("click", enableSound, { once: true });

  // Toggle mute button
  muteButton.addEventListener("click", function () {
    video.muted = !video.muted;
    muteButton.textContent = video.muted ? "Listen" : "Mute";
  });
});

// Slider functionality
document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 0;

  function showSlides() {
    let slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }

  showSlides();
});

function plusSlides(n) {
  slideIndex += n;
  let slides = document.getElementsByClassName("slides");
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

showSlides(); // Start the automatic slideshow
