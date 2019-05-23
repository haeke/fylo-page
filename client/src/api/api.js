// Mock URL Endpoint https://restcountries.eu/rest/v2/name/united
// The query string after the name is the only item that will change.

export const queryCountriesAPI = async name => {
  try {
    let response = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
    let json = await response.json();
    console.log(`name searched: ${name}`);
    console.log("response object ", json);
  } catch (error) {
    console.error(error.message);
  }
};
