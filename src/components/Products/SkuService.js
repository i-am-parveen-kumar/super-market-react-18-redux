export const getSkuList = () => {
  return skuList;
};

export const getSkuById = (id) => {
  return skuList.filter((sku) => sku.id === id)[0];
};

const skuList = [
  {
    id: 1,
    imgURL:
      "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/cheese.png",
    name: "Cheese",
    description: "200g cheese block",
    price: 10,
    nutrients: [
      { nutrient: "Protein", value: "25g" },
      { nutrient: "Carbohydrates", value: "1.3g" },
      { nutrient: "Fat", value: "33g" },
      { nutrient: "Salt", value: "1g" },
    ],
    storageInstructions: "Store in a cool place (between 5°C and 15°C)",
  },
  {
    id: 2,
    imgURL:
      "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/milk.png",
    name: "Milk",
    description: "200ml milk bottle",
    price: 5,
    nutrients: [
      { nutrient: "Protein", value: "16g" },
      { nutrient: "Carbohydrates", value: "11g" },
      { nutrient: "Fat", value: "15g" },
      { nutrient: "Salt", value: "0.44g" },
    ],
    storageInstructions: "Store in the fridge",
  },
  {
    id: 3,
    imgURL:
      "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/tomato.png",
    name: "Tomato",
    description: "1 piece of tomato",
    price: 2.75,
    nutrients: [
      { nutrient: "Protein", value: "1g" },
      { nutrient: "Carbohydrates", value: "4g" },
      { nutrient: "Fat", value: "0.2g" },
      { nutrient: "Salt", value: "0g" },
    ],
    storageInstructions: "Store in a cool place, away from the sun.",
  },
  {
    id: 4,
    imgURL:
      "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/pineapple.png",
    name: "Pineapple",
    description: "500g pineapple",
    price: 3.25,
    nutrients: [
      { nutrient: "Protein", value: "1g" },
      { nutrient: "Carbohydrates", value: "22g" },
      { nutrient: "Fat", value: "2g" },
      { nutrient: "Salt", value: "0g" },
    ],
    storageInstructions: "Store in a cool place, away from the sun.",
  },
];
