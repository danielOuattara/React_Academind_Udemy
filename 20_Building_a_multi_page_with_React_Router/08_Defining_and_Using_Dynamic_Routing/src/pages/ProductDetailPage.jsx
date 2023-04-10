import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const params = useParams();
  console.log(params);

  return (
    <>
      <h1>ProductDetail</h1>
      <p>product {params.productId} detail information</p>
    </>
  );
}
