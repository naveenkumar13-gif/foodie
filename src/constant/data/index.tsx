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
  insta,
  menu_1,
  menu_2,
  menu_3,
  menu_4,
  menu_5,
  menu_6,
  snap,
  tiktok,
  discount,
  food_13,
  food_14,
  food_15,
  food_16,
} from "../../../public/images";

export const NAV_LINK = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Product",
    link: "/product",
  },
  {
    name: "Order",
    link: "/order",
  },
  {
    name: "Offers",
    link: "/offers",
  },
  // {
  //   name: "Contact",
  //   link: "/contact",
  // },
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
    src: menu_1,
    alt: "Burgers & Fast food image",
    Restaurants: "21 Restaurants",
  },
  {
    id: 2,
    menu_name: "Salad",
    src: menu_2,
    alt: "Salads image",
    Restaurants: "32 Restaurants",
  },
  {
    id: 3,
    menu_name: "Pasta",
    src: menu_3,
    alt: "Pasta & Casuals image",
    Restaurants: "12 Restaurants",
  },
  {
    id: 4,
    menu_name: "Pizza",
    src: menu_4,
    alt: "Pizza image",
    Restaurants: "17 Restaurants",
  },
  {
    id: 5,
    menu_name: "Breakfast",
    src: menu_5,
    alt: "Breakfast image",
    Restaurants: "10 Restaurants",
  },
  {
    id: 6,
    menu_name: "Soup",
    src: menu_6,
    alt: "Soups image",
    Restaurants: "15 Restaurants",
  },
];

export const food_list = [
  // Burgers
  {
    id: 1,
    name: "Cheese Burger",
    image: food_1,
    price: 25,
    description:
      "A juicy burger topped with a generous layer of melted cheese, served with fresh lettuce, tomato, and a side of fries.",
    category: "Burgers",
  },
  {
    id: 2,
    name: "Veggie Burger",
    image: food_2,
    price: 30,
    description:
      "A healthy vegetarian option featuring a flavorful vegetable patty, accompanied by fresh salad and a hint of spicy sauce.",
    category: "Burgers",
  },
  {
    id: 3,
    name: "Double Burger",
    image: food_1,
    price: 27,
    description:
      "Double the delight with two juicy beef patties, layered with cheese, fresh veggies, and a special house sauce.",
    category: "Burgers",
  },
  {
    id: 4,
    name: "BBQ Burger",
    image: food_2,
    price: 26,
    description:
      "A smoky BBQ sauce enhances this delicious burger, topped with crispy onion rings and served with a side of slaw.",
    category: "Burgers",
  },

  // Salad
  {
    id: 5,
    name: "Greek Salad",
    image: food_3,
    price: 35,
    description:
      "A refreshing mix of cucumbers, tomatoes, olives, and feta cheese, drizzled with olive oil and vinegar dressing.",
    category: "Salad",
  },
  {
    id: 6,
    name: "Veg Salad",
    image: food_4,
    price: 28,
    description:
      "A vibrant salad featuring seasonal vegetables, sprinkled with nuts and seeds, served with a tangy vinaigrette.",
    category: "Salad",
  },
  {
    id: 7,
    name: "Caesar Salad",
    image: food_3,
    price: 30,
    description:
      "Crisp romaine lettuce, crunchy croutons, and grated Parmesan cheese, tossed in a classic Caesar dressing.",
    category: "Salad",
  },
  {
    id: 8,
    name: "Fruit Salad",
    image: food_4,
    price: 20,
    description:
      "A medley of fresh seasonal fruits, served with a light yogurt dressing and a sprinkle of mint leaves.",
    category: "Salad",
  },

  // Pasta
  {
    id: 9,
    name: "Cheese Pasta",
    image: food_5,
    price: 25,
    description:
      "Creamy cheese pasta with a rich, velvety sauce and a hint of garlic, garnished with freshly grated Parmesan.",
    category: "Pasta",
  },
  {
    id: 10,
    name: "Tomato Pasta",
    image: food_6,
    price: 28,
    description:
      "A tangy tomato sauce envelopes this pasta, with basil and oregano adding a delightful Italian flavor.",
    category: "Pasta",
  },
  {
    id: 11,
    name: "White Sauce Pasta",
    image: food_5,
    price: 24,
    description:
      "Smooth and creamy white sauce coats this pasta, with a touch of nutmeg and a sprinkle of parsley.",
    category: "Pasta",
  },
  {
    id: 12,
    name: "Pesto Pasta",
    image: food_6,
    price: 26,
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

  // Breakfast
  {
    id: 15,
    name: "Pancakes",
    image: food_9,
    price: 18,
    description:
      "Fluffy golden pancakes served with maple syrup, butter, and a sprinkle of powdered sugar.",
    category: "Breakfast",
  },
  {
    id: 16,
    name: "Omelette",
    image: food_10,
    price: 25,
    description:
      "A fluffy omelette filled with cheese, onions, and herbs, served with toast and butter.",
    category: "Breakfast",
  },
  {
    id: 17,
    name: "French Toast",
    image: food_11,
    price: 20,
    description:
      "Golden-brown French toast sprinkled with cinnamon and served with honey and fresh fruits.",
    category: "Breakfast",
  },
  {
    id: 18,
    name: "Avocado Toast",
    image: food_12,
    price: 28,
    description:
      "Crispy toast topped with smashed avocado, cherry tomatoes, and a drizzle of olive oil.",
    category: "Breakfast",
  },

  // Soups
  {
    id: 19,
    name: "Tomato Soup",
    image: food_13,
    price: 22,
    description:
      "A warm and tangy tomato soup garnished with fresh basil, served with crunchy croutons.",
    category: "Soup",
  },
  {
    id: 20,
    name: "Chicken Soup",
    image: food_14,
    price: 36,
    description:
      "Comforting chicken soup with tender chicken pieces, vegetables, and a flavorful broth.",
    category: "Soup",
  },
  {
    id: 21,
    name: "Mushroom Soup",
    image: food_15,
    price: 24,
    description:
      "A creamy mushroom soup with earthy flavors, finished with a drizzle of cream and herbs.",
    category: "Soup",
  },
  {
    id: 22,
    name: "Sweet Corn Soup",
    image: food_16,
    price: 23,
    description:
      "A light and flavorful soup made with sweet corn, carrots, and spring onions.",
    category: "Soup",
  },
];


export const DiscountImage = [
  {
    src: discount,
    alt: "banner_1",
    title: "Special Offer",
    subtitle: "First Order Discount",
  },
];
