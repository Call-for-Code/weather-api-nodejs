# Getting started with the Weather Company API: Call for Code edition

![](images/hero__disaster-flood.jpg)

The Call for Code Global Challenge asks developers to create solutions that significantly improve preparedness for natural disasters and relief when they hit. 

Understanding weather conditions can dramatically reduce the number of people impacted, before, during and after an event.

## Learning objectives

We will learn how to:

1. Query any one of the 27 available Weather APIs
2. Understand what content is applicable to natural disaster preparedness efforts
3. Build and run a NodeJS server app project that continuously monitors the weather for events of interest at 10-minute intervals. 

Weather APIs covered in detail include severe weather alerts, tropical storm forecasts, power disruption index, and the daily weather almanac.

## Prerequisites

- An IBM Cloud account.
- A [NodeJS](https://nodejs.org) local installation (optional)

## Estimated time

- 15 minutes

## Steps

### 1. Create an IBM Cloud Account

*If you do have an existing IBM Cloud account, skip to the next step.*

1. We need a trial account on the IBM Cloud. We can get this free of charge, and the services used in this tutorial incur no additional costs.
2. Create an IBM Cloud Trial account by navigating to this link: https://console.bluemix.net, and click on Create a free Account.
3. Complete the registration form with your details and a valid email address.
4. Click on **Create Account**.
5. Confirm your registration by checking for the confirmation email and clicking on **Confirm Account**.
6. We can now log into IBM Cloud. Click on **Login** and enter your email and password.

### 2. Obtain a Weather Company API Key

1. In our browser, we willl go to https://callforcode.weather.com and [register](https://callforcode.weather.com/register). A time-limited API key will be sent via email.
2. Save this key in a safe, private place.

### 3. Deploy this application to IBM Cloud

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
4. Configure the Weather API key `<YOUR_API_KEY>` and start the application
   ```
   $ ibmcloud cf set-env weather-api-nodejs WEATHER_API_KEY <YOUR_API_KEY>
   $ ibmcloud cf start weather-api-nodejs
   ```

### 4. Local development and testing

1. Install Node.js from [https://nodejs.org](https://nodejs.org).
1. Clone this repository
   ```
   $ git clone https://github.com/codait-advocates/weather-api-nodejs.git
   $ cd weather-api-nodejs
   ```  
2. Install the dependencies
   ```
   $ npm install
   ```
3. Set the Weather API key `<YOUR_API_KEY>` when running the application    
   ```
   $ WEATHER_API_KEY=<YOUR_API_KEY> node app.js
   ```
4. Read the comments in the code (`app.js` and all `.js` files in the `lib` directory) to understand how to adapt the code to your needs. 

## Summary

We have now learned the basics of accessing the Weather Company APIs and understanding how to parse the JSON data that is returned. Deciding what to actually do with that data depends on what your application needs to do. You may want to send alerts via SMS or even voice using the [twilio integration with IBM Cloud](https://www.ibm.com/blogs/bluemix/2018/02/new-twilio-additions-to-the-catalog/), or [send weather updates to a machine learning model for scoring](https://www.youtube.com/watch?v=QV_m2EQn26E), or something even more exciting. We can't wait to see what you'll build. 