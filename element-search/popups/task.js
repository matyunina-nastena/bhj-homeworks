const modalMain = document.getElementById("modal_main");
const modalSuccess= document.getElementById("modal_success");
const successButton = document.querySelector(".show-success");
const modalClose = Array.from(document.querySelectorAll(".modal__close"));//нужно обрабатывать клики по всем кнопкам

modalMain.classList.add("modal_active");

modalClose.forEach(item => {// После этого нужно повесить событие клика на каждую кнопку. Для этого мы переберем полученный массив кнопок и повесим обработчик на каждый элемент.
    item.onclick = function() {
        const modal = item.closest(".modal"); // возвращает ближайший родительский элемент 
        modal.classList.remove("modal_active");
    };
});

successButton.onclick = function() {
    modalMain.classList.remove("modal_active");
    modalSuccess.classList.add("modal_active");
};

