
const macPictures = {
    "White": '../PICS/mbp14-silver-select-202110 1.svg',
    "Space Gray": '../PICS/mbp14-spacegray-select-202110 1.svg'
}


let btnWhite = document.querySelector(".colorBtnWhite")
let btnGray = document.querySelector(".colorBtnSpaceGray")

let macPicture = document.querySelector(".theMac")


let priceBtns = document.querySelectorAll(".common")
let firstPrice = document.querySelector(".firstPrice")
let addingPrice = document.querySelectorAll(".addPrice")
let orgPrice = +firstPrice.innerHTML

priceBtns.forEach(btn => {
    btn.onclick = () => {
        let addCost = +btn.getAttribute("data-price")

        firstPrice.innerHTML = orgPrice + addCost

        btn.classList.toggle("commonActive")

    }
})


btnWhite.onclick = () => {
    macPicture.setAttribute("src", "./PICTURES/mbp14-silver-select-202110 1.svg")
    btnWhite.className = "colorBtnWhite colorActive"
    btnGray.className = "colorBtnSpaceGray colorNotActive"
}

btnGray.onclick = () => {
    macPicture.setAttribute("src", "./PICTURES/mbp14-spacegray-select-202110 1.svg")
    btnGray.className = "colorBtnWhite colorActive"
    btnWhite.className = "colorBtnSpaceGray colorNotActive"
}




let burgerMenu = document.querySelector(".burgerMenu")
let sideBar = document.querySelector(".sideBar")
let closingMenu = document.querySelector(".closingMenu")

burgerMenu.onclick = () => {
    sideBar.style.right = "0"
}

closingMenu.onclick = () => {
    sideBar.style.right = "-100%"
}