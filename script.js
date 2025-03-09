const apiKey = "1473ad9c323c4f38aa9e70152e87f337";
const searchInput = document.getElementById("search-input");
const content1Img = document.getElementById("content1-img");
const content1Title = document.getElementById("content1-title");

searchInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        const query = searchInput.value.trim();

        if (query) {
            window.location.href = `search-results.html?query=${encodeURIComponent(query)}`;
        }
    }

})

/* const fetchRecipes = (query) => {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}`)
    .then(rep => rep.json())
    .then(data => {})
}
 */


