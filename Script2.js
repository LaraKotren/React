function manyChecks() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);
  
  let result = '';
  
  switch (a > 10) {
    case true:
      result += 'a ������ 10';
      break;
    case false:
      result += 'a ������ ��� ����� 10 ';
      switch (a === 5) {
        case true:
          result += '������ ������� ������';
          break;
      }
  }
  
  switch (a) {
    case 15:
      result += '�� a �� ����� 15';
      break;
  }
  
  switch (a > 5) {
    case true:
      result += ' � a ������ 5';
      break;
    case false:
      result += ' � a ������ ��� ����� 5 ';
  }
  
  switch (a % 2) {
    case 1:
      result += ' � a ��������';
      break;
    case 0:
      result += ' � a ������';
  }
  
  console.log(result);
}

manyChecks();