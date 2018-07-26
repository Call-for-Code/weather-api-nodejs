/**
 * from: https://callforcode.weather.com/doc/v2-severe-weather-power-disruption-index/
 *
 * Severe Weather Power Disruption Index 15 Day (v2) - The Power
 * Disruption index provides indices indicating the potential for
 * power disruptions due to weather.
 */

exports.API = '/v2/indices/powerDisruption/daypart/15day'

exports.handleResponse = (res) => {
  if (res && res.hasOwnProperty('powerDisruptionIndex12hour')) {
    const p = res['powerDisruptionIndex12hour']
    p['powerDisruptionIndex'].forEach((disruptIndex, i) => {
      console.log(`severe-weather-power-disruption-index: ${disruptIndex}: ${p['powerDisruptionCategory'][i]}`)
    })
  } else {
    console.log('severe-weather-power-disruption-index: no power distruption info returned')
  }
}
