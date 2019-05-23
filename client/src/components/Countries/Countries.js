import React from "react";

import { queryCountriesAPI } from "../../api/api";

function Countries() {
  const handleChange = event => {
    const { value } = event.target;
    if (value !== "") {
      queryCountriesAPI(value);
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
