// Mock URL Endpoint https://restcountries.eu/rest/v2/name/united
// The query string after the name is the only item that will change.

import { useReducer, useState, useEffect } from "react";

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

export function useFetch(URL) {
  const initialState = { data: null, isLoading: true, errorMessage: "" };
  const [url, setUrl] = useState(URL);
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    // support the ability to cancel async calls
    let didCancel = false;

    const fetchData = async () => {
      try {
        // pass the full url to the fetch method
        const response = await fetch(`${url}`);
        let json = await response.json();
        if (json.status === 404) {
          throw new Error(json);
        }
        if (!didCancel) {
          // call dispatch to update the reducer state object
          dispatch({ type: "SUCCESS", data: json });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: "FAILURE", error: error.message || error });
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [url]);

  const doFetch = url => {
    setUrl(url);
  };

  return { ...state, doFetch };
}
