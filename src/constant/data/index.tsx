import {
  Banner_1,
  Banner_2,
  Fb,
  food_1,
  food_2,
  food_3,
  food_4,
  food_5,
  food_6,
  food_7,
  food_8,
  food_9,
  food_10,
  food_11,
  food_12,
  // food_13,
  // food_14,
  // food_15,
  // food_16,
  // food_17,
  // food_18,
  // food_19,
  // food_20,
  // food_21,
  // food_22,
  // food_23,
  // food_24,
  // food_25,
  // food_26,
  // food_27,
  // food_28,
  // food_29,
  // food_30,
  // food_31,
  // food_32,
  insta,
  menu_1,
  menu_2,
  menu_3,
  menu_4,
  menu_5,
  menu_6,
  snap,
  tiktok,
} from "../../../public/images";

export const NAV_LINK = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Menu",
    link: "/menu",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export const socialMediaLinks = [
  {
    alt: "Facebook",
    srcImage: Fb,
  },
  {
    alt: "Instagram",
    srcImage: insta,
  },
  {
    alt: "Tiktok",
    srcImage: tiktok,
  },
  {
    alt: "Snapchat",
    srcImage: snap,
  },
];

export const LEGAL_PAGE = [
  {
    title: "Terms and Conditions",
    link: "/terms-and-conditions",
  },
  {
    title: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    title: "Cookie Policy",
    link: "/cookie-policy",
  },
  {
    title: "Refund and Cancellation Policy",
    link: "/refund-and-cancellation-policy",
  },
];

export const IMPORTANT_LINKS = [
  {
    title: "Get help",
    link: "/get-help",
  },
  {
    title: "Add your restaurant",
    link: "/add-your-restaurant",
  },
  {
    title: "Sign up to deliver",
    link: "/sign-up-to-deliver",
  },
  {
    title: "Create a business account",
    link: "/create-a-business-account",
  },
];

export const FOOTER_LINKS = [
  {
    title: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    title: "Terms",
    link: "/terms-and-conditions",
  },
  {
    title: "Pricing",
    link: "/pricing",
  },
  {
    title: "Do not sell or share my personal information",
    link: "/do-not-sell-or-share-my-personal-information",
  },
];

export const BannerImage = [
  {
    src: Banner_1,
    alt: "banner_1",
    title: "Restaurant",
    location: "Chef Burgers London",
  },
  {
    src: Banner_2,
    alt: "banner_1",
    title: "Restaurant",
    location: "Grand Ai Cafe London",
  },
  {
    src: Banner_1,
    alt: "banner_2",
    location: "Butterbrot Caf’e London",
    title: "Restaurant",
  },
];

export const menu_list = [
  {
    id: 1,
    menu_name: "Burgers",
    tagline: "Fun with Buns",
    src: menu_1,
    alt: "Burgers & Fast food image",
    Restaurants: "21 Restaurants",
  },
  {
    id: 2,
    menu_name: "Salad",
    tagline: "Fresh and Fit",
    src: menu_2,
    alt: "Healthy Salad",
    Restaurants: "15 Restaurants",
  },
  {
    id: 3,
    menu_name: "Pasta",
    tagline: "Twist and Taste",
    src: menu_3,
    alt: "Italian Pasta",
    Restaurants: "10 Restaurants",
  },
  {
    id: 4,
    menu_name: "Pizza",
    tagline: "Cheese Paradise",
    src: menu_4,
    alt: "Delicious Pizza",
    Restaurants: "25 Restaurants",
  },
];

export const food_list = [
  // Burgers
  {
    id: 1,
    name: "Cheese Burger",
    image: food_1,
    price: 15,
    description:
      "A juicy burger topped with a generous layer of melted cheese, served with fresh lettuce, tomato, and a side of fries.",
    category: "Burgers",
  },
  {
    id: 2,
    name: "Veggie Burger",
    image: food_2,
    price: 12,
    description:
      "A healthy vegetarian option featuring a flavorful vegetable patty, accompanied by fresh salad and a hint of spicy sauce.",
    category: "Burgers",
  },
  {
    id: 3,
    name: "Double Burger",
    image: food_1,
    price: 17,
    description:
      "Double the delight with two juicy beef patties, layered with cheese, fresh veggies, and a special house sauce.",
    category: "Burgers",
  },
  {
    id: 4,
    name: "BBQ Burger",
    image: food_2,
    price: 16,
    description:
      "A smoky BBQ sauce enhances this delicious burger, topped with crispy onion rings and served with a side of slaw.",
    category: "Burgers",
  },

  // Salad
  {
    id: 5,
    name: "Greek Salad",
    image: food_3,
    price: 12,
    description:
      "A refreshing mix of cucumbers, tomatoes, olives, and feta cheese, drizzled with olive oil and vinegar dressing.",
    category: "Salad",
  },
  {
    id: 6,
    name: "Veg Salad",
    image: food_4,
    price: 18,
    description:
      "A vibrant salad featuring seasonal vegetables, sprinkled with nuts and seeds, served with a tangy vinaigrette.",
    category: "Salad",
  },
  {
    id: 7,
    name: "Caesar Salad",
    image: food_3,
    price: 14,
    description:
      "Crisp romaine lettuce, crunchy croutons, and grated Parmesan cheese, tossed in a classic Caesar dressing.",
    category: "Salad",
  },
  {
    id: 8,
    name: "Fruit Salad",
    image: food_4,
    price: 15,
    description:
      "A medley of fresh seasonal fruits, served with a light yogurt dressing and a sprinkle of mint leaves.",
    category: "Salad",
  },

  // Pasta
  {
    id: 9,
    name: "Cheese Pasta",
    image: food_5,
    price: 12,
    description:
      "Creamy cheese pasta with a rich, velvety sauce and a hint of garlic, garnished with freshly grated Parmesan.",
    category: "Pasta",
  },
  {
    id: 10,
    name: "Tomato Pasta",
    image: food_6,
    price: 18,
    description:
      "A tangy tomato sauce envelopes this pasta, with basil and oregano adding a delightful Italian flavor.",
    category: "Pasta",
  },
  {
    id: 11,
    name: "White Sauce Pasta",
    image: food_5,
    price: 14,
    description:
      "Smooth and creamy white sauce coats this pasta, with a touch of nutmeg and a sprinkle of parsley.",
    category: "Pasta",
  },
  {
    id: 12,
    name: "Pesto Pasta",
    image: food_6,
    price: 16,
    description:
      "Pasta tossed with vibrant pesto sauce, made from fresh basil, pine nuts, and Parmesan cheese.",
    category: "Pasta",
  },

  // Pizza
  {
    id: 13,
    name: "Margherita Pizza",
    image: food_7,
    price: 20,
    description:
      "Classic Margherita pizza topped with fresh mozzarella, ripe tomatoes, and basil leaves on a thin crust.",
    category: "Pizza",
  },
  {
    id: 14,
    name: "Pepperoni Pizza",
    image: food_8,
    price: 22,
    description:
      "Pepperoni slices cover this cheesy pizza, with a crispy crust and a hint of oregano for added flavor.",
    category: "Pizza",
  },
  {
    id: 15,
    name: "Veggie Pizza",
    image: food_7,
    price: 18,
    description:
      "A colorful array of fresh vegetables on a cheesy pizza crust, finished with a sprinkle of Italian herbs.",
    category: "Pizza",
  },
  {
    id: 16,
    name: "BBQ Chicken Pizza",
    image: food_8,
    price: 24,
    description:
      "BBQ sauce and tender chicken pieces top this pizza, with red onions and cilantro for a punchy taste.",
    category: "Pizza",
  },

  // Breakfast
  {
    id: 17,
    name: "Pancakes",
    image: food_9,
    price: 10,
    description:
      "Fluffy pancakes stacked high, drizzled with maple syrup and butter, served with a side of fresh berries.",
    category: "Breakfast",
  },
  {
    id: 18,
    name: "Omelette",
    image: food_10,
    price: 8,
    description:
      "A fluffy omelette filled with cheese and herbs, served with toast and a small side salad.",
    category: "Breakfast",
  },
  {
    id: 19,
    name: "French Toast",
    image: food_9,
    price: 9,
    description:
      "Golden French toast, lightly dusted with powdered sugar, served with a side of maple syrup.",
    category: "Breakfast",
  },
  {
    id: 20,
    name: "Waffles",
    image: food_10,
    price: 11,
    description:
      "Crispy waffles with a light, fluffy interior, served with whipped cream and fresh fruit on top.",
    category: "Breakfast",
  },

  // Soups
  {
    id: 21,
    name: "Tomato Soup",
    image: food_11,
    price: 7,
    description:
      "Warm tomato soup, seasoned with herbs and spices, served with a side of crusty bread for dipping.",
    category: "Soups",
  },
  {
    id: 22,
    name: "Chicken Soup",
    image: food_12,
    price: 9,
    description:
      "Hearty chicken soup with tender pieces of chicken, carrots, and celery, simmered in a savory broth.",
    category: "Soups",
  },
  {
    id: 23,
    name: "Mushroom Soup",
    image: food_11,
    price: 8,
    description:
      "Creamy mushroom soup with earthy flavors, topped with a sprinkle of fresh herbs for garnish.",
    category: "Soups",
  },
  {
    id: 24,
    name: "Vegetable Soup",
    image: food_12,
    price: 8,
    description:
      "Fresh vegetable soup with a medley of seasonal vegetables, simmered in a light and savory broth.",
    category: "Soups",
  },
];
