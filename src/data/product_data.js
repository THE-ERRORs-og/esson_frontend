
const products = [
  {
    id: "pbx01",
    name: "Pizza Boxes",
    category: "Food",
    description:
      "Multicolor customized printed square pizza boxes with your brand logo.",
    tags: ["Recyclable", "Custom Branding", "Eco-Friendly", "Printed"],
    mainTags: ["Popular"],
    size: ["8 in", "10 in", "12 in", "14 in", "15 in", "16 in", "20 in"],
    images: [
      "https://essongroup.gumlet.io/images/pizza_box_single.png",
      "https://essongroup.gumlet.io/images/pizza_box_multi.png",
    ],
    price: [
      { quantity: "50", price: 250, unit_price: 5 },
      { quantity: "100", price: 450, unit_price: 4.5 },
      { quantity: "500", price: 2000, unit_price: 4 },
    ],
    detailedDescription:
      "### Features\n- **Recyclable**: Made from eco-friendly materials.\n- **Custom Branding**: Print your logo and design.\n- **Various Sizes**: Available from 8 inches to 20 inches.\n\n### Additional Details\nThese pizza boxes are designed to be sturdy and food-safe. The customizable prints allow for brand visibility while ensuring durability.",
  },
  {
    id: "pcp01",
    name: "Paper Cup",
    category: "Food",
    description:
      "Multicolor customized paper cups with your brand logo, suitable for hot beverages.",
    tags: ["Recyclable", "Printed", "Custom Branding", "Eco-Friendly"],
    mainTags: ["Popular"],
    size: ["8oz", "12oz", "16oz", "22oz", "24oz", "32oz"],
    images: [
      "https://essongroup.gumlet.io/images/cup_lid_pack.png",
      "https://essongroup.gumlet.io/images/cup_lid.png",
    ],
    price: [
      { quantity: "50", price: 200, unit_price: 4 },
      { quantity: "100", price: 380, unit_price: 3.8 },
      { quantity: "500", price: 1750, unit_price: 3.5 },
    ],
    detailedDescription:
      "### Features\n- **Eco-Friendly**: Fully recyclable material.\n- **Custom Branding**: Print your design.\n- **Ideal for Hot Beverages**: Coffee, tea, and more.\n\n### Sizing Information\nAvailable in:\n- 8oz\n- 12oz\n- 16oz\n- 22oz\n- 24oz\n- 32oz",
  },
  {
    id: "icc01",
    name: "Ice Cream Cup",
    category: "Food",
    description:
      "Multicolor customized printed paper ice cream cups with your brand logo.",
    tags: ["Recyclable", "Custom Branding", "Printed"],
    mainTags: ["Popular"],
    size: ["4oz", "6oz", "8oz", "12oz", "16oz"],
    images: [
      "https://essongroup.gumlet.io/images/cup_lid_pack.png",
      "https://essongroup.gumlet.io/images/cup_lid.png",
    ],
    price: [
      { quantity: "50", price: 180, unit_price: 3.6 },
      { quantity: "100", price: 350, unit_price: 3.5 },
      { quantity: "500", price: 1600, unit_price: 3.2 },
    ],
    detailedDescription:
      "### Features\n- **Perfect for Desserts**: Ideal for ice creams, frozen yogurt, and more.\n- **Recyclable & Eco-Friendly**: Made with sustainable materials.\n- **Custom Prints**: Showcase your brand with high-quality prints.\n\n### Available Sizes\n- 4oz\n- 6oz\n- 8oz\n- 12oz\n- 16oz",
  },
  {
    id: "plc01",
    name: "Plastic Cup",
    category: "Food",
    description:
      "Multicolor customized clear plastic cups with your brand logo.",
    tags: ["Custom Branding", "Recyclable", "Printed"],
    mainTags: ["Trending"],
    size: ["12oz", "16oz", "20oz", "24oz", "32oz"],
    images: ["https://essongroup.gumlet.io/images/boss_cup_single.png"],
    price: [
      { quantity: "50", price: 220, unit_price: 4.4 },
      { quantity: "100", price: 400, unit_price: 4 },
      { quantity: "500", price: 1900, unit_price: 3.8 },
    ],
    detailedDescription:
      "### Features\n- **Crystal Clear**: Ideal for cold beverages like iced coffee, juice, and soda.\n- **Custom Branding**: Add your logo for enhanced brand visibility.\n- **Durable & Leakproof**: High-quality plastic construction.\n\n### Available Sizes\n- 12oz\n- 16oz\n- 20oz\n- 24oz\n- 32oz",
  },
  {
    id: "ccp01",
    name: "Coffee Cup",
    category: "Food",
    description:
      "Multicolor customized printed coffee cups with your brand logo.",
    tags: ["Eco-Friendly", "Recyclable", "Printed", "Custom Branding"],
    mainTags: ["Best Seller"],
    size: ["8oz", "12oz", "16oz", "24oz"],
    images: [
      "https://essongroup.gumlet.io/images/cup_lid_pack.png",
      "https://essongroup.gumlet.io/images/cup_lid.png",
    ],
    price: [
      { quantity: "50", price: 210, unit_price: 4.2 },
      { quantity: "100", price: 390, unit_price: 3.9 },
      { quantity: "500", price: 1800, unit_price: 3.6 },
    ],
    detailedDescription:
      "### Features\n- **Insulated Design**: Keeps coffee hot for longer.\n- **Custom Prints**: Your brand, your design.\n- **Eco-Friendly**: Made from recyclable materials.\n\n### Available Sizes\n- 8oz\n- 12oz\n- 16oz\n- 24oz",
  },
  {
    id: "pb01",
    name: "Paper Bags with Handle & Without Handle",
    category: "Food",
    description:
      "Multicolor customized printed paper bags with or without handles, featuring your brand logo.",
    tags: ["Recyclable", "Custom Branding", "Printed", "Eco-Friendly"],
    mainTags: ["Sustainable"],
    size: ["Small", "Medium", "Large"],
    images: ["https://essongroup.gumlet.io/images/craft_bag.png"],
    price: [
      { quantity: "50", price: 300, unit_price: 6 },
      { quantity: "100", price: 550, unit_price: 5.5 },
      { quantity: "500", price: 2500, unit_price: 5 },
    ],
    detailedDescription:
      "### Features\n- **Sustainable Material**: 100% recyclable and biodegradable.\n- **Custom Branding**: Print your logo and design.\n- **Available With or Without Handles**: Choose as per your business needs.\n\n### Size Options\n- Small\n- Medium\n- Large",
  },
];

export default products;