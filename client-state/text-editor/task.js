const textEditor = document.getElementById('editor');
const rememberText = localStorage.getItem('text');

if (rememberText) {
    textEditor.value = rememberText;
}

textEditor.addEventListener('input', () => {
    // Сохраняем значение в локальном хранилище
    localStorage.setItem('text', textEditor.value);
});