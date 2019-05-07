/**
 * Severe Weather Power Disruption Index 15 Day
 *
 * - https://weather.com/swagger-docs/ui/sun/v2/SUNv2SevereWeatherPowerDisruptionIndex.json
 *
 * The Power Disruption index provides indices indicating the potential for power
 * disruptions due to weather.
 *
 * Base URL: api.weather.com/v2
 * Endpoint: /indices/powerDisruption/daypart/15day
 */

const apiUtil = require('./api-util')

exports.requestOptions = function (lat, lon) {
  let options = apiUtil.defaultParams()

  options['uri'] = `${apiUtil.HOST}/v2/indices/powerDisruption/daypart/15day`
  options.qs['geocode'] = `${lat},${lon}`
  options.qs['format'] = 'json'

  return options
}

exports.handleResponse = function (res) {
  if (res && res.hasOwnProperty('powerDisruptionIndex12hour')) {
    const p = res['powerDisruptionIndex12hour']
    p['powerDisruptionIndex'].forEach((disruptIndex, i) => {
      console.log(`severe-weather-power-disruption-index: ${disruptIndex}: ${p['powerDisruptionCategory'][i]}`)
    })
  } else {
    console.log('severe-weather-power-disruption-index: no power distruption info returned')
  }
}
