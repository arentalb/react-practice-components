import { createContext, useContext } from "react";

const ShoeContext = createContext();

const URL = "";

function ShoeProvider({ children }) {
  return <ShoeContext.Provider value={{}}>{children}</ShoeContext.Provider>;
}

function useShoe() {
  const context = useContext(ShoeContext);
  if (context === undefined)
    throw new Error("ShoeContext is used outside of ShoeProvider ");
  //to avoid using teh context outside of where it should be used
  return context;
}

export { ShoeProvider, useShoe };
