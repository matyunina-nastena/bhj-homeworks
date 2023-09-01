const tooltips = [...document.querySelectorAll(".has-tooltip")];
const div = document.createElement('div'); 

tooltips.forEach(tooltip => {
    tooltip.addEventListener('click', (e) => {
        e.preventDefault();

        // Добавление подсказки
        div.classList.add('tooltip'); 
        div.textContent = tooltip.getAttribute('title');
        div.classList.add('tooltip_active');
        
        // Закрытие подсказки при повторном клике на ссылку
        const tooltipActive = tooltip.querySelector('.tooltip_active');
        if (tooltipActive) {
            tooltipActive.remove();
            return;
        }

    // Запрет на открытие более 1-ой активной подсказки
    const openedTooltips = document.querySelectorAll('.tooltip');
    if (openedTooltips.length >= 1) {
        openedTooltips[0].remove('tooltip_active');
    } 

    const coordinates = tooltip.getBoundingClientRect();
    const coordinatesTop = coordinates.top + window.scrollY + coordinates.height;
    const coordinatesLeft = coordinates.left + window.scrollX;
    div.style.top = coordinatesTop + 'px';
    div.style.left = coordinatesLeft + 'px';
    
    document.body.appendChild(div);
});
})

