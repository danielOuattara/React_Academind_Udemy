import { Link } from "react-router-dom";

export default function Home() {
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
        Go to <Link to="/products"> product page</Link>
      </p>
    </>
  );
}
