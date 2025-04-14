async function fetchWeatherData(apikey, location) {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${location}`, {
        method: "GET"
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;

    } catch (error) {
      console.log("Error message:", error);
    }
}

module.exports = fetchWeatherData;
  