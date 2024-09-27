// Set date
var countdownDate = new Date("October 8, 202 00:00:00").getTime(); // hrs: min: sec

// Update the countdown every 1 second
var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the countdown date
    var distance = countdownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the elements
    document.querySelector("#d").innerText = addZero(days);
    document.querySelector("#h").innerText = addZero(hours);
    document.querySelector("#m").innerText = addZero(minutes);
    document.querySelector("#s").innerText = addZero(seconds);

    // If the countdown is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown-box").innerHTML =
            "<span class='cdi'>Happy New Year!!</span>";
        document.querySelector(".title").innerText = "";
    }
}, 1000);

function addZero(i) {
    return (i < 10 ? "0" : "") + i; // Simplified addZero function
}

function isMobile() {
    return window.innerWidth < 775;
}
