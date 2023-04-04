//--------------------------------------------------------
// /* N°1 */

// import { useState, useCallback } from "react";

// function useHttp(requestConfig, applyData) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const sendRequest = useCallback(async () => {
//     try {
//       setIsLoading(true);
//       const response = await fetch(requestConfig.url, {
//         method: requestConfig.method ? requestConfig.method : "GET",
//         headers: requestConfig.headers ? requestConfig.headers : {},
//         body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
//       });

//       if (!response.ok) {
//         throw new Error("Request failed!");
//       }

//       const data = await response.json();
//       applyData(data);
//       //
//     } catch (err) {
//       setError(err.message || "Something went wrong!");
//     }
//     setIsLoading(false);
//   }, [requestConfig, applyData]);

//   return { isLoading, error, sendRequest };
// }

// export default useHttp;

//=====================================================================================
/* N°2 */

/* Try not to use React.memo to guaranty that url wont change on re-render, causing
the app to re-render itself infinitely: so moving the requestConfig object in sendRequest()

So below are the modifications needed to achieve this
*/

// import { useState, useCallback } from "react";

// function useHttp(applyData) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // "requestConfig" is now a param of sendRequest() which is ender useCallback,
//   // so no more a possible dependency for useCallback

//   const sendRequest = useCallback(
//     async (requestConfig) => {
//       try {
//         setIsLoading(true);
//         const response = await fetch(requestConfig.url, {
//           method: requestConfig.method ? requestConfig.method : "GET",
//           headers: requestConfig.headers ? requestConfig.headers : {},
//           body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
//         });

//         if (!response.ok) {
//           throw new Error("Request failed!");
//         }
//         const data = await response.json();
//         applyData(data);
//       } catch (err) {
//         setError(err.message || "Something went wrong!");
//       }
//       setIsLoading(false);
//     },
//     [applyData],
//   ); // Only applyData is called here as dependency for useCallback

//   return { isLoading, error, sendRequest };
// }

// export default useHttp;

//=====================================================================================

/* /* N°3:  Try to avoid useCallback App.js */

import { useState, useCallback } from "react";

function useHttp() {
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    try {
      setIsLoading(true);
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return { isLoading, error, sendRequest };
}

export default useHttp;
