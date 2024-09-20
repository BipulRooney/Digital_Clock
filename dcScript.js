function updateClock() {
    const now = new Date(); 
    const hours = String(now.getHours()).padStart(2, '0'); 
    const minutes = String(now.getMinutes()).padStart(2, '0'); 
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const date = String(now.getDate()).padStart(2, '0');
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[now.getMonth()];
    const year= String(now.getFullYear()); 
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Format the time string and date string
    const timeString = `${hours}:${minutes}<span class="ampm">${ampm}</span> `;
    const dateString = `<span class="date">${date} ${month} ${year}</span>`; 
    // Update the clock div with the current time and add time
    document.getElementById('clock').innerHTML = timeString;
    document.getElementById('date').innerHTML = dateString;
}

updateClock();

setInterval(updateClock, 1000);