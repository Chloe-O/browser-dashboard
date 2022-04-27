//BG Image

const authorProfile = document.getElementById("author-profile")

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        let bgImg = data.urls.full
        document.body.style.backgroundImage = `url(${bgImg})`
        authorProfile.innerHTML = `by <a class="link-text" target="_blank" href="${data.user.links.html}">${data.user.username}  <i class="fa-solid fa-up-right-from-square"></i> </a>`
    })
    .catch(err => {
        console.log(err)
        document.body.style.backgroundImage = `url(/media/alt-bg.jpg)`
        authorProfile.innerHTML = `<a class="link-text" target="_blank" href="https://www.pexels.com/@eberhardgross?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"> Photo by eberhard grossgasteiger from Pexels </a>`
    })

// Crypto

const cryptoIcon = document.getElementById("crypto-icon")
const cryptoInfo = document.getElementById("crypto-info")

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => res.json())
    .then(data => {
        cryptoIcon.innerHTML = `<img src="${data.image.thumb}" alt="${data.name} icon">`
        cryptoInfo.innerHTML = `<span>${data.name} current price: £${data.market_data.current_price.gbp.toFixed(2)}</span>`
    })
    .catch(err => {
        console.log(err)
        document.getElementById("crypto").innerHTML = "Cannot get Crypto data at this time, try again later"
    })

// Current Time

function updateTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString("en-US", {timeStyle: "short"})
    document.getElementById("time").innerHTML = currentTime
}

setInterval(updateTime, 500)

// Weather

    const weatherIcon = document.getElementById("weather-icon")
    const weatherTemp = document.getElementById("weather-temp")
    const weatherLocation = document.getElementById("weather-location")

navigator.geolocation.getCurrentPosition((position) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=b771978343c59359f12e0dd933a8aaa7&units=metric`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }  return res.json()
        })
        .then(data => {

            weatherTemp.innerHTML = `${Math.round(data.main.temp)}° `
            weatherLocation.innerHTML = data.name

            switch (data.weather[0].description) {
                case "clear sky":
                    weatherIcon.innerHTML = `<i class="fa-solid fa-sun"></i> `
                    break;
                case "broken clouds" || "few clouds" || "scattered clouds" || "overcast clouds":
                    weatherIcon.innerHTML = `<i class="fa-solid fa-cloud"></i> `
                    break;
                case "shower rain":
                    weatherIcon.innerHTML = `<i class="fa-solid fa-cloud-rain"></i> `
                    break;
                case "rain":
                    weatherIcon.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy"></i> `
                    break;
                case "thunderstorm":
                    weatherIcon.innerHTML = `<i class="fa-solid fa-cloud-bolt"></i> `
                    break;
                case "snow":
                    weatherIcon.innerHTML = `<i class="fa-solid fa-snowflake"></i> `
                    break;
                case "mist":
                    weatherIcon.innerHTML = `<i class="fa-solid fa-smog"></i> `
                    break;
                default:
                    weatherIcon.innerHTML = `<i class="fa-solid fa-cloud"></i> `    
            }
        })
        .catch(err => console.error(err))
    })




