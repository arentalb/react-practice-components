import { createContext, useContext, useEffect, useState } from "react";

const ShoeContext = createContext();

const URL = "http://localhost:8000/shoes";

function ShoeProvider({ children }) {
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setShoes(data);
      } catch (error) {
        console.error("Error fetching shoes:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <ShoeContext.Provider
      value={{
        shoes: shoes,
        loading,
      }}
    >
      {children}
    </ShoeContext.Provider>
  );
}

function useShoe() {
  const context = useContext(ShoeContext);
  if (context === undefined)
    throw new Error("ShoeContext is used outside of ShoeProvider ");
  //to avoid using teh context outside of where it should be used
  return context;
}

export { ShoeProvider, useShoe };
