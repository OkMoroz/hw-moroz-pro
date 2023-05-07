const a = Math.random();
const b = Math.random();
console.log(a, b);

if (a === 0) {
  console.log(`Число a не дільник b, бо на 0 ділити не можна.`);
} else {
  console.log(`Число a - дільник числа b.`);

  if (b === 0) {
    console.log(`Число b не дільник a, бо на 0 ділити не можна.`);
  } else console.log(`Число b - дільник числа a.`);
}
