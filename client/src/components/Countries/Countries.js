/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";

import { useFetch } from "../../api/api";

function Countries() {
  let [name, updateName] = useState("asia");
  // The useFetch hook returns objects and a method to change the url that we will use to fetch different data. America is loaded initially so that there will be data on the page.
  let { data, isLoading, errorMessage, doFetch } = useFetch(
    `https://restcountries.eu/rest/v2/name/${name}`
  );
  // This function is called when a user types into the input.
  const handleChange = event => {
    const { value } = event.target;
    updateName(value);
    if (value !== "") {
      doFetch(`https://restcountries.eu/rest/v2/name/${value}`);
    }
  };
  // For testing purposes - we can see the values inside of the custom reducer hook.
  console.log("The data object ", data);
  console.log("The isLoading Boolean ", isLoading);
  console.log("The errorMessage ", errorMessage);
  return (
    <main className="countriesContainer">
      <h1>Countries Page.</h1>
      {/* A user can click on the submit button to fetch for data */}
      <form
        onSubmit={event => {
          event.preventDefault();
          doFetch(`https://restcountries.eu/rest/v2/name/${name}`);
        }}
      >
        <input name="name" value={name} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      {/* include the flag image, flag name, population, region and capital */}
      {/* image name : data.flag */}
      {/* population: data.population */}
      {/* region: data.region */}
      {/* capital: data.capital */}
      {isLoading ? (
        <h1>Loading Data...</h1>
      ) : errorMessage ? (
        <div>Error fetching data...</div>
      ) : (
        Object.keys(data).length > 0 &&
        data.map(country => (
          <div key={country.name}>
            <img src={country.flag} alt={country.name} />
            <h1>{country.population}</h1>
            <h3>{country.population}</h3>
            <h4>{country.region}</h4>
            <h4>{country.capital}</h4>
          </div>
        ))
      )}
    </main>
  );
}

export default Countries;
