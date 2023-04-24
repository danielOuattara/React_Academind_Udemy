// import MainNavigation from "../components/MainNavigation";
// import PageContent from "../components/PageContent";
// import { useRouteError } from "react-router-dom";

// export default function ErrorPage() {
//   const error = useRouteError();

//   console.log("error = ", error);

//   let title = "An error ocurred !";
//   let message = "Something went wrong !";

//   if (error.status === 500) {
//     message = error.data.message;
//   }

//   if (error.status === 404) {
//     title = "Not Found !";
//     message = "Could not find resource or page";
//   }
//   return (
//     <>
//       <MainNavigation />
//       {/* <h1>An error ocurred !</h1> */}
//       <PageContent title={title}>
//         <main>
//           <p>
//             {error.status} : {JSON.parse(error.data).message}{" "}
//           </p>
//           <p>{message}</p>
//         </main>
//       </PageContent>
//     </>
//   );
// }

//----------------------------------------------------------

import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  // console.log("error = ", error);

  let title = "An error ocurred !";
  let message = "Something went wrong !";

  if (error.status === 500) {
    message = error.data.message;
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <main>
          <p>
            {error.status} : {error.data.message}
          </p>
          <p>{message}</p>
        </main>
      </PageContent>
    </>
  );
}
