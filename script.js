const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const searchInput = document.getElementById("search-input");
const form = document.querySelector(".search-container");

const recipes = [
    {
      name: "Nasi Goreng",
      ingredients: [
        "1 tbsp oil",
        "5 oz / 150g chicken breast, thinly sliced (or other protein)",
        "1 tbsp kecap manis (sweet soy sauce)",
        "1.5 tbsp oil",
        "2 garlic cloves, finely chopped",
        "1 tsp red chilli, finely chopped",
        "1 onion, small, diced",
        "3 cups cooked white rice, day-old, cold",
        "2 tbsp kecap manis (sweet soy sauce)",
        "2 tsp shrimp paste (optional)",
        "4 eggs, fried to taste",
        "1 green onion, sliced",
        "Tomatoes and cucumbers, cut into wedges/chunks",
        "Fried shallots (store-bought, optional)",
        "Lime wedges"
      ],
      instructions: [
        "Heat oil in a large skillet or wok over high heat.",
        "Add chilli and garlic, stir for 10 seconds.",
        "Add onion, cook for 1 minute.",
        "Add chicken, cook until it mostly turns white, then add 1 tbsp kecap manis and cook for a further 1 minute or until chicken is mostly cooked through and a bit caramelised.",
        "Add rice, 2 tbsp kecap manis and shrimp paste, if using. Cook, stirring constantly, for 2 minutes until sauce reduces down and rice grains start to caramelise (key for flavour!).",
        "Serve, garnished with garnishes of choice (green onions, red chilli, fried shallots)."
      ],
      image: "images/Nasi Goreng recipe img.jpg",
      alt: "A bowl of Indonesian fried rice."
    },
    {
      name: "Recipe 2",
      ingredients: [
        // Ingredients for Recipe 2
      ],
      instructions: [
        // Instructions for Recipe 2
      ]
    }
  ];  

// Hambugrer Menu
hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});

// Form
form.addEventListener("submit", e => {
    e.preventDefault();
});

// Search Input
searchInput.addEventListener("keydown", e => {
    if (e.key === "Enter"){
        const query = searchInput.value.trim();

        if (query) {
            const encodedQuery = encodeURIComponent(query);
            window.location.href = `/search-results.html?query=${encodedQuery}`;
        }
    }
})

if(window.location.pathname.includes("search-results.html")){
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("query");
    const recipe = recipes.find( r => r.name.toLowerCase());
    const recipeDisplay = document.getElementById("recipe-display")
    
    if (recipe) {
        recipeDisplay.innerHTML = `
        <h2 id="search-results-recipe-name">${recipe.name}</h2>
        <img src="${recipe.image}" alt="${recipe.alt}" id="search-results-img">
        <h2>Ingredients</h2>
        <div id="ingredients-box">
            <ul>${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}</ul>
        </div>
        <h2>Instructions</h2>
        <div id=instructions-box>
            <ol>${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join("")}</ol>
        </div>
        
        
        
        
        
        `
    }
}

