


function updateClock(){

    // Date() is in built function to get the current date
    let now  = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

// To decide what to display if less than 10 then 0+timne(eg. 09) or else the number
    hours = hours <10 ? "0" + hours : hours;
    minutes = minutes <10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" +seconds : seconds;

// to get the updated value as goes on 
    const hoursElement = document.getElementById("hours");
    const  minutesElement  = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    // to display in the page by using textcontent 
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;



}

//interval to make the function repeat after every 1000millisecond
setInterval(updateClock,1000);
