const fetchWeatherData = async (city) => {
  let res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},in&units=metric&appid=10fdf6b24361508181bf4ead6f13901c`
  );
  let data = await res.json();
  console.log(data);

  let weatherBox = document.querySelector("#weather-data");
  weatherBox.innerHTML = `<div class="icon">
              <img
                src="https://openweathermap.org/img/wn/${
                  data.weather[0].icon
                }@2x.png"
                alt="Weather Icon"
              />
            </div>
            <div class="temperature">${Math.round(data.main.temp)}°C</div>
            <div class="description">${data.weather[0].description}</div>
            <div class="details">
              <div id="feels">Feels like: ${Math.round(
                data.main.feels_like
              )}°C</div>
              <div>Humidity: ${Math.round(data.main.humidity)}%</div>
              <div>Wind speed: ${Math.round(data.wind.speed)} m/s</div>
            </div>`;
};

const formFun = () => {
  let getWeatherBtn = document.querySelector("#form");
  getWeatherBtn.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityName = document.querySelector("#cityname").value;
    fetchWeatherData(cityName);
  });
};

formFun();

// Self Practicing

// const fetchWeatherData = async (city) => {
//   let res = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${city},in&units=metric&appid=10fdf6b24361508181bf4ead6f13901c`
//   );
//   let data = await res.json();
//   console.log(data);

//   let weatherBox = document.querySelector("#weather-data");
//   weatherBox.innerHTML = `<div class="icon">
//               <img
//                 src=" https://openweathermap.org/img/wn/${
//                   data.weather[0].icon
//                 }@4x.png"
//                 alt="Weather Icon"
//               />
//             </div>
//             <div class="temperature">${Math.round(data.main.temp)}°C</div>
//             <div class="description">${data.weather[0].description}</div>
//             <div class="details">
//               <div>Feels like: ${Math.round(data.main.feels_like)}°C</div>
//               <div>Humidity: ${data.main.humidity}%</div>
//               <div>Wind speed: ${Math.round(data.wind.speed)}m/s</div>
//             </div>`;
// };

// const submitFun = () => {
//   let form = document.querySelector("#form");
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let cityName = document.querySelector("#cityname").value;
//     fetchWeatherData(cityName);
//   });
// };

// submitFun();
