
localStorage.setItem("It's a secret to everybody","You are going to send me a 'secret' message, using localStorage.\n Modify your site.js file so that when it runs, it adds a message to localStorage.\n The message should be a string, and it can be anything you want.\n It could be a simple message, or a joke, or a quote, or anything else you want me to see. You must use the key It's a secret to everybody.. It must be spelled exactly like that, with the same capitalization and punctuation.\n If not, my code won't be able to find it.\n If I can't find it, you'll get a zero score, and a comment that says, 'Message not received.\n Try again.' 500 brownie points if you your message is a reference to something related to that key.\n Note Just because something is a 'secret' doesn't mean it's secure.\n This is just a fun exercise to practice using localStorage. Don't use localStorage for anything that needs to be secure.\n Using localStorage for secure data is like writing your password on a sticky note and putting it under your keyboard.\n Submission Push your changes to your github.io repository. Remember that you are adding to an existing repository, so you don't need to use git init.\n The three commands you need to run aregit add .git commit -m 'Added secret message' git push Copy Once your website is updated, submit the link to your GitHub Pages site to Blackboard.")

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