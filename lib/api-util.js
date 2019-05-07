exports.HOST = 'https://api.weather.com'

exports.defaultParams = function () {
  return {
    qs: {
      apiKey: process.env.WEATHER_API_KEY,
      language: 'en-US'
    },
    headers: {
      'User-Agent': 'Request-Promise',
      'Accept': 'application/json',
      'gzip': true
    },
    json: true // parse the response as JSON
  }
}
