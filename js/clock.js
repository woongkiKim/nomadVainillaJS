// const currentTime = document.querySelector('clock')

function getClock() {
  const date = new Date()
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  clock.innerText = `현재시간: ${hours}:${minutes}:${seconds}`
}

getClock()
setInterval(getClock, 1000)
