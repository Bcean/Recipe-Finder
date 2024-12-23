const recipieName = localStorage.getItem("meal name");
const recipieSrc = localStorage.getItem("recipie source");
const recipieImgUrl = localStorage.getItem("recipieImgUrl");

const restartBtn = document.querySelector("#restartBtn");
const mealTitleElement = document.querySelector("#mealName");
const mealImgElement = document.querySelector("#mealImg");
const recipieBtn = document.querySelector("#dropDownBtn");

restartBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

mealTitleElement.textContent = recipieName;
mealImgElement.src = `${recipieImgUrl}`;

recipieBtn.addEventListener("click", () => {
  window.location.href = `${recipieSrc}`;
});
console.log(recipieName);
console.log(recipieSrc);
console.log(recipieImgUrl);
