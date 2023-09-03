const progress = document.getElementById( 'progress' );
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    xhr.upload.onprogress = function(e) {
        if(e.lengthComputable) {
            const percentComplete = (e.loaded / e.total) * 100;// Вычисляем процент загрузки
            progress.value = percentComplete;// Обновляем значение прогресс-бара
        }
    };
    xhr.onloadend = function() {
        if (xhr.status === 200) {
          console.log("Успех при загрузки файла");
        } else {
          console.log("Ошибка при загрузке файла");
        }
    };
    xhr.send(new FormData(form));
});