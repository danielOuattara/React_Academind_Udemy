import Link from "next/link";

export default function () {
  return (
    <>
      <h1>The news page</h1>
      <ul>
        <li>
          <Link href="/news/123">link 123</Link>
        </li>
        <li>
          <Link href="/news/toto">link toto</Link>
        </li>
      </ul>
    </>
  );
}
