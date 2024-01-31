const hours = new Date().getHours() // get the current hour
const date = new Date().toLocaleString()
const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const greeting = document.querySelector('h3.welcome')
if(isMorning){
    greeting.textContent=("Good Morning")
}
else if(isAfternoon){
    greeting.textContent=("Good Afternoon")
}
else if(isEvening){
    greeting.textContent=("Good Evening")
}
const greetingp=document.querySelector('p.welcome')
greetingp.textContent=(`The Current Date is ${date}`)