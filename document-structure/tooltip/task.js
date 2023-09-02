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

