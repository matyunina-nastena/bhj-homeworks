let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

getHole = index => document.getElementById(`hole${index}`);
    for(holeIndex = 1; holeIndex < 10; holeIndex++){
        let hole = getHole(holeIndex);
        hole.onclick = function() {
        let search = hole.className.includes("hole_has-mole");
        if (search === true) {
            dead.textContent = parseInt(dead.textContent) + 1;
            } else {
                lost.textContent = parseInt(lost.textContent) + 1;
            }

            if(lost.textContent == 5) {
                alert("Вы проиграли, попробуйте снова!");
                restart();
            } else if (dead.textContent == 10) {
                alert("Вы победили, поздравляю!");
                restart();
            }
        }
    } ;

function restart() {
    dead.textContent = 0;
    lost.textContent = 0;
}
