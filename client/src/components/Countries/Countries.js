/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";

import { queryCountriesAPI, useFetch } from "../../api/api";

function Countries() {
  let [name, updateName] = useState("");
  useEffect(() => {
    //   queryCountriesAPI(value);
    useFetch(`https://restcountries.eu/rest/v2/name/${name}`);
  }, []);
  const handleChange = event => {
    const { value } = event.target;
    if (value !== "") {
      updateName(value);
    }
  };
  return (
    <main className="countriesContainer">
      <h1>Countries Page.</h1>
      <input name="name" onChange={handleChange} />
    </main>
  );
}

export default Countries;
