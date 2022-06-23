export const categories = [
  {
    categoryID: 1,
    categoryName: "Beverages",
    description: "Soft drinks coffees teas beers and ales",
    picture:
      "0x151C2F00020000000D000E0014002100FFFFFFFF4269746D617020496D616765005061696E",
  },
  {
    categoryID: 2,
    categoryName: "Condiments",
    description: "Sweet and savory sauces relishes spreads and seasonings",
    picture:
      "0x151C2F00020000000D000E0014002100FFFFFFFF4269746D617020496D616765005061696E",
  },
  {
    categoryID: 3,
    categoryName: "Confections",
    description: "Desserts candies and sweet breads",
    picture:
      "0x151C2F00020000000D000E0014002100FFFFFFFF4269746D617020496D616765005061696E",
  },
  {
    categoryID: 4,
    categoryName: "Dairy Products",
    description: "Cheeses",
    picture:
      "0x151C2F00020000000D000E0014002100FFFFFFFF4269746D617020496D616765005061696E",
  },
  {
    categoryID: 5,
    categoryName: "Grains/Cereals",
    description: "Breads crackers pasta and cereal",
    picture: "0x151C2F00020000000D000E0014002100FFFFFFFF4269746D617020496D6",
  },
  {
    categoryID: 6,
    categoryName: "Meat/Poultry",
    description: "Prepared meats",
    picture:
      "0x151C2F00020000000D000E0014002100FFFFFFFF4269746D617020496D616765005061696E",
  },
  {
    categoryID: 7,
    categoryName: "Produce",
    description: "Dried fruit and bean curd",
    picture:
      "0x151C2F00020000000D000E0014002100FFFFFFFF4269746D617020496D616765005061696E",
  },
  {
    categoryID: 8,
    categoryName: "Seafood",
    description: "Seaweed and fish",
    picture:
      "0x151C2F00020000000D000E0014002100FFFFFFFF4269746D617020496D616765005061696E",
  },
];

export const categoryName = categories.map((category) => {
  return { categoryName: category.categoryName };
});

export const categoryNameDescription = categories.map((category) => {
  return {
    categoryName: category.categoryName,
    description: category.description,
  };
});
