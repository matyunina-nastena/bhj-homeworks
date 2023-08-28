const interestCheck = [...document.querySelectorAll('.interest__check')];

// Добавляем обработчик события "click" для каждого элемента
interestCheck.forEach((item) => {
    item.addEventListener('click', () => {
        // Получаем родительский элемент списка
        const parent = item.closest('.interest');
        // Получаем все вложенные элементы списка
        const nestedCheckboxes = parent.querySelectorAll('.interest__check');
        // Проставляем/снимаем галочки во всех вложенных элементах списка
        nestedCheckboxes.forEach((nestedCheckbox) => {
            nestedCheckbox.checked = item.checked;
        });
    });
});

