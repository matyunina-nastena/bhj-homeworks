const reveal = [...document.querySelectorAll('.reveal')];

function inVisible(element) {
    const {top, bottom} = element.getBoundingClientRect();
    if (bottom < 0 || top > window.innerHeight) {
      return false;
    } return true;
};

document.addEventListener('scroll', () => {
    for (let el of reveal) {
        if (inVisible(el)) {
            el.classList.add('reveal_active');
        } else {
            el.classList.remove('reveal_active');
        }
      };
});
