/**
 * from: https://callforcode.weather.com/doc/v3-weather-alerts-detail/
 * The Weather Alert Details API provides the details for a single requested event 
 * for weather watches, warnings, statements and advisories issued by the 
 * NWS (National Weather Service), Environment Canada and MeteoAlarm. 
 * These weather alerts can provide crucial life-saving information. 
 * Weather alerts can be complicated and do not always follow consistent standards, 
 * format and rules. The Weather Company (TWC) strives to ensure that the information 
 * is consistent from all of the different sources but the content is subject 
 * to change whenever there is an update from the authoritative source.
 * 
 * The Weather Alert Details API returns additional details related to 
 * Severe Thunderstorms, Tornadoes, Earthquakes, Floods, etc . 
 * This API also returns non-weather alerts such as Child Abduction Emergency 
 * and Law Enforcement Warnings.
 */

exports.API = "/v2/tropical/projectedpath"

exports.handleResponse = (res) => {
  res.index.forEach(storm => {
    // the storm's storm_name, projectedpath, and projectedpath.heading objects are probably of interest
    console.log(storm.storm_name)
    console.log(storm.projectedpath)
  });
}
