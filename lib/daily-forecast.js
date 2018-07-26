/**
 * from: https://callforcode.weather.com/doc/v3-daily-forecast/
 *
 * Daily Forecast (v3) - The Daily Forecast API is sourced from the
 * The Weather Company Forecast system. This TWC API returns weather
 * forecasts starting current day. Your content licensing agreement
 * with TWC determines the number of days returned in the API response
 * and is constrained by the API Key that is provided to your company.
 * Please refer to the Data Elements section later in this document for
 * more details.
 */

// API = /wx/forecast/daily/{days}day
// exports.API = '/v3/wx/forecast/daily/10day'
// exports.API = '/v3/wx/forecast/daily/7day'
// exports.API = '/v3/wx/forecast/daily/5day'
exports.API = '/v3/wx/forecast/daily/3day'

exports.handleResponse = (res) => {
  if (res && res.hasOwnProperty('dayOfWeek')) {
    const days = res['dayOfWeek']
    console.log(`daily-forecast: returned ${days.length}-day forecast`)

    // each entry in the response object is an array with
    // entries in the array applying to the day of the week
    // (i.e., res['dayOfWeek']) matched by the index
    days.forEach((day, index) => {
      console.log(`daily-forecast: ${day} - High of ${res['temperatureMax'][index]}, Low of ${res['temperatureMin'][index]}`)
      console.log(`daily-forecast: ${day} - ${res['narrative'][index]}`)
    })

    // additional entries include (but not limited to):
    // moonPhase, sunriseTimeLocal, daypart['precipChance'], daypart['windDirection'], etc
  } else {
    console.log('daily-forecast: daily forecast returned')
  }
}
