var input = document.getElementById("form");

input.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  var search = input.value;
  if (event.key === "Enter") {
    console.log(search);
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
        let latitude = lat.toFixed(2);
        let longitude = lon.toFixed(2);
        console.log(latitude);

        fetch(
          "api.openweathermap.org/data/2.5/forecast?lat=" +
            latitude +
            "&lon=" +
            longitude +
            "&appid=b117f125dd48f0e3776088816d8ceb52"
        )
          .then((response) => response.json())
          .then(function (data) {
            console.log(data);
          });
      });
  }
});
