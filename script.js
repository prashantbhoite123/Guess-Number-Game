const form = document.querySelector("form");
const NewBtn = document.querySelector("#NewBtn");
// const newgameBtn = document.querySelector("#newGameBtn");
var randomNumber = Math.floor(Math.random() * 100 + 1);

console.log(NewBtn);
let attempt = 0;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector("#input");
  const userNum = Number(input.value);
  const msgBox = document.querySelector(".msgBox");
  const thatGret = document.querySelector(".thatgret");
  if (userNum <= 100 && userNum > 0) {
    attempt++;
    if (userNum === randomNumber) {
      thatGret.innerHTML = "That`s Great !! You Win";
      msgBox.innerHTML = `Congratulations !!! You Guess in ${attempt} Attempt!`;
      input.setAttribute("readonly", true);
      msgBox.style.color = "yellow";
      input.value = "";
      NewBtn.classList.remove("hide");

      console.log(NewBtn.classList);
    } else if (userNum > randomNumber) {
      msgBox.innerHTML = "Your Number is Greator than";
      msgBox.style.color = "aqua";
      input.value = "";
    } else {
      msgBox.innerHTML = "Your Number is less than ";
      msgBox.style.color = "aqua";
      input.value = "";
    }
  } else {
    msgBox.innerHTML = "Please Enter number in between 1 to 100";
    msgBox.style.color = "red";
    input.value = "";
  }
});

let disable = () => {
  msgBox.innerHTML = "";
};

NewBtn.addEventListener("click", () => {
  setTimeout(() => {
    window.location.reload();
  }, 2000);
});
