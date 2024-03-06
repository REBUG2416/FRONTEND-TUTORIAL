const hamburger = document.querySelector(".hamburger");
const hamburger2 = document.querySelector(".hamburger2");
const navMenu = document.querySelector(".navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

hamburger2.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  hamburger2.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-Link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    hamburger2.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

let btn = document.querySelector("#btn");
const recipeContainer = document.getElementById("recipe-container");
let recipeData;
async function getUsers(url) {
  const options = {
    method: "GET",
    headers: { accept: "application/json", "Accept-Language": "en" },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    recipeData = result["hits"];
    if (recipeData.length !== 0) {
      document.querySelector("#recipe-header").textContent =
        "Here are your Recipes";
      // Manipulate the HTML to display the recipe details
      recipeData.forEach((element, currentIndex = -1) => {
        const container = document.createElement("div");

        container.classList.add("recipe-card");
        const recipeImage = document.createElement("img");
        recipeImage.src = element.recipe.image;
        container.appendChild(recipeImage);
        recipeContainer.appendChild(container);

        const container2 = document.createElement("div");
        container2.classList.add("card-content");
        const recipeTitle = document.createElement("h3");
        recipeTitle.textContent = element.recipe.label;
        container2.appendChild(recipeTitle);

        const cardButton = `<hr><span class = "info"><span style = "color: red">${Math.round(
          element.recipe.calories
        )} CALORIES</span><hr><span  style = "color: green">${
          element.recipe.ingredients.length
        } INGREDIENTS</span></span><hr><span class="author">${
          element.recipe.source
        }</span>`;
        container2.insertAdjacentHTML("beforeend", cardButton);

        container.appendChild(container2);
        recipeContainer.appendChild(container);
        container.onclick = () => {
          seeDetails(currentIndex);
        };
        console.log(currentIndex);
      });

      window.scrollTo({ top: 900, behavior: "smooth" });
    }
  } catch (error) {
    console.error(error);
  }
  return recipeData;
}

btn.addEventListener("click", () => {
  let item = document.querySelector("#item").value;
  recipeContainer.innerHTML = "";

  getUsers(
    "https://api.edamam.com/api/recipes/v2?type=public&q=" +
      item +
      "&app_id=f1a5068a&app_key=0dfa2e44c74976e2a3354c433a00daa4"
  );
});

const blurElement = document.getElementById("blur");
blurElement.style.left = "-100%";

function seeDetails(index) {
  if (blurElement.style.left === "-100%") {
    blurElement.style.left = "0";
    console.log(index);
    document.querySelector("#ingredients").textContent = "";
    let recipeHeader = document.querySelector("#details-Header");
    recipeHeader.textContent = recipeData[index].recipe.label;
    let recipeImage = document.querySelector("#details-image");
    recipeImage.src = recipeData[index].recipe.image;
    let recipeNutrition = document.querySelector("#nutrition-container");
    recipeNutrition.textContent =
      recipeData[index].recipe.healthLabels.join(", ");
    let instructions = document.querySelector("#instructions");
    instructions.onclick = () =>
      window.open(recipeData[index].recipe.url, "_blank");

    let Link = document.querySelector("#link");
    Link.textContent = recipeData[index].recipe.source;
    Link.href = recipeData[index].recipe.url;

    let details1 = document.querySelector("#details1");
    let ingredientsList = document.createElement("ul");
    ingredientsList.classList.add("ingredientsList");
    recipeData[index].recipe.ingredients.forEach((ingredient) => {
      const listItem = document.createElement("li");
      listItem.textContent = ingredient.text;
      ingredientsList.appendChild(listItem);
    });
    document.querySelector("#ingredients").appendChild(ingredientsList);
    console.log(ingredientsList);
  } else {
    blurElement.style.left = "-100%";
  }
}

let btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
  window.scrollTo({ top: 9000, behavior: "smooth" });
});
// Add more HTML elements for other details as needed...
