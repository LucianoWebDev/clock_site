const hourTime = document.querySelector('.hours')
const minTime = document.querySelector('.min')
const secTime = document.querySelector('.sec')
const dayDate = document.querySelector('.day')
const monthDate = document.querySelector('.month')
const yearDate = document.querySelector('.year')

const getDate = (e) => {
  const now = new Date()
  const seconds = (now.getSeconds() < 10 ? '0' : '') + now.getSeconds()
  secTime.innerHTML = `${seconds}`
  const minutes = (now.getMinutes() < 10 ? '0' : '') + now.getMinutes()
  minTime.innerHTML = minutes
  const hours = (now.getHours() < 10 ? '0' : '') + now.getHours()
  hourTime.innerHTML = `${hours}`

  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const date = now.getDate()
  const day = now.getDay()
  dayDate.innerHTML = `${days[day - 1]}`
  const month = now.getMonth()
  monthDate.innerHTML = `${date}. ${months[month]}`
  const year = now.getFullYear()
  yearDate.innerHTML = year

  console.log(date)
}

setInterval(getDate, 1000)
