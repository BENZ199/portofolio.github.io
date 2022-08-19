const displayTime = () => {
    let date = new Date;
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let amPm = ''
     
    hour < 12 ? amPm = 'Am' : amPm = 'Pm'
 
    if (hour > 12) {
        hour -= 12
    }

    // padding 
    let padHour = String(hour).padStart(2, '0');
    let padMin = String(minute).padStart(2, '0');

    time.textContent = `${padHour}:${padMin}  ${amPm}`;

    // update in near real-time
    requestAnimationFrame(displayTime);
}


displayTime();