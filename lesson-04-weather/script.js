let dataSource =
  "https://api.open-meteo.com/v1/forecast?latitude=41.01&longitude=28.98&current=temperature_2m,wind_speed_10m"; //My data source variable

fetch(dataSource) //The function that requests the data from my data source
  .then((response) => {
    // The function that gets the response from the request and converts it to JSON
    return response.json(); //Here the respons is the raw data from the request and the .json() method converts it to JS object, return is used to pass the data to the next .then() method
  })
  .then((data) => {
    // The function that gets the data from the JSON and logs it to the console
    console.log(data);

    // This is how I get the data from the JSON and display it on the page

    let weatherData = document.getElementById("weather");
    weatherData.textContent = data.current.temperature_2m + " °C";

    let windData = document.getElementById("wind");
    windData.textContent = data.current.wind_speed_10m + " km/h";
  })

  // The function that handles any errors that may occur during the request

  .catch((err) => {
    console.log("Something went wrong:", err);
  });
