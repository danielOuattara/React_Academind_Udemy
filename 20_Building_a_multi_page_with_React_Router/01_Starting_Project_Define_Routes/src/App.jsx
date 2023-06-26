import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, ProductsPage } from "./pages";

// declaring route, version 1
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <ProductsPage /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
