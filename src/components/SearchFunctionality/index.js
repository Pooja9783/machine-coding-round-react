import "./styles.css";
import React, { useEffect, useState } from "react";

export default function SearchFunctionality() {
  const dishes = [
    "Spaghetti Bolognese",
    "Chicken Tikka Masala",
    "Grilled Salmon",
    "Vegetable Stir-Fry",
    "Beef Tacos",
    "Margherita Pizza",
    "Pad Thai",
    "Cheeseburger",
    "Lasagna",
    "Caesar Salad",
  ];

  const [inputValue, setInputValue] = useState("");
  const [filterDishes, setFilterDishes] = useState(dishes);

 

  const handleSearch = (value) => {
    if (!inputValue) {
      setFilterDishes(dishes);
    }
    const searchValue = dishes.filter((dish) =>
      dish.toLowerCase().includes(value.toLowerCase())
    );
    setFilterDishes(searchValue);
  };

   // eslint-disable-next-line react-hooks/exhaustive-deps
   useEffect(() => {
    const timeout = setTimeout(() => {
      handleSearch(inputValue);
    }, 300);

    return () => clearTimeout(timeout); // Clear timeout on cleanup
  }, [inputValue, handleSearch]);

  return (
    <div className="search-functionality-container">
      <div className="search-functionality-content">
        <p>Search Functionalities</p>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search Something Here..."
        />
        {filterDishes.length === 0 ? (
          <p>No Result Found</p>
        ) : (
          <ul>
            {filterDishes.map((element, index) => {
              return <li key={index}>{element}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
