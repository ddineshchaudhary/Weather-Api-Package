async function fetchWeatherData(apikey,location) {
    try {
        const weatherData = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${location}`, {
            method : "GET"
        });

        if(!response.ok) {
            throw new Error(`http error status : ${response.status}`);
        } else {
            const data = await response.json(weatherData);
            return data;
        }
    } catch(error) {
        console.log("error message : ",error);
    }
}

module.exports = fetchWeatherData;