const userProfile = document.getElementById("user-profile")

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then( res => res.json())
    .then( data => {
        let bgImg = data.urls.full
        console.log(data)
        document.body.style.backgroundImage = `url(${bgImg})`
        userProfile.innerHTML = `<a class="link-text" target="_blank" href="${data.user.links.html}">${data.user.username}  <i class="fa-solid fa-up-right-from-square"></i> </a>`
    })