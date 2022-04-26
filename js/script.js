fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then( res => res.json())
    .then( data => {
        let bgImg = data.urls.full
        console.log(bgImg)
        document.body.style.backgroundImage = `url(${bgImg})`
    })