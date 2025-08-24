import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const food_list = [
  // Burgers
  {
    id: 1,
    name: "Cheese Burger",
    price: 25,
    description:
      "A juicy burger topped with a generous layer of melted cheese, served with fresh lettuce, tomato, and a side of fries.",
    category: "Burgers",
    // image: "food_1.jpg",
  },
  {
    id: 2,
    name: "Veggie Burger",
    price: 30,
    description:
      "A healthy vegetarian option featuring a flavorful vegetable patty, accompanied by fresh salad and a hint of spicy sauce.",
    category: "Burgers",
    // image: "food_2.jpg",
  },
  {
    id: 3,
    name: "Double Burger",
    price: 27,
    description:
      "Double the delight with two juicy beef patties, layered with cheese, fresh veggies, and a special house sauce.",
    category: "Burgers",
    // image: "food_1.jpg",
  },
  {
    id: 4,
    name: "BBQ Burger",
    price: 26,
    description:
      "A smoky BBQ sauce enhances this delicious burger, topped with crispy onion rings and served with a side of slaw.",
    category: "Burgers",
    // image: "food_2.jpg",
  },

  // Salad
  {
    id: 5,
    name: "Greek Salad",
    price: 35,
    description:
      "A refreshing mix of cucumbers, tomatoes, olives, and feta cheese, drizzled with olive oil and vinegar dressing.",
    category: "Salad",
    // image: "food_3.jpg",
  },
  {
    id: 6,
    name: "Veg Salad",
    price: 28,
    description:
      "A vibrant salad featuring seasonal vegetables, sprinkled with nuts and seeds, served with a tangy vinaigrette.",
    category: "Salad",
    // image: "food_4.jpg",
  },
  {
    id: 7,
    name: "Caesar Salad",
    price: 30,
    description:
      "Crisp romaine lettuce, crunchy croutons, and grated Parmesan cheese, tossed in a classic Caesar dressing.",
    category: "Salad",
    // image: "food_3.jpg",
  },
  {
    id: 8,
    name: "Fruit Salad",
    price: 20,
    description:
      "A medley of fresh seasonal fruits, served with a light yogurt dressing and a sprinkle of mint leaves.",
    category: "Salad",
    // image: "food_4.jpg",
  },

  // Pasta
  {
    id: 9,
    name: "Cheese Pasta",
    price: 25,
    description:
      "Creamy cheese pasta with a rich, velvety sauce and a hint of garlic, garnished with freshly grated Parmesan.",
    category: "Pasta",
    // image: "food_5.jpg",
  },
  {
    id: 10,
    name: "Tomato Pasta",
    price: 28,
    description:
      "A tangy tomato sauce envelopes this pasta, with basil and oregano adding a delightful Italian flavor.",
    category: "Pasta",
    // image: "food_6.jpg",
  },
  {
    id: 11,
    name: "White Sauce Pasta",
    price: 24,
    description:
      "Smooth and creamy white sauce coats this pasta, with a touch of nutmeg and a sprinkle of parsley.",
    category: "Pasta",
    // image: "food_5.jpg",
  },
  {
    id: 12,
    name: "Pesto Pasta",
    price: 26,
    description:
      "Pasta tossed with vibrant pesto sauce, made from fresh basil, pine nuts, and Parmesan cheese.",
    category: "Pasta",
    // image: "food_6.jpg",
  },

  // Pizza
  {
    id: 13,
    name: "Margherita Pizza",
    price: 20,
    description:
      "Classic Margherita pizza topped with fresh mozzarella, ripe tomatoes, and basil leaves on a thin crust.",
    category: "Pizza",
    // image: "food_7.jpg",
  },
  {
    id: 14,
    name: "Pepperoni Pizza",
    price: 22,
    description:
      "Pepperoni slices cover this cheesy pizza, with a crispy crust and a hint of oregano for added flavor.",
    category: "Pizza",
    // image: "food_8.jpg",
  },

  // Breakfast
  {
    id: 15,
    name: "Pancakes",
    price: 18,
    description:
      "Fluffy golden pancakes served with maple syrup, butter, and a sprinkle of powdered sugar.",
    category: "Breakfast",
    // image: "food_9.jpg",
  },
  {
    id: 16,
    name: "Omelette",
    price: 25,
    description:
      "A fluffy omelette filled with cheese, onions, and herbs, served with toast and butter.",
    category: "Breakfast",
    // image: "food_10.jpg",
  },
  {
    id: 17,
    name: "French Toast",
    price: 20,
    description:
      "Golden-brown French toast sprinkled with cinnamon and served with honey and fresh fruits.",
    category: "Breakfast",
    // image: "food_11.jpg",
  },
  {
    id: 18,
    name: "Avocado Toast",
    price: 28,
    description:
      "Crispy toast topped with smashed avocado, cherry tomatoes, and a drizzle of olive oil.",
    category: "Breakfast",
    // image: "food_12.jpg",
  },

  // Soups
  {
    id: 19,
    name: "Tomato Soup",
    price: 22,
    description:
      "A warm and tangy tomato soup garnished with fresh basil, served with crunchy croutons.",
    category: "Soup",
    // image: "food_13.jpg",
  },
  {
    id: 20,
    name: "Chicken Soup",
    price: 36,
    description:
      "Comforting chicken soup with tender chicken pieces, vegetables, and a flavorful broth.",
    category: "Soup",
    // image: "food_14.jpg",
  },
  {
    id: 21,
    name: "Mushroom Soup",
    price: 24,
    description:
      "A creamy mushroom soup with earthy flavors, finished with a drizzle of cream and herbs.",
    category: "Soup",
    // image: "food_15.jpg",
  },
  {
    id: 22,
    name: "Sweet Corn Soup",
    price: 23,
    description:
      "A light and flavorful soup made with sweet corn, carrots, and spring onions.",
    category: "Soup",
    // image: "food_16.jpg",
  },
];

const menu_list = [
  {
    id: 1,
    menu_name: "Burgers",
    // src: menu_1,
    alt: "Burgers & Fast food image",
    Restaurants: "21 Restaurants",
  },
  {
    id: 2,
    menu_name: "Salad",
    // src: menu_2,
    alt: "Salads image",
    Restaurants: "32 Restaurants",
  },
  {
    id: 3,
    menu_name: "Pasta",
    // src: menu_3,
    alt: "Pasta & Casuals image",
    Restaurants: "12 Restaurants",
  },
  {
    id: 4,
    menu_name: "Pizza",
    // src: menu_4,
    alt: "Pizza image",
    Restaurants: "17 Restaurants",
  },
  {
    id: 5,
    menu_name: "Breakfast",
    // src: menu_5,
    alt: "Breakfast image",
    Restaurants: "10 Restaurants",
  },
  {
    id: 6,
    menu_name: "Soup",
    // src: menu_6,
    alt: "Soups image",
    Restaurants: "15 Restaurants",
  },
];

app.get("/foods", (req, res) => {
  res.json(food_list);
});

app.get("/categories", (req, res) => {
  res.json(menu_list);
});

app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
