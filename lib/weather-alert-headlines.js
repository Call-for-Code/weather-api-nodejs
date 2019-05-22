/**
 * Weather Alerts Headlines
 *
 * - https://weather.com/swagger-docs/ui/sun/v3/sunV3AlertsWeatherAlertsHeadlines.json
 *
 * The Weather Alert Headlines API provides weather watches, warnings, statements and
 * advisories issued by the NWS (National Weather Service), Environment Canada and
 * MeteoAlarm. These weather alerts can provide crucial life-saving information.
 * Weather alerts can be complicated and do not always follow consistent standards,
 * format and rules. The Weather Channel (TWC) strives to ensure that the information
 * is consistent from all of the different sources but the content is subject to
 * change whenever there is an update from the authoritative source.
 *
 * The Weather Alert Headline API returns active weather alert headlines related to
 * Severe Thunderstorms, Tornadoes, Earthquakes, Floods, etc . This API also returns
 * non-weather alerts such as Child Abduction Emergency and Law Enforcement Warnings.
 * The Alert Headlines API also provides a key value found in the attribute to access
 * the alert details in the Alert Details API.
 *
 * Base URL: api.weather.com/v3
 * Endpoint: /alerts/headlines
 */

const apiUtil = require('./api-util')

exports.requestOptions = function (lat, lon) {
  let options = apiUtil.defaultParams()

  options['uri'] = `${apiUtil.HOST}/v3/alerts/headlines`
  options.qs['geocode'] = `${lat},${lon}`
  options.qs['format'] = 'json'

  return options
}

exports.handleResponse = function (res) {
  let details = []

  if (res && res.hasOwnProperty('alerts')) {
    // loop through alerts
    res.alerts.forEach(alert => {
      // check some fields to decide if this alert is important to you.
      console.log(JSON.stringify(alert))

      if (alert.certaintyCode <= 3 && alert.urgencyCode <= 3 && alert.severityCode <= 3) {
        details.push(alert.detailKey)
      }
    })

    console.log(`weather-alert-headlines: returning ${details.length} alert(s) meeting threshold out of ${res.alerts.length} total`)
  } else {
    console.log('weather-alert-headlines: No alerts in area')
  }

  return details
}
