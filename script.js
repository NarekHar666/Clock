setInterval(setClock, 1000) // Set a timer to update the clock every 1000ms (1 second).
const secondHand = document.querySelector("#secondHand")
const minuteHand = document.querySelector("#minuteHand")
const hourHand = document.querySelector("#hourHand")

// This function, setClock(), updates the clock hands rotations to reflect the current time.
function setClock(){
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    secondHand.style.transform = `rotate(${seconds * 6}deg)`
    minuteHand.style.transform = `rotate(${((seconds * 6)/60) + minutes * 6}deg)`
    hourHand.style.transform = `rotate(${((minutes * 6)/12) + (hours % 12 *30)}deg)`
}

setClock()



