/**
 * from: https://callforcode.weather.com/doc/v2-tropical-forecast-projected-path-source-and-basin-only/
 *
 * Tropical -Forecast - Projected Path (v2) - The Tropical Forecast -
 * Projected Path API provides the ability query the single projected
 * path per active storm. Active storm - any storm that has reported in
 * the last 168 hours. One can query by basin or selected source.
 */

exports.API = '/v2/tropical/projectedpath'

exports.handleResponse = (res) => {
  if (res && res.hasOwnProperty('advisoryinfo')) {
    console.log(`tropical-forecast-projected-path-source-and-basin-only: returned ${res.advisoryinfo.length} advisory info`)

    res.advisoryinfo.forEach(storm => {
      // the storm's storm_name, projectedpath, and projectedpath.heading objects are probably of interest
      console.log(`tropical-forecast-projected-path-source-and-basin-only: Advisoory for storm '${storm.storm_name}' by '${storm.source}'`)
      console.log(`tropical-forecast-projected-path-source-and-basin-only: ${storm.storm_name} - ${JSON.stringify(storm.projectedpath)}`)
    })
  } else {
    console.log('tropical-forecast-projected-path-source-and-basin-only: No advisoryinfo available')
  }
}
