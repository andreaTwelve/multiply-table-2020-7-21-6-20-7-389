function createMultiplyTable(start, end) {
  if (isValid(start, end)) {
    return generateAllLines(start, end);
  }
}

function isValid(start, end) {
  let a = start <= end;
  let b = isInRange(start);
  let c = isInRange(end);
  if (a && b && c) {
    return true;
  } else {
    return false;
  }
}

function isInRange(number) {
  if (number >= 0 && number <= 1000) {
    return true;
  } else {
    return false;
  }
}

function generateAllLines(start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(generateEachLines(start, i));
    if (i !== end) {
      arr.push('\n');
    }
  }
  return arr.join('');
}

function generateEachLines(lineStart, lineEnd) {
  let str = '';
  for (let i = lineStart; i <= lineEnd; i++) {
    if (i !== lineEnd) {
      str += i + '*' + lineEnd + '=' + (i * lineEnd) + '\t';
    } else {
      str += i + '*' + lineEnd + '=' + (i * lineEnd);
    }
  }
  return str;
}

module.exports = {
  createMultiplyTable,
};
