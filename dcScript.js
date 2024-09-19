function updateClock() {
    const now = new Date(); // Get the current date and time
    const hours = String(now.getHours()).padStart(2, '0'); // Get hours and format
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Get minutes and format
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Get seconds and format
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Format the time string
    const timeString = `${hours}:${minutes}  <span class="ampm">${ampm}</span>`; //Add :${seconds} to add seconds in clock
    // Update the clock div with the current time
    document.getElementById('clock').innerHTML = timeString;
}

// Call updateClock immediately to set the initial time
updateClock();
// Update the clock every second (1000 milliseconds)
setInterval(updateClock, 1000);