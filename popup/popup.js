// Get today's date

// Get future date 24 hours from now
const today = new Date();
const future = new Date(today.setDate(today.getDate() + 1)).getTime();

// Update the count down every 1 second
var x = setInterval(function() {
    // Get current date
    var now = new Date().getTime();

    var distance = future - now;

    console.log(distance)

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Time to Code!";
    }
}, 1000);