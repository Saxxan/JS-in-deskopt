const button = document.getElementById('button');

button.addEventListener('click', function() {
    const input = document.querySelector('#input');
    const value = input.value.toUpperCase();

    const result = document.querySelector('#result');
    result.textContent = value;
});