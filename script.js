const apiKey = "1473ad9c323c4f38aa9e70152e87f337";

const searchInput = document.getElementById("search-input");

const searchResultsCard = document.getElementById("search-results-card");

searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault(); // Prevent form submission

        const query = searchInput.value.trim();
        console.log("Search Query:", query);

        if (query) {
            console.log(`Redirecting to: search-results.html?query=${encodeURIComponent(query)}`);
            window.location.href = `search-results.html?query=${encodeURIComponent(query)}`;
        }
        fetchRecipes(query);
    }
});

const fetchRecipes = (query) => {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}`)
        .then(response => response.json())
        .then(data => {
            displayResults(data.results);
        })
        .catch(error => console.error("Error fetching request", error));
}

const displayResults = (recipes) => {
    if (recipes.length === 0) {
        searchResultsCard.innerHTML = "<p>No recipes found</p>";
        return;
    }
}

recipes.forEach(recipe => {
    const recipeElement = document.createElement("div");
    recipeElement.innerHTML = `
    <img src="${recipe.image} alt="${recipe.title}" width="200">
    <p>${recipe.title}</p>`;
    searchResultsCard.appendChild(recipeElement);
}) 
    