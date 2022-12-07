# 5 Day Weather-Forecast

## Description

The purpose of this project was to create a weather app that displays today's current weather and additionally, a 5-day weather forecast. The idea behind it is the user will get the relevant data such as the temperature, humidity, wind speed as well as an icon relating to the weather outlook for their preferred city. This was accomplished using the Api from OpenWeather (https://openweathermap.org/) which provided the current weather and the 5-day forecast for free.

## Table of Contents

- [User Story](#userstory)
- [Acceptance Criteria](#acceptancecriteria)
- [Technologies Used](#technologiesused)
- [Installation](#installation)
- [Usage](#usage)
- [Credits/Collaborators](#credits/collaborators)
- [License](#license)

**User Story**

- AS A traveler
- I WANT to see the weather outlook for multiple cities
- SO THAT I can plan a trip accordingly

**Acceptance Criteria**

- GIVEN a weather dashboard with form inputs
- WHEN I search for a city
- THEN I am presented with current and future conditions for that city and that city is added to the search history
- WHEN I view current weather conditions for that city
- THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
- WHEN I view future weather conditions for that city
- THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
- WHEN I click on a city in the search history
- THEN I am again presented with current and future conditions for that city

## Technologies Used

- Technologies used were the 3 APIs acquired from OpenWeather:

  1. The first technology is the Geocoding API: this was needed to get the longitude and latitude of a city

  2. The second technology used is the Current Weather API: this was used to get the current weather for today's date by applying the longitude and latitude acquired from the Geocoding API in its fetch call.

  3. The third technology used is the 5-day weather API: this was used to get the 5-day forecast by applying the longitude and latitude acquired from the Geocoding API in its fetch call.

## Usage

Initially, when you open the website, the weather for "Los Angeles" is displayed on the screen. This is because, "Los Anegeles" is the default location used for the website. To search for your preferred city, simply type the city name in the input box and press the "Enter" Key. Soon after, the current weather should appear with the temperature, humidity, wind speed and an icon relating to the current weather statistics for the city. Below this are 5 five boxes, each box represents a day in the future and each box contains the temperature, icon, humidity and wind speed. Furthermore, once the user reloads the page, previous searches will show up under the search bar.

## Link to Application: https://phadeline.github.io/Weather-Forecast/

[Your Weather Forecast .webm](https://user-images.githubusercontent.com/112015433/206255464-8f052ef0-de12-46dc-a25b-09ca9ff2ec08.webm)

## Credits/Collaborators

- **OpenWeather Geocoding API:** https://openweathermap.org/api/geocoding-api
- **OpenWeather current Weather API:** https://openweathermap.org/current
- **OpenWeather 5-day Weather API:**: https://openweathermap.org/forecast5

## License

MIT License
