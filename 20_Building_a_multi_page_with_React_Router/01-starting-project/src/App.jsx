// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";
// import Home from "./pages/Home";
// import Products from "./pages/Products";

// // declaring routes version 2
// const routesDefinition = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="/products" element={<Products />} />
//   </Route>,
// );

// const router = createBrowserRouter(routesDefinition);

// export default function App() {
//   return <RouterProvider router={router} />;
// }

//
// --------------------------------------------------------------------
//

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./pages/Home";
// import Products from "./pages/Products";

// // declaring route, version 1
// const router = createBrowserRouter([
//   { path: "/", element: <Home /> },
//   { path: "/products", element: <Products /> },
// ]);

// export default function App() {
//   return <RouterProvider router={router} />;
// }

//
// --------------------------------------------------------------------
//

/* declaring a layout that takes some routes as its children */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
