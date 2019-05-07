/**
 * Tropical -Forecast - Projected Path
 *
 * - https://weather.com/swagger-docs/ui/sun/v2/SUNv2TropicalForecastProjectedPathSourceAndBasinOnly.json
 *
 * The Tropical Forecast - Projected Path API provides the ability query the single
 * projected path per active storm. Active storm - any storm that has reported in the
 * last 168 hours. One can query by basin or selected source.
 *
 * Base URL: api.weather.com/v2
 * Endpoint: /tropical/projectedpath
 */

const apiUtil = require('./api-util')

exports.requestOptions = function (basin = 'AL', units = 'm', nautical = true, source = 'all') {
  const u = ['e', 'm', 'h', 's'].indexOf(units) === -1 ? 'm' : units

  let options = apiUtil.defaultParams()

  options['uri'] = `${apiUtil.HOST}/v2/tropical/projectedpath`
  options.qs['units'] = u
  options.qs['basin'] = basin
  options.qs['nautical'] = !!nautical
  options.qs['source'] = source
  options.qs['format'] = 'json'

  return options
}

exports.handleResponse = function (res) {
  if (res && res.hasOwnProperty('advisoryinfo')) {
    console.log(`tropical-forecast-projected-path: returned ${res.advisoryinfo.length} advisory info`)

    res.advisoryinfo.forEach(storm => {
      // the storm's storm_name, projectedpath, and projectedpath.heading objects are probably of interest
      console.log(`tropical-forecast-projected-path: Advisoory for storm '${storm.storm_name}' by '${storm.source}'`)
      console.log(`tropical-forecast-projected-path: ${storm.storm_name} - ${JSON.stringify(storm.projectedpath)}`)
    })
  } else {
    console.log('tropical-forecast-projected-path: No advisory info available')
  }
}
