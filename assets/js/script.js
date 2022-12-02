var input = document.getElementById("form");
var date = document.getElementById("date");
var current = document.getElementById("current");
var day1 = document.getElementById("day1");
var day2 = document.getElementById("day2");
var day3 = document.getElementById("day3");
var day4 = document.getElementById("day4");
var day5 = document.getElementById("day5");
var today = dayjs().format("MM/DD/YYYY");

input.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  var search = input.value;
  if (event.key === "Enter") {
    console.log(search);
    //This fetches the longitude and latitude of a location
    fetch(
      "http://api.openweathermap.org/geo/1.0/direct?q=" +
        search +
        "&appid=502f6feabe120b630f5f19b3144af100"
    )
      .then((response) => response.json())
      .then(function (data) {
        console.log(data);
        let lat = data[0].lat;
        let lon = data[0].lon;
        console.log(lat);
        console.log(lon);
        //longitude and latitude decimals are reduced to two places
        let latitude = lat.toFixed(2);
        let longitude = lon.toFixed(2);
        console.log(latitude);

        //inserts the longitude and latitude into the api address to get weather data
        fetch(
          "http://api.openweathermap.org/data/2.5/forecast?lat=" +
            latitude +
            "&lon=" +
            longitude +
            "&appid=b117f125dd48f0e3776088816d8ceb52"
        )
          .then((response) => response.json())
          .then(function (data) {
            console.log(data);
            //creates li elements for today's weather stats
            date.textContent = search + " " + today;
            temptoday = document.createElement("li");
            humiditytoday = document.createElement("li");
            windtoday = document.createElement("li");

            //calculating the fahrenheit for today's temp
            let todaykelvin = data.list[0].main.temp;
            console.log(todaykelvin);
            let todaycelsius = todaykelvin - 273.15;
            let todayFah = Math.floor(todaycelsius * (9 / 5) + 32);

            temptoday.textContent = "Tempearture: " + todayFah + " " + "F";
            humiditytoday.textContent =
              "Humidity: " + data.list[0].main.humidity + " " + "%";
            windtoday.textContent =
              "Wind speed: " + data.list[0].wind.speed + " " + "MPH";

            current.appendChild(temptoday);
            current.appendChild(humiditytoday);
            current.appendChild(windtoday);

            //Creating list elements for day 1 stats
            tempday1 = document.createElement("p");
            windday1 = document.createElement("p");
            humidityday1 = document.createElement("p");

            //calculating the fahrenheit for day 1 temp
            let day1kelvin = data.list[1].main.temp;

            let day1celsius = day1kelvin - 273.15;
            let day1Fah = Math.floor(day1celsius * (9 / 5) + 32);

            tempday1.textContent = "Tempearture: " + day1Fah + " " + "F";
            humidityday1.textContent =
              "Humidity: " + data.list[1].main.humidity + " " + "%";
            windday1.textContent =
              "Wind speed: " + data.list[1].wind.speed + " " + "MPH";

            day1.appendChild(tempday1);
            day1.appendChild(windday1);
            day1.appendChild(humidityday1);

            //Creating list elements for day 2 stats
            tempday2 = document.createElement("p");
            windday2 = document.createElement("p");
            humidityday2 = document.createElement("p");

            //calculating the fahrenheit for day 2 temp
            let day2kelvin = data.list[9].main.temp;

            let day2celsius = day2kelvin - 273.15;
            let day2Fah = Math.floor(day2celsius * (9 / 5) + 32);

            tempday2.textContent = "Tempearture: " + day2Fah + " " + "F";
            humidityday2.textContent =
              "Humidity: " + data.list[9].main.humidity + " " + "%";
            windday2.textContent =
              "Wind speed: " + data.list[9].wind.speed + " " + "MPH";

            day2.appendChild(tempday2);
            day2.appendChild(windday2);
            day2.appendChild(humidityday2);

            //Creating list elements for day 3 stats
            tempday3 = document.createElement("p");
            windday3 = document.createElement("p");
            humidityday3 = document.createElement("p");

            //calculating the fahrenheit for day 3 temp
            let day3kelvin = data.list[17].main.temp;

            let day3celsius = day3kelvin - 273.15;
            let day3Fah = Math.floor(day3celsius * (9 / 5) + 32);

            tempday3.textContent = "Tempearture: " + day3Fah + " " + "F";
            humidityday3.textContent =
              "Humidity: " + data.list[17].main.humidity + " " + "%";
            windday3.textContent =
              "Wind speed: " + data.list[17].wind.speed + " " + "MPH";

            day3.appendChild(tempday3);
            day3.appendChild(windday3);
            day3.appendChild(humidityday3);

            //Creating list elements for day 4 stats
            tempday4 = document.createElement("p");
            windday4 = document.createElement("p");
            humidityday4 = document.createElement("p");

            //calculating the fahrenheit for day 4 temp
            let day4kelvin = data.list[25].main.temp;
            console.log(day4kelvin);

            let day4celsius = day4kelvin - 273.15;
            let day4Fah = Math.floor(day4celsius * (9 / 5) + 32);

            tempday4.textContent = "Tempearture: " + day4Fah + " " + "F";
            humidityday4.textContent =
              "Humidity: " + data.list[25].main.humidity + " " + "%";
            windday4.textContent =
              "Wind speed: " + data.list[25].wind.speed + " " + "MPH";

            day4.appendChild(tempday4);
            day4.appendChild(windday4);
            day4.appendChild(humidityday4);

            //Creating list elements for day 5 stats
            tempday5 = document.createElement("p");
            windday5 = document.createElement("p");
            humidityday5 = document.createElement("p");

            //calculating the fahrenheit for day 4 temp
            let day5kelvin = data.list[33].main.temp;
            console.log(day5kelvin);

            let day5celsius = day5kelvin - 273.15;
            let day5Fah = Math.floor(day5celsius * (9 / 5) + 32);

            tempday5.textContent = "Tempearture: " + day5Fah + " " + "F";
            humidityday5.textContent =
              "Humidity: " + data.list[33].main.humidity + " " + "%";
            windday5.textContent =
              "Wind speed: " + data.list[33].wind.speed + " " + "MPH";

            day5.appendChild(tempday5);
            day5.appendChild(windday5);
            day5.appendChild(humidityday5);
          });
      });
  }
});
