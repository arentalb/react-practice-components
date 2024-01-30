import { useState } from "react";
import { useAuth } from "./contexts/AuthContext.jsx";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, user } = useAuth();

  function handelFormSubmit(e) {
    e.preventDefault();
    login(username, password);
  }

  return (
    <form onSubmit={handelFormSubmit}>
      <label htmlFor="username">username</label>
      <input
        type="text"
        id={"username"}
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <label htmlFor="password">password</label>
      <input
        type="text"
        id={"password"}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button>login</button>
      <p>
        {user !== null
          ? `${user.username} & ${user.password} &  ${user.profileImage}`
          : "no user logined in "}
      </p>
    </form>
  );
}
