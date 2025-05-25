public 
let a = Math.floor(Math.random() * 100); // Генерируем случайное число от 0 до 99
let result;

let firstCondition = a > 10 ? a : a * 2; // Первое условие: если a > 10, берем a, иначе a * 2

if (firstCondition > 5) { // Если результат первого условия > 5
    result = (2 * a) + 1;  // Возвращаем (2 * a) + 1
} 

else { // Иначе переходим к следующей проверке

    let secondCondition = a < 3 ? 1 : 2 * (a - 2); // Второе условие: если a < 3, берем 1, иначе считаем 2 * (a - 2)
    if (secondCondition > 4) { // Если результат второго условия > 4
        result = 5;
    } 
    else { // Иначе проверяем четность числа
        if (a % 2 == 0) {
            result = 6;  // Четное
        } else {
            result = 7;  // Нечетное
        }
    }
}

console.log(result); Main {
    
}