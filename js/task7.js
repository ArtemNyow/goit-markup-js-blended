// Напишіть функцію getNumbers(min, max), що приймає 2 параметри - 
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.
function getNumbers(min, max) {
    let sum = 0;
    for (let i=max; i >= min; i--) {
        console.log(i);
        
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
const result = getNumbers(1, 10);
console.log("Сума парних числе:"+result);