const findrecipeBtn = document.querySelector("#findrecipeBtn");

findrecipeBtn.addEventListener("click", () => {
  //fetch api
  console.log("fetching api");
  const mealApi = "https://www.themealdb.com/api/json/v1/1/random.php";

  fetch(mealApi)
    .then((response) => {
      if (!response.ok) {
        throw error(
          `Theres been a problem with the http request ${response.status}`
        );
        alert(
          "Theres been an issue with your request please wait or try again later."
        );
      }
      return response.json();
    })
    .then((data) => {
      if (data.meals[0].strSource == null || data.meals[0].strSource == "") {
        //because for some reason there was one recipe with no source link :/
        alert("oops something went wrong please try again");
      } else {
        localStorage.setItem("meal name", data.meals[0].strMeal);
        localStorage.setItem("recipe source", data.meals[0].strSource);
        localStorage.setItem("recipeImgUrl", data.meals[0].strMealThumb);
        window.location.href = "recipe.html";
      }
    })
    .catch((error) => {
      console.error(`Theres been an error ${error}`);
      alert(
        "Theres been an issue with your request please wait or try again later."
      );
    });
});
