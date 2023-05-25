import { createContext, useContext, useState } from "react";

const ProductsContext = createContext();

const PRODUCTS = [
  {
    id: "p1",
    title: "Red Scarf",
    description: "A pretty red scarf.",
    isFavorite: false,
  },
  {
    id: "p2",
    title: "Blue T-Shirt",
    description: "A pretty blue t-shirt.",
    isFavorite: false,
  },
  {
    id: "p3",
    title: "Green Trousers",
    description: "A pair of lightly green trousers.",
    isFavorite: false,
  },
  {
    id: "p4",
    title: "Orange Hat",
    description: "Street style! An orange hat.",
    isFavorite: false,
  },
];

export default function ProductsContextProvider(props) {
  const [products, setProducts] = useState(PRODUCTS);

  const toggle_Favorite = (productId) => {
    const prodIndex = products.findIndex((p) => p.id === productId);
    const updatedProducts = [...products];
    updatedProducts[prodIndex] = {
      ...products[prodIndex],
      isFavorite: !products[prodIndex].isFavorite,
    };

    console.log("updatedProducts = ", updatedProducts);
    return setProducts(updatedProducts);
  };
  return (
    <ProductsContext.Provider value={{ products, toggle_Favorite }}>
      {props.children}
    </ProductsContext.Provider>
  );
}

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
