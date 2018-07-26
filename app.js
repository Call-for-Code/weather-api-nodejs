const request = require('request-promise-native')

const globalHeadlines = require('./lib/global-weather-notification-headlines')
const globalDetails = require('./lib/weather-alerts-detail')
const tropicalStorm = require('./lib/tropical-forecast-projected-path-source-and-basin-only')

const HOST = 'https://api.weather.com'

const defaultParams = function () {
  return {
    qs: {
      apiKey: process.env.WEATHER_API_KEY,
      format: 'json',
      language: 'en-US'
    },
    headers: {
      'User-Agent': 'Request-Promise',
      'Accept': 'application/json',
      'gzip': true
    },
    json: true // parse the response as JSON
  }
}

const handleFail = function (err) {
  // API call failed...
  console.error(err.hasOwnProperty('message') ? err.message : err)
}

const callGlobalWeatherNotificationHeadlines = function (lat, lon) {
  let options = defaultParams()
  options['uri'] = `${HOST}${globalHeadlines.API}`
  options.qs['geocode'] = `${lat},${lon}`

  request(options)
    .then(parsedBody => {
      let detailKeys = globalHeadlines.handleResponse(parsedBody)
      if (detailKeys && detailKeys.length > 0) {
        detailKeys.forEach(detailKey => {
          callWeatherAlertsDetail(detailKey)
        })
      }
    })
    .catch(handleFail)
}

const callWeatherAlertsDetail = function (detailKey) {
  let options = defaultParams()
  options['uri'] = `${HOST}${globalDetails.API}`
  options.qs['alertId'] = detailKey

  request(options)
    .then(globalDetails.handleResponse)
    .catch(handleFail)
}

const callTropicalForecastProjectedPath = function (basin = 'AL', units = 'm', nautical = true, source = 'all') {
  let options = defaultParams()
  options['uri'] = `${HOST}${tropicalStorm.API}`
  options.qs['units'] = units
  options.qs['basin'] = basin
  options.qs['nautical'] = nautical
  options.qs['source'] = source

  request(options)
    .then(tropicalStorm.handleResponse)
    .catch(handleFail)
}

// Comment out the sample lat/lons you don't want to use or put in your own
// Hawaii
let lat = '33.40'
let lon = '-83.42'
// Punta Cana, DR
lat = '18.57001'
lon = '-68.36907'
// Boston, MA
lat = '42.3600'
lon = '-71.06536'
// Raleigh, NC
lat = '35.843686'
lon = '-78.78548'
// Los Angeles, CA
lat = '34.040873'
lon = '-118.482745'

/**
 * Here's an example of setting up a job to look for weather
 * headlines every 10 minutes. You can set up as many of these
 * jobs as you like and query different geographies.
 */
const interval = 1000 * 60 * 10 // 10 minutes
let jobInterval = setInterval(() => callGlobalWeatherNotificationHeadlines(lat, lon), interval)
