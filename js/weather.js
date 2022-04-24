const weather = document.querySelector('#weather span:first-child')
const city = document.querySelector('#weather span:last-child')
const API_KEY = '287735f456628615e65683a293d064cf'

function onGeoOk(position) {
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name
      wthr = data.weather[0].main
      tmp = data.main.temp

      if (wthr === 'Clouds') {
        wthr = '☁(구름많음)'
      } else if (wthr === 'Clear') {
        wthr = '🌞(해맑음)'
      } else if (wthr === 'Rain') {
        wthr = '☔︎(비)'
      } else if (wthr === 'Thunderstorm') {
        wthr = '⌇⌇⌇(천둥번개)'
      } else if (wthr === 'Snow') {
        wthr = '☃︎(눈)'
      } else {
        wthr = data.weather[0].main
      }
      weather.innerText = `${wthr} / ${tmp}`
    })
}

console.log(city, weather)

function ok(e) {
  console.log(e)
}

function onGeoError() {
  alert('쿠키 허용 팝업에서 허용을 눌러주세요. 그렇지 않다면 날씨정보를 못 불러옵니다.')
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)

// navigator.geolocation.getCurrentPosition(ok, onGeoError)
