import React, { useEffect, useState, useCallback } from "react";
import "./styles.css";

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

  // Use useCallback to memoize the handleSearch function
  const handleSearch = useCallback(
    (value) => {
      if (!value) {
        setFilterDishes(dishes);
        return;
      }
      const searchValue = dishes.filter((dish) =>
        dish.toLowerCase().includes(value.toLowerCase())
      );
      setFilterDishes(searchValue);
    },
    [dishes] // Dependency: Only re-create when 'dishes' changes
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleSearch(inputValue); // Use stable handleSearch here
    }, 300);

    return () => clearTimeout(timeout); // Clear timeout on cleanup
  }, [inputValue, handleSearch]); // Dependencies: inputValue and stable handleSearch

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
