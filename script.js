let randomNumber = Math.floor(Math.random() * 100) + 1;

function submitGuess() {
    const guessInput = document.getElementById('guessInput');
    const result = document.getElementById('result');
    const userGuess = parseInt(guessInput.value);

    if (userGuess === randomNumber) {
        result.textContent = 'Selamat! Anda menebak dengan benar!';
        result.className = 'correct';
    } else if (userGuess > randomNumber) {
        result.textContent = 'Terlalu tinggi, coba lagi!';
        result.className = 'wrong';
    } else {
        result.textContent = 'Terlalu rendah, coba lagi!';
        result.className = 'wrong';
    }
}
