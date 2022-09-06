/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  /*
    {
      id: "P1",
      title: "Title 1",
      description: "Description 1...",
      price: 199,
      discontinued: false,
      categories: ["c1"]
    },
  */
  {
    id: "p1",
    title: "Goredrinker",
    description:
      "The effect of use was an option to restore physical strength in proportion to the number of enemy champions hit by a wide-area attack of a steel thorn whip.",
    price: 3300.5,
    discontinued: true,
    categories: ["c1"],
    imageUrl:
      "https://static.wikia.nocookie.net/leagueoflegends/images/a/a5/Goredrinker_item_HD.png/"
  },
  {
    id: "P2",
    title: "Stridebreaker",
    description:
      "The effect of use was given the option to slow down enemies who were hit by wide-area attacks from steel spines and became available on the move.",
    price: 3300.0,
    discontinued: false,
    categories: ["c1"],
    imageUrl:
      "https://static.wikia.nocookie.net/leagueoflegends/images/7/7a/Stridebreaker_item_HD.png/"
  },
  {
    id: "P3",
    title: "Divine Sunderer",
    description:
      "The mythical persistence effect provides defense penetration and magic penetration.",
    price: 3500.5,
    discontinued: false,
    categories: ["c1"],
    imageUrl:
      "https://static.wikia.nocookie.net/leagueoflegends/images/5/52/Divine_Sunderer_item_HD.png/"
  },
  {
    id: "P4",
    title: "Trinity Force",
    description: "Item for warrior champions with basic attack-oriented dealing structure.",
    price: 3333.0,
    discontinued: false,
    categories: ["c1"],
    imageUrl:
      "https://static.wikia.nocookie.net/leagueoflegends/images/9/9e/Trinity_Force_item_HD.png/"
  },
  {
    id: "P5",
    title: "Galeforce",
    description:
      "The use effect charges in a designated direction and blows projectiles to surrounding objects to cause damage.",
    price: 4000.0,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "https://static.wikia.nocookie.net/leagueoflegends/images/1/11/Galeforce_item_HD.png/"
  },
  {
    id: "P6",
    title: "Kraken Slayer",
    description:
      "It deals additional fixed damage every three basic attacks with its unique lasting effect lightning strike.",
    price: 3500.5,
    discontinued: false,
    categories: ["c2"],
    imageUrl:
      "https://static.wikia.nocookie.net/leagueoflegends/images/e/e9/Kraken_Slayer_item_HD.png/"
  },
  {
    id: "P7",
    title: "Immortal Shieldbow",
    description:
      "This is the most specialized item for stability among SHINHWA items for long-distance dealers",
    price: 4500.5,
    discontinued: false,
    categories: ["c2"],
    imageUrl:
      "https://static.wikia.nocookie.net/leagueoflegends/images/7/7f/Immortal_Shieldbow_item_HD.png/"
  },
  {
    id: "P8",
    title: "Duskblade of Draktharr",
    description: "Provides skill acceleration in addition to the common competency value.",
    price: 2900.5,
    discontinued: false,
    categories: ["c3"],
    imageUrl:
      "https://static.wikia.nocookie.net/leagueoflegends/images/4/44/Duskblade_of_Draktharr_item_HD.png/"
  },
  {
    id: "P9",
    title: "Eclipse",
    description: "The mythical persistence effect is defense penetration.",
    price: 3100.6,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "https://static.wikia.nocookie.net/leagueoflegends/images/1/15/Eclipse_item_HD.png/"
  },
  {
    id: "P10",
    title: "Prowler's Claw",
    description: "It is more efficient against the initial/dealer.",
    price: 3200.5,
    discontinued: false,
    categories: ["c3"],
    imageUrl:
      "https://static.wikia.nocookie.net/leagueoflegends/images/a/a4/Prowler%27s_Claw_item.png/"
  },
  {
    id: "P11",
    title: "Liandry's Anguish",
    description: "The mythical persistence effect provides skill acceleration.",
    price: 3700.0,
    discontinued: false,
    categories: ["c4"],
    imageUrl:
      "https://static.wikia.nocookie.net/leagueoflegends/images/8/85/Liandry%27s_Anguish_item_HD.png/"
  },
  {
    id: "P12",
    title: "Luden's Tempest",
    description:
      "The unique effect is the effect of inflicting additional magic damage to the target.",
    price: 3300.0,
    discontinued: false,
    categories: ["c4"],
    imageUrl:
      "https://static.wikia.nocookie.net/leagueoflegends/images/1/1e/Luden%27s_Tempest_item.png/"
  },
  {
    id: "P13",
    title: "Everfrost",
    description: "It fires forward after a slight sundelay, such as a set of strong punches.",
    price: 2800.09,
    discontinued: false,
    categories: ["c4"],
    imageUrl: "https://static.wikia.nocookie.net/leagueoflegends/images/a/a0/Everfrost_item_HD.png/"
  },
  {
    id: "P14",
    title: "Crown of the Shattered Queen",
    description: "It provides movement speed and ordering power with mythical sustainability.",
    price: 2700.0,
    discontinued: false,
    categories: ["c4"],
    imageUrl:
      "https://static.wikia.nocookie.net/leagueoflegends/images/4/44/Crown_of_the_Shattered_Queen_item_HD.png/"
  },
  {
    id: "P15",
    title: "Frostfire Gauntlet",
    description:
      "The inherent effect is to create a station field in the event of a basic attack to inflict magical damage and slowing.",
    price: 2800.5,
    discontinued: false,
    categories: ["c5"],
    imageUrl:
      "https://static.wikia.nocookie.net/leagueoflegends/images/e/ee/Frostfire_Gauntlet_item_HD.png/"
  },
  {
    id: "P16",
    title: "Turbo Chemtank",
    description:
      "The intrinsic effect is that the fire that always causes lasting damage to the surrounding area disappears, and a new effect of refueling has been added.",
    price: 2800.0,
    discontinued: false,
    categories: ["c5"],
    imageUrl:
      "https://static.wikia.nocookie.net/leagueoflegends/images/c/c2/Turbo_Chemtank_item.png/"
  },
  {
    id: "P17",
    title: "Sunfire Aegis",
    description:
      "The defense/magic resistance is higher and the damage of the inherent effect of burning is high.",
    price: 3200.0,
    discontinued: false,
    categories: ["c5"],
    imageUrl:
      "https://static.wikia.nocookie.net/leagueoflegends/images/e/e4/Sunfire_Aegis_item_HD.png/"
  },
  {
    id: "P18",
    title: "Locket of the Iron Solari",
    description:
      "It provides defense and magic resistance to neighboring allies with its unique effect.",
    price: 2500.0,
    discontinued: false,
    categories: ["c6"],
    imageUrl:
      "https://static.wikia.nocookie.net/leagueoflegends/images/5/56/Locket_of_the_Iron_Solari_item.png/"
  },
  {
    id: "P19",
    title: "Evenshroud",
    description:
      "The damage to the target and the surrounding champions increases by 9% for 4 seconds.",
    price: 2500.5,
    discontinued: false,
    categories: ["c6"],
    imageUrl:
      "https://static.wikia.nocookie.net/leagueoflegends/images/b/b1/Evenshroud_item_HD.png/"
  },
  {
    id: "P20",
    title: "Imperial Mandate",
    description: "If other allies attack the enemy with a mark, you will receive more damage.",
    price: 2300.0,
    discontinued: true,
    categories: ["c6"],
    imageUrl:
      "https://static.wikia.nocookie.net/leagueoflegends/images/b/bc/Imperial_Mandate_item.png/"
  }
];
