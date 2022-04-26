fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then( res => res.json())
    .then( data => {
        let bgImg = data.urls.full
        console.log(bgImg)
    })