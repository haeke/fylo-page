// Mock URL Endpoint https://restcountries.eu/rest/v2/name/united
// The query string after the name is the only item that will change.

import { useReducer, useEffect } from "react";

export const queryCountriesAPI = async name => {
  try {
    let response = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
    let json = await response.json();
    console.log(`name searched: ${name}`);
    console.log("response object ", json);
    return json;
  } catch (error) {
    console.error(error.message);
  }
};

export const fetchReducer = (state, action) => {
  switch (action.type) {
    case "FAILURE":
      return {
        data: null,
        isLoading: false,
        errorMessage: action.error
      };
    case "SUCCESS":
      return {
        data: action.data,
        isLoading: false,
        errorMessage: ""
      };
    default:
      return state;
  }
};

export function useFetch(url) {
  const initialState = { data: null, isLoading: true, errorMessage: "" };
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const fetchData = async () => {
    try {
      // pass the full url to the fetch method
      const response = await fetch(`${url}`);
      let json = await response.json();
      // call dispatch to update the reducer state object
      dispatch({ type: "SUCCESS", data: json });
    } catch (error) {
      dispatch({ type: "ERROR", error: error.message || error });
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return state;
}
