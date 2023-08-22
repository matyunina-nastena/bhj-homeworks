const tabs = [...document.querySelectorAll('.tab')];
const tabContents = [...document.querySelectorAll('.tab__content')];

tabs.forEach((tab) => {
    // Ищем все элементы с классом tab и удаляем у них класс active
    tab.addEventListener('click', () => {
        tabs.forEach((tab) => {
            tab.classList.remove('tab_active');
        });
            const index1 = tabs.indexOf(tab);
        // добавляем кликнутому элементу класс tab_active
        tab.classList.add('tab_active');
        // ищем все элементы с классом tab__content и удаляем у них класс active
        tabContents.forEach((content) => {
                content.classList.remove('tab__content_active');
                const index2 = tabContents.indexOf(content)
            // присваиваем индекс кликнутого элемента массиву tabContents и добавляем класс tab__content_active этому индексу
                if (index1 === index2) {
                    content.classList.add('tab__content_active');
            }
        
        })
    })
});

