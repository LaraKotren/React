function manyChecks() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);
  
  let result = '';
  
  // ������ ������� (a > 10)
  if (a > 10) {
    result += 'a ������ 10';
  } else {
    result += 'a ������ ��� ����� 10 ';
    // ������ ������ (a === 5)
    if (a === 5) {
      result += '������ ������� ������';
    }
  }
  
  // ������ ������� (a === 15)
  if (a === 15) {
    result += '�� a �� ����� 15';
  }
  
  // ������ ������� (a > 5)
  if (a > 5) {
    result += '� a ������ 5';
  } else {
    result += '� a ������ ��� ����� 5 ';
  }
  
  // ��������� ������� (a % 2 - ��������/������)
  switch (a % 2) {
    case 1:
      result += ' � a ��������';
      break;
    case 0:
      result += ' � a ������';
      break;
  }
  
  console.log(result);
}

manyChecks();
