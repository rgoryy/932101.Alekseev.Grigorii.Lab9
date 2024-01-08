const input = document.querySelector('.inputs input');
const buttons = document.querySelectorAll('.buttons button:not(#undoBtn):not(#calcBtn):not(#clearBtn)');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    input.value += value;
  });
});

document.getElementById('calcBtn').addEventListener('click', () => {
  const expression = input.value;

  try {
    const result = eval(expression);
    input.value = result;
  } catch (error) {
    input.value = 'Ошибка';
  }
});

document.getElementById('clearBtn').addEventListener('click', () => {
  input.value = '';
});

document.getElementById('undoBtn').addEventListener('click', () => {
    input.value = input.value.slice(0, -1);
});
