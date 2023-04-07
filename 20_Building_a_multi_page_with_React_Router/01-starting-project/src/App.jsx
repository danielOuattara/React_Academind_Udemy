// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";
// import Home from "./pages/Home";
// import Products from "./pages/Products";

// // declaring routes version 2
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="/products" element={<Products />} />
//   </Route>,
// );

// const router2 = createBrowserRouter(routeDefinitions);

// export default function App() {
//   return <RouterProvider router={router2} />;
// }

//
// --------------------------------------------------------------------
//

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";

// declaring route, version 1
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
