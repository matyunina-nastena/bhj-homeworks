const tooltips = [...document.querySelectorAll(".has-tooltip")];

tooltips.forEach(tooltip => {
    tooltip.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Закрытие подсказки при повторном клике на ссылку
        const tooltipActive = document.querySelector('.tooltip_active');
        if (tooltipActive && tooltipActive.textContent === tooltip.getAttribute('title')) {
            tooltipActive.classList.remove('tooltip_active');
            return;
        }
       
        // Добавление подсказки
        const div = document.createElement('div'); 
        div.classList.add('tooltip'); 
        div.textContent = tooltip.getAttribute('title');
        div.classList.add('tooltip_active');
        
 

    // Запрет на открытие более 1-ой активной подсказки
    const openedTooltips = document.querySelectorAll('.tooltip_active');
    if (openedTooltips.length >= 1) {
        openedTooltips.forEach(openedTooltip => {
            openedTooltip.classList.remove('tooltip_active');
        });
    }

    const coordinates = tooltip.getBoundingClientRect();
    const coordinatesTop = coordinates.top + window.scrollY + coordinates.height;
    const coordinatesLeft = coordinates.left + window.scrollX;
    div.style.top = coordinatesTop + 'px';
    div.style.left = coordinatesLeft + 'px';
    
    document.body.appendChild(div);
});
})

// const tooltipsLinks = [...document.querySelectorAll('.has-tooltip')];
// const maxActiveTooltipCount = 1;

// tooltipsLinks.forEach(tooltipLink => {
//   tooltipLink.addEventListener('click', (event) => {
//     event.preventDefault();

//     // Добавление контейнера для подсказки
//     const tooltipContainer = document.createElement('div');
//     tooltipContainer.classList.add('tooltip_container');

//     // Добавление подсказки
//     const tooltip = document.createElement('div');
//     tooltip.classList.add('tooltip');
//     tooltip.textContent = tooltipLink.getAttribute('title');
//     tooltip.classList.add('tooltip_active');

//     // Закрытие подсказки при повторном клике на ссылку
//     const tooltipLinkActive = tooltipLink.querySelector('.tooltip_active');
//     if(tooltipLinkActive) {
//         tooltipLinkActive.remove();
//         return;
//     }
    
//     // Запрет на открытие более 1-ой активной подсказки
//     const openedTooltips = document.querySelectorAll('.tooltip');
//         if (openedTooltips.length >= maxActiveTooltipCount) {
//         openedTooltips[0].remove();
//     }

//     // Установка позиционирования элемента с подсказкой
//     const coordinates = tooltipLink.getBoundingClientRect();
//     const coordinatesTop = coordinates.top + window.pageYOffset;
//     const coordinatesLeft = coordinates.left + window.pageXOffset;

//     tooltip.style.top = coordinatesTop + coordinates.height + 'px';
//     tooltip.style.left = coordinatesLeft + 'px';

//     tooltipLink.appendChild(tooltip); 
//   });
// });
