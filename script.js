const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const searchInput = document.getElementById("search-input");
const form = document.querySelector(".search-container");
const star = `<i class="fa-solid fa-star" style="color: #FFD43B;"></i>`;
const clock = `<i class="fa-solid fa-clock" style="color: #74C0FC;"></i>`;
const kitchenSet = `<i class="fa-solid fa-kitchen-set" style="color: #74C0FC;"></i>`;
const utensils = `<i class="fa-solid fa-utensils" style="color: #74C0FC;"></i>`;
const hollowStar = `<i class="fa-regular fa-star" style="color: #FFD43B;"></i>`

const recipes = [
    {
      name: "Nasi Goreng",
      image: "images/Nasi Goreng recipe img.jpg",
      alt: "A bowl of Indonesian fried rice.",
      stars: `${star}${star}${star}${star}${star} (31)`,
      difficulty: "easy",
      serves: "4-6 servings",
      time: "50 mins",
      desc: "This fragrant rice dish with chicken, prawns and shredded omelette is the ultimate comfort food for spice lovers.",
      creator: "Jack Stein",
      category: "Indonesian",
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
    },

    {
        name: "Ultimate Chocolate Cake",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1043451_11-4713959.jpg?quality=90&webp=true&resize=300,272",
        alt: "A chocolate cake.",
        stars: `${star}${star}${star}${star}${star} (1479)`,
        difficulty: "easy",
        serves: "14 slices",
        time: "2 hrs 10 mins",
        desc: "Indulge yourself with this ultimate chocolate ganache cake recipe that is beautifully moist, rich and fudgy. Perfect for a celebration or an afternoon tea.",
        creator: "Angela Nilsen",
        category: "Desserts",
        ingredients: [
            "200g dark chocolate (about 60% cocoa solids), chopped",
            "200g butter, cubed",
            "1 tbsp instant coffee granules",
            "85g self-raising flour",
            "85g plain flour",
            "¼ tsp bicarbonate of soda",
            "200g light muscovado sugar",
            "200g golden caster sugar",
            "25g cocoa powder",
            "3 medium eggs",
            "75ml buttermilk",
            "50g grated chocolate or 100g curls, to decorate",
            "For the ganache:",
            "200g dark chocolate (about 60% cocoa solids), chopped",
            "300ml double cream",
            "2 tbsp golden caster sugar"
        ],
        instructions: [
            "Heat the oven to 190C/fan170C/gas 5 and line two baking sheets with non-stick baking paper.",
            "Put 150g softened salted butter, 80g light brown muscovado sugar, and 80g granulated sugar into a bowl and beat until creamy.",
            "Beat in 2 tsp vanilla extract and 1 large egg.",
            "Sift 225g plain flour, ½ tsp bicarbonate of soda, and ¼ tsp salt into the bowl and mix it in with a wooden spoon.",
            "Add 200g plain chocolate chips or chunks and stir well.",
            "Use a teaspoon to make small scoops of the mixture, spacing them well apart on the baking trays. This mixture should make about 30 cookies.",
            "Bake for 8–10 mins until they are light brown on the edges and still slightly soft in the centre if you press them.",
            "Leave on the tray for a couple of mins to set and then lift onto a cooling rack."
          ],
      },

      {
        name: "Vintage Chocolate Chip Cookies",
        image: "https://handletheheat.com/wp-content/uploads/2020/10/BAKERY-STYLE-CHOCOLATE-CHIP-COOKIES-9-637x637-1.jpg",
        alt: "A pile of chocolate chip cookies.",
        stars: `${star}${star}${star}${star}${star} (1242)`,
        difficulty: "easy",
        serves: "30 cookies",
        time: "25 mins",
        desc: "A simple chocolate chip cookie recipe for soft biscuits with a squidgy middle that will impress family and friends. Make plenty as they're sure to be a hit.",
        creator: "Valerie Barrett",
        category: "Desserts",
        ingredients: [
            "150g salted butter, softened",
            "80g light brown muscovado sugar",
            "80g granulated sugar",
            "2 tsp vanilla extract",
            "1 large egg",
            "225g plain flour",
            "½ tsp bicarbonate of soda",
            "¼ tsp salt",
            "200g plain chocolate chips or chunks"
          ],
          instructions: [
            "Heat the oven to 190C/fan170C/gas 5 and line two baking sheets with non-stick baking paper.",
            "Put 150g softened salted butter, 80g light brown muscovado sugar and 80g granulated sugar into a bowl and beat until creamy.",
            "Beat in 2 tsp vanilla extract and 1 large egg.",
            "Sift 225g plain flour, ½ tsp bicarbonate of soda and ¼ tsp salt into the bowl and mix it in with a wooden spoon.",
            "Add 200g plain chocolate chips or chunks and stir well.",
            "Use a teaspoon to make small scoops of the mixture, spacing them well apart on the baking trays. This mixture should make about 30 cookies.",
            "Bake for 8–10 mins until they are light brown on the edges and still slightly soft in the centre if you press them.",
            "Leave on the tray for a couple of mins to set and then lift onto a cooling rack."
          ],
      },

      {
        name: "Slow Cooker Fudge",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/09/Slow-Cooker-Fudge-5f153e0.jpg?quality=90&webp=true&resize=600,545",
        alt: "A of stack fudge.",
        stars: `${star}${star}${star}${star}${hollowStar} (17)`,
        difficulty: "easy",
        serves: "36 pieces",
        time: "1 hr 10 mins",
        desc: "Give a gift of homemade fudge to family and friends at Christmas with this recipe. It's flavoured with milk and dark chocolate, and made in the slow cooker for ease.",
        creator: "Esther Clark",
        category: "Desserts",
        ingredients: [
          "397g can condensed milk",
          "400g milk chocolate, chopped",
          "100g dark chocolate, chopped",
          "25g butter",
          "1 tsp vanilla extract",
          "1/4 tsp salt"
        ],
        instructions: [
          "Grease and line a square baking tin with baking parchment.",
          "Put all the ingredients in a slow cooker and set to low.",
          "Leave for 40-50 minutes, stirring every 10 minutes until completely melted and combined.",
          "Pour the mixture into the prepared tin and smooth the surface.",
          "Chill for at least 2 hours or until set.",
          "Cut into squares and enjoy."
        ],
      },
      
      {
        name: "Baked Buffalo Chicken Wings",
        image: "https://images.getrecipekit.com/20240103192542-buffalo-chicken-wings.jpg?width=650&quality=90&",
        alt: "A plate of buffalo chicken wings.",
        stars: `${star}${star}${star}${star}${star} (78)`,
        difficulty: "easy",
        serves: "12 wings",
        time: "1 hr 10 mins",
        desc: "Sticky spiced wings make great finger food or canapés, and this version skips the deep-fried stage so they're healthier.",
        creator: "Good Food team",
        category: "American",
        ingredients: [
          "1kg chicken wings",
          "1 tbsp baking powder",
          "1/2 tsp salt",
          "1/2 tsp black pepper",
          "1/2 tsp garlic powder",
          "1/2 tsp onion powder",
          "1/2 tsp smoked paprika",
          "120ml hot sauce",
          "60g unsalted butter, melted",
          "1 tbsp honey",
          "1 tbsp white vinegar"
        ],
        instructions: [
          "Heat the oven to 120C/100C fan/gas ½ and line a baking tray with foil and a wire rack.",
          "Pat the chicken wings dry with paper towels, then toss them in a bowl with baking powder, salt, black pepper, garlic powder, onion powder, and smoked paprika.",
          "Spread the wings out on the wire rack and bake for 30 minutes.",
          "Increase the oven temperature to 220C/200C fan/gas 7 and bake for another 40-45 minutes, turning once, until crispy and golden brown.",
          "While the wings are baking, mix the hot sauce, melted butter, honey, and vinegar in a bowl.",
          "Toss the cooked wings in the buffalo sauce until fully coated.",
          "Serve immediately with your favorite dip and celery sticks."
        ],
      },

      {
        name: "Buffalo Cauliflower Wings",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/10/Buffalo-cauliflower-7825216.jpg?quality=90&webp=true&resize=600,545",
        alt: "Buffalo cauliflower served with ranch dip and celery sticks",
        stars: `${star}${star}${star}${star}${star} (41)`,
        difficulty: "easy",
        serves: "2 servings",
        time: "40 mins",
        desc: "Make 'buffalo cauliflower' for a veggie take on the spicy American classic. Served with a ranch dip, it makes an excellent Friday night sharing treat.",
        creator: "Esther Clark",
        category: "American",
        ingredients: [
          "1 large cauliflower, cut into florets",
          "100g plain flour",
          "1 tsp garlic powder",
          "1 tsp smoked paprika",
          "100ml milk (dairy or plant-based)",
          "3 tbsp vegetable oil",
          "60g hot sauce (such as Frank's RedHot)",
          "1 tbsp maple syrup",
          "1 tbsp cider vinegar"
        ],
        instructions: [
          "Heat the oven to 180C/160C fan/gas 4 and line a baking tray with baking parchment.",
          "In a large bowl, mix the flour, garlic powder, smoked paprika, and a pinch of salt. Whisk in the milk to make a batter.",
          "Dip the cauliflower florets into the batter, letting any excess drip off, and place them on the prepared tray.",
          "Bake for 20 minutes until starting to brown.",
          "Meanwhile, heat the oil, hot sauce, maple syrup, and vinegar in a pan over low heat until combined.",
          "Toss the baked cauliflower in the sauce and return to the tray. Bake for another 15 minutes until sticky.",
          "Serve with a ranch dip and celery sticks."
        ],
      },

      {
        name: "Chicken Pasta Bake",
        image: "https://savvybites.co.uk/wp-content/uploads/2023/10/Chicken-Pasta-Bake-with-cheese-and-parsley.jpg",
        alt: "A hearty chicken pasta bake topped with melted cheese.",
        stars: `${star}${star}${star}${star}${star}  (868)`,
        difficulty: "easy",
        serves: "Serves 6",
        time: "1 hr 15 mins",
        desc: "Enjoy this gooey cheese and chicken pasta bake for the ultimate weekday family dinner. Serve straight from the dish with a dressed green salad.",
        creator: "Esther Clark",
        category: "Italian",
        ingredients: [
          "2 tbsp olive oil",
          "1 onion, chopped",
          "2 garlic cloves, crushed",
          "2 skinless chicken breasts, diced",
          "1 red pepper, chopped",
          "1 yellow pepper, chopped",
          "400g can chopped tomatoes",
          "2 tbsp tomato purée",
          "1 tsp dried oregano",
          "300g pasta shells",
          "200g mozzarella, grated",
          "50g Parmesan, grated"
        ],
        instructions: [
          "Heat the oil in a large pan over medium heat. Add the onion and garlic, and cook until softened.",
          "Add the diced chicken and cook until browned.",
          "Stir in the chopped peppers, chopped tomatoes, tomato purée, and oregano. Simmer for 10 minutes.",
          "Meanwhile, cook the pasta according to package instructions. Drain and set aside.",
          "Preheat the oven to 200°C (180°C fan/gas mark 6).",
          "In a large baking dish, combine the cooked pasta and sauce mixture. Top with the grated mozzarella and Parmesan.",
          "Bake for 20-25 minutes, or until the cheese is melted and golden.",
          "Serve with a green salad."
        ],
      },

      {
        name: "Steak Diane",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2021/09/steak-diane-d804b45.jpg?quality=90&webp=true&resize=600,545",
        alt: "A classic Steak Diane served with a rich sauce.",
        stars: `${star}${star}${star}${star}${star} (21)`,
        difficulty: "More effort",
        serves: "Serves 2",
        time: "25 mins",
        desc: "Treat someone to a classic steak with Diane sauce for supper and impress with your flambé skills. For the ultimate luxury, we’ve gone for fillet steak.",
        creator: "Barney Desmazery",
        category: "American",
        ingredients: [
          "2 fillet steaks (about 200g each), cut from the centre of the fillet",
          "25g butter",
          "1 thyme sprig",
          "½ tsp cracked black pepper",
          "1 large or 2 small shallots, peeled and finely chopped",
          "3 tbsp brandy",
          "2 tsp Dijon mustard",
          "1 tsp Worcestershire sauce",
          "200ml strong beef stock",
          "3 tbsp crème fraîche"
        ],
        instructions: [
          "Generously season the steaks all over with salt, then press them down slightly with the palm of your hand so they're roughly the same thickness.",
          "Heat the butter in a heavy-based frying pan over a medium-high heat until foaming, then add the thyme so it crackles and sizzles.",
          "Add the steaks and use tongs to turn them every 1 min over the course of 6 mins (for very rare), 8 mins (rare), or 10 mins (medium). This helps build an even crust on both sides.",
          "Remove the steaks from the pan and set aside to rest.",
          "For the sauce, add the shallots to the same pan and cook over medium heat for 2-3 mins until softened.",
          "Carefully add the brandy to the pan and allow it to bubble up, scraping any browned bits from the bottom.",
          "Stir in the mustard, Worcestershire sauce, and beef stock. Let the sauce simmer for 5-6 mins until reduced by half.",
          "Lower the heat and stir in the crème fraîche. Return the steaks to the pan, spooning the sauce over them.",
          "Serve immediately, garnished with additional thyme if desired."
        ],
      },

      {
        name: "Beef Tacos",
        image: "https://kristineskitchenblog.com/wp-content/uploads/2023/02/tacos-recipe-16-2.jpg",
        alt: "Minced beef tacos topped with fresh ingredients.",
        stars: `${star}${star}${star}${star}${star} (46)`,
        difficulty: "More effort",
        serves: "Serves 3",
        time: "40 mins",
        desc: "Make these vibrant beef tacos with a pack of mince. Go the extra mile by creating your own spice mix for enhanced flavour, and opt for soft tortillas.",
        creator: "Barney Desmazery",
        category: "Mexican",
        ingredients: [
          "1 tbsp olive oil",
          "1 onion, finely chopped",
          "2 garlic cloves, crushed",
          "500g minced beef",
          "1 tbsp tomato purée",
          "1 tsp ground cumin",
          "1 tsp smoked paprika",
          "1 tsp ground coriander",
          "½ tsp ground cinnamon",
          "1 tbsp brown sugar",
          "2 tbsp white wine vinegar",
          "2 tbsp tomato ketchup",
          "Salt and freshly ground black pepper",
          "6 soft flour tortillas",
          "Toppings: shredded lettuce, diced tomatoes, sliced red onion, chopped coriander, sour cream, grated cheese"
        ],
        instructions: [
          "Heat the olive oil in a large frying pan over medium heat. Add the chopped onion and cook until softened, about 5 minutes.",
          "Add the crushed garlic and cook for another minute until fragrant.",
          "Increase the heat to medium-high and add the minced beef to the pan. Cook, stirring occasionally, until browned.",
          "Stir in the tomato purée, ground cumin, smoked paprika, ground coriander, ground cinnamon, and brown sugar. Cook for 1-2 minutes until the spices are fragrant.",
          "Add the white wine vinegar and tomato ketchup to the pan, stirring to combine. Season with salt and freshly ground black pepper to taste.",
          "Reduce the heat to low and let the mixture simmer for 10-15 minutes, allowing the flavours to meld and the sauce to thicken.",
          "While the beef mixture simmers, warm the soft flour tortillas according to package instructions.",
          "To assemble the tacos, spoon the beef mixture onto each tortilla and add your desired toppings.",
          "Serve immediately."
        ],
      },

      {
        name: "Cheat's Ramen Noodle Soup",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/ramen-d85927e.jpg?quality=90&webp=true&resize=440,400",
        alt: "A comforting bowl of chicken ramen noodle soup.",
        stars: `${star}${star}${star}${star}${star} (204)`,
        difficulty: "easy",
        serves: "Serves 4",
        time: "40 mins",
        desc: "Use chicken, ramen noodles, spinach, sweetcorn, and eggs to make this warming soup, ideal for when you crave something comforting yet light and wholesome.",
        creator: "Lina Croft",
        category: "Asian",
        ingredients: [
          "700ml chicken stock",
          "3 garlic cloves, halved",
          "4 tbsp soy sauce, plus extra to season",
          "1 tsp Worcestershire sauce",
          "2 tsp cornflour",
          "2 tsp sesame oil",
          "2 packs instant ramen noodles",
          "200g cooked chicken, shredded",
          "200g spinach",
          "200g sweetcorn",
          "2 eggs"
        ],
        instructions: [
          "Pour the chicken stock into a large saucepan. Add the halved garlic cloves, soy sauce, Worcestershire sauce, cornflour, and sesame oil. Bring to a simmer over medium heat, stirring occasionally. Cook for 10 minutes.",
          "Meanwhile, bring a small saucepan of water to a boil. Add the eggs and cook for 7 minutes. Drain, cool under cold running water, peel, and set aside.",
          "Add the instant ramen noodles to the simmering broth and cook according to package instructions, usually about 3 minutes.",
          "Stir in the shredded chicken, spinach, and sweetcorn. Cook for another 2-3 minutes until the spinach wilts.",
          "Slice the boiled eggs in half.",
          "Divide the soup among four bowls. Top each with a boiled egg half and season with extra soy sauce if desired. Serve immediately."
        ]
      },
      
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
    const mathcingRecipes = recipes.filter( r => r.name.toLowerCase().includes(query.toLowerCase()));
    const recipesDisplay = document.getElementById("search-results-display")
    
    if (mathcingRecipes.length > 0) {
        recipesDisplay.innerHTML = mathcingRecipes.map(recipe => `

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
            </a>`).join("");

    } else {
        recipesDisplay.innerHTML = `<p>No recipe found for ${decodeURIComponent(query)}.</p>`
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
        
                <p id="recipe-details-desc">${recipe.desc}</p>

                 <div id="recipe-details-emoji-box">

                    <p>${clock} ${recipe.time}</p>
                    <p>${kitchenSet} ${recipe.difficulty}</p>
                    <p>${utensils} ${recipe.serves}</p>

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

// Home Page Buttons 
const wingBoxImg1 = document.getElementById("wing-img-box1");
wingBoxImg1.addEventListener("click", () => {
    window.location.href = `http://127.0.0.1:5500/recipe-details.html?recipe=Baked%20Buffalo%20Chicken%20Wings`;
});

const wingReviewBox1 = document.getElementById("wing-review-box1");
wingReviewBox1.addEventListener("click", () => {
    window.location.href = `http://127.0.0.1:5500/recipe-details.html?recipe=Baked%20Buffalo%20Chicken%20Wings`;
});

const wingBoxImg2 = document.getElementById("wing-img-box2");
wingBoxImg2.addEventListener("click", () => {
    window.location.href = `http://127.0.0.1:5500/recipe-details.html?recipe=Buffalo%20Cauliflower%20Wings`;
});

const wingReviewBox2 = document.getElementById("wing-review-box2");
wingReviewBox2.addEventListener("click", () => {
    window.location.href = `http://127.0.0.1:5500/recipe-details.html?recipe=Buffalo%20Cauliflower%20Wings`;
});

const content1 = document.getElementById("content1");
content1.addEventListener("click", () => {
    window.location.href = `http://127.0.0.1:5500/search-results.html?query=pasta`;
});

const content2 = document.getElementById("content2");
content2.addEventListener("click", () => {
    window.location.href = `http://127.0.0.1:5500/search-results.html?query=steak`;
});

const content3 = document.getElementById("content3");
content3.addEventListener("click", () => {
    window.location.href = `http://127.0.0.1:5500/search-results.html?query=taco`;
});

const content4 = document.getElementById("content4");
content4.addEventListener("click", () => {
    window.location.href = `http://127.0.0.1:5500/search-results.html?query=ramen`;
});

const dessert1 = document.getElementById("dessert1");
dessert1.addEventListener("click", () => {
    window.location.href = `http://127.0.0.1:5500/search-results.html?query=cake`;
});


const dessert2 = document.getElementById("dessert2");
dessert2.addEventListener("click", () => {
    window.location.href = `http://127.0.0.1:5500/search-results.html?query=cookie`;
});

const dessert3 = document.getElementById("dessert3");
dessert3.addEventListener("click", () => {
    window.location.href = `http://127.0.0.1:5500/search-results.html?query=fudge`;
});
