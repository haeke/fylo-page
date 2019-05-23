import React, { useEffect } from "react";

import { queryCountriesAPI } from "../../api/api";

const Countries = () => {
  useEffect(() => {
    queryCountriesAPI("united states");
  }, []);
  return (
    <main className="countriesContainer">
      <h1>Countries Page.</h1>
    </main>
  );
};

export default Countries;
