function manyChecks() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);
  
  let result = '';
  
  switch (a > 10) {
    case true:
      result += 'a is bigger than 10';
      break;
    case false:
      result += 'a is less than or equal to 10 ';
      switch (a === 5) {
        case true:
          result += 'an example of a special case';
          break;
      }
  }
  
  switch (a) {
    case 15:
      result += 'but a is not 15';
      break;
  }

  switch (a > 5) {
    case true:
      result += 'and a is greater than 5';
      break;
    case false:
      result += 'and a is less than or equal to 5 ';
  }
  
  switch (a % 2) {
    case 1:
      result += ' and a is odd';
      break;
    case 0:
      result += ' and a is even';
  }
  
  console.log(result);
}

manyChecks();