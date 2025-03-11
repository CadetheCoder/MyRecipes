const apiKey = "1473ad9c323c4f38aa9e70152e87f337";
const resultsDiv = document.getElementById("results");

const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("query");

if (query) {
    fetchRecipes(query);
}

const fetchRecipes = (query) => {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}`)
        .then(response => response.json())
        .then(data => displayResults(data.results))
        .catch(error => console.error("Error fetching recipes:", error));
}

const displayResults = (recipes) => {

    resultsDiv.innerHTML = "";

    if (!recipes || recipes.length === 0) {
        resultsDiv.innerHTML = "<p>No recipes foun"
    }
}