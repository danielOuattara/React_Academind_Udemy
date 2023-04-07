import styles from "./Products.module.css";
import products from "./../../data/product";
import ProductItem from "./ProductItem";

export default function Products(props) {
  return (
    <section className={styles.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
}
