const number1 = parseFloat(prompt(`Введіть перше число`));
const number2 = parseFloat(prompt(`Введіть друге число`));
const number3 = parseFloat(prompt(`Введіть третє число`));

if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
  alert(
    "Серед введених значень є нечислові дані. Неможливо обрахувати середнє арифметичне. Спробуйте ще раз."
  );
} else {
  const result = (number1 + number2 + number3) / 3;
  alert(`Середнє арифметичне трьох чисел: ${result}`);
}
