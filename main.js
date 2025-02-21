let countDown = document.querySelector('.countDown')
let stop = document.querySelector('.stop')
let countNumber = 10 
let colors = ['#f1948a', '#f1948a', '#1a237e', '#0b5345', '#ba4a00', '#5d4037']

function countDownFunction(){
    countNumber--
    countDown.innerHTML = countNumber
    countDown.style.color = colors[Math.floor(Math.random() * 6)]

    if(countNumber === 0){
        clearInterval(stopInterval)
        countDown.style.display = 'none'
        stop.style.display = 'block'
    }
}

let stopInterval = setInterval(countDownFunction, 1000)