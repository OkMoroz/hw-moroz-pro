const distanceKm = Math.random();
const distanceFeet = Math.random();
console.log(distanceKm, distanceFeet);

const distanceFeetToKm = (distanceFeet * 0.305) / 1000;

if (distanceKm < distanceFeetToKm) {
  console.log(`Відстань у кілометрах менша`);
} else if (distanceKm > distanceFeetToKm) {
  console.log(`Відстань у кілометрах більша`);
} else {
  console.log(`Відстані однакові`);
}
