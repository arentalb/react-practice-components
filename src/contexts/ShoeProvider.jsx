import { createContext, useContext, useEffect, useState } from "react";

const ShoeContext = createContext();

const URL = "http://localhost:8000/shoes";

function ShoeProvider({ children }) {
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedShoe, setSelectedShoe] = useState({});

  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setShoes(() => data);
      return data;
    } catch (error) {
      console.error("Error fetching shoes:", error);
      return error;
    } finally {
      setLoading(false);
    }
  }

  useEffect(function () {
    fetchData();
  }, []);

  function getShoeById(shoeId) {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(`${URL}/${shoeId}`);
        const data = await res.json();
        setSelectedShoe(data);
      } catch (error) {
        console.error("Error fetching shoes:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }

  async function filterShoes(priceRange, color, category) {
    const data = await fetchData();

    const filtered = data.filter((shoe) => {
      const withinPriceRange =
        (!priceRange.min || shoe.newPrice >= priceRange.min) &&
        (!priceRange.max || shoe.newPrice <= priceRange.max);

      const hasColor = !color || shoe.color === color[0];

      const hasShoeType = !category || shoe.category === category[0];

      return hasColor && hasShoeType && withinPriceRange;
    });

    setShoes(() => filtered);
  }

  return (
    <ShoeContext.Provider
      value={{
        shoes: shoes,
        loading,
        getShoeById,
        selectedShoe,
        filterShoes,
        setShoes,
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
  //to avoid using the context outside of where it should be used
  return context;
}

export { ShoeProvider, useShoe };
