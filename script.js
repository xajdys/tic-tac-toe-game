// variable declarations
const greetingMenu = document.querySelector(".greeting");
const h1 = document.querySelector("h1");
const form = document.querySelector("form");
const input = document.querySelector("input");
const rulesMenu = document.querySelector(".rules");
const okay = document.querySelector("#okay-btn");
const playerMenu = document.querySelector(".player-selection");
const pRule = document.querySelector("#name");
const xBtn = document.querySelector("#x-btn");
const oBtn = document.querySelector("#o-btn");
const gameMenu = document.querySelector(".game-board");
const dialBox = document.querySelector("#dialog-box");
const dialBtn = document.querySelector("#dial-rules-btn");
const dialOkayBtn = document.querySelector("#dial-okay-btn");
const box = document.querySelectorAll(".box");
const cookie = document.querySelector("#cookie");
const reset = document.querySelector("#reset-btn");
const newGame = document.querySelector("#new-game-btn");

let pName;
let mark = null;
let ogMark = null;
const winArray = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [3, 4, 5],
  [6, 7, 8],
  [2, 4, 6],
  [1, 4, 7],
  [2, 5, 8],
];

// greeting menu
const ani = (e) => {
  e.preventDefault();
  pName = input.value;
  h1.style.animation = "title-ani 0.8s ease-out 0.2s";
  form.style.animation = "input-ani 0.8s ease-out 0.2s";
};

const welHide = () => {
  greetingMenu.classList.add("hide");
  rulesMenu.classList.remove("hide");
  pRule.innerText = `${pName}, Here are the rules of the game:`;
};

const welcome = () => {
  form.addEventListener("submit", ani);
  h1.addEventListener("animationend", welHide);
};

welcome();

// rules menu
const rulHide = () => {
  rulesMenu.classList.add("hide");
  playerMenu.classList.remove("hide");
};

const rules = () => {
  okay.addEventListener("click", rulHide);
};

rules();

// selection menu
const xHide = () => {
  mark = xBtn.innerText;
  ogMark = mark;
  console.log(mark);
  playerMenu.classList.add("hide");
  gameMenu.classList.remove("hide");
};

const oHide = () => {
  mark = oBtn.innerText;
  ogMark = mark;
  console.log(mark);
  playerMenu.classList.add("hide");
  gameMenu.classList.remove("hide");
};

const selection = () => {
  xBtn.addEventListener("click", xHide);
  oBtn.addEventListener("click", oHide);
};

selection();

// game menu

// dialog button
const showDial = () => {
  dialBox.showModal();
};

const hideDial = () => {
  dialBox.close();
};

dialBtn.addEventListener("click", showDial);
dialOkayBtn.addEventListener("click", hideDial);

// checking of winner
const checkWinner = () => {
  winArray.forEach((val) => {
    let first = val[0];
    let second = val[1];
    let third = val[2];
    
    if (box[first].innerText !== "") {
      if (
        box[first].innerText === box[second].innerText &&
        box[second].innerText === box[third].innerText
      ) {
        gameMenu.classList.add("hide");
        cookie.innerText = `Cookie 🍪 for the winner: ${mark}`;
        newGame.classList.remove("hide");
        cookie.classList.remove("hide");
        return;
      }
    }
  });
};

// filling of tiles
const fillBox = (event) => {
  if (event.target.innerText === "") {
    if (mark === "X") {
      event.target.textContent = mark;
      checkWinner();
      mark = "O";
      return;
    } else {
      event.target.innerText = mark;
      checkWinner();
      mark = "X";
    }
  }
};

box.forEach((val) => {
  val.addEventListener("click", fillBox);
});

// reset & new game button
const delBox = () =>{
    box.forEach((val) =>{
      val.innerText = "";
    });
};

const rstGame = ()=>{
  gameMenu.classList.add("hide");
  delBox();
  mark = ogMark;
  gameMenu.classList.remove("hide");
};

const nwGame = ()=>{
  cookie.classList.add("hide");
  delBox();
  playerMenu.classList.remove("hide");
}

reset.addEventListener("click", rstGame);
newGame.addEventListener("click", nwGame);