/**
 * from: https://callforcode.weather.com/doc/v3-weather-alerts-detail/
 *
 * Weather Alerts Detail (v3) - The Weather Alert Details API provides
 * the details for a single requested event for weather watches,
 * warnings, statements and advisories issued by the NWS (National
 * Weather Service), Environment Canada and MeteoAlarm. These weather
 * alerts can provide crucial life-saving information. Weather alerts
 * can be complicated and do not always follow consistent standards,
 * format and rules. The Weather Company (TWC) strives to ensure tha
 *  the information is consistent from all of the different sources but
 * the content is subject to change whenever there is an update from
 * the authoritative source.
 *
 * The Weather Alert Details API returns additional details related to
 * Severe Thunderstorms, Tornadoes, Earthquakes, Floods, etc . This API
 * also returns non-weather alerts such as Child Abduction Emergency
 * and Law Enforcement Warnings.
 */

exports.API = '/v3/alerts/detail'

exports.handleResponse = (res) => {
  if (res && res.hasOwnProperty('alertDetail')) {
    let alert = res['alertDetail']
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
