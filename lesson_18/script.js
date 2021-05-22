console.log('Task 2:');
// 2) Округлить с помощью round/floor/ceil число 1.4999
let number = 1.4999;
console.log(Math.round(number)); // 1
console.log(Math.floor(number)); // 1
console.log(Math.ceil(number));  // 2

console.log('Task 3:');
// 3) Вывести сумму 10 рандомных чисел
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    let numberRandom = Math.random() * 100;
    let numberRandomRound = Math.round(numberRandom);
    console.log(numberRandomRound);
    sum += numberRandomRound;
  }
  console.log('Sum of random numbers: ', sum);

console.log('Task 4:');
// 4*) Вывести минимальное из 10 рандомных чисел
let num1 = Math.round(Math.random() * 100);
console.log(num1);
let num2 = Math.round(Math.random() * 100);
console.log(num2);
let num3 = Math.round(Math.random() * 100);
console.log(num3);
let num4 = Math.round(Math.random() * 100);
console.log(num4);
let num5 = Math.round(Math.random() * 100);
console.log(num5);
let num6 = Math.round(Math.random() * 100);
console.log(num6);
let num7 = Math.round(Math.random() * 100);
console.log(num7);
let num8 = Math.round(Math.random() * 100);
console.log(num8);
let num9 = Math.round(Math.random() * 100);
console.log(num9);
let num10 = Math.round(Math.random() * 100);
console.log(num10);
console.log('Min number = ', Math.min(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10));

function getMinValueFromRandomNumbers() {
  let numbers = [];
  for (let i = 0; i < 10; i++) {
    let numRandom = Math.round(Math.random() * 100);
    console.log(numRandom);
    numbers.push(numRandom);
    
  }
  console.log('min value with apply', Math.min.apply(null, numbers));
 return Math.min(...numbers); // min value with spred operator
  
}
console.log('min value: ', getMinValueFromRandomNumbers());
console.log('Task 5:');
// 5*) Вывести максимальное из 10 рандомных чисел
function getMaxValueFromRandomNumbers() {
  let numbers = [];
  for (let i = 0; i < 10; i++) {
    let numRandom = Math.round(Math.random() * 100);
    console.log(numRandom);
    numbers.push(numRandom);
    
  }
  console.log('max value with apply', Math.max.apply(null, numbers));
 return Math.max(...numbers); // min value with spred operator
  
}
console.log('max value: ', getMaxValueFromRandomNumbers());
console.log('Task 6:');
// 6) Возвести 999999 в степень 999999 (Расскажите что получится =) )
console.log('Math.pow: ', Math.pow(999999, 999999)); // Infinity

console.log('Task 7:');
// 7) Получить рандомное целое число в диапазоне от 0 до 40 
function getRandomFromForty() {
  return Math.round(Math.random() * 40);
}
console.log('Random from 0 to 40: ', getRandomFromForty());

console.log('Task 8:');
// 8) Получить рандомное целое число в диапазоне от 60 до 100 
function getRandomFromSixtyToHundred() {
  return 60 + Math.round(Math.random() * 40);
}
console.log('Random from 60 to 100: ', getRandomFromSixtyToHundred());

console.log('Task 9:');
// 9) Написать функцию random(a, b) которая возвращает случайное целое число от a до b 
function random(a, b) {
  a = Math.ceil(a);
  b = Math.floor(b);
  return a + Math.floor(Math.random() * (b - a));
}
console.log('function random: ', random(1, 5));

console.log('Task 10:');
// 10**) Создайте 100000 случайных целых чисел от 1 до 5 и посчитайте сколько раз выпало каждое число. Попробуйте ответить на вопрос почему и исправьте генерацию, что бы была равная вероятность.
console.log(getHundredThousandRandomNumbers());
console.log(countDuplicateOfRandomNumbers(getHundredThousandRandomNumbers()));

function getHundredThousandRandomNumbers() {
  let arrOfRandomNumbers = [];
  for (let i = 0; i < 100000; i++) {    
    arrOfRandomNumbers.push(random(1, 5));    
  }
  return arrOfRandomNumbers;
}

function countDuplicateOfRandomNumbers(arr) {
  let counts = {};
  for (let i = 0; i < arr.length; i++) {
    if (counts[arr[i]]) {
      counts[arr[i]] += 1;
    } else {
      counts[arr[i]] = 1;
    }
  } 
return counts;
}