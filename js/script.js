var today = new Date()
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = "Good evening!"
} else if (hourNow > 12) {
    greeting = "Good afternoon!"
} else if (hourNow > 22){
    greeting = "Good night!"
} else if (hourNow > 5){
    greeting = "Good morning!"
} else {
    greeting = "Where are you dude?"
}

document.write(greeting)

// it doesn't work kkkkkkk
/*I mean
it works but it isn't useful, because taking
the first value and getting true as return
the message may not be always adequated.