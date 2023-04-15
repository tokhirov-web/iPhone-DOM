let colorName = document.querySelector(".specialColor")

let blue = document.querySelector(".blue")
let purple = document.querySelector(".purple")
let yellow = document.querySelector(".yellow")
let midnight = document.querySelector(".midnight")
let starlight = document.querySelector(".starlight")
let red = document.querySelector(".red")

let picture = document.querySelector(".specialPicture")

blue.onmouseenter = () => {
    colorName.innerHTML = "Blue"
}

purple.onmouseenter = () => {
    colorName.innerHTML = "Purple"
}

yellow.onmouseenter = () => {
    colorName.innerHTML = "Yellow"
}

midnight.onmouseenter = () => {
    colorName.innerHTML = "Midnight"
}

starlight.onmouseenter = () => {
    colorName.innerHTML = "Starlight"
}

red.onmouseenter = () => {
    colorName.innerHTML = "Red"
}

blue.onclick = () => {
    picture.setAttribute("src", "./PICTURES/gray.jpg")
}

purple.onclick = () => {
    picture.setAttribute("src", "./PICTURES//purple.jpg")
}

yellow.onclick = () => {
    picture.setAttribute("src", "./PICTURES//yellow.jpg")
}

midnight.onclick = () => {
    picture.setAttribute("src", "./PICTURES/midnight.jpg")
}

starlight.onclick = () => {
    picture.setAttribute("src", "./PICTURES/starlight.jpg")
}

red.onclick = () => {
    picture.setAttribute("src", "./PICTURES/red.jpg")
}

let windowOpening = document.querySelector(".openWindow")
let theWindow = document.querySelector(".modalWindow")
// let descriptionOpenClose = document.querySelector(".first")
// let openCloseDescriptionBtns = document.querySelectorAll(".toggleBtn")
let closeingBg = document.querySelector(".closeBg")
let closeWindowBtn = document.querySelector(".closeBtn")
let hiddenDes = document.querySelector(".iPhoneFirst")
let openDesBtn = document.querySelectorAll(".openDes")
let description = document.querySelectorAll(".description")
let desActive = document.querySelectorAll(".desActive")

let hiddenDesRwo = document.querySelector(".iPhoneSecond")
let openDesBtnTwo = document.querySelectorAll(".openDesTwo")
let descriptionTwo = document.querySelectorAll(".descriptionTwo")

let modalActive = document.querySelector(".modalActive")

windowOpening.onclick = () => {

    theWindow.style.display = "block"
    closeingBg.style.display = "flex"

    setTimeout(() => {
        theWindow.style.opacity = "1"
        closeingBg.style.opacity = "0.5"
    }, 200);
}

closeingBg.onclick = () => {
    theWindow.style.opacity = "0"
    closeingBg.style.opacity = "0"

    setTimeout(() => {
        theWindow.style.display = "none"
        closeingBg.style.display = "none"
    }, 200);
}

closeWindowBtn.onclick = () => {
    theWindow.style.opacity = "0"
    closeingBg.style.opacity = "0"

    setTimeout(() => {
        theWindow.style.display = "none"
        closeingBg.style.display = "none"
    }, 200)
}

openDesBtn.forEach(btn => {
    theWindow.classList.toggle("modalActive")
    btn.onclick = () => {
        description.forEach(des => {
            des.classList.toggle("desActive")
        })
        if (openDesBtn.innerHTML === "Open") {
            openDesBtn.innerHTML = "Close"
        } else {
            openDesBtn.innerHTML = "Open"
        }
    }
})

openDesBtnTwo.forEach(btn => {
    btn.onclick = () => {
        descriptionTwo.forEach(des => {
            des.classList.toggle("desActive")
        })
        if (openDesBtnTwo.innerHTML === "Open") {
            openDesBtn.innerHTML = "Close"
        } else {
            openDesBtnTwo.innerHTML = "Open"
        }
    }
})

