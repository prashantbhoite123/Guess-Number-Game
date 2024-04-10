const form = document.querySelector("form");
var randomNumber = Math.floor(Math.random() * 100 + 1);

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
      thatGret.style.color = "orange";
      msgBox.innerHTML = `Congratulations !!! You Guess in ${attempt} Attempt!`;
      input.setAttribute(readonly);
      msgBox.style.color = "yellow";
      msgBox.style.fontSize = "2.1vw";
      input.value = "";
    } else if (userNum > randomNumber) {
      msgBox.innerHTML = "Your Number is Greator than";
      msgBox.style.color = "aqua";
      msgBox.style.fontSize = "2vw";
      input.value = "";
    } else {
      msgBox.innerHTML = "Your Number is less than ";
      msgBox.style.color = "aqua";
      msgBox.style.fontSize = "2vw";
      input.value = "";
    }
  } else {
    msgBox.innerHTML = "Please Enter number in between 1 to 100";
    msgBox.style.color = "red";
    input.value = "";
  }
});
