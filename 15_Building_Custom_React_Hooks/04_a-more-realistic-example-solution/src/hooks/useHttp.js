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

//     } catch (err) {
//       setError(err.message || "Something went wrong!");
//     }
//     setIsLoading(false);
//   }, [requestConfig, applyData]);

//   return { isLoading, error, sendRequest };
// }

// export default useHttp;

//=====================================================================================

/* Try not to use React.memo to garanty that url wont change on re-render, causing
the app to re-render itself infinitly 

So below are the modifications needed to achieve this

*/

// import { useState, useCallback } from "react";

// function useHttp(applyData) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const sendRequest = useCallback(async(requestConfig, ) => {
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
//     } catch (err) {
//       setError(err.message || "Something went wrong!");
//     }
//     setIsLoading(false);
//   }, [ applyData]);

//   return { isLoading, error, sendRequest };
// }

// export default useHttp;

//=====================================================================================

/* Try to avoid useCallback */

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
