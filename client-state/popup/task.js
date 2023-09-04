// const modal = document.querySelector('.modal');
// const modalCloseButton = document.querySelector('.modal__close');

// // Проверяем, есть ли информация о закрытии окна в localStorage
// const modalClosed = localStorage.getItem("modalClosed");

// // Если информации нет, показываем окно
// if (!modalClosed) {
//     modal.classList.add("modal_active");
// }

// // Обработчик события для закрытия окна
// modalCloseButton.addEventListener("click", function() {
//     // Скрываем окно
//     modal.classList.remove("modal_active");
    
//     // Сохраняем информацию о закрытии окна в localStorage
//     localStorage.setItem("modalClosed", true);
// });
const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal__close');
let modalClosed = false;

modalCloseButton.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    // Устанавливаем cookie с именем 'modalClosed' и значением 'true'
    document.cookie = 'modalClosed=true';
    modalClosed = true;
});

// Функция для проверки значения флага modalClosed в cookie
function checkClosed() {
    const pairs = document.cookie.split('; ');
    const modalClosedCookie = pairs.find(i => i.startsWith('modalClosed='));
    if(modalClosedCookie) {
        modalClosed = modalClosedCookie.split('=')[1] === 'true';
    } else {
        modalClosed = false;
    }
    if(!modalClosed) { // Если флаг modalClosed равен false
        modal.classList.add('modal_active');
        document.cookie = 'modalClosed=false';
    }
};

window.addEventListener('DOMContentLoaded', () => {
    checkClosed();
});

window.addEventListener('beforeunload', () => {
    if(!modalClosed) {
        document.cookie = 'modalClosed=false'
    }
});