/**
 * Weather Alerts Detail
 *
 * - https://weather.com/swagger-docs/ui/sun/v3/sunV3AlertsWeatherAlertDetail.json
 *
 * The Weather Alert Details API provides weather watches, warnings, statements and
 * advisories issued by the NWS (National Weather Service), Environment Canada and
 * MeteoAlarm. These weather alerts can provide crucial life-saving information.
 * Weather alerts can be complicated and do not always follow consistent standards,
 * format and rules. The Weather Channel (TWC) strives to ensure that the information
 * is consistent from all of the different sources but the content is subject to
 * change whenever there is an update from the authoritative source. The Weather Alert
 * Headlines API returns active weather alert headlines related to Severe
 * Thunderstorms, Tornadoes, Earthquakes, Floods, etc . This API also returns
 * non-weather alerts such as Child Abduction Emergency and Law Enforcement Warnings.
 * The Alert Headlines API also provides a key value found in the attribute to access
 * the alert details in the Alert Details API. Your application should first call the
 * Weather Alert Headlines API and use the value found in the attribute to request the
 * detailed information found in the Weather Alert Details API.
 *
 * Base URL: api.weather.com/v3
 * Endpoint: /alerts/detail
 */

const apiUtil = require('./api-util')

exports.requestOptions = function (key) {
  let options = apiUtil.defaultParams()

  options['uri'] = `${apiUtil.HOST}/v3/alerts/detail`
  options.qs['alertId'] = key
  options.qs['format'] = 'json'

  return options
}

exports.handleResponse = function (res) {
  if (res && res.hasOwnProperty('alertDetail')) {
    const alert = res['alertDetail']
    // Main thing here that is not in the alert headline is the alert.texts array
    console.log(`weather-alerts-detail: ${alert.headlineText}`)

    if (alert.hasOwnProperty('texts')) {
      alert.texts.forEach(text => {
        console.log(text.languageCode)
        console.log(text.instruction)
        console.log(text.overview)
        console.log(text.description)
      })
    } else {
      console.log('weather-alerts-detail: No alert text available')
    }
  } else {
    console.log('weather-alerts-detail: No alert detail available')
  }
}
