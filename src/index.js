function displayTemperature(response) {
  console.log(response.data);

  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#current-city");

  let temperature = Math.round(response.data.temperature.current);
  let city = response.data.city;

  cityElement.innerHTML = city;
  temperatureElement.innerHTML = `Temperature: ${temperature} °C`;
}

function search(event) {
  event.preventDefault();

  const searchInputElement = document.querySelector("#search-input");
  const city = searchInputElement.value;

  const apiKey = "42t6213cf48c3o5336a35503b83be79d"; // Replace with your API key
  const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios
    .get(apiUrl)
    .then(displayTemperature)
    .catch((error) => {
      console.error("Error fetching the weather data:", error);
      alert(
        "Could not retrieve weather data. Please check the city name and try again."
      );
    });
}

const searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

// Display the current date
function formatDate(date) {
  const options = {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}

const currentDateElement = document.querySelector("#current-date");
currentDateElement.innerHTML = formatDate(new Date());
