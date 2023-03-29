// import React from "react";
// import { AuthContext } from "./../../context/AuthContext";
// import classes from "./Navigation.module.css";

// const Navigation = () => {
//   return (
//     <AuthContext.Consumer>
//       {(context) => {
//         console.log(context);
//         return (
//           <nav className={classes.nav}>
//             <ul>
//               {context.isLoggedIn && (
//                 <li>
//                   <a href="/">Users</a>
//                 </li>
//               )}
//               {context.isLoggedIn && (
//                 <li>
//                   <a href="/">Admin</a>
//                 </li>
//               )}
//               {context.isLoggedIn && (
//                 <li>
//                   <button onClick={context.onLogout}>Logout</button>
//                 </li>
//               )}
//             </ul>
//           </nav>
//         );
//       }}
//     </AuthContext.Consumer>
//   );
// };

// export default Navigation;

//-----------------------------------------------------------------------

import React, { useContext } from "react";
import { AuthContext } from "./../../context/AuthContext";
import classes from "./Navigation.module.css";

const Navigation = () => {
  const { isLoggedIn, onLogout } = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {isLoggedIn && <li>{<button onClick={onLogout}>Logout</button>}</li>}
      </ul>
    </nav>
  );
};

export default Navigation;
