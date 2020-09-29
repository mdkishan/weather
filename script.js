function callAPI() {
  let locationName = document.getElementById("input").value || "dhaka";
  document.getElementById("input").value = "";
  const ApiLink = `https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=03a9f0f22b969a9ff4c94d6f119bff54`;

  fetch(ApiLink)
    .then((res) => res.json())
    .then((data) => {
      if (data.cod == 404) {
        document.getElementById("img").style.display = "none";
        document.getElementById(
          "city-name"
        ).innerText = `"${locationName}" Not Found`;
        document.getElementById("temp").innerText = `
            Please check your location name and try again`;
        document.getElementById("weather").innerText = "";
      } else {
        const iconId = data.weather[0].icon;
        document
          .getElementById("img")
          .setAttribute(
            "src",
            `https://openweathermap.org/img/wn/${iconId}@2x.png`
          );
        document.getElementById("city-name").innerText = data.name;
        document.getElementById("temp").innerText = `${parseFloat(
          (data.main.temp - 273.15).toFixed(1)
        )}\xB0C`;
        document.getElementById("weather").innerText = data.weather[0].main;
      }
    });
}

callAPI();
