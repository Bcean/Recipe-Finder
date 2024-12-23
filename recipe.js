const recipeName = localStorage.getItem("meal name");
const recipeSrc = localStorage.getItem("recipe source");
const recipeImgUrl = localStorage.getItem("recipeImgUrl");

const restartBtn = document.querySelector("#restartBtn");
const mealTitleElement = document.querySelector("#mealName");
const mealImgElement = document.querySelector("#mealImg");
const recipeBtn = document.querySelector("#dropDownBtn");

restartBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

mealTitleElement.textContent = recipeName;
mealImgElement.src = `${recipeImgUrl}`;

recipeBtn.addEventListener("click", () => {
  window.open(`${recipeSrc}`, "_blank");
});
console.log(recipeName);
console.log(recipeSrc);
console.log(recipeImgUrl);
