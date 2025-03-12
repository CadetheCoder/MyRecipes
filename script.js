const apiKey = "1473ad9c323c4f38aa9e70152e87f337";
const searchInput = document.getElementById("search-input");

searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault(); // Prevent form submission
        const query = searchInput.value.trim();
        if (query) {
            window.location.href = `search-results.html?query=${encodeURIComponent(query)}`;
        }
    }
});

// Page specific logic based on URL
document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname;

    if (currentPage.includes("search-results.html")) {
        const urlParams = new URLSearchParams(window.location.search);
        const query = urlParams.get("query");
        if (query) fetchRecipes(query);
    }

    if(currentPage.includes("recipe-details.html")) {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get("id");
        if (id) fetchRecipeDetails(id);
    }
});

// Fetch Recipes
const fetchRecipes = (query) => {
    const resultsDiv = document.getElementById("results");
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}`)
        .then(response => response.json())
        .then(data => displayResults(data.results, resultsDiv))
        .catch(error => console.error("Error fetching recipes:", error));
}

const displayResults = (recipes, resultsDiv) => {
    resultsDiv.innerHTML = "";
    if (!recipes || recipes.length === 0) {
        resultsDiv.innerHTML = "<p>No recipes found</p>";
        return;
    }

    recipes.forEach(recipe => {
        const recipeElement = document.createElement("div");
        recipeElement.classList.add("recipe-card");
        recipeElement.innerHTML = `
            <div id="results-card">
            <img src="${recipe.image}" alt=${recipe.title} id="results-img">
            <div id="results-text-container">
            <p id="results-title">${recipe.title}</p>
            <p id="results-rating">⭐⭐⭐⭐⭐ 1,736 ratings</p>
            </div>
            </div>`; 
        
        recipeElement.addEventListener("click", () => {
            window.location.href = `recipe-details.html?id=${recipe.id}`
        })
        resultsDiv.appendChild(recipeElement);
    })
}

// Fetch Recipe Details 
const fetchRecipeDetails = (id) => {
    const detailsDiv = document.getElementById("recipe-details");

    fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`)
    .then(response => response.json())
    .then(recipe => {
        detailsDiv.innerHTML = `
            <h2>${recipe.title}</h2>
            <img src="${recipe.image}" alt="${recipe.title}" width="300" style="border-radius: 8px;">
            <h3>Ingredients:</h3>
            <ul>${recipe.extendedIngredients.map(ing => `<li>${ing.original}</li>`).join("")}</ul>
            <h3>Instructions:</h3>
            <p>${recipe.instructions || "No instructions provided."}</p>
        `;
    })
    .catch(error => console.error("Error fetching recipe details:", error));
}

// Main page html 
document.addEventListener("DOMContentLoaded", () => {

    const main = document.getElementById("main");
    main.addEventListener("click", () => {
        window.location.href = "http://127.0.0.1:5501/search-results.html?query=chicken%20wings";
    });

    const content1 = document.getElementById("content1");
    content1.addEventListener("click", () => {
        
    })

});




