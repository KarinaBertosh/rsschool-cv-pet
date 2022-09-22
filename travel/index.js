// let i = 3;
// while (i) { // когда i будет равно 0, условие станет ложным, и цикл остановится
//   alert( i );
//   i--;
// }


// let i = 0;
// do {
//   alert( i );
//   i++;
// } while (i < 3);


// for (let i = 0; i < 10; i++) {
//     // если true, пропустить оставшуюся часть тела цикла
//     if (i % 4 == 0) continue;
//     alert(i); // 1, затем 3, 5, 7, 9
//   }



// for(let i=2; i<=10; i++) {
//     if(i%2==0) {
//         alert(i); 
//     }
// }


// let i = 0;
// while  (i < 3) {
//     alert( `number ${i}!` );
//     i++;
// }


// let i;
// do {
//  i = prompt('Введите число больше 100?', '0');
// } while (i<=100 && i);


// let n=10;
// nextPrime: 
// for(let i = 2; i<=n; i++) {
//     for(let j = 2; j < i; j++) {
//         if(i%j==0) continue nextPrime;
//     }
//     alert(i);
// }


// let a = "1";
// let b = 0;
// switch (+a) {
//   case 1 + b:
//     alert("Выполнится, т.к. значением +a будет 1, что в точности равно b+1");
//     break;
//   default:
//     alert("Это не выполнится");
// }



// let browser;
// if(browser=='Edge') {
//     alert( "You've got the Edge!" );
// }
// else if(browser=='Chrome' || browser=='Firefox' || browser=='Safari'|| browser=='Opera' ) {
//     alert( 'Okay we support these browsers too');
// }
// else {
//     alert( 'We hope that this page looks ok!' );
// }


// const number = +prompt('Введите число между 0 и 3', '');
// switch(number) {
//     case 0:
//         alert('Вы ввели число 0');
//         break;
//     case 1:
//         alert('Вы ввели число 1');
//         break;
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3');
//         break;  
// }

// function showMessage() {
//     alert( 'Всем привет!' );
//   }
//   showMessage();


// function showPrimes(n) { //5

//     for (let i = 2; i < n; i++) { 
//         if (!isPrime(i)) continue;

//         alert(i);  // простое
//     }
// }

// function isPrime(n) { //4
//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) return false;
//     }
//     return true;
// }

// showPrimes(8)



// function checkAge(age) {
//   return(age>18) || confirm('Родители разрешили?');
// }
// function checkAge(age) {
//   return(age>18)? true: confirm('Родители разрешили?');
// }



// let a = prompt ('Введите число "a"');
// let b = prompt ('Введите число "b"');
// function min(a,b) {
//   // if (+a < +b) {
//   //   alert(a);
//   // }
//   // else {
//   //   alert(b);
//   // }
//   (+a < +b) ? alert(a) : alert(b)
// }
// min(a,b);


// let a = prompt('Введите значение "x"');
// let b = prompt('Введите значение "n"');
// function pow(x,n) {
//   return Math.pow (x, n);
// }
// console.log(pow(2,3));


// function pow(x, n) {
//   let result = x;
//   for (let i = 1; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }
// let x = prompt("x?", '');
// let n = prompt("n?", '');
// if (n < 1) {
//   alert(`Степень ${n} не поддерживается, используйте натуральное число`);
// } else {
//   alert( pow(x, n) );
// }


// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }
// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );



// let age = prompt("Сколько Вам лет?", 18);
// let welcome;
// if (age < 18) {
//   welcome = function() {
//     alert("Привет!");
//   };
// } else {
//   welcome = function() {
//     alert("Здравствуйте!");
//   };
// }
// welcome(); // теперь всё в порядке


// let age = prompt("Сколько Вам лет?", 18);
// let welcome = (age < 18) ?
//   function() { alert("Привет!"); } :
//   function() { alert("Здравствуйте!"); };
// welcome(); // теперь всё в порядке

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }
// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );


// console.log('5');
// function ask (question, yes, no) {
//   if(confirm(question)) yes()
//   else no ();
// }
// ask("Вы согласны?", () => alert("Вы согласились."),  () => alert("Вы отменили выполнение."));



// let user = {
//   name='John',
//   surname='Smith'
// }
// user.name = 'Pete'
// delete user.name;



// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
// Например:
// alert( extractCurrencyValue('$120') === 120 ); // true


// function extractCurrencyValue(str) {
//     return Number(str.slice(1));
// }
// console.log(extractCurrencyValue('$120'));

// let nameuser = prompt('What you name?', '' );
// console.log (nameuser)
// alert(nameuser)

// let script = prompt('Какое «официальное» название JavaScript?', '');
// if (script === 'ECMAScript') {
//     alert('Верно!')
// }
// else{
//     alert('Не правильно!')
// }


// let number = prompt ('Введите число', '');
// if (number>0) {
//     alert('1')
// }
// else if (number<0) {
//     alert(-1)
// }
// else if (number=0) {
//     alert(0)
// }




// let result = (5 + 1 < 4) ? 'Мало' : 'Много';
// console.log(result)

// let message;
// let login = prompt('введите ваш логин', '');
// message =
//   (login === 'Сотрудник')
//     ? 'Привет'
//     : (login == 'Директор')
//       ? 'Здравствуйте'
//       : (login == '')
//         ? 'Нет логина'
//         : ''


// alert(message)

// let age = prompt('Enter your age', '')
// if (+age<=14 || +age>=90){
//   alert('Right')
// }

// let age = prompt('Enter your age', '')
// if (!+age<=14 !+age>=90){
//   alert('Right')
// }

// let userName = prompt("Кто там?", '');

// if (userName === 'Админ') {

//   let pass = prompt('Пароль?', '');

//   if (pass === 'Я главный') {
//     alert( 'Здравствуйте!' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Отменено' );
//   } else {
//     alert( 'Неверный пароль' );
//   }

// } else if (userName === '' || userName === null) {
//   alert( 'Отменено' );
// } else {
//   alert( "Я вас не знаю" );
// }




// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   else {
//     return true;
//   }
// }




// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// let sum = 0;
// for (let key in salaries) {
//   sum = sum + salaries[key];
// }
// alert(sum);



// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == 'number') {
//       obj[key] *= 2;
//     }
//   return obj
//   }
// }
// console.log(multiplyNumeric(menu));


// копируем все свойства из permissions1 и permissions2 в user
// Object.assign(user, permissions1, permissions2);
// Object.assign(user, { name: "Pete" });


// let str = "Привет";
// str.toUpperCase();
// alert(str.toUpperCase());



// let a = +prompt('Введите число "a"', '');
// let b = +prompt('Введите число "b"', '');
// alert (a + b);

// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
// Функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.


// function readNumber () {
//     let readNumber;
//     do {
//         readNumber = prompt("Введите число", 0);
//       } while ( !isFinite(num) );   
//       if (num === null || num === '') return null;   
//       return +num;
//     }
//     alert(`Число: ${readNumber()}`);


// let i = 0;
// while (i < 11) {
//   i += 0.2;
//   if (i > 9.8 && i < 10.2) alert( i );
// }



// fu9nction random(min, max) {
//     return min + Math.random() * (max - min);
// }
// alert( random(1, 2) );




// function randomInteger(min, max) {
//     let rand = min - 0.5 + Math.random() * (max - min + 1);
//     return Math.round(rand);
// }
// alert (randomInteger(1, 5));


// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
// ucFirst("вася") == "Вася";  



// function ucFirst(str) {
// let result = '';
// for (let i = 0; i < str.length; i++) {
//   if (i === 0) {
//     result += str[i].toUpperCase();
//   }
//   else {
//     result += str[i];
//   }
// }
// return result;


// Variant 2:
// return str[0].toUpperCase() + str.slice(1)
// }



// function ucFirst(str) {
//   let result = '';
//   for (let i = str.length - 1; i >=0; i--) {
//     if(i === str.length - 1) {
//       result += str[i].toUpperCase();
//     }

//     else {
//       result += str[i].toLowerCase();
//     }
//   }
//   return result;

// }
// console.log('result', ucFirst("vasya")); // Aysav
// console.log(2, ucFirst('Zhenua')); // Aunehz



// function checkSpam(str) {
//   if (str.toUpperCase().includes('XXX') || str.toLowerCase().includes('viagra')) {
//     return true
//   }

//   else {
//     return false;
//   }
// }
// console.log(checkSpam('buy ViAgRA now'));// == true
// console.log(checkSpam('free xXxGHHH')); //== true
// console.log(checkSpam("innocent rabbit")); //== false



// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец 
// str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
// Например:
// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"
// truncate("Всем привет!", 20) = "Всем привет!"



// function truncate(str, maxlength) {
//   if(str.length > maxlength) {
//     let i = str.slice(0, maxlength);
//     let result = i + "…"
//     return result
    
//   }
//   else {
//     return str
//   }
// }
// const a = truncate("Вот, что мне хотелось бы сказать на эту тему:", 20); //= "Вот, что мне хотело…"
// const b = truncate("Всем привет!", 20); //= "Всем привет!"
// console.log(a);
// console.log(b);
// console.log("13:45 PM".replace(/str.lenght + [1]1/, '5'));
// const yyy ='1234567890'.slice(0,5)
// console.log(yyy);

















