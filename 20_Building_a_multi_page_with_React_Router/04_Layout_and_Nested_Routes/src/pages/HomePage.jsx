import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dignissimos
        ea libero tempora enim consequatur, asperiores porro inventore explicabo
        corrupti quasi suscipit assumenda voluptatibus non recusandae earum
        reiciendis quas iste!
      </p>
      <p>
        <Link to="/products"> Go to product page</Link>
      </p>
    </>
  );
}
