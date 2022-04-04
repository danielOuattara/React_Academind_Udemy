import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext();

function AuthContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  useEffect(() => {
    const userLoggedStatus = localStorage.getItem("isLoggedIn");
    if (userLoggedStatus === "1") {
      console.log("user is already logged in ");
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
