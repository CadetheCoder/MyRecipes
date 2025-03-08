const apiKey = "1473ad9c323c4f38aa9e70152e87f337";
const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();

})

const fetchRecipes = (query) => {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}`)
    .then(rep => rep.json())
    .then(data => {})
}


