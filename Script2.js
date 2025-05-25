function manyChecks() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);
  
  let result = '';
  
  switch (a > 10) {
    case true:
      result += 'a больше 10';
      break;
    case false:
      result += 'a меньше или равно 10 ';
      switch (a === 5) {
        case true:
          result += 'пример особого случая';
          break;
      }
  }
  
  switch (a) {
    case 15:
      result += 'но a не равно 15';
      break;
  }
  
  switch (a > 5) {
    case true:
      result += ' и a больше 5';
      break;
    case false:
      result += ' и a меньше или равно 5 ';
  }
  
  switch (a % 2) {
    case 1:
      result += ' и a нечетное';
      break;
    case 0:
      result += ' и a четное';
  }
  
  console.log(result);
}

manyChecks();