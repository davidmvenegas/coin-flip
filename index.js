let coin = document.querySelector(".coin")
let flipBtn = document.querySelector("#flip-button")
let resetBtn = document.querySelector("#reset-button")
let heads = 0
let tails = 0

flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2)
    coin.style.animation = "none"
    if(i) {
        setTimeout(() => {
            coin.style.animation = "spin-heads 3s forwards" 
        }, 100)
        heads++
    } else {
        setTimeout(() => {
            coin.style.animation = "spin-tails 3s forwards" 
        }, 100)
        tails++
    }
    setTimeout(updateStats, 3000)
})

function updateStats() {
    document.querySelector('#heads-count-num').textContent = heads 
    document.querySelector('#tails-count-num').textContent = tails 
}

resetBtn.addEventListener("click", () => {
    heads = 0
    tails = 0
    updateStats()
})