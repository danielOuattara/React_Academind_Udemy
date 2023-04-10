import { Link } from "react-router-dom";

const productData = [
  { id: "product-1", title: "Product 1" },
  { id: "product-2", title: "Product 2" },
  { id: "product-3", title: "Product 3" },
  { id: "product-4", title: "Product 4" },
];

export default function ProductsPage() {
  return (
    <>
      <h1>Products Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dignissimos
        ea libero tempora enim consequatur, asperiores porro inventore explicabo
        corrupti quasi suscipit assumenda voluptatibus non recusandae earum
        reiciendis quas iste!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dignissimos
        ea libero tempora enim consequatur, asperiores porro inventore explicabo
        corrupti quasi suscipit assumenda voluptatibus non recusandae earum
        reiciendis quas iste!
      </p>

      <ul>
        {productData.map((item) => (
          <li key={item.id}>
            <Link to={`/products/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>

      <p>
        <Link to="/"> Go to home page by Links</Link>
      </p>
    </>
  );
}
