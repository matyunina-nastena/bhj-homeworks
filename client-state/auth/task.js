const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const signin = document.getElementById('signin');
const logoutBtn = document.getElementById('logout__btn');
const userIdSpan = document.getElementById('user_id');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form); 
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.responseType = 'json';

    xhr.addEventListener('load', () => {
        if (xhr.response.success) {
            const userId = xhr.response.user_id;
            localStorage.setItem('userId', userId);
            logoutBtn.classList.add('logout__btn_active');
            welcome.classList.add('welcome_active');
            userIdSpan.textContent = userId;
        } else {
            alert('Неверный логин или пароль');
        }
    });
    xhr.send(formData);
    form.reset();
});

window.addEventListener('load', () => {
    const userId = localStorage.getItem('userId');
    if (userId) {
        logoutBtn.classList.add('logout__btn_active'); 
        welcome.classList.add('welcome_active');
        userIdSpan.textContent = userId;
    }
});

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('userId');
    signin.classList.add('signin_active');
    welcome.classList.remove('welcome_active');
    logoutBtn.classList.remove('logout__btn_active')    
})

