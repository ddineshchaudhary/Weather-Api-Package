'use strict';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var src;
var hasRequiredSrc;

function requireSrc () {
	if (hasRequiredSrc) return src;
	hasRequiredSrc = 1;
	async function fetchWeatherData(apikey, location) {
	  try {
	    const weatherData = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${location}`, {
	      method: "GET"
	    });
	    if (!response.ok) {
	      throw new Error(`http error status : ${response.status}`);
	    } else {
	      const data = await response.json(weatherData);
	      return data;
	    }
	  } catch (error) {
	    console.log("error message : ", error);
	  }
	}
	src = fetchWeatherData;
	return src;
}

var srcExports = requireSrc();
const index = /*@__PURE__*/getDefaultExportFromCjs(srcExports);

module.exports = index;
