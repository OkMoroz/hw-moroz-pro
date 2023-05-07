const number1 = prompt(`Введіть перше число.`);
const number2 = prompt(`Введіть друге число.`);

alert(`${number1}, ${number2}`);

if (isNaN(number1) || isNaN(number2)) {
  alert(`Серед введених значень є нечислові дані. Спробуйте ще раз.`);
} else if (
  number1 === null ||
  number1 === "" ||
  number2 === null ||
  number2 === ""
) {
  alert(`Ви не ввели перше та/або друге число.`);
} else if (number1 > number2) {
  alert(`${number1} > ${number2}. Перше число більше, ніж друге.`);
} else if (number1 < number2) {
  alert(`${number1} < ${number2}. Перше число менше, ніж друге`);
} else {
  alert(`${number1} = ${number2}. Числа рівні`);
}


// const number1 = 37;
// const number2 = 30;

// if (number1 > number2) {
//   console.log(`Перше число більше, ніж друге`);
// } else if
//   (number1 < number2){
//     console.log(`Перше число менше, ніж друге`);
//   } else {
//     console.log(`Числа рівні.`);
//   }



// const number1 = Math.random() * 100;
// const number2 = Math.random() * 100;
// console.log(number1, number2);

// if (number1 > number2) {
//   console.log(`Перше число більше, ніж друге`);
// } else if (number1 < number2) {
//   console.log(`Перше число менше, ніж друге`);
// } else {
//   console.log(`Числа рівні.`);
// }