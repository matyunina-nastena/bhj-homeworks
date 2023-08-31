const form = document.getElementById('tasks__form');
const input = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskValue = input.value.trim(); // Получаем текст задачи
        if( taskValue !== '') {
        const task = document.createElement('div'); 
        task.classList.add('task');

        const taskTitle = document.createElement('div'); 
        taskTitle.classList.add('task__title');
        taskTitle.textContent = taskValue;

        const removeButton = document.createElement('a'); 
        removeButton.classList.add('task__remove');
        removeButton.innerHTML = '&times;';


        removeButton.addEventListener('click', (e) => {
            const task = e.target.parentNode; // Получаем родительский элемент задачи
            taskList.removeChild(task); // Удаляем задачу из списка
        });

        task.appendChild(taskTitle);
        task.appendChild(removeButton);
        taskList.appendChild(task); // Добавляем задачу в список
        input.value = ''; // Очищаем поле ввода
    }
})   