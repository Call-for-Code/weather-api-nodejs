/**
 * Daily Forecast
 *
 * - https://ibm.co/V3DFap
 *
 * The daily forecast API returns the geocode weather forecasts for the current day
 * up to the days duration in the API endpoint. The daily forecast product can contain
 * multiple days of daily forecasts for each location. Each day of a forecast can
 * contain up to (3) “temporal segments” meaning three separate forecasts. For any
 * given forecast day we offer day, night, and a 24-hour forecast (daily summary).
 *
 * Base URL: api.weather.com/v3
 * Endpoint: /wx/forecast/daily/15day
 */

const apiUtil = require('./api-util')

exports.requestOptions = function (lat, lon, days = 15, units = 'm') {
  const d = [3, 5, 7, 10, 15].indexOf(days) === -1 ? 15 : days
  const u = ['e', 'm', 'h', 's'].indexOf(units) === -1 ? 'm' : units

  let options = apiUtil.defaultParams()

  options.qs['units'] = u
  let urlparams="&format=json&units="+options.qs['units']+"&language="+options.qs['language']+"&apiKey="+options.qs['apiKey']
  options['url'] = `${apiUtil.HOST}/v3/wx/forecast/daily/${d}day?geocode=${lat},${lon}`+urlparams
  //console.log( options );

  return options
}

exports.handleResponse = function (res) {
  if (res && res.hasOwnProperty('narrative')) {
    const forecasts = res
    console.log(`daily-forecast: returned ${forecasts.dayOfWeek.length}-day forecast`)

    // Parse responses
    for( num=0; num<forecasts.dayOfWeek.length;num++) {
      console.log("");
      console.log(`daily-forecast: ${forecasts.dayOfWeek[num]} - High of ${forecasts.calendarDayTemperatureMax[num]}, Low of ${forecasts.calendarDayTemperatureMin[num]}`)
      console.log(`daily-forecast: ${forecasts.dayOfWeek[num]} - ${forecasts.narrative[num]}`)
    }

    // additional entries include (but not limited to):
    // moonPhase, sunrise, uvIndex, windDirection, etc
  } else {
    console.log('daily-forecast: no daily forecast returned')
  }
}
