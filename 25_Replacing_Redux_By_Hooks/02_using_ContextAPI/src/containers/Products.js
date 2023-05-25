import React from "react";

import ProductItem from "../components/Products/ProductItem";
import "./Products.css";
import { useProductsContext } from "../context/ProductsContext";

const Products = () => {
  const { products } = useProductsContext();
  return (
    <ul className="products-list">
      {products.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
