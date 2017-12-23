// ЗАДАНИЕ 
// Високосный год.
// Написать функцию, которая выводит true or false в ответ на введенный год
// И функцию, которая выводит все високосные годы в 21 веке

function leap_year(year) {
  if ((year%4 === 0 && year%100 !== 0) || year%400 === 0) {
    var res = true;
    console.log('год високосный:', res);
  } else {
    var res = false;
    console.log('год високосный:', res)
  }
  console.log(year);
  console.log("\n");
}


function all_leap_years(i) {
  // век начинается с 2001 года
  for (var i = 2004; i <= 2100; i = i+4) {
    console.log(i); 
  }
}

console.log('should be false')
leap_year(100)

console.log('should be true')
leap_year(800)

console.log('should be true')
leap_year(2012)

console.log('should be false')
leap_year(2013)

 // тут мы меняем год и в зависимости от выбранного года должно выводиться true или false

console.log('Високосные года в 21 веке:');
all_leap_years()
 // результат должны быть все високосные года в 21 веке


