//My data source variable
let dataSource =
  "https://api.open-meteo.com/v1/forecast?latitude=41.01&longitude=28.98&current=temperature_2m,wind_speed_10m"; 

fetch(dataSource) //The function that requests the data from my data source
  .then((response) => {
    // response is the raw reply from the server.
    // .json() converts the JSON text into a JavaScript object.
    // return passes that object on to the next .then()
    return response.json(); 
  })
  .then((data) => {
    // The function that gets the data from the JSON and logs it to the console and puts the info on the webpage
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
