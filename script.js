let heading = document.getElementById("heading")
let bulb = document.getElementById("bulb")
let cat = document.getElementById("cat")
let on = document.getElementById("on")
let off = document.getElementById("off")

function switchoff(){
    cat.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    bulb.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    heading.textContent = "Switch Off"
    on.style.backgroundColor = "#e12d39"
    off.style.backgroundColor = "#cbd2d9"
}

function switchon(){
    cat.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
    bulb.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    heading.textContent = "Switch On"
    on.style.backgroundColor = "#cbd2d9"
    off.style.backgroundColor = "#e12d39"
}