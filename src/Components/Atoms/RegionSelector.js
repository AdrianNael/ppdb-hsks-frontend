// src/components/RegionSelector.js

import React, { useEffect, useState } from "react";

function RegionSelector() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    // Fetch a list of all countries from the REST Countries API
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        // Extract country names from the data
        const countryNames = data.map((country) => country.name.common);
        setCountries(countryNames);
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);
      });
  }, []);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div>
      <label className="block mt-4 mb-1">Negara :</label>
      <select
        value={selectedCountry}
        onChange={handleCountryChange}
        className="border-2 rounded-md border-black w-full"
      >
        <option value="" className="bg-biruprimary text-white">
          Select a Country
        </option>
        {countries.map((country) => (
          <option
            key={country}
            value={country}
            className="bg-biruprimary text-white"
          >
            {country}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RegionSelector;
