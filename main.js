const findRecipieBtn = document.querySelector("#findRecipieBtn");

findRecipieBtn.addEventListener("click", () => {
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
      //localStorage.setItem("mealName", data.meals[0].strMeal)

      console.log(data); //store meal data
      //title
      console.log(data.meals[0].strMeal);
      localStorage.setItem("meal name", data.meals[0].strMeal);
      //link
      console.log(data.meals[0].strSource);
      localStorage.setItem("recipie source", data.meals[0].strSource);

      console.log(data.meals[0].strMealThumb);
      localStorage.setItem("recipieImgUrl", data.meals[0].strMealThumb);
      window.location.href = "recipie.html";
    })
    .catch((error) => {
      console.error(`Theres been an error ${error}`);
      alert(
        "Theres been an issue with your request please wait or try again later."
      );
    });
});
