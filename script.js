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
        category: "Dessert",
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
        category: "Dessert",
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
        category: "Dessert",
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
        category: "Japanese",
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

      {
        name: "Salmon & Broccoli Pasta",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2010/03/Broccoli-salmon-pasta-62c75fe.jpg?quality=90&webp=true&resize=600,545",
        alt: "A casserole dish of salmon and broccoli pasta.",
        stars: `${star}${star}${star}${star}${star} (431)`,
        difficulty: "easy",
        serves: "Serves 4",
        time: "1 hr 5 mins",
        desc: "Make this creamy pasta bake with salmon, broccoli, anchovies and sundried tomatoes. It's perfect for a family midweek meal and can easily be adapted.",
        creator: "Good Food team",
        category: "Italian",
        ingredients: [
          "250g penne",
          "300g broccoli, cut into large florets",
          "25g butter",
          "25g plain flour",
          "600ml milk",
          "100g mascarpone",
          "8 sundried tomatoes (preserved in olive oil), drained and thickly sliced",
          "2 tbsp small capers (optional), rinsed to remove excess salt or vinegar",
          "8 anchovy fillets, halved (optional)",
          "10 large fresh basil leaves, roughly torn",
          "4 fresh skinless salmon fillets",
          "50g mature cheddar, finely grated"
        ],
        instructions: [
          "Preheat the oven to 190°C (gas mark 5, fan 170°C) and prepare a 20x30cm ovenproof dish (about 5cm deep). Bring a large pan of water to a boil for the pasta. Once boiling, add the pasta with a generous sprinkling of salt. Stir, return to a boil, and cook for 6 minutes. Add the broccoli and cook for an additional 4 minutes, until the broccoli is just tender. Drain well.",
          "While the pasta is cooking, melt the butter in a large pan and stir in the flour and milk. Whisk continuously until the mixture thickens into a smooth sauce. Remove from heat, then stir in the mascarpone, sun-dried tomatoes, capers (if using), anchovies (if using), and basil. Add the cooked pasta and broccoli, and season to taste.",
          "Halve the salmon fillets widthways, and place them in a single layer at the bottom of the prepared ovenproof dish. Spoon the broccoli mixture over the salmon, then sprinkle with grated cheddar. You can chill the dish for up to 4 hours if you prefer to prepare it ahead of time.",
          "Bake for 30 minutes, or until the mixture is bubbling around the edges and lightly golden on top. Be careful not to overbake, as the fish may dry out."
        ]
      },

      {
        name: "Creamy Mushroom & Spinach Pasta",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2022/03/Creamy-mushroom-and-spinach-pasta-9b0582e.jpg", 
        alt: "A delicious creamy pasta with mushrooms and spinach.",
        stars: `${star}${star}${star}${star}${hollowStar} (69)`, 
        difficulty: "Easy",
        serves: "2 servings",
        time: "25 mins",
        desc: "Toss together tagliatelle, mushrooms and spinach in a parmesan and crème fraîche sauce to make a quick and low calorie dinner that takes just 25 minutes",
        creator: "Liberty Mendez",
        category: "Italian",
        ingredients: [
          "2 tbsp olive oil",
          "1 small onion, finely chopped",
          "150g baby mushrooms, halved",
          "150g tagliatelle",
          "2 garlic cloves, crushed",
          "200g low-fat crème fraîche",
          "15g parmesan (or vegetarian alternative), grated",
          "120g baby spinach",
          "½ tsp chilli flakes (optional)",
          "Black pepper, to taste"
        ],
        instructions: [
          "Heat the olive oil in a medium saucepan over medium heat. Fry the onion and mushrooms for 10 minutes, or until softened and slightly browned. Meanwhile, cook the tagliatelle according to package instructions.",
          "Add the garlic to the pan with the mushrooms and cook for another 2 minutes. Stir in the crème fraîche and parmesan, then add the baby spinach. Set the mixture aside.",
          "Drain the pasta, reserving 25ml of the cooking water. Toss the pasta in the creamy mushroom sauce, place it back on the heat, and cook over low heat for about 5 minutes until the spinach wilts. Add some of the reserved water to loosen the sauce as needed. Season with black pepper and finish with a sprinkle of chilli flakes, if desired."
        ]
      },

      {
        name: "Rahel’s Gulai Ayam (Indonesian Chicken Curry)",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2024/08/Indonesian-chicken-curry-65c629b.jpg?quality=90&webp=true&resize=600,545", 
        alt: "A fragrant Indonesian chicken curry with golden sauce, served with rice.",
        stars: `${star}${star}${star}${star}${hollowStar} (4)`, 
        difficulty: "easy",
        serves: "6 servings",
        time: "50 mins",
        desc: "Enjoy one of Indonesia’s premier curry dishes, a west Sumatra specialty. You’ll get lost in the deep flavours from the aromatic herbs and spices",
        creator: "Rahel Stephanie",
        category: "Indonesian",
        ingredients: [
          "12 bone-in chicken thighs",
          "1 lime, juiced",
          "2 tbsp rapeseed, sunflower, or vegetable oil",
          "3 lemongrass stalks, bruised and tied together",
          "6 lime leaves, torn",
          "1 cinnamon stick",
          "3 cardamom pods, seeds crushed",
          "1 star anise",
          "2 tsp ground coriander",
          "½ tsp ground nutmeg",
          "½ tsp ground cumin",
          "½ tsp ground turmeric",
          "50g coconut palm sugar (ideally Indonesian) or coconut sugar",
          "1 tsp tamarind paste",
          "400ml coconut milk",
          "Steamed white rice, to serve",
          "4 garlic cloves",
          "3 banana shallots (or 6 small Asian shallots), peeled",
          "3-4 large red chillies, trimmed",
          "2½cm piece of ginger, peeled",
          "1cm piece of galangal, peeled",
          "5 candlenuts or macadamia nuts"
        ],
        instructions: [
          "Put the chicken in a large bowl. Season with salt, pepper, and lime juice. Set aside.",
          "For the bumbu, peel the garlic and place it in a medium food processor along with the other ingredients. Blend until smooth.",
          "Heat the oil in a large saucepan or wok over medium heat. Fry the bumbu spice paste, lemongrass, lime leaves, cinnamon, cardamom, star anise, and ground spices for about 5 minutes, or until fragrant.",
          "Add the chicken and stir to coat in the spices. Continue cooking for 2-3 minutes, then add the coconut sugar, tamarind, and 200ml water. Season and bring to the boil. Reduce the heat to a simmer, cover, and cook for 15 minutes.",
          "Add the coconut milk and simmer for an additional 15 minutes until the chicken is cooked through. Remove from the heat and serve with steamed rice."
        ]
      },

      {
        name: "Crispy Banana Fritters",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2022/11/Banana-fritters-45c05b6.jpg?quality=90&webp=true&resize=900,817", 
        alt: "A tray of crispy banana fritters.",
        stars: `${star}${star}${star}${star}${hollowStar} (4)`,
        difficulty: "easy",
        serves: "20 fritters",
        time: "30 mins",
        desc: "Treat the family to Indonesian-style banana fritters for dessert. They’re cooked using a batter that includes sesame seeds for added crunch",
        creator: "Rahel Stephanie",
        category: "Indonesian",
        ingredients: [
          "Neutral oil (like rapeseed, sunflower, or vegetable), for deep-frying",
          "10 ripe apple or saba bananas, peeled (or 5 overripe plantains, peeled and halved, or cut into thirds if very large)",
          "100g plain flour",
          "50g rice flour",
          "¼ tsp baking powder",
          "2 tbsp white sesame seeds",
          "200ml ice-cold water",
          "¼ tsp salt"
        ],
        instructions: [
          "Pour the oil into a saucepan to a depth of 5cm and heat to 170°C. (If you don’t have a temperature probe, see Step 2.) Meanwhile, mix the batter ingredients (plain flour, rice flour, baking powder, sesame seeds, ice-cold water, and salt) in a large bowl until fully combined.",
          "Check the oil is ready. If you don’t have a temperature probe, drop in a little batter – it should sizzle immediately. Dip a piece of banana into the batter, gently lower it into the oil, and fry until crisp and golden brown, about 3 minutes. Repeat with the remaining banana pieces and batter, adjusting the oil temperature to ensure it doesn’t get too hot.",
          "Put the cooked fritters on a baking tray in a low oven to keep warm, then drain them on a cooling rack over a baking tray lined with kitchen paper."
        ]
      },

      {
        name: "Chicken Tacos",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chicken-sweetcorn-tacos-f01abbf.jpg?quality=90&webp=true&resize=440,400", 
        alt: "A plate of chicken tacos.",
        stars: `${star}${star}${star}${star}${star} (31)`,
        difficulty: "easy",
        serves: "4 servings",
        time: "1 hr",
        desc: "Make these healthy chicken and sweetcorn tacos for an easy midweek meal that's full of flavour. You'll also have leftovers to make wraps for lunch tomorrow",
        creator: "Anna Glover",
        category: "Mexican",
        ingredients: [
          "250g plain flour (plus extra for dusting)",
          "2 tbsp rapeseed oil",
          "2 tbsp taco or fajita seasoning",
          "5-6 skinless chicken breasts, sliced",
          "¼ red cabbage, finely shredded",
          "3 limes (1 juiced, 2 cut into wedges)",
          "Small bunch of coriander, chopped",
          "4 sweetcorn cobs (kernels sliced off) or 400g frozen sweetcorn",
          "400g can black beans, drained and rinsed",
          "2 garlic cloves, crushed",
          "4 tbsp fat-free yogurt, to serve",
          "Chilli sauce, to serve"
        ],
        instructions: [
          "Combine the flour with half the oil and a small pinch of salt in a bowl. Pour over 125-150ml warm water, then bring together into a soft dough with your hands. Cut into six equal pieces, then cut four of the pieces in half again, so you have eight small pieces and two large. Roll all the pieces out on a floured work surface until they’re as thin as you can get them.",
          "Heat a dry frying pan over a medium-high heat and cook the small and large tortillas for 2-3 mins on each side until golden and toasted (do this one at a time). Leave the large tortillas to cool, then cover and reserve for use in the lunchboxes. Keep the small tortillas warm in foil.",
          "Sprinkle the taco seasoning over the chicken in a bowl, and toss to combine. Toss the cabbage with the lime juice, half the coriander, and some seasoning in another bowl, then leave to pickle.",
          "Heat two frying pans over a high heat. Divide the remaining oil between the pans and fry the sweetcorn and a pinch of salt until sizzling and turning golden, stirring occasionally. You want the sweetcorn to char slightly, so you may need to leave it to cook undisturbed for a bit. While the sweetcorn cooks, fry the chicken in the larger pan until cooked through and golden (you may need to do this in batches).",
          "Tip the black beans and garlic into the sweetcorn and stir to warm through. Squeeze over two of the lime wedges.",
          "Reserve two spoonfuls each of the chicken (about 1 chicken breast) and sweetcorn mix for use in the lunchboxes. Then serve the rest in bowls alongside the cabbage, yogurt, lime wedges, remaining coriander, chilli sauce, and tortillas for everyone to dig into."
        ]
      },

      {
        name: "Beer Battered Fish Tacos",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/12/Beer-battered-fish_tacos-cb8cf13.jpg?quality=90&webp=true&resize=900,817", 
        alt: "A plate of beer battered fish tacos.",
        stars: `${star}${star}${star}${star}${star} (28)`,
        difficulty: "More effort",
        serves: "4 servings",
        time: "1 hr 5 mins",
        desc: "Pile chunks of battered cod, herby tartare and pink pickled onions into tortilla wraps to make these moreish tacos. They serve four, but won't last long!",
        creator: "Esther Clark",
        category: "Mexican",
        ingredients: [
          "150g plain flour",
          "75g cornflour",
          "½ tsp fine sea salt",
          "230ml cold beer",
          "Vegetable oil for deep-frying",
          "4 skinless and boneless cod loins, cut into 3cm pieces",
          "8 small soft corn tortillas",
          "2 Little Gem lettuces, shredded",
          "Hot sauce, to serve (optional)",
          "For the pickled onions:",
          "150ml white wine vinegar",
          "1 tsp coriander seeds, crushed",
          "1 tsp peppercorns",
          "2 tbsp caster sugar",
          "1 large red onion, finely sliced",
          "For the tartare sauce:",
          "150g mayonnaise",
          "½ small bunch of dill, finely chopped",
          "½ small bunch of basil, finely chopped",
          "½ tsp Dijon mustard",
          "1 tsp capers, chopped"
        ],
        instructions: [
          "First, make the pickled onions. Put the vinegar in a pan with 150ml water, the coriander seeds, peppercorns, sugar, and 1 tsp salt over a medium heat, stirring until the sugar has dissolved. Scoop the onions into a bowl and carefully pour over the hot pickling liquid. Leave to cool for 15 mins, then cover and chill for at least 1 hr. The pickled onions will keep chilled for up to two days.",
          "For the tartare sauce, mix together all the ingredients, then cover and chill. The tartare sauce will keep chilled for up to two days.",
          "Sift the flour and cornflour into a bowl, then stir through the salt. Make a well in the centre and whisk in the cold beer to make a smooth batter. Cover and chill for 30 mins.",
          "Heat the oil in a deep, heavy-based pan, no more than two-thirds full, until the oil reaches 190C on a cooking thermometer. If you don’t have a thermometer, check the oil is ready by dropping a small cube of bread into the oil – it should turn brown in about 10 seconds.",
          "Dip each piece of cod into the batter to fully coat, then gently shake off the excess. Fry the fish in batches for 4 mins per batch, then remove using a slotted spoon and drain on kitchen paper.",
          "Warm your tortillas in a low oven or in a dry frying pan. Spread over the tartare sauce, then add the fish and top with the pickled onions and shredded lettuce, plus a dash of hot sauce, if you like. Best enjoyed with a cold beer."
        ]
      },

      {
        name: "Spicy Peanut Butter & Corn Ramen",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2024/12/Spicy-peanut-butter-and-corn-ramen-f8e2b15.jpg?quality=90&webp=true&resize=900,817", 
        alt: "A plate of ramen.",
        stars: `${star}${star}${star}${star}${star} (12)`,
        difficulty: "easy",
        serves: "2 servings",
        time: "25 mins",
        desc: "Make a warming noodle soup which is sure to pack a punch – it’s spicy, sweet, nutty and savoury all in one slurp! The fish sauce adds a subtle layer of umami.",
        creator: "Cassie Best",
        category: "Japanese",
        ingredients: [
          "2 tsp vegetable or sunflower oil",
          "2 tsp grated ginger",
          "3 garlic cloves, crushed",
          "1 tbsp gochujang",
          "2 tbsp smooth peanut butter",
          "400g can coconut milk",
          "2 tsp soy sauce",
          "1 tsp soft brown sugar",
          "Few shakes of fish sauce (optional), or 1 tbsp miso paste if vegetarian",
          "1 lime, 2 ‘cheeks’ cut away, and the remainder juiced",
          "1 tsp chilli oil, plus a drizzle to serve (optional)",
          "150g frozen sweetcorn",
          "1 pak choi or choi sum, sliced",
          "2 eggs",
          "200g ramen noodles",
          "Small bunch of coriander, to serve"
        ],
        instructions: [
          "Heat the oil in a large saucepan. Add the ginger and garlic and sizzle gently for a minute, without letting the garlic brown. Stir in the gochujang and peanut butter, then add a large spoonful of the coconut cream from the top of the can of milk. Once smooth and well combined, stir in the remaining coconut milk, soy sauce, sugar, fish sauce (or miso), and lime juice. Leave to simmer gently.",
          "Meanwhile, heat 1 tsp chilli oil in a frying pan and add the sweetcorn with a pinch of salt. Fry over medium heat until the sweetcorn starts to caramelise, about 8-10 minutes. Push the corn to one side of the pan and add the pak choi, frying for a few minutes until the leaves soften.",
          "Heat a small pan of water until boiling. Gently boil the eggs for 7 minutes, then remove from the water with a slotted spoon and plunge into cold water. Set aside until ready to serve.",
          "Add the noodles to the pan of hot water and cook until just al dente. Drain and divide the noodles between soup or ramen bowls. Ladle the soup on top, spoon over the sweetcorn, and place the pak choi on one side of each bowl. Peel and halve the eggs and place them on top of the noodles. Garnish with fresh coriander and a cheek of lime. Drizzle with a little more chilli oil if desired."
        ]
      },

      {
        name: "Quick Sushi Bowl",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/quick-sushi-bowl-bf90cf3.jpg?quality=90&webp=true&resize=440,400", 
        alt: "A bowl of rice, fish, and vegetables.",
        stars: `${star}${star}${star}${star}${star} (11)`,
        difficulty: "easy",
        serves: "2 servings",
        time: "25 mins",
        desc: "Serve this quick and easy sushi bowl when you're short on time midweek. It contains a tasty mix of salmon, sushi rice, carrot, radish and pickled red cabbage.",
        creator: "Miriam Nice",
        category: "Japanese",
        ingredients: [
          "150g sushi rice",
          "Pinch of sugar",
          "1 tbsp rice vinegar",
          "2 cooked salmon fillets (teriyaki marinated recommended)",
          "1 large carrot, cut into ribbons",
          "4 tbsp pickled red cabbage",
          "Handful of radishes, sliced",
          "Thumb-sized piece of ginger, finely sliced",
          "¼ cucumber, halved longways and sliced",
          "1 tbsp soy sauce",
          "1 tsp sesame seeds (optional)"
        ],
        instructions: [
          "Cook the sushi rice according to package instructions. Once cooked, sprinkle over the sugar and rice vinegar, cover, and set aside for 5 minutes.",
          "Divide the rice between two bowls and arrange the salmon, carrot ribbons, pickled red cabbage, radishes, ginger, and cucumber on top.",
          "Drizzle with soy sauce and sprinkle with sesame seeds if using. Serve immediately and enjoy!"
        ]
      },
      
      {
        name: "Vegan Ramen",
        image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegan-ramen.jpg", 
        alt: "A bowl of vegan ramen",
        stars: `${star}${star}${star}${star}${star} (88)`,
        difficulty: "easy",
        serves: "2 servings",
        time: "25 mins",
        desc: "Enjoy this vegan ramen for a tasty midweek meal in just 25 minutes. Dried mushrooms and miso paste give the broth plenty of umami flavour.",
        creator: "Cassie Best",
        category: "Japanese",
        ingredients: [
          "2 garlic cloves, crushed",
          "Thumb-sized piece ginger, sliced, plus matchsticks for garnish (optional)",
          "1½ tbsp white miso paste",
          "1 tbsp neri goma (white sesame paste) or tahini",
          "15g dried shiitake mushrooms",
          "1L good-quality vegan stock",
          "2 tbsp soy sauce",
          "200g firm tofu, cut into chunky cubes",
          "1 tbsp cornflour",
          "1 tbsp vegetable or sunflower oil",
          "100g ramen or rice noodles (2 nests)",
          "1 head pak choi, quartered",
          "2 spring onions, finely sliced (whites and greens separated)",
          "25g ready-to-eat beansprouts",
          "1 carrot, peeled and cut into fine matchsticks",
          "Sesame oil, for drizzling",
          "Sriracha, chopped coriander, crushed peanuts, crumbled nori, or dried chilli threads (optional toppings)"
        ],
        instructions: [
          "Crush the garlic and place it in a saucepan with the ginger, miso paste, neri goma, mushrooms, stock, and soy sauce. Bring to a gentle simmer, cover, and cook for 5 minutes until the ginger is soft. Strain into a clean pan and discard the solids.",
          "Toss the tofu in cornflour. Heat the oil in a frying pan and fry the tofu for a few minutes on each side until golden, being careful not to break it apart.",
          "Cook the noodles for 1 minute less than package instructions to keep them slightly firm. Drain and leave in the pan with a little cooking water to prevent sticking.",
          "Add the pak choi and whites of the spring onions to the broth and gently reheat for 1-2 minutes until wilted.",
          "Divide the noodles between two deep bowls, ladle over the broth and vegetables. Top with tofu, beansprouts, carrot matchsticks, green parts of the spring onions, and a drizzle of sesame oil. Add additional toppings if desired."
        ]
      },

      {
        name: "Easy Steak Pie",
        image: "https://www.kitchensanctuary.com/wp-content/uploads/2015/01/Steak-Pie-square-FS-1.jpg", 
        alt: "A steak pie.",
        stars: `${star}${star}${star}${star}${star} (92)`,
        difficulty: "easy",
        serves: "6 servings",
        time: "3 hrs 15 mins",
        desc: "Nothing beats a classic homemade steak pie, complete with golden-brown flaky pastry and a rich beef filling. This easy family feast only takes 15 minutes to prep.",
        creator: "Barney Desmazery",
        category: "American",
        ingredients: [
          "3 tbsp sunflower oil",
          "1kg braising steak, diced",
          "2 onions, roughly chopped",
          "3 tbsp plain flour",
          "1 tbsp tomato ketchup",
          "2 beef stock cubes, mixed with 600ml boiling water",
          "375g sheet of ready-rolled puff pastry",
          "1 egg yolk, beaten"
        ],
        instructions: [
          "Preheat the oven to 160C/140C fan/gas 3. Heat half the oil in a large casserole dish, brown the meat well in batches, then set aside. Add the onions with a drizzle more oil and cook on low heat for 5 minutes until softened.",
          "Scatter over the flour, stirring until it turns brown. Return the meat and any juices to the pan, add the ketchup, and stir well. Pour in the stock, season, and bring to a simmer. Cover with a lid and cook in the oven for about 2 hours until the meat is tender. The filling can be made up to three days ahead or frozen for up to three months.",
          "Preheat the oven to 220C/200C fan/gas 7. Transfer the filling into a 24-26cm rimmed pie dish and brush the rim of the dish with some egg yolk. Unroll the pastry and drape it over the dish, trimming and pressing the edges against the sides. Use any trimmings for decoration if desired.",
          "Brush the pie generously with egg yolk. Make a few small slits in the center and bake for 40 minutes until golden brown. Let the pie rest for a few minutes before serving."
        ]
      },

      {
        name: "Air Fryer Steak",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2022/12/Air-fryer-steak-11ec03c.jpg?quality=90&webp=true&resize=600,545", 
        alt: "A tray of steak.",
        stars: `${star}${star}${star}${star}${hollowStar} (27)`,
        difficulty: "easy",
        serves: "2 servings",
        time: "17 mins",
        desc: "Use your air fryer to cook steak and you won’t look back. Enjoy topped with your favourite sauce and serve alongside chips, a seasonal green salad or roasted veg.",
        creator: "Samuel Goldsmith",
        category: "American",
        ingredients: [
          "2 rib-eye steaks (around 260g each, 3cm thick)",
          "1 tsp oil",
          "Salt, to taste",
          "Freshly ground black pepper, to taste"
        ],
        instructions: [
          "Pat the steaks dry with kitchen paper or a clean cloth. Brush with oil, then season generously with salt and freshly ground black pepper.",
          "Preheat the air fryer for 2 minutes at 200C. Place the steaks in the basket and cook for 6 minutes. Flip the steaks and cook for another 2 minutes for rare to medium-rare. Add 2 more minutes for medium, and an additional 2 minutes for well-done.",
          "Remove the steaks from the air fryer and let them rest on a plate for 3-4 minutes. Use this time to prepare a sauce if desired."
        ]
      },

      {
        name: "Lemon Drizzle Cake",
        image: "https://theloopywhisk.com/wp-content/uploads/2019/01/Lemon-Drizzle-Cake_730px-featured.jpg", 
        alt: "A lemon cake.",
        stars: `${star}${star}${star}${star}${star} (3006)`,
        difficulty: "easy",
        serves: "10 slices",
        time: "1 hr",
        desc: "It's difficult not to demolish this classic lemon drizzle in just one sitting, so why not make two at once?",
        creator: "Tana Ramsay",
        category: "Dessert",
        ingredients: [
          "225g unsalted butter, softened",
          "225g caster sugar",
          "4 eggs",
          "225g self-raising flour",
          "1 lemon, zested",
          "For the drizzle topping:",
          "1½ lemons, juiced",
          "85g caster sugar"
        ],
        instructions: [
          "Preheat the oven to 180C/160C fan/gas 4.",
          "Beat the butter and caster sugar together until pale and creamy, then add the eggs one at a time, mixing slowly.",
          "Sift in the self-raising flour, then add the lemon zest and mix until well combined.",
          "Line a 2 lb (about 14 x 24cm) loaf tin with greaseproof paper, then spoon in the mixture and level the top.",
          "Bake for 45-50 minutes until a thin skewer inserted into the centre comes out clean.",
          "While the cake is cooling in its tin, mix the lemon juice and caster sugar to make the drizzle.",
          "Prick the warm cake all over with a skewer or fork, then pour over the drizzle so it soaks in and forms a crisp topping.",
          "Leave in the tin until completely cool, then remove and serve. Keeps in an airtight container for 3-4 days or can be frozen for up to 1 month."
        ]
      },

      {
        name: "Carrot Cake",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/yummy-scrummy-carrot-cake_1-964d640.jpg?quality=90&webp=true&resize=440,400", 
        alt: "A carrot cake.",
        stars: `${star}${star}${star}${star}${star} (1273)`,
        difficulty: "easy",
        serves: "15 slices",
        time: "1 hr 15 mins",
        desc: "Delight friends with an afternoon tea that includes this easy carrot cake. You can bake the cake, freeze it and just drizzle over the icing on the day",
        creator: "Mary Cadogan",
        category: "Dessert",
        ingredients: [
          "175g light muscovado sugar",
          "175ml sunflower oil",
          "3 large eggs, lightly beaten",
          "140g grated carrot (about 3 medium)",
          "100g raisins",
          "1 large orange, zested",
          "175g self-raising flour",
          "1 tsp bicarbonate of soda",
          "1 tsp ground cinnamon",
          "½ tsp grated nutmeg (freshly grated preferred)",
          "For the frosting:",
          "175g icing sugar",
          "1½-2 tbsp orange juice"
        ],
        instructions: [
          "Preheat the oven to 180C/160C fan/gas 4. Oil and line the base and sides of an 18cm square cake tin with baking parchment.",
          "In a large bowl, mix the sugar, sunflower oil, and eggs lightly with a wooden spoon. Stir in the grated carrots, raisins, and orange zest.",
          "Sift in the self-raising flour, bicarbonate of soda, cinnamon, and nutmeg. Mix everything together to form a soft and slightly runny batter.",
          "Pour the mixture into the prepared tin and bake for 40-45 minutes, or until firm and springy in the center.",
          "Cool in the tin for 5 minutes, then transfer to a wire rack to cool completely. (The cake can be frozen at this stage if needed.)",
          "For the icing, mix the icing sugar with orange juice until smooth and slightly runny, like single cream.",
          "Drizzle the icing over the cooled cake in diagonal lines, allowing it to drip down the sides. Serve and enjoy!"
        ]
      },

      {
        name: "Peanut Butter Cookies",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/peanut-butter-cookies-8d07ccb.jpg?quality=90&webp=true&resize=440,400", 
        alt: "A jar of peanut butter cookies.",
        stars: `${star}${star}${star}${star}${star} (333)`,
        difficulty: "easy",
        serves: "16 cookies",
        time: "27 mins",
        desc: "With just three ingredients, these simple peanut butter cookies will delight kids and grown-ups alike – and they're gluten-free, too",
        creator: "Cassie Best",
        category: "Dessert",
        ingredients: [
          "200g peanut butter (crunchy or smooth)",
          "175g golden caster sugar",
          "¼ tsp fine table salt",
          "1 large egg"
        ],
        instructions: [
          "Preheat the oven to 180C/160C fan/gas 4 and line two large baking trays with baking parchment.",
          "In a bowl, mix the peanut butter and sugar together. Add the salt and stir well with a wooden spoon.",
          "Add the egg and mix until the dough comes together.",
          "Break off cherry tomato-sized chunks of dough and place them well spaced apart on the trays. Press down each cookie with the back of a fork to flatten slightly.",
          "Bake for 12 minutes, until golden around the edges but still pale in the center.",
          "Cool on the trays for 10 minutes, then transfer to a wire rack to cool completely. Store in a cookie jar for up to 3 days."
        ]
      },

      {
        name: "Oatmeal Raisin Cookies",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/cookies_0-c371661.jpg?quality=90&webp=true&resize=440,400", 
        alt: "A jar of oatmeal cookies.",
        stars: `${star}${star}${star}${star}${hollowStar} (154)`,
        difficulty: "easy",
        serves: "25 cookies",
        time: "30 mins",
        desc: "Fill the biscuit tin with these rustic cookies. Soaking the raisins gives a boost to the texture and stops them from burning during cooking.",
        creator: "Cassie Best",
        category: "Dessert",
        ingredients: [
          "100g raisins",
          "150ml vegetable oil",
          "200g golden caster sugar",
          "1 large egg, beaten",
          "1 tsp ground cinnamon",
          "1 tsp vanilla extract",
          "140g plain flour",
          "¼ tsp bicarbonate of soda",
          "300g oats"
        ],
        instructions: [
          "Preheat the oven to 180C/160C fan/gas 4 and line two baking trays with parchment paper.",
          "Pour 50ml boiling water over the raisins and leave to soak for 20 minutes until plump. Drain, reserving the liquid.",
          "In a large bowl, mix the oil and sugar together. Gradually beat in the egg, along with the reserved raisin water, cinnamon, and vanilla extract.",
          "Sift in the flour, bicarbonate of soda, and a pinch of salt. Stir in the oats and raisins.",
          "Drop heaped tablespoons of dough onto the baking trays, spacing them apart as they will spread.",
          "Bake for 12-15 minutes until golden. Let cool on the trays for 10 minutes before transferring to a cooling rack. Store in an airtight container for up to 3 days."
        ]
      },

      {
        name: "Easy Fudge",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1308593_3-fb4b5b4.jpg?quality=90&webp=true&resize=440,400", 
        alt: "A box of white fudge.",
        stars: `${star}${star}${star}${star}${star} (66)`,
        difficulty: "A challenge",
        serves: "36 pieces",
        time: "50 mins",
        desc: "Homemade vanilla fudge makes a fabulous gift wrapped up for Christmas or any special occasion. Our recipe for these buttery sweets is well worth the effort.",
        creator: "Cassie Best",
        category: "Dessert",
        ingredients: [
          "450g golden caster sugar",
          "400g double cream",
          "50g butter",
          "1 tbsp glucose syrup",
          "1 tbsp vanilla bean paste"
        ],
        instructions: [
          "Line a 20 x 20cm cake tin with baking parchment.",
          "In a medium-large saucepan, combine the sugar, cream, butter, and glucose syrup. Heat gently, stirring occasionally, until the sugar dissolves and the butter melts.",
          "Insert a sugar thermometer into the pan, ensuring it is fully submerged. Increase the heat and bring the syrup to a steady boil, stirring occasionally, until it reaches 116C (soft ball stage).",
          "Remove from heat and let sit undisturbed for 5 minutes, until the temperature drops to 110C. Stir in the vanilla bean paste and a pinch of salt.",
          "Begin beating the mixture with a wooden spoon until the temperature cools to about 60C and the fudge thickens, losing its glossy shine.",
          "Quickly pour the fudge into the prepared tin and smooth the surface. Let it cool at room temperature overnight.",
          "Once set, cut into bite-sized squares and store in an airtight container for up to 2 months."
        ]
      },

      {
        name: "Microwave Boozy Fudge",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/microwave-boozy-fudge-02bb6d1.jpg?quality=90&webp=true&resize=440,400", 
        alt: "A couple Fudge bars and cut up fudge pieces.",
        stars: `${star}${star}${star}${star}${hollowStar} (29)`,
        difficulty: "easy",
        serves: "24 pieces",
        time: "17 mins",
        desc: "Also known as miracle fudge, this indulgent sweet treat is made in minutes in the microwave, and makes for an ideal last-minute edible gift – no sugar thermometer required",
        creator: "Cassie Best",
        category: "Dessert",
        ingredients: [
          "400g golden caster sugar",
          "397g can condensed milk",
          "140g salted butter, chopped into pieces",
          "1 tsp vanilla bean paste",
          "2 tbsp coffee liqueur (or another alcohol like amaretto or brandy)"
        ],
        instructions: [
          "Grease and line a 20cm square baking tin with baking parchment.",
          "Put the sugar, condensed milk, and butter into a large heatproof bowl, add a pinch of salt, and stir together.",
          "Heat the mixture in the microwave on High for 10 minutes, stirring every 2-3 minutes. Keep an eye on it, as it will bubble up and may overflow.",
          "Add the vanilla and coffee liqueur, whisk together, and heat on High for another 2 minutes. The mixture should be caramel-colored and thickened.",
          "Scrape the fudge mixture into the tin and let it set aside for 45 minutes to 1 hour until firm and cool.",
          "Once set, cut into squares and store in a box. Consume within 3 weeks."
        ]
      },

      {
        name: "Coffee Cake",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/coffee-cake-4d37cac.jpg?quality=90&webp=true&resize=440,400", 
        alt: "A plate of coffee cake.",
        stars: `${star}${star}${star}${star}${hollowStar} (318)`,
        difficulty: "easy",
        serves: "8 slices",
        time: "50 mins",
        desc: "Whip up a classic coffee cake with ease. You can freeze the sponges if you want to save time later on. Ideal for a bake sale, birthday party or coffee morning.",
        creator: "sianie",
        category: "Dessert",
        ingredients: [
          "170g butter or margarine, plus extra for the tins",
          "170g caster sugar",
          "3 large eggs",
          "170g self-raising flour",
          "1 tbsp instant coffee, dissolved in 1 tbsp hot water (cooled)",
          "225g icing sugar",
          "100g butter or margarine",
          "1½ tbsp instant coffee, dissolved in 1 tbsp hot water",
          "Strawberry jam (optional)",
          "Walnuts or cherries (optional, for decoration)"
        ],
        instructions: [
          "Preheat the oven to 180C/160C fan. Grease and line two 18cm sandwich tins.",
          "Whisk the sugar and butter together until pale and fluffy.",
          "Gradually add the whisked eggs with a little flour each time, then fold in the remaining flour gently.",
          "Mix in the dissolved coffee, then divide the mixture between the tins and bake for 25-30 minutes until firm and golden.",
          "Let the cakes cool in the tins for 5 minutes before transferring to a wire rack to cool completely.",
          "To make the icing, beat the icing sugar and butter together until smooth, then add the dissolved coffee and mix well.",
          "Spread half the icing on one sponge, optionally spread strawberry jam on the other, then sandwich them together.",
          "Spread the remaining icing on top and decorate with walnuts or cherries if desired."
        ]
      }

  ];  

// Hamburger Menu
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
if(document.body.classList.contains("search-results-page")){
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get("query");
  const mathcingRecipes = recipes.filter( r => r.name.toLowerCase().includes(query.toLowerCase()));
  const recipesDisplay = document.getElementById("search-results-display")
  
  if (mathcingRecipes.length > 0) {
      recipesDisplay.innerHTML = mathcingRecipes.map(recipe => `

          <a href="/recipe-details.html?recipe=${encodeURIComponent(recipe.name)}">
              <div id="search-results-box" class="display-box">
                  <img src="${recipe.image}" alt="${recipe.alt}" id="search-results-img" class="display-img">
                  <div id="search-results-text-box" class="display-text-box">

                      <h2>${recipe.name}</h2>
                      <p>${recipe.stars}</p>
                      <p>${recipe.desc}</p>

                      <div id="search-results-emoji-box" class="display-emoji-box">

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
if(document.body.classList.contains("recipe-details-page")){
  const urlParams = new URLSearchParams(window.location.search);
  const recipeName = urlParams.get("recipe");

  const recipe = recipes.find( r => r.name.toLowerCase() === recipeName.toLowerCase());
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

// Category Page
if(document.body.classList.contains("category-page")){
  document.addEventListener("DOMContentLoaded", () => {
  // Select all category boxes
  const categoryBoxes = document.querySelectorAll(".category-page-box");

  categoryBoxes.forEach(box => {
      box.addEventListener("click", () => {
          const category = box.getAttribute("data-category"); // Get category name
          if (category) {
              // Redirect to category-details.html with the category as a query parameter
              window.location.href = `category-results.html?category=${encodeURIComponent(category)}`;
          }
      });
  });
});
}

// Category Results Page
if(document.body.classList.contains("category-results-page")){
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category"); // Get category from URL
  
  const matchingRecipes = recipes.filter(recipe => recipe.category.toLowerCase() === category.toLowerCase());
  
  const recipesDisplay = document.getElementById("category-details-display");
  
  if (matchingRecipes.length > 0) {
      recipesDisplay.innerHTML = matchingRecipes.map(recipe => `

           <a href="/recipe-details.html?recipe=${encodeURIComponent(recipe.name)}">
                <div id="category-details-box" class="display-box">
                    <img src="${recipe.image}" alt="${recipe.alt}" id="category-details-img" class="display-img">
                    <div id="category-details-text-box" class="display-text-box">

                        <h2>${recipe.name}</h2>
                        <p>${recipe.stars}</p>
                        <p>${recipe.desc}</p>

                        <div id="category-details-emoji-box" class="display-emoji-box">

                            <p>${clock} ${recipe.time}</p>
                            <p>${kitchenSet} ${recipe.difficulty}</p>

                        </div>
                    </div>
                </div>
            </a>`).join("");
  } else {
      recipesDisplay.innerHTML = `<p>No recipes found for "${category}".</p>`;
  }
}

// Recipes Page
if(document.body.classList.contains("recipes-page")){
  const recipesPageDisplay = document.getElementById("recipes-page-display");

  recipesPageDisplay.innerHTML = recipes.map(recipe => `

        <a href="/recipe-details.html?recipe=${encodeURIComponent(recipe.name)}">
                <div id="recipes-page-box" class="display-box">
                    <img src="${recipe.image}" alt="${recipe.alt}" id="recipes-page-img" class="display-img">
                    <div id="recipes-page-text-box" class="display-text-box">

                        <h2>${recipe.name}</h2>
                        <p>${recipe.stars}</p>
                        <p>${recipe.desc}</p>

                        <div id="recipes-page-emoji-box" class="display-emoji-box">

                            <p>${clock} ${recipe.time}</p>
                            <p>${kitchenSet} ${recipe.difficulty}</p>

                        </div>
                    </div>
                </div>
            </a>
      
    `).join("");
};

// Home Page Buttons 
if(document.body.classList.contains("home-page")){
  const wingBoxImg1 = document.getElementById("wing-img-box1");
  wingBoxImg1.addEventListener("click", () => {
      window.location.href = `recipe-details.html?recipe=Baked%20Buffalo%20Chicken%20Wings`;
  });

  const wingReviewBox1 = document.getElementById("wing-review-box1");
  wingReviewBox1.addEventListener("click", () => {
      window.location.href = `recipe-details.html?recipe=Baked%20Buffalo%20Chicken%20Wings`;
  });

  const wingBoxImg2 = document.getElementById("wing-img-box2");
  wingBoxImg2.addEventListener("click", () => {
      window.location.href = `recipe-details.html?recipe=Buffalo%20Cauliflower%20Wings`;
  });

  const wingReviewBox2 = document.getElementById("wing-review-box2");
  wingReviewBox2.addEventListener("click", () => {
      window.location.href = `recipe-details.html?recipe=Buffalo%20Cauliflower%20Wings`;
  });

  const content1 = document.getElementById("content1");
  content1.addEventListener("click", () => {
      window.location.href = `search-results.html?query=pasta`;
  });

  const content2 = document.getElementById("content2");
  content2.addEventListener("click", () => {
      window.location.href = `search-results.html?query=steak`;
  });

  const content3 = document.getElementById("content3");
  content3.addEventListener("click", () => {
      window.location.href = `search-results.html?query=taco`;
  });

  const content4 = document.getElementById("content4");
  content4.addEventListener("click", () => {
      window.location.href = `search-results.html?query=ramen`;
  });

  const dessert1 = document.getElementById("dessert1");
  dessert1.addEventListener("click", () => {
      window.location.href = `search-results.html?query=cake`;
  });


  const dessert2 = document.getElementById("dessert2");
  dessert2.addEventListener("click", () => {
      window.location.href = `search-results.html?query=cookies`;
  });

  const dessert3 = document.getElementById("dessert3");
  dessert3.addEventListener("click", () => {
      window.location.href = `search-results.html?query=fudge`;
  });

  const heroBtn = document.getElementById("hero-btn");
  heroBtn.addEventListener("click", () => {
    window.location.href = `category-results.html?category=Indonesian`;
  })
};
