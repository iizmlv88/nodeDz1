
// ! 1
// const readline = require('readline');

// const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// r1.question('Введіть рядок ', (input) => {
//     // const golos = 'аеиіоуяєюїАЕИІОУЯЄЮЇ'; 
//     // const prugolos = 'бвгджзйклмнпрстфхцчшщьъБВГДЖЗЙКЛМНПРСТФХЦЧШЩЬЪ'; 

//     const golos = 'aeiouAEIOU'; 
//     const prugolos = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'; 

//     let golosni = 0;
//     let prugolosni = 0;

//     for (const iterator of input) {
//         if (golos.includes(iterator)) {
//             golosni++;
//         } else if (prugolos.includes(iterator)) {
//             prugolosni++;
//         }
//     }

//     console.log(`Кількість голосних : ${golosni}`);
//     console.log(`Кількість приголосних: ${prugolosni}`);
//     r1.close();
// });


//! 2
// const readline = require('readline');

// const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function createRandomPassword(length) {
//     const symbol = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-_+=';
//     let password = '';

//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * symbol.length);
//         password += symbol[randomIndex];
//     }

//     return password;
// }

// r1.question('напишіть бажану довжину пароля ', (input) => {
//     const lengthPassword = parseInt(input, 10);

//     if (isNaN(lengthPassword) || lengthPassword <= 8) {
//         console.log('має бути включно або більше 8');
//     } else {
//         const randomPassword = createRandomPassword(lengthPassword);
//         console.log(`запамятайте ваш пароль ${randomPassword}`);
//     }

//     r1.close();
// });
