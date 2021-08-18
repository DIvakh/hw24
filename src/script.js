function debounce(fn, timer) {
    let timeout;

    return function (...args) {
        clearTimeout(timeout);
        return new Promise(resolve => {
            timeout = setTimeout(() => resolve(fn(...args)), timer);
        });
    };
}
function alertMessage() {
    alert('Привет!');
}

const ms = 1000;
const btn = document.querySelector('#btn');
btn.addEventListener('click', debounce(alertMessage, ms));
