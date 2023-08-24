const rotatorCases = [...document.querySelectorAll('.rotator__case')];
let activeIndex = 0; 

function toggle() {
    rotatorCases.forEach((el) => {
        el.classList.remove("rotator__case_active")
    })
    activeIndex = (activeIndex + 1) %rotatorCases.length;
    rotatorCases[activeIndex].classList.add("rotator__case_active")
};
  setInterval(toggle, 1000);
