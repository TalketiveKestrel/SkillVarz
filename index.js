let cardA = document.getElementById('#btnA')
let cardB = document.getElementById('#cardB')
let cardC = document.getElementById('#cardC')
let cardD = document.getElementById('#cardD')
let cardE = document.getElementById('#cardE')
let cardF = document.getElementById('#cardF')

function page(data) {
    window.location.href = "cardPage.html"
}

cardA.addEventListener('click', page(cardA))