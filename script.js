const sign = prompt(`Яку дію ви хочете виконати (+ - * /)?`);
const number1 = parseFloat(prompt(`Введіть перше число`));
const number2 = parseFloat(prompt(`Введіть друге число`));

function sum(number1, number2) {
  const result = number1 + number2;
  alert(`Сума: ${number1} + ${number2} = ${result}`);
}

function subtract(number1, number2) {
  const result = number1 - number2;
  alert(`Різниця: ${number1} - ${number2} = ${result}`);
}

function multiply(number1, number2) {
  const result = number1 * number2;
  alert(`Добуток: ${number1} * ${number2} = ${result}`);
}

function divide(number1, number2) {
  if (number2 === 0) {
    alert("Ділення на 0 неможливе");
  } else {
    const result = number1 / number2;
    alert(`Частка: ${number1} / ${number2} = ${result}`);
  }
}

if (sign !== `+` && sign !== `-` && sign !== `*` && sign !== `/`) {
  alert(
    "Ви ввели не арифметичний знак. Неможливо зробити обчислення. Спробуйте ще раз."
  );
} else if (isNaN(number1) || isNaN(number2)) {
  alert(
    "Серед введених значень є нечислові дані. Неможливо зробити обчислення. Спробуйте ще раз."
  );
} else if (sign === `+`) {
  sum(number1, number2);
} else if (sign === `-`) {
  subtract(number1, number2);
} else if (sign === `*`) {
  multiply(number1, number2);
} else {
  divide(number1, number2);
}
