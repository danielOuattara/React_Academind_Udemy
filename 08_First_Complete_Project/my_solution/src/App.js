import { useState } from "react";
import Error from "./components/Error";
import FormHandler from "./components/FormHandler";
import ListUsers from "./components/ListUsers";

function App() {
  const [user, setUser] = useState({ username: "", age: "" });
  const [allUsers, setAllUsers] = useState([]);
  const [isError, setIsError] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser((user) => {
      return { ...user, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!user.username || !user.age) {
      return setIsError("Please enter a valid username and email");
    }
    if (user.username && user.age < 0) {
      return setIsError("User age must be positive (> 0)");
    }

    const newUser = {
      id: new Date().getTime() * Math.floor(Math.random() * 100),
      ...user,
    };

    setAllUsers((allUsers) => {
      return [...allUsers, newUser];
    });
    setUser({ username: "", age: "" });
  };

  return (
    <div className="container">
      <FormHandler
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        user={user}
      />
      {allUsers.length > 0 && <ListUsers allUsers={allUsers} />}
      <Error isError={isError} setIsError={setIsError} />
    </div>
  );
}

export default App;
