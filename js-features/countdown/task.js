const timer = document.getElementById("timer");
let time = parseInt(timer.textContent), hours, minutes, seconds;

let interval = setInterval(() => {
    hours = parseInt(time / 3600, 10);
    minutes = parseInt((time % 3600) / 60, 10);
    seconds = parseInt((time % 3600) % 60, 10);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timer.textContent = hours + ":" + minutes + ":" + seconds;

    if (--time < 0) {
        clearInterval(interval);
        alert('Вы победили в конкурсе!');
    }
}, 1000)

 // Задание 1 
// const timer = document.getElementById("timer");
// let interval = setInterval(() => {
//     if(parseInt(timer.textContent) === 0) {
//         alert("Вы победили в конкурсе");
//         clearInterval(timerInterval);
//     } else {
//         timer.textContent--;
//     }
// }, 1000)

