const init = () => {
    alert(hello('Bob', 'Tom'));
};

function hello(...args) {
    return args.reduce((accu, curr) => `Helo Helo! ${accu} ${curr}`);
}

document.addEventListener('DOMContentLoaded', (event) => {
    init();
});

alert('unko');