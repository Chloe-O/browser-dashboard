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

const cryptoIcon = document.getElementById("crypto-icon") //
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


function updateTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString("en-US", {timeStyle: "short"})
    document.getElementById("time").innerHTML = currentTime
}

setInterval(updateTime, 500)
