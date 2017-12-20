// ЗАДАНИЕ 
// Високосный год.
// Написать функцию, которая выводит true or false в ответ на введенный год
// И функцию, которая выводит все високосные годы в 21 веке

function leap_year(year) { if (year%4==0 && year%100!=0 || year%400==0) { var res=true;
  console.log('год високосный:', res);}
    else {var res=false; console.log('год високосный:', res)} ;
return res;
}


function all_leap_years(i){ var i; for (i=2000; i<=2100; i=i+4) {
  console.log('Високосный год в 21 веке:'); console.log(i); 
}
}


leap_year(1975)
 // тут мы меняем год и в зависимости от выбранного года должно выводиться true или false

all_leap_years()
 // результат должны быть все високосные года в 21 веке


