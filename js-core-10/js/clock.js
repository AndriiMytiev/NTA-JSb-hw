import refs from "./refs.js";
const {h1, h2, m1, m2, s1, s2, timeFormatBlock} = refs;

let Format = 1;

timeFormatBlock.addEventListener('click', (e) => {
    if(e.target.id == '24hr'){
        Format = 1
        document.getElementById('24hr').classList.add('active');
        document.getElementById('12hr').classList.remove('active');
    } 
    if(e.target.id == '12hr'){
        Format = 2
        document.getElementById('12hr').classList.add('active');
        document.getElementById('24hr').classList.remove('active');
    }
})

function updateTimer(){
    let date = new Date();
    let day = date.getDay();

    setDayOfWeek(day);

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
   
    const time = {
        hoursNumFirst: Math.floor(hours/10),
        hoursNumSecond: hours % 10,

        minutesNumFirst: Math.floor(minutes/10),
        minutesNumSecond: minutes % 10,

        secondsNumFirst: Math.floor(seconds/10),
        secondsNumSecond: seconds % 10,
    }

    if(Format === 1){
        set24hours(time); 
    }
    if(Format === 2){
        set12hours(time, hours); 
    }

    setInterval(updateTimer, 1000)
}
updateTimer()

function setDayOfWeek(day){
    document.querySelector(".WeekDays span:nth-child("+((day + 2) % 7)+")").classList.add('active')
}

function set24hours(time){
    setClassName(h1, "show" + time.hoursNumFirst);
    setClassName(h2, "show" + time.hoursNumSecond);

    setClassName(m1, "show" + time.minutesNumFirst);
    setClassName(m2, "show" + time.minutesNumSecond);

    setClassName(s1, "show" + time.secondsNumFirst);
    setClassName(s2, "show" + time.secondsNumSecond);
}

function set12hours(time, hours){
    if(hours > 12){
        hours = hours - 12;
        time.hoursNumFirst = Math.floor(hours/10);
        time.hoursNumSecond = hours % 10;
    }
    setClassName(h1, "show" + time.hoursNumFirst);
    setClassName(h2, "show" + time.hoursNumSecond);

    setClassName(m1, "show" + time.minutesNumFirst);
    setClassName(m2, "show" + time.minutesNumSecond);

    setClassName(s1, "show" + time.secondsNumFirst);
    setClassName(s2, "show" + time.secondsNumSecond);
}

function setClassName(node, className){
    node.classList.forEach(classItem => {
        classItem.includes("show") ? 
            node.classList.replace(classItem, className): 
            node.classList.add(className)
    });
}