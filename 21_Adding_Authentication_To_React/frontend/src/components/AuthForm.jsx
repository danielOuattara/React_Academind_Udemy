// import { useState } from "react";
// import { Form } from "react-router-dom";
// import classes from "./AuthForm.module.css";

// function AuthForm() {
//   const [isLogin, setSwitchToLogin] = useState(true);

//   return (
//     <>
//       <Form method="post" className={classes.form}>
//         <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
//         <p>
//           <label htmlFor="email">Email</label>
//           <input id="email" type="email" name="email" required />
//         </p>
//         <p>
//           <label htmlFor="image">Password</label>
//           <input id="password" type="password" name="password" required />
//         </p>
//         <div className={classes.actions}>
//           <button
//             onClick={() => setSwitchToLogin(!isLogin)}
//             type="button"
//           >
//             {isLogin ? "Create new user" : "Login"}
//           </button>
//           <button>Save</button>
//         </div>
//       </Form>
//     </>
//   );
// }

// export default AuthForm;

//--------------------------------------------------------------------------------

import {
  Form,
  Link,
  useSearchParams,
  useActionData,
  useNavigation,
} from "react-router-dom";
import classes from "./AuthForm.module.css";

function AuthForm() {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("action") === "login";

  const actionResponseData = useActionData();

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        <h3 style={{ color: "red", textAlign: "center" }}>
          {actionResponseData?.message}
        </h3>
        {actionResponseData?.errors && (
          <ul>
            {Object.values(actionResponseData.errors).map((errorItem) => (
              <li style={{ color: "red" }} key={errorItem}>
                . {errorItem}
              </li>
            ))}
          </ul>
        )}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" />
        </p>
        <div className={classes.actions}>
          <Link to={`?action=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Go create new user" : "Go Login"}
          </Link>
          <button disabled={isSubmitting}>
            {isSubmitting ? `...submitting` : isLogin ? `Login` : `Register`}
          </button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
