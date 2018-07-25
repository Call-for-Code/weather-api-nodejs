# Weather Company Data API access for IBM Cloud

This project shows how to build a basic data access application that continuously runs in the background, processing a variety of weather data from the Weather Company Data for IBM Bluemix REST API endpoints, including severe weather alerts, tropical storm forecasts, and the daily weather almanac to find conditions over time.

## Obtain a Weather Company API Key

If you're participating in the 2018 Call for Code initiative, go the the [special Call for Code Weather web site](https://callforcode.weather.com/) and [register](https://callforcode.weather.com/register). A time-limited API key will be sent to you via email.

All others, sign up for [IBM Cloud here](https://console.bluemix.net/), and provision the free [Weather Company Data plan here](https://console.bluemix.net/catalog/services/weather-company-data).  

## Getting Started in IBM Cloud

Deploy this application to IBM Cloud.

1. Install and configure the [IBM Cloud Developer Tools](https://console.bluemix.net/docs/cli/index.html#overview)
2. Clone this repository
   ```
   $ git clone https://github.com/codait-advocates/weather-api-nodejs.git
   $ cd weather-api-nodejs
   ```  
3. Deploy the application without starting it
   ```
   $ ibmcloud cf push --no-start
   ```
4. Configure your Weather API key and start the application
   ```
   $ ibmcloud cf set-env weather-api-nodejs WEATHER_API_KEY <YOUR_API_KEY>
   $ ibmcloud cf start weather-api-nodejs
   ```

## Getting Started on your local machine

To run this application on your local machine, install Node.js.

1. Clone this repository
   ```
   $ git clone https://github.com/codait-advocates/weather-api-nodejs.git
   $ cd weather-api-nodejs
   ```  
2. Install the dependencies
   ```
   $ npm install
   ```
3. Configure your Weather API key and start the application    
   ```
   $ WEATHER_API_KEY=<YOUR_API_KEY> node app.js
   ```

## License

This code is licensed under Apache 2.0. Full license text is available in [LICENSE](https://github.com/Call-for-Code/weather-api-nodejs/tree/master/LICENSE).
