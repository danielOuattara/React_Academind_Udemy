import { useParams, Link } from "react-router-dom";

export default function ProductDetailPage() {
  const params = useParams();
  console.log(params);

  return (
    <>
      <h1>ProductDetail</h1>
      <p>product {params.productId} detail information</p>
      <p>
        <Link to=".." relative="route">
          Go Back : relative = route
        </Link>
      </p>
      <p>
        <Link to=".." relative="path">
          Go Back : relative = path
        </Link>
      </p>
    </>
  );
}
