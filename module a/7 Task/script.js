const INTERVAL = 1000

function formatDate(date) {
    return String(date.toFixed(0).padStart(2, '0'))
}

const timer = document.querySelector(".clock")

function updateTimer() {
    const date = new Date()

    const hours = formatDate(date.getHours())
    const minutes = formatDate(date.getMinutes())
    const seconds = formatDate(date.getSeconds())

    const time = `${hours}:${minutes}:${seconds}`

    timer.innerHTML = time
}

updateTimer()

setInterval(() => {
    updateTimer()
}, INTERVAL)