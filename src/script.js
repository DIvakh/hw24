function debounce(fn, timer) {
    let timeout;

    return function () {
        clearTimeout(timeout);
        return new Promise(resolve => {
            timeout = setTimeout(() => resolve(fn()), timer);
        });
    };
}
function alertMessage() {
    alert('Привет!');
}

const ms = 1000;
const btn = document.querySelector('#btn');
btn.addEventListener('click', debounce(alertMessage, ms));
