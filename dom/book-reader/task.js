const book = document.querySelector('.book');
const fonstSizes = [...document.querySelectorAll('.font-size')];

(function changeFontSize () {
    fonstSizes.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            fonstSizes.forEach(elem => {
                elem.classList.remove('font-size_active');
            });
            elem.classList.add('font-size_active');
            if(elem.classList.contains('font-size_small')) {
                book.classList.add('book_fs-small');
                book.classList.remove('book_fs-big');
            } else if(elem.classList.contains('font-size_big')) {
                book.classList.add('book_fs-big');
                book.classList.remove('book_fs-small');
            } else {
                book.classList.remove('book_fs-small');
                book.classList.remove('book_fs-big');
            }
        });
    });
}());

