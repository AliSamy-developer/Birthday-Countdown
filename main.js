const daySelect = document.getElementById("day");
const monthSelect = document.getElementById("month");
const yearSelect = document.getElementById("year");

const months =['January','February','march','April',
'May','June','July','August','September','October',
'November','December'];
function populateMonths(){
    for (let i =0;i<months.length;i++){
        const options = document.createElement('option')
        options.textContent = months[i];
        monthSelect.appendChild(options);
        options.style.cssText=""
    };
};
function populateDays(){
    for(let i=1;i<=30;i++ ){
        const options = document.createElement('option');
        options.textContent=i;
        daySelect.appendChild(options);
    }
};
function populateYears(){
    for(let i=2022;i<=2030;i++){
        const options = document.createElement('option');
        options.textContent=i;
        yearSelect.appendChild(options);
}
};
populateMonths();
populateDays();
populateYears();

let formVal = document.getElementById("formVal").value;

function go(){
    let dayVal = document.querySelector("#day").value;
    let monthVal = document.querySelector("#month").value;
    let yearVal = document.querySelector("#year").value;
    birthday = dayVal +" "+ monthVal+" "+ yearVal;
    let before = document.getElementById("be");
    before.style.display="none";
    const currentDate  = new Date();
    const birthdayDate = new Date(birthday);
    const allSeconds = Math.floor((birthdayDate - currentDate) /1000);
    function countdown(){
        let dayC  = document.getElementById("dayC");
        let hourC  = document.getElementById("hourC");
        let secC  = document.getElementById("secC");
        const currentDate  = new Date();
        const birthdayDate = new Date(birthday);
        const allSeconds = Math.floor((birthdayDate - currentDate) /1000);
        const days =  Math.floor(allSeconds/3600/24);
        const hours = Math.floor((allSeconds/3600)%24);
        const minutes = Math.floor((allSeconds/60)%60);
        const seconds = Math.floor(allSeconds)%60;
        dayC.innerHTML = formatTime(days);
        hourC.innerHTML = formatTime(hours);
        minC.innerHTML = formatTime(minutes);
        secC.innerHTML = formatTime(seconds);
        console.log(dayVal);
    }
    function formatTime(time){
        return time < 10 ? `0${time}`:time;
    }
    if (birthdayDate > currentDate){
        countdown();
        setInterval(countdown,1000);
    }else{
        before.style.display="flex";
    }

    
}


