
const weatherIcon = document.getElementById('weathericon');
const currentDate = document.getElementById('date');

// const tempStatus = new_result.weather[0].main;
// console.log(tempStatus);

// if(tempStatus == "Clear"){
//     weatherIcon.innerHTML = `<i class="fa-solid fa-cloud" style="color: #eccc68"></i>`;
// }else if (tempStatus == "Snow"){
//     weatherIcon.innerHTML = `<i class="fa-solid fa-cloud" style="color: #dfe4ea"></i>`;
// }else if (tempStatus == "Rainy"){
//     weatherIcon.innerHTML = `<i class="fa-solid fa-cloud-rain" style="color: #a4b0be"></i>`;
// }else{
//     weatherIcon.innerHTML = `<i class="fa-solid fa-cloud" style="color: #44c3de"></i>`;
// }

const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const getCurrentDay = () => {
    let currentTime = new Date();
    return weekDays[currentTime.getDay()];
};



// getCurrentDay();

const getCurrentTime = () =>{
    let months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
    let currentTime = new Date();
    let month = months[currentTime.getMonth()];
    let day = currentTime.getDate();

    let hours = currentTime.getHours();
    let mins = currentTime.getMinutes();

    let period = 'AM';

    if(hours > 11){
        period = 'PM';
        if(hours > 12){
            hours -= 12;
        }
    }
    if(mins < 10){
        mins = `0` + mins;
    }

    return `${month} ${day} | ${hours}:${mins}${period}`

}

currentDate.innerHTML = `${getCurrentDay()} | ${getCurrentTime()}`;

