import { useRouter } from "next/router";

export default function pageDetails() {
  console.log("useRouter() = ", useRouter());

  const { query } = useRouter();

  return <h1>Page details for id: {query.newsId}</h1>;

  /* 
    can send a request to the backend API 
    to fetch data about item with id: newsId
    (learn it later)
  */
}
