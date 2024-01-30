import { createContext, useContext, useReducer } from "react";

const initialState = {
  user: null,
  isAuthenticated: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknown action ");
  }
}

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  function login(username, password) {
    console.log(username);
    console.log(password);
    console.log("------");

    const user = {
      username: "aren",
      password: "12345",
      profileImage: "image.pnj",
    };

    if (username === user.username && password === user.password) {
      dispatch({ type: "login", payload: user });
    }
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("The (AuthContext) was used outside (AuthProvider)");
  return context;
}

export { useAuth, AuthProvider };
