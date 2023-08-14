const clicker = document.getElementById("clicker__counter");
const picture = document.getElementById("cookie");

picture.onclick = function() {
    let randomNumber = Math.floor(Math.random() * 20);
    if(randomNumber > 10) {
        picture.width += 15;
    } else {
        picture.width -= 7;
    }
    clicker.textContent++
} 