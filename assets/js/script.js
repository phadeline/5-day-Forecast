var input = document.getElementById("form");
var date = document.getElementById("date");
var current = document.getElementById("current");
var allweathers = document.getElementById("allweathers");
let previous = document.getElementById("previous");

var today = dayjs().format("MM/DD/YYYY");

let previoussearch = JSON.parse(localStorage.getItem("previoussearch")) || [];

//This is the default value of the input box.
input.value = "Los Angeles";

// the are the data values from the third fetch that will be used to get the weather stats
let weatherarray = [3, 11, 19, 27, 35];

weatherData();

function weatherData() {
  search = input.value;
  console.log(search);
  console.log(previoussearch);

  let search2 = search.toUpperCase();

  if (previoussearch.includes(search2) == false) {
    previoussearch.push(search2);
    localStorage.setItem("previoussearch", JSON.stringify(previoussearch));
  }

  //previous searches populate automatically
  previous.textContent = " ";
  for (let i = 0; i < previoussearch.length; i++) {
    let button = $("<button>");

    button.text(previoussearch[i]);

    $(previous).append(button);

    //When the user clicks on a previous search, the weather stats will show up
    $(button).on("click", function (event) {
      let text = this.textContent;
      allweathers.textContent = "";
      current.textContent = "";
      searchGo(text);
      event.preventDefault();
    });
  }

  searchGo(search2);
}

function searchGo(search) {
  //This fetches the longitude and latitude of a location
  fetch(
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
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

      //This fetches the weather stats for current weather using the longitude and latitude of the previous fetch
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
          latitude +
          "&lon=" +
          longitude +
          "&appid=b117f125dd48f0e3776088816d8ceb52&units=imperial"
      )
        .then((response) => response.json())
        .then(function (data) {
          console.log(data);
          //creates li elements for today's weather stats
          date.textContent = search + " " + today;
          temptoday = document.createElement("li");
          humiditytoday = document.createElement("li");
          windtoday = document.createElement("li");

          //getting the icon for currentday
          let icontoday = document.getElementById("icontoday");
          let iconimage1 = data.weather[0].icon;
          incon1url = "https://openweathermap.org/img/w/" + iconimage1 + ".png";
          icontoday.src = incon1url;

          //calculating the temperature for today's temp
          let todaystemp = data.main.temp;

          temptoday.textContent = "Temperature: " + todaystemp + " " + "F";
          humiditytoday.textContent =
            "Humidity: " + data.main.humidity + " " + "%";
          windtoday.textContent =
            "Wind speed: " + data.wind.speed + " " + "MPH";

          current.appendChild(temptoday);
          current.appendChild(humiditytoday);
          current.appendChild(windtoday);
        });

      //This fetches the api for the 5 day forecast
      //inserts the longitude and latitude into the api address to get weather data
      fetch(
        "https://api.openweathermap.org/data/2.5/forecast?lat=" +
          latitude +
          "&lon=" +
          longitude +
          "&appid=b117f125dd48f0e3776088816d8ceb52&units=imperial"
      )
        .then((response) => response.json())
        .then(function (data) {
          console.log(data);
          for (let i = 0; i < weatherarray.length; i++) {
            //this gets the value of the weatherarray which will be used later on when getting the weather stats
            //for example in line 126.
            newarray = weatherarray[i];

            //Creating div that will contain unorderlist and weather icon
            divweather = document.createElement("div");
            divweather.setAttribute(
              "class",
              "col-lg-3 col-md-5 me-1 col-sm-12 weathers"
            );

            //Creating div that will enclose weather icon image
            divicon = document.createElement("div");
            divicon.setAttribute("class", "weather-icon");

            //Creating image element that will contain the weather icon
            divimage = document.createElement("img");
            divimage.setAttribute("class", "icon");

            //Creating unordered list that will have all the weather stats
            ul = document.createElement("ul");

            //Creating list elements for the stats
            tempday1 = document.createElement("p");
            windday1 = document.createElement("p");
            humidityday1 = document.createElement("p");
            day1date = document.createElement("h3");

            //Getting the date and converting them to MM/DD/YYYY format
            let datadate1 = data.list[newarray].dt_txt;
            day1date.textContent = dayjs(datadate1).format("MM/DD/YYYY");

            //getting the icon
            let iconday = data.list[newarray].weather[0].icon;
            dayurl = "https://openweathermap.org/img/w/" + iconday + ".png";
            divimage.src = dayurl;

            //getting the tempearture for all 5 days
            let day1temp = data.list[newarray].main.temp;

            tempday1.textContent = "Temperature: " + day1temp + " F";
            humidityday1.textContent =
              "Humidity: " + data.list[newarray].main.humidity + " " + "%";
            windday1.textContent =
              "Wind speed: " + data.list[newarray].wind.speed + " " + "MPH";

            allweathers.appendChild(divweather);
            divweather.appendChild(divicon);
            divicon.appendChild(divimage);
            divweather.appendChild(ul);
            ul.appendChild(day1date);
            ul.appendChild(tempday1);
            ul.appendChild(windday1);
            ul.appendChild(humidityday1);
          }
        });
    });
}

// If the user presses the "Enter" key on the keyboard then the city they search weather stats will populate
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    allweathers.textContent = "";
    current.textContent = " ";
    weatherData();
    event.preventDefault();
  }
});
