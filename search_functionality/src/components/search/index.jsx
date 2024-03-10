import React, { useState } from "react";
import "./index.css";
const cities = [
  { id: 1, name: "New York" },
  { id: 2, name: "Los Angeles" },
  { id: 3, name: "Chicago" },
  { id: 4, name: "Houston" },
  { id: 5, name: "Phoenix" },
  { id: 6, name: "Philadelphia" },
  { id: 7, name: "San Antonio" },
  { id: 8, name: "San Diego" },
  { id: 9, name: "Dallas" },
  { id: 10, name: "San Jose" },
];

const Search = () => {
  const [searchInputs, setSearchInputs] = useState("");
  const [isTyped, setIsTyped] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchInputs(value);
    setIsTyped(true);
  };

  const filterCities = cities.filter((city) =>
    city.name.toLocaleLowerCase().includes(searchInputs.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Search City Name..."
        value={searchInputs}
        onChange={handleChange}
      />

      <div className={isTyped ? "city-name" : "search-city-name"}>
        {filterCities.length > 0 ? (
          filterCities.map((searchString, i) => (
            <p key={i}>{searchString.name}</p>
          ))
        ) : (
          <p>No Data Found</p>
        )}
      </div>
    </div>
  );
};

export default Search;
