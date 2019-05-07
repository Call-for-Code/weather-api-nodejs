/**
 * Daily Forecast
 *
 * - https://weather.com/swagger-docs/ui/sun/v1/sunV1DailyForecast.json
 *
 * The daily forecast API returns the geocode weather forecasts for the current day
 * up to the days duration in the API endpoint. The daily forecast product can contain
 * multiple days of daily forecasts for each location. Each day of a forecast can
 * contain up to (3) “temporal segments” meaning three separate forecasts. For any
 * given forecast day we offer day, night, and a 24-hour forecast (daily summary).
 *
 * Base URL: api.weather.com/v1
 * Endpoint: /geocode/{latitude}/{longitude}/forecast/daily/{days}day.json
 */

const apiUtil = require('./api-util')

exports.requestOptions = function (lat, lon, days = 3, units = 'm') {
  const d = [3, 5, 7, 10, 15].indexOf(days) === -1 ? 3 : days
  const u = ['e', 'm', 'h', 's'].indexOf(units) === -1 ? 'm' : units

  let options = apiUtil.defaultParams()

  options['uri'] = `${apiUtil.HOST}/v1/geocode/${lat}/${lon}/forecast/daily/${d}day.json`
  options.qs['units'] = u

  return options
}

exports.handleResponse = function (res) {
  if (res && res.hasOwnProperty('forecasts')) {
    const forecasts = res.forecasts
    console.log(`daily-forecast: returned ${forecasts.length}-day forecast`)

    // each entry in the forecasts array corresponds to a daily forecast
    forecasts.forEach(daily => {
      console.log(`daily-forecast: day ${daily.num} - High of ${daily['max_temp']}, Low of ${daily['min_temp']}`)
      console.log(`daily-forecast: day ${daily.num} - ${daily.narrative}`)
    })

    // additional entries include (but not limited to):
    // lunar_phase, sunrise, day['uv_index'], night.wdir, etc
  } else {
    console.log('daily-forecast: no daily forecast returned')
  }
}
