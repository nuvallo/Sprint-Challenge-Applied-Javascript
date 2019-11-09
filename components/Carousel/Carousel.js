/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector(".carousel-container");

function newCarousel() {
  // Elements
  const carousel = document.createElement("div");
  const leftBtn = document.createElement("div");
  const imageOne = document.createElement("img");
  const imageTwo = document.createElement("img");
  const imageThree = document.createElement("img");
  const imageFour = document.createElement("img");
  const rightBtn = document.createElement("div");

  // classes / attributes
  carousel.classList.add("carousel");
  leftBtn.classList.add("left-button");
  rightBtn.classList.add("right-button");
  imageOne.src = "./assets/carousel/mountains.jpeg";
  imageTwo.src = "./assets/carousel/computer.jpeg";
  imageThree.src = "./assets/carousel/trees.jpeg";
  imageFour.src = "./assets/carousel/turntable.jpeg";
  imageOne.style = "display: block";

  // content
  leftBtn.textContent = "<";
  rightBtn.textContent = ">";

  // functionality
  leftBtn.addEventListener("click", () => {
    imageOne.style = "display: none";
    imageTwo.style = "display: block";
    imageThree.style = "display: none";
  });
  rightBtn.addEventListener("click", () => {
    imageOne.style = "display: none";
    imageTwo.style = "display: none;";
    imageThree.style = "display: block";
  });

  // append
  carouselContainer.append(carousel);
  carousel.append(leftBtn);
  carousel.append(imageOne);
  carousel.append(imageTwo);
  carousel.append(imageThree);
  carousel.append(imageFour);
  carousel.append(rightBtn);
}

newCarousel();
