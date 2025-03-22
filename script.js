const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const searchInput = document.getElementById("search-input");
const form = document.querySelector(".search-container");
const star = `<i class="fa-solid fa-star" style="color: #FFD43B;"></i>`;
const clock = `<i class="fa-solid fa-clock" style="color: #74C0FC;"></i>`;
const kitchenSet = `<i class="fa-solid fa-kitchen-set" style="color: #74C0FC;"></i>`;

const recipes = [
    {
      name: "Nasi Goreng",
      image: "images/Nasi Goreng recipe img.jpg",
      alt: "A bowl of Indonesian fried rice.",
      stars: `${star}${star}${star}${star}${star} (22)`,
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
      difficulty: "easy",
      serves: "4-6",
      time: "50 mins",
      desc: "This fragrant rice dish with chicken, prawns and shredded omelette is the ultimate comfort food for spice lovers.",
      creator: "Jack Stein",
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

// Search Results Page
if(window.location.pathname.includes("search-results.html")){
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("query");
    const recipe = recipes.find( r => r.name.toLowerCase() === query.toLowerCase());
    const recipesDisplay = document.getElementById("search-results-display")
    
    if (recipe) {
        recipesDisplay.innerHTML = `

            <a href="/recipe-details.html?recipe=${encodeURIComponent(recipe.name)}">
                <div id="search-results-box">
                    <img src="${recipe.image}" alt="${recipe.alt}" id="search-results-img">
                    <div id="search-results-text-box">

                        <h2>${recipe.name}</h2>
                        <p>${recipe.stars}</p>
                        <p>${recipe.desc}</p>

                        <div id="search-results-emoji-box">

                            <p>${clock} ${recipe.time}</p>
                            <p>${kitchenSet} ${recipe.difficulty}</p>

                        </div>
                    </div>
                </div>
            </a>`;

    } else {
        recipes.Display.innerHTML = `<p>No recipe found for ${decodeURIComponent(query)}.</p>`
    }
}

// Recipe Details Page
if(window.location.pathname.includes("recipe-details.html")){
    const urlParams = new URLSearchParams(window.location.search);
    const recipeName = urlParams.get("recipe");

    const recipe = recipes.find( r => r.name.toLowerCase() === recipeName.toLocaleLowerCase());
    const recipesDetails = document.getElementById("recipe-details-display")
    
    if (recipe) {
        recipesDetails.innerHTML = `

            <h1 id="recipe-details-recipe-name">${recipe.name}</h1>
            <img src="${recipe.image}" alt="${recipe.alt}" id="recipe-details-img" loading="lazy">

            <div id="recipe-details-info-box">

                <div id="recipe-details-creator-box">

                    <p>${recipe.creator}</p>
                    <p>${recipe.stars}</p>

                </div>
        
                <p>${recipe.desc}</p>

                 <div id="recipe-details-emoji-box">

                    <p>${clock} ${recipe.time}</p>
                    <p>${kitchenSet} ${recipe.difficulty}</p>

                </div>
               
            </div>

            <div id="recipe-details-ingredients-container">

            <div id="ingredients-box">
                <h2 id="recipe-details-ingredients-title">Ingredients</h2>
                <ul>${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}</ul>
            </div>

            <div id=instructions-box>
                <h2>Instructions</h2>
                <ol>${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join("")}</ol>
            </div>

            </div> 

       `;
    } else {
        recipes.Display.innerHTML = `<p>Recipe not found.</p>`
    }
}