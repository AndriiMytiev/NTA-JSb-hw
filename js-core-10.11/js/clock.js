import refs from "./refs.js";
const {
    body,
    h1, 
    h2, 
    m1, 
    m2, 
    s1, 
    s2, 
    timeFormatsBlock, 
    controlBtnsBlock, 
    startBtn,
    pauseBtn,
    stopBtn,
    clockBtn, 
    timerBtn, 
    counterBtn, 
    clockFace,
    alarmInputblock, 
    alarmInput,
} = refs;

let Format = 1;
let StopChecker = 0;
let TimeHolder = 0;

timeFormatsBlock.addEventListener('click', (e) => {
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

// CLOCK --- TIMER --- COUNTER 
clockBtn.addEventListener('click', () => {
    body.classList.remove('BgAnimation');  
    Format = timeFormatsBlock.children['24hr'].classList.contains('active') ? 1 : 2;  
    controlBtnsBlock.style.display = 'none';
    timeFormatsBlock.style.display = 'block';
    alarmInputblock.style.display = 'none';
    clockFace.style.display = '';
    alarmInput.value = '';
})

timerBtn.addEventListener('click', () => {
    body.classList.remove('BgAnimation');
    Format = 3;
    StopChecker = 1;
    TimeHolder = 0;
    resetClassName();
    timeFormatsBlock.style.display = 'none';
    controlBtnsBlock.style.display = 'block';
    alarmInputblock.style.display = 'none';
    clockFace.style.display = '';
    swapStartPauseButtons('start');
    alarmInput.value = '';
})

counterBtn.addEventListener('click', () => {
    body.classList.remove('BgAnimation');
    Format = 4;
    StopChecker = 1;
    resetClassName();
    timeFormatsBlock.style.display = 'none';
    controlBtnsBlock.style.display = 'block';
    clockFace.style.display = 'none';
    alarmInputblock.style.display = 'block';
    swapStartPauseButtons('start');
})

// START --- PAUSE --- STOP
startBtn.addEventListener('click', () => {
    // swapStartPauseButtons('pause');
    StopChecker = 0;
    if(Format === 3){
        swapStartPauseButtons('pause');
    }
    if(Format === 4){
        TimeHolder = alarmInput.value;
        if(TimeHolder > 0){
            resetClassName();
            swapStartPauseButtons('pause');
            alarmInput.value = '';
            alarmInputblock.style.display = 'none';
            clockFace.style.display = '';
        } 
        if(!TimeHolder) return;
    }
})

pauseBtn.addEventListener('click', () => {
    swapStartPauseButtons('start');
    StopChecker = 1;
})

stopBtn.addEventListener('click', () => {
    swapStartPauseButtons('start');
    body.classList.remove('BgAnimation');
    resetClassName();
    StopChecker = 1;
    if(Format === 3){
        TimeHolder = 0;
    }
    if(Format === 4){
        clockFace.style.display = 'none';
        alarmInputblock.style.display = 'block';
        alarmInput.value = '';
    }
})

// FUNCTIONS 
function updateTimer(){
    let date = new Date();
    let day = date.getDay();

    setDayOfWeek(day);

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
   
    const time = setTimeObject(hours, minutes, seconds);

    if(Format === 1){
        set24hours(time); 
    }
    if(Format === 2){
        set12hours(time, hours); 
    }
    if(Format === 3 && StopChecker === 0){
        TimeHolder++;
        setTimer(TimeHolder);
    }
    if(Format === 4 && StopChecker === 0){
        TimeHolder--;
        TimeHolder === 0 ? setAlarmlarm() : setTimer(TimeHolder);    
    }   
}
setInterval(updateTimer, 1000);

function setTimeObject(hours, minutes, seconds){
    return {
        hoursNumFirst: Math.floor(hours/10),
        hoursNumSecond: hours % 10,

        minutesNumFirst: Math.floor(minutes/10),
        minutesNumSecond: minutes % 10,

        secondsNumFirst: Math.floor(seconds/10),
        secondsNumSecond: seconds % 10,
    }
}

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

function setTimer(timeHolder){
    let h = Math.floor(timeHolder/3600);
    let m = Math.floor((timeHolder - (h*3600)) / 60 );
    let s = Math.floor(timeHolder - h*3600 - m*60 );
    
    const time = setTimeObject(h, m, s);
    set24hours(time);
}

function setAlarmlarm(){
    body.classList.add('BgAnimation');
    resetClassName();
    StopChecker = 1;
}

function setClassName(node, className){
    node.classList.forEach(classItem => {
        classItem.includes("show") ? 
            node.classList.replace(classItem, className): 
            node.classList.add(className)
    });
}

function resetClassName(){
    [h1, h2, m1, m2, s1, s2].map((node) => setClassName(node, 'show0'))
}

function swapStartPauseButtons(btn){
    if(btn === 'start'){
        pauseBtn.style.display = 'none';
        startBtn.style.display = 'block';
    }
    if(btn === 'pause'){
        startBtn.style.display = 'none';
        pauseBtn.style.display = 'block';
    }
}