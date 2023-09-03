const poolAnswers = document.getElementById('poll__answers');
const poolTitle = document.getElementById('poll__title');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.addEventListener('load', () => {
    if(xhr.readyState === xhr.DONE){
        if(xhr.status >= 400) {
            setTimeout(() => {
                return alert('Ошибка загрузки данных о вопросе');
            }, 1000)
        }
        if(xhr.status === 200){
            // Преобразуем полученные данные в объект JavaScript
            const response = JSON.parse(xhr.responseText);
            const title = response.data.title;
            const answers = response.data.answers;

            poolTitle.textContent = title;
          
            
            answers.forEach(answer => {
                createHTML(answer);
            });
        };
    };
});

xhr.send();

function createHTML(answer) { 
    const btnAnswer = document.createElement('button');
    btnAnswer.classList.add('poll__answer');
    btnAnswer.textContent = answer;
    poolAnswers.appendChild(btnAnswer);

    btnAnswer.addEventListener('click', () => {
        alert('Спасибо, ваш голос заcчитан!!!!!!!');
    });
    return btnAnswer;
}
