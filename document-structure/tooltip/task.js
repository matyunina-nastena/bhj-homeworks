const tooltips = [...document.querySelectorAll(".has-tooltip")];

tooltips.forEach(tooltip => {
    tooltip.addEventListener('click', (e) => {
        e.preventDefault();

        // Добавление подсказки
        const div = document.createElement('div');
        div.classList.add('tooltip');
        div.textContent = tooltip.getAttribute('title');
        div.classList.add('tooltip_active');
        
        // Закрытие подсказки при повторном клике на ссылку
        const tooltipActive = tooltip.querySelector('.tooltip_active');
        if (tooltipActive) {
            tooltipActive.remove('tooltip_active');
            return
        };
        // Запрет на открытие более 1-ой активной подсказки
        const openedTooltips = document.querySelectorAll('.tooltip');
        if (openedTooltips.length >= 1) {
        openedTooltips[0].remove('tooltip_active');
    }
        tooltip.appendChild(div);
    });
});

