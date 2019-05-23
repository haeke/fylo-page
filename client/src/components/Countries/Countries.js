/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";

import { useFetch } from "../../api/api";

function Countries() {
  let [name, updateName] = useState("aaaaa");
  // The useFetch hook returns objects and a method to change the url that we will use to fetch different data. America is loaded initially so that there will be data on the page.
  let { data, isLoading, errorMessage, doFetch } = useFetch(
    `https://restcountries.eu/rest/v2/name/${name}`
  );
  // This function is called when a user types into the input.
  const handleChange = event => {
    const { value } = event.target;
    updateName(value);
    doFetch(`https://restcountries.eu/rest/v2/name/${value}`);
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
      {errorMessage && <div>Error fetching data...</div>}

      {isLoading ? <h1>Loading Data...</h1> : <h1>Data Loaded</h1>}
    </main>
  );
}

export default Countries;
