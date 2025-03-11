const apiKey = "1473ad9c323c4f38aa9e70152e87f337";
const searchInput = document.getElementById("search-input");

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


    
