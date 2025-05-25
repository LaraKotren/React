function manyChecks() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);
  
  let result = '';
  
  // Первое условие (a > 10)
  if (a > 10) {
    result += 'a больше 10';
  } else {
    result += 'a меньше или равно 10 ';
    // Особый случай (a === 5)
    if (a === 5) {
      result += 'пример особого случая';
    }
  }
  
  // Второе условие (a === 15)
  if (a === 15) {
    result += 'но a не равно 15';
  }
  
  // Третье условие (a > 5)
  if (a > 5) {
    result += 'и a больше 5';
  } else {
    result += 'и a меньше или равно 5 ';
  }
  
  // Четвертое условие (a % 2 - нечетное/четное)
  switch (a % 2) {
    case 1:
      result += ' и a нечетное';
      break;
    case 0:
      result += ' и a четное';
      break;
  }
  
  console.log(result);
}

manyChecks();
