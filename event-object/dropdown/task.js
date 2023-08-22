const list = document.querySelector(".dropdown__list");
const value = document.querySelector(".dropdown__value");
const dropdownItems= [...document.querySelectorAll(".dropdown__item")];

// Переназначаем название выбранного элемента списка в зависимости от кликнутого пункта списка 
    dropdownItems.forEach((item) => {
        item.addEventListener('click', (event) => {
            value.textContent = item.textContent;
            list.classList.remove('dropdown__list_active');
            event.preventDefault(); // и запрещаем переход по ссылке
        });
    });
// Выводим список или убираем его при клике на кнопку
// const activeList = function() {
//     list.classList.add('dropdown__list_active');
// };

// Добавляем обработчик события на кнопку 
value.addEventListener ('click', () => {
    list.classList.add('dropdown__list_active');
});






