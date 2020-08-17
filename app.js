const cards = document.querySelectorAll(".cells");
const cardsBack = document.querySelectorAll(".cells-back");
const restartGameBtn = document.getElementById("newGame");
const gameWinMessage = document.querySelector(".gameWinMessage");
const backdrop = document.querySelector(".backdrop");

let winMessageCounter = [];
let cardsComparisonSlot1 = "";
let cardsComparisonSlot2 = "";
let cardsComparisonSlot3 = "";
let cardsComparisonSlot4 = "";
let secondCheck = "";

class Images {
  constructor(img, id) {
    this.image = img;
    this.id = id;
  }
}
const images = [
  new Images("img/angular-logo.png", "angular"),
  new Images("img/javascript-logo.png", "javascript"),
  new Images("img/mongodb-logo.png", "mongoDb"),
  new Images("img/nodejs-logo.png", "nodejs"),
  new Images("img/python-logo.png", "python"),
  new Images("img/reactjs-logo.png", "reactjs"),
  new Images("img/typescript-logo.png", "typescript"),
  new Images("img/vuejs-logo.png", "vuejs"),
  new Images("img/angular-logo.png", "angular"),
  new Images("img/javascript-logo.png", "javascript"),
  new Images("img/mongodb-logo.png", "mongoDb"),
  new Images("img/nodejs-logo.png", "nodejs"),
  new Images("img/python-logo.png", "python"),
  new Images("img/reactjs-logo.png", "reactjs"),
  new Images("img/typescript-logo.png", "typescript"),
  new Images("img/vuejs-logo.png", "vuejs"),
];

cards.forEach((element) => {
  const cardsFront = element.querySelector(".cells-front");
  const cardsBack = element.querySelector(".cells-back");
  element.addEventListener("click", () => {
    cardsFront.style.transform = "rotateY(-180deg)";
    cardsBack.style.transform = "rotateY(0)";
  });
});
const imagesAssignment = () => {
  for (let i = 0; i < images.length; i++) {
    cardsBack[i].innerHTML = `
    <img src="${images[i].image}" alt="">
    `;
  }
};

const cardImageLink = () => {
  for (let i = 0; i < cards.length; i++) {
    cards[i].dataset.id = images[i].id;
  }
};

const cardComparisonApplication1 = () => {
  if (cardsComparisonSlot1.dataset.id === cardsComparisonSlot2.dataset.id) {
    cardsComparisonSlot1.style.opacity = 0;
    cardsComparisonSlot1.style.pointerEvents = "none";
    cardsComparisonSlot2.style.opacity = 0;
    cardsComparisonSlot2.style.pointerEvents = "none";
    cardsComparisonSlot1 = "";
    cardsComparisonSlot2 = "";
    winMessageCounter.push("checked");
    setTimeout(gameWinHandler(), 2000);
    console.log(winMessageCounter);
  } else if (
    cardsComparisonSlot1.dataset.id !== cardsComparisonSlot2.dataset.id
  ) {
    const card1Front = cardsComparisonSlot1.querySelector(".cells-front");
    const card1Back = cardsComparisonSlot1.querySelector(".cells-back");
    const card2Front = cardsComparisonSlot2.querySelector(".cells-front");
    const card2Back = cardsComparisonSlot2.querySelector(".cells-back");
    cardsComparisonSlot1.style.pointerEvents = "auto";
    cardsComparisonSlot2.style.pointerEvents = "auto";

    card1Back.style.transform = "rotateY(-180deg)";
    card1Front.style.transform = "rotateY(0)";

    card2Back.style.transform = "rotateY(-180deg)";
    card2Front.style.transform = "rotateY(0)";

    cardsComparisonSlot1 = "";
    cardsComparisonSlot2 = "";
  }
};

const cardComparisonApplication2 = () => {
  if (cardsComparisonSlot3.dataset.id === cardsComparisonSlot4.dataset.id) {
    cardsComparisonSlot3.style.opacity = 0;
    cardsComparisonSlot3.style.pointerEvents = "none";
    cardsComparisonSlot4.style.opacity = 0;
    cardsComparisonSlot4.style.pointerEvents = "none";
    cardsComparisonSlot3 = "";
    cardsComparisonSlot4 = "";
    winMessageCounter.push("checked");
    setTimeout(gameWinHandler(), 2000);
    console.log(winMessageCounter);
  } else if (
    cardsComparisonSlot3.dataset.id !== cardsComparisonSlot4.dataset.id
  ) {
    const card1Front = cardsComparisonSlot3.querySelector(".cells-front");
    const card1Back = cardsComparisonSlot3.querySelector(".cells-back");
    const card2Front = cardsComparisonSlot4.querySelector(".cells-front");
    const card2Back = cardsComparisonSlot4.querySelector(".cells-back");
    cardsComparisonSlot3.style.pointerEvents = "auto";
    cardsComparisonSlot4.style.pointerEvents = "auto";

    card1Back.style.transform = "rotateY(-180deg)";
    card1Front.style.transform = "rotateY(0)";

    card2Back.style.transform = "rotateY(-180deg)";
    card2Front.style.transform = "rotateY(0)";

    cardsComparisonSlot3 = "";
    cardsComparisonSlot4 = "";
  }
};
////////////////SHUFFLING OF IMAGES FUNCTION//////////////////////////
const shuffleImages = (image) => {
  let arrayLength = image.length;
  let assignment;
  let index;

  while (arrayLength > 0) {
    index = Math.floor(Math.random() * arrayLength);
    arrayLength--;
    assignment = image[arrayLength];
    image[arrayLength] = image[index];
    image[index] = assignment;
  }
  return image;
};
/////////////pointerEvent
const pointerEventsHandler = () => {
  for (const elements of cards) {
    elements.style.pointerEvents = "auto";
  }
};
/////////////////////////CARD CLICKS HANDLING//////////////////////////
const cardsClickHandler = () => {
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => {
      if (cardsComparisonSlot1 === "" && secondCheck === "") {
        cardsComparisonSlot1 = document.getElementById(cards[i].id);
        secondCheck = "checked1";
      } else if (cardsComparisonSlot2 === "" && secondCheck === "checked1") {
        cardsComparisonSlot2 = document.getElementById(cards[i].id);
        secondCheck = "checked2";
        setTimeout(() => {
          cardComparisonApplication1();
        }, 500);
      } else if (cardsComparisonSlot3 === "" && secondCheck === "checked2") {
        cardsComparisonSlot3 = document.getElementById(cards[i].id);
        secondCheck = "checked3";
      } else if (cardsComparisonSlot4 === "" && secondCheck === "checked3") {
        cardsComparisonSlot4 = document.getElementById(cards[i].id);
        secondCheck = "";
        setTimeout(() => {
          cardComparisonApplication2();
        }, 500);
      }
      cards[i].style.pointerEvents = "none";
    });
  }
};

const newGameHandler = () => {
  resetTimerHandler();
  cards.forEach((element) => {
    element.style.pointerEvents = "auto";

    const cardFront = element.querySelector(".cells-front");
    const cardBack = element.querySelector(".cells-back");

    cardFront.style.transform = "rotateY(0)";
    cardBack.style.transform = "rotateY(-180deg)";

    element.style.opacity = 1;
  });
};

shuffleImages(images);
cardImageLink();
cardsClickHandler();
imagesAssignment();

///////  TIMER HANDLER/////////
let timeRef = document.querySelector("#timer span");
let time = 40;
const timerHandler = () => {
  setInterval(() => {
    if (time === 0) {
      time = 0;
    } else {
      time -= 1;
      timeRef.textContent = time;
    }
  }, 1000);
};
const resetTimerHandler = () => {
  time = 40;
};
////////YOU WON GAME HANDLER///////////YOU WIN GAME HANDLER
const gameWinHandler = () => {
  if (winMessageCounter.length === 8) {
    gameWinMessage.style.top = "50%";
    backdrop.style.opacity = 1;
    backdrop.style.display = "block";
    winMessageCounter = [];
    time = 300000;
  }
};

const playAgainBtn = document.querySelector(".gameWinMessage button");
playAgainBtn.addEventListener("click", () => {
  pointerEventsHandler();
  gameWinMessage.style.top = "-70%";
  backdrop.style.opacity = 0;
  setTimeout(() => {
    backdrop.style.display = "none";
  }, 500);
  shuffleImages(images);
  newGameHandler();
  resetTimerHandler();
  gameOverHandler();
});

/////GAME OVER HANDLER/////// GAME OVER HANDLER/////
const gameOverMessage = document.querySelector(".gameOverMessage");
const gameOverHandler = () => {
  setTimeout(() => {
    if (time === 0) {
      gameOverMessage.style.top = "50%";
      backdrop.style.opacity = 1;
      backdrop.style.display = "block";
    }
  }, 40000);
};
restartGameBtn.addEventListener("click", () => {
  pointerEventsHandler();
  winMessageCounter = [];
  shuffleImages(images);
  imagesAssignment();
  cardImageLink();
  newGameHandler();
  gameOverHandler();
  gameWinHandler();
});

const newGameBtn = document.querySelector(".gameOverMessage button");

newGameBtn.addEventListener("click", () => {
  shuffleImages(images);
  pointerEventsHandler();
  gameOverMessage.style.top = "-13rem";
  newGameHandler();
  gameOverHandler();
  winMessageCounter = [];
  backdrop.style.opacity = 0;
  setTimeout(() => {
    backdrop.style.display = "none";
  }, 500);
});
//////////////START GAME HANDLER//////////////////START GAME HANDLER////
const startGameBtn = document.querySelector(".welcoming-pageBtn");

const welcomePage = document.querySelector(".welcoming-page");

startGameBtn.addEventListener("click", () => {
  welcomePage.style.transform = "translate(-50%, -50%) scale(0)";
  welcomePage.style.opacity = 0;
  backdrop.style.opacity = 0;
  setTimeout(() => {
    welcomePage.style.display = "none";
    backdrop.style.display = "none";
  }, 500);
  shuffleImages(images);
  timerHandler();
  gameOverHandler();
});

const TwitterIconlink = document.querySelector(".tributeContainer img");
TwitterIconlink.addEventListener("click", () => {
  location.href = "https://www.twitter.com/peltastic";
});
