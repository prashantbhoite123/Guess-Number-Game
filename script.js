const form = document.querySelector("form");
var randomNumber = Math.floor(Math.random() * 100 + 1);
alert(randomNumber);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector("#input");
  const userNum = Number(input.value);
  const msgBox = document.querySelector(".msgBox");
  if (userNum <= 100 && userNum > 0) {
    if (userNum === randomNumber) {
      msgBox.innerHTML = "Congratulations !!!";
      input.value = "";
    }
  } else {
    msgBox.innerHTML = "Please Enter number in between 1 to 100";
    input.value = "";
  }
});
