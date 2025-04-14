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
	src = fetchWeatherData;
	return src;
}

var srcExports = requireSrc();
const index = /*@__PURE__*/getDefaultExportFromCjs(srcExports);

module.exports = index;
